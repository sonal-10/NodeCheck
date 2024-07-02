const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log(`Name: ${name}, Email: ${email}`);
    res.send(`Form submitted successfully! Name: ${name}, Email: ${email}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
