
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv').config()

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);

async function getFromDb() {

    try {
        console.time('label');
        await client.connect();
        const db = client.db('mydatabase');
        const collection = db.collection('studentCollections');

        // Find the first document in the collection
        const first = await collection.findOne();
        console.log(first);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
    console.timeEnd('label');
}
getFromDb();