import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as mongoose from 'mongoose';

import routes from './routes/index';
/*import the user routes*/
import users from './routes/users';
/*Bring in the "User" mongoose module schema*/
import User from './models/usersModel';
/*Mongodb driver URI*/
const dbUrl = 'mongodb://crufener:jenniferr1@ds023624.mlab.com:23624/taskapp';

let app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));

app.use('/', routes);
/*Route for users*/
app.use('/user', users);

/*Make the connection to the database and seed database*/
mongoose.connect(dbUrl).then(() => {
    mongoose.connection.db.dropDatabase(() => {
        let Fred = new User();
        let Jen = new User();
        let Craig = new User();
        let Marry = new User();
        Fred.username = 'fred';
        Fred.password = 'fred';
        Jen.username = 'jen';
        Jen.password = 'jen';
        Craig.username = 'craig';
        Craig.password = 'craig';
        Craig.admin = true;
        Marry.username = 'marry';
        Marry.password = 'password';

        Fred.save();
        Jen.save();
        Craig.save();
        Marry.save();
    });
}).catch((err) => {
    console.error(err, err.message);
});
