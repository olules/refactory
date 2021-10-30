// Dependencies
const express = require('express');
const router = express.Router();
const passport = require('passport');


// Render login page
router.get('/login', (req,res)=>{
    res.render('login', {title:'Login Page'});
});

//Redirect to artlist list if authenticated
router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req,res) =>{
        req.session.user = req.user 
        res.redirect('/artistList');  
});

// Export Login module
module.exports = router;