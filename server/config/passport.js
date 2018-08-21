import {
  Strategy,
  ExtractJwt,
} from 'passport-jwt';

import User from '../models/user';
import config from './index';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt.secret,
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
