/* GENERAL IMPORTS */
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import helmet from 'helmet';

/* CONFIG IMPORT */
import config from './server/config';
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

/* ROUTES IMPORTS */
import index from './server/routes/index';
import auth from './server/routes/auth';

/* PASSPORT IMPORT */
import jwtLogin from './server/config/passport';

const app = express();


app.use(helmet());
app.use(express.static(path.join(__dirname, 'client/build')));
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

app.use('/api', index);
app.use('/api/auth', auth);

/* redirect all unmatched routes to homepage */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const server = app.listen(config.port);

export default app;