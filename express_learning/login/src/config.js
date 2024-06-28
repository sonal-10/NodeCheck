const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.DATABASE_URI);


connect.then(() => {
    console.log("Connection to Database Successful");
})
    .catch(() => {
        console.log("Failed to connect to Database");
    })


// Create a Schema

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

const collection = new mongoose.model("users",LoginSchema);

module.exports = collection;