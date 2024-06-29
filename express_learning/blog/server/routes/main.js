const express = require('express');
const router = express.Router();
const Post = require("../models/Post");

// Routes

/**
 * GET /
 * HOME
 */
router.get('', async (req, res) => {
    try {
        
        let perPage = 5;
        let page = req.query.page || 1
        
        const data = await Post.aggregate([{ $sort: { createAt: -1 } }])
        .skip(perPage * page -perPage)
        .limit(perPage)
        .exec();

        const count = await Post.countDocuments();
        const nextPage = parseInt(page)+1;
        const hasNextPage =  nextPage <= Math.ceil(count/perPage);

        res.render('index', { 
            data,
            current:page,
            nextPage: hasNextPage ? nextPage : null
         });
    } catch (error) {
        console.log(error);
    }
});

/**
 * GET /
 * Post :id
 */
router.get('/post/:id', async (req, res) => {

    try {
        let slug = req.params.id;

        const data = await Post.findById({_id : slug});

        const locals = {
            title:data.title,
            description: data.description
        }

        res.render('posts', { 
            locals
         });
    } catch (error) {
        console.log(error);
    }
});

/**
 * POST /
 * Post - searchTerm
 */

router.post('/search', async(req,res)=>{
    try{
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g,"");
        
        const data = await Post.find({
            $or:[
                { title: { $regex: new RegExp(searchNoSpecialChar,'i')}},
                { body: { $regex: new RegExp(searchNoSpecialChar,'i')}},
            ]
        });
        res.render("search",{
            data
        })
    }catch(error){
        console.log(error);
    }
})


router.get('/contact', (req, res) => {
    res.render('contact');
});



module.exports = router;