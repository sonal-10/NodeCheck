const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.DATABASE_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Database Disconnected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connectDB, disconnectDB };
