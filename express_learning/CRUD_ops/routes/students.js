const express = require('express');
const { ObjectId } = require('mongodb');

function studentRouter(client) {
    const router = express.Router();
    // const db = client.db(process.env.DATABASE);
    const DB_COLLECTIONS = client.db(process.env.DATABASE).collection(process.env.COLLECTIONS);
    // GET METHOD

    router.get('/', async (req, res) => {
        try {
            const students = await DB_COLLECTIONS.find().toArray();
            res.json(students);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    });


    // GET one student
    router.get('/:id', async (req, res) => {
        const id = Number(req.params.id);
        if (req.method === "GET") {
            try {
                const student = await DB_COLLECTIONS.findOne({ _id: id });
                if (student === null) {
                    return res.status(404).json({
                        message: "Could not Find Student"
                    });
                }
                res.json(student);
            }
            catch (error) {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    });

    // POST Request
    router.post('/', async (req, res) => {
        const student = {
            name: req.body.name,
            scores: req.body.scores
        };
        console.log(student);
        try {
            const result = await DB_COLLECTIONS.insertOne(student);
            console.log(result);
            res.status(201).json(
                result.ops[0]
            );
        } catch (err) {
            res.status(400).json({
                message: err.message
            });
        }
    });

    // PATCH Request
    router.patch('/:id', async (req, res) => {
        const id = Number(req.params.id);
        const updates = {
            name: req.body.name,
            scores: req.body.scores
        };
        try {
            const result = await DB_COLLECTIONS.updateOne(
                { _id: id },
                { $set: updates }
            );
            if (result.matchedCount === 0) {
                return res.status(404).json({ 
                    message: 'Cannot find student' 
                });
            }
            res.json(DB_COLLECTIONS.findOne({ _id: id }));
        } catch (err) {
            res.status(400).json({ 
                message: err.message 
            });
        }
    });

    // DELETE Request
    router.delete('/:id', async (req, res) => {
        const id = Number(req.params.id);
        try {
            const result = await DB_COLLECTIONS.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
                return res.status(404).json({
                    message: 'Cannot find student'
                });
            }
            res.json({
                message: 'Deleted Student'
            });
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    });

    return router;
}

module.exports = studentRouter;