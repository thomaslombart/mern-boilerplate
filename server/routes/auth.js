import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';

const router = express.Router();

const generateJWT = user => jwt.sign(user, config.jwt.secret);

/**
 * Tries to signin a user
 * 
 * If the user has signed in succesfully, an object containing a token is sent back to the user
 */
router.post('/signin', (req, res, next) => {
    const username = req.body.username.trim();
    const password = req.body.password;

    User.findOne({
            username
        })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    error: 'No user was found'
                });
            } else {
                let token = generateJWT({id: user.id, username});
                return user.validPassword(password) ?
                    res.status(200).json(token) :
                    res.status(403).json({
                        error: 'Wrong password',
                    });
            }
        })
});

/**
 * Tries to signup a user
 * 
 * If the user has signed up succesfully, an object containing a token is sent back to the user
 */
router.post('/signup', function (req, res, next) {
    const username = req.body.username.trim();
    const password = req.body.password;
    const passwordVerification = req.body.passwordVerification;

    if (password !== passwordVerification) {
        return res.status(401).json({
            error: 'Passwords are different.'
        });
    }

    User.findOne({
            username
        })
        .then(user => {
            if (user) {
                return res.status(401).json({
                    error: `That username is already used`,
                });
            }
            let userToCreate = new User({
                username,
                password
            });
            userToCreate.save(user)
                .then(user => res.json(generateJWT({id: user.id, username})));
        });
});

export default router;