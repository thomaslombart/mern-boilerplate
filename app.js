/* GENERAL IMPORTS */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import helmet from 'helmet';

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


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(passport.initialize());
passport.use(jwtLogin);

app.use('/', index);
app.use('/auth', auth);

const server = app.listen(config.port);

export default app;