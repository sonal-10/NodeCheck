require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;


const mainRouter = require("./server/routes/main");

// Static folder
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Setting Routes
app.use('/', mainRouter);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
