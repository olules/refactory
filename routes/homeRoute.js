const express = require('express');
const router = express.Router();

// Render the Home page when path / is hit
router.get('/',(req,res)=>{

    res.render('home', {title:'Ugaamux'})

});

router.post('/', (req,res)=>{
    res.render('home',{title:'From The Pearl'});
});


// Export Module
module.exports = router;