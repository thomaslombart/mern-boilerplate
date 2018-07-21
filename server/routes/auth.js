import express from "express";
import jwt from "jsonwebtoken";
import {
  check,
  validationResult
} from "express-validator/check";
import {
  matchedData
} from "express-validator/filter";

import User from "../models/user";
import config from "../config";

const router = express.Router();

const generateJWT = user => jwt.sign(user, config.jwt.secret);

/**
 * Tries to signin a user
 *
 * If the user has signed in successfully, an object containing a token is sent back to the user
 */
router.post("/signin", [
  check("username")
    .isLength({
      min: 2
    }).withMessage("must have at least 2 characters")
    .trim(),
  check("password").isLength({
    min: 4
  }).withMessage("must have at least 4 characters")
    .trim()
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json(errors.mapped());
  }

  const {
    username,
    password
  } = matchedData(req);

  User
    .findOne({
      username
    })
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .json({
            username: {
              msg: "No user was found",
              param: "username"
            }
          });
      } else {
        let token = generateJWT({
          id: user.id,
          username
        });
        return user.validPassword(password) ?
          res
            .status(200)
            .json(token) :
          res
            .status(403)
            .json({
              password: {
                msg: "Invalid password",
                param: "password"
              }
            });
      }
    });
});

/**
 * Tries to signup a user
 *
 * If the user has signed up succesfully, an object containing a token is sent back to the user
 */
router.post("/signup", [
  check("username")
    .isLength({
      min: 2
    }).withMessage("must have at least 2 characters")
    .custom(value => {
      return User.findOne({
        username: value
      })
        .then(user => {
          if (user) {
            throw new Error("Username already taken");
          } else {
            return true;
          }
        });
    })
    .trim(),
  check("password").isLength({
    min: 4
  }).withMessage("must have at least 4 characters")
    .trim(),
  check("passwordVerification").custom((value, {
    req
  }) => value === req.body.password).withMessage("Both passwords should be the same")
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json(errors.mapped());
  }

  const {
    username,
    password,
  } = matchedData(req);

  let userToCreate = new User({
    username,
    password
  });
  userToCreate
    .save()
    .then(user => res.json(generateJWT({
      id: user.id,
      username
    })));
});

export default router;