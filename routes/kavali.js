const express = require('express');
const router = express.Router();

// Render the Kavali page when path /Kavali is hit
router.get('/kavali',(req,res)=>{

    res.render('home', {title:'Kavali King'})

});

router.post('/kavali', (req,res)=>{
    res.render('kavali',{title:'Kavali King'});
});


// Export Module
module.exports = router;