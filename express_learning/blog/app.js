require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const connectDB = require('./server/config/db');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');


const app = express();
const PORT = process.env.PORT || 3000;


// Connect to DB
connectDB();

// Used for form parsing and converting it into json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(session({
    secret: 'masterkey &&',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl:process.env.DATABASE_URI
    }),
    // cookie:{maxAge:new Date(Date.now() + (3600))}
}));

const mainRouter = require("./server/routes/main");
const adminRouter = require("./server/routes/admin");

// Static folder
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Setting Routes
app.use('/', mainRouter);
app.use('/', adminRouter);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
