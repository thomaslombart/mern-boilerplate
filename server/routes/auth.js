import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';

const router = express.Router();

const generateJWT = (user) => jwt.sign(user, config.jwt.secret);

router.post('/user', (req, res, next) => {
    if (req.body.token) {
        const id = jwt.decode(req.body.token);
        User.findById(id, (err, user) => {
            if (err) return next(err);
            return res.json(user);
        });
    }
});

router.post('/signin', (req, res, next) => {
    const username = req.body.username.trim();
    const password = req.body.password;

    User.findOne({
        username
    }, (err, user) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json({
                error: 'No user was found',
            });
        } else {
            let token = generateJWT(user.id);
            return user.validPassword(password) ?
                res.status(200).json(token) :
                res.status(403).json({
                    error: 'Wrong password',
                });
        }
    });
});

router.post('/signup', function (req, res, next) {
    const username = req.body.username.trim();
    const password = req.body.password;
    const password_verification = req.body.password_verification;

    User.findOne({
        username: username
    }, (err, user) => {
        if (err) {
            return next(err);
        }

        if (user) {
            return res.status(401).json({
                error: `That username is already used`,
            });
        }

        if (password !== password_verification) {
            return res.status(401).json({
                error: 'Passwords are different.'
            });
        }

        let userToCreate = new User({
            username,
            password
        });

        userToCreate.save((err, user) => {
            if (err) {
                return next(err);
            }

            let token = generateJWT(user.id);
            return res.json(token);
        });
    });
});

export default router;