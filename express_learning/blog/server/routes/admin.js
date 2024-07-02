const express = require('express');
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const adminLayout = '../views/layouts/admin'
// Routes

/**
 * Middleware to check for jwttoken and session cookie 
 * Check Login
 */

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}


/**
 * GET /
 * Admin - Login Page
 */

router.get('/', async (req, res) => {
    try {
        res.render('admin/index', {
            layout: adminLayout
        });
    } catch (error) {
        console.log(error);
    }
});


/**
 * POST /
 * Admin - Check Login
 */

router.post('/', async (req, res) => {
    try {

        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, jwtSecret);
        res.cookie('token', token, { httpOnly: true });

        res.redirect('admin/dashboard');

    } catch (error) {
        console.log(error);
    }
});

/**
 * POST /
 * Admin - Admin Register
 */

router.post('/register', async (req, res) => {
    try {

        const username = req.body.username;
        const password = req.body.password;

        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await User.create({
                username,
                password: hashedPassword
            })
            res.status(201).json({ message: 'User Created', user });
        } catch (error) {
            if (error.code === 11000) {
                res.status(409).json({ message: 'user already in use' });
            }
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    catch (error) {
        console.log(error);
    }
});



/**
 * GET /
 * Admin - Dashboard
 */

router.get('/dashboard', authMiddleware, async (req, res) => {
    try {
        const data = await Post.find();
        res.render('admin/dashboard', {
            data,
            layout: adminLayout
        });
    } catch (error) {
        console.log(error);
    }
});


/**
 * GET /
 * Admin - Create New Post
 */

router.get('/add-post', authMiddleware, async (req, res) => {
    try {
        const data = await Post.find();
        res.render('admin/add-post', {
            data,
            layout: adminLayout
        });
    } catch (error) {
        console.log(error);
    }
});



/**
 * POST /
 * Admin - Create New Post
 */

router.post('/add-new-post', authMiddleware, async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            body: req.body.body,
        });

        await Post.create(newPost);

        res.redirect('dashboard');
    } catch (error) {
        console.log(error);
    }
});



/**
 * GET /
 * Admin - Edit Post
 */

router.get('/edit-post/:id', authMiddleware, async (req, res) => {
    try {
        const data = await Post.findOne({ _id: req.params.id });
        res.render('admin/edit-post', {
            data,
            layout: adminLayout
        });
    } catch (error) {
        console.log(error);
    }
});


/**
 * PUT /
 * Admin - Edit Post
 */

router.put('/edit-post/:id', authMiddleware, async (req, res) => {
    try {

        await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            body: req.body.body,
            updatedAt: Date.now()
        });

        res.redirect(`/edit-post/${req.params.id}`);

    } catch (error) {
        console.log(error);
    }
});


/**
 * DELETE /
 * Admin Delete Post
*/
router.delete('/delete-post/:id', async (req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id });
        res.redirect('admin/dashboard');
    }
    catch (error) {
        console.log(error);
    }
});


/**
 * GET /
 * Admin Logout
*/
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});


module.exports = router;