const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const User = require('../models/User');
const Clerk = require('../models/clerks');

const router = express.Router();
// Route for clerk to register all other  creatives .
router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard');
    } else {
        res.redirect('/login');
    }
});

// Route of the clerk registration page.
router.get('/clerksreg', (req, res) => {
    res.render('clerksReg');
});

// posting data from the clerk form.
router.post('/clerksreg', async (req, res) => {
    console.log(req.body);
    try {
        const user = new User(req.body);
        const clerk = new Clerk(req.body);
        console.log(clerk);
        await clerk.save();
        await User.register(user, req.body.password, (err) => {
            if (err) {
                throw err;
            }

            res.redirect('/login');
        });
    } catch (err) {
        res.status(400).send('Error! Content not sent to the database');
        console.log(err);
    }
});

module.exports = router;