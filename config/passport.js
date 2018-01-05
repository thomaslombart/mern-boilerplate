import passport from 'passport';
import {
  Strategy,
  ExtractJwt
} from 'passport-jwt';

import User from '../models/User';
import config from '../config';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt.secret
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  User.findById(payload.id, (err, user) => {
    if (err) {
      return done(err, false);
    }
    return user ? done(null, user) : done(null, false);
  });
});

export default jwtLogin;