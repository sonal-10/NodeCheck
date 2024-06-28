require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const collection = require('./config');

const app = express();
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))

// LOGIN API
app.get('/login', (req, res) => {
    res.render("login");
});

// SIGNUP API for view
app.get('/signup', (req, res) => {
    res.render("signup");
});


// SIGNUP API
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    const existingUser = await collection.findOne({ name: data.name });
    if (existingUser) {
        res.status(404).send("User already exists.Please Choose Diffrent username")
    }
    else {
        // using bcrypt
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(data.password, saltRounds);
        // Hashed Password
        data.password = hashPassword;
        const userData = await collection.insertMany(data);
        console.log(userData);
    }
});


// LOGIN API
app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.status(404).send("User Not Found")
        }

        // Compare the hash password from the Database with plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch){
            res.render("home");
        }
        else{
            res.status(400).send("Incorrect Password");
        }
    } catch (error) {
        res.send("Incorrect User Details");
    }
});



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});