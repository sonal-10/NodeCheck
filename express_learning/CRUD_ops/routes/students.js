const express = require('express');
// const compression = require('compression');
const { ObjectId } = require('mongodb');

function studentRouter(client) {
    const router = express.Router();
    // Using gzip compression to reduce the response body  
    // router.use(compression);
    const DB_COLLECTIONS = client.db(process.env.DATABASE).collection(process.env.COLLECTIONS);


    // GET METHOD
    router.get('/', async (req, res) => {
        if (req.method === "GET") {
            try {
                const students = await DB_COLLECTIONS.find().toArray();
                res.json(students);
            }
            catch (erroror) {
                res.status(500).json({
                    message: erroror.message
                });
            }
        }
    });


    // GET one student
    router.get('/:id', async (req, res) => {
        const id = req.params.id;
        if (req.method === "GET") {
            try {
                const student = await DB_COLLECTIONS.findOne({
                    _id: new ObjectId(id)
                });
                if (student === null) {
                    return res.status(404).json({
                        message: "Could not Find Student"
                    });
                }
                res.json(student);
            }
            catch (erroror) {
                res.status(500).json({
                    message: erroror.message
                });
            }
        }
    });

    // POST Request
    router.post('/', async (req, res) => {
        if (req.method === "POST") {
            const student = {
                name: req.body.name,
                scores: req.body.scores
            };
            console.log(student);
            try {
                const result = await DB_COLLECTIONS.insertOne(student);
                console.log(result);
                res.status(201).json(
                    result
                );
            } catch (error) {
                res.status(400).json({
                    message: error.message
                });
            }
        }
    });

    // PUT Request
    router.put('/:id', async (req, res) => {
        if (req.method === "PUT") {
            const id = req.params.id;
            const updates = {
                name: req.body.name,
                scores: req.body.scores
            };
            try {
                const result = await DB_COLLECTIONS.updateOne(
                    { _id: new ObjectId(id) },
                    { $set: updates }
                );
                if (result.matchedCount === 0) {
                    return res.status(404).json({
                        message: 'Cannot find student'
                    });
                }

                const student = await DB_COLLECTIONS.findOne({
                    _id: new ObjectId(id)
                });
                if (student === null) {
                    return res.status(404).json({
                        message: "Could not Find Student"
                    });
                }
                res.json(student);
            }
            catch (error) {
                res.status(400).json({
                    message: error.message
                });
            }
        }
    });

    // PATCH Request
    router.patch('/:id', async(req,res)=>{
        if(req.method === "PATCH"){
            
        }
    });

    // DELETE Request
    router.delete('/:id', async (req, res) => {
        if (req.method === "DELETE") {
            const id = req.params.id;
            try {
                const result = await DB_COLLECTIONS.deleteOne({
                    _id: new ObjectId(id)
                });
                if (result.deletedCount === 0) {
                    return res.status(404).json({
                        message: "Cannot find student"
                    });
                }
                res.json({
                    message: "Student Entry Deleted"
                });
            } catch (error) {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    });

    return router;
}

module.exports = studentRouter;