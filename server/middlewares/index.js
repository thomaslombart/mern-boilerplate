import passport from 'passport';

export const requireAuth = passport.authenticate('jwt', { session: false });
/*
export const isModerator = (req, res, next) => {
    if (req.user.isModerator) {
        return next();
    }
}
*/