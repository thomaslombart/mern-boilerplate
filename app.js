/* GENERAL IMPORTS */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';

/* CONFIG IMPORT */
import config from './config';
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

/* ROUTES IMPORTS */
import index from './routes/index';
import auth from './routes/auth';

/* PASSPORT IMPORT */
import jwtLogin from './config/passport';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());
passport.use(jwtLogin);

app.use('/', index);
app.use('/auth', auth);

const server = app.listen(config.port);

export default app;