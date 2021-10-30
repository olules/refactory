const express = require('express');
const router = express.Router();

// Render the afrigo when path /afrigo is hit
router.get('/afrigo',(req,res)=>{

    res.render('afrigo', {title:'Afrigo Band'})

});

router.post('/afrigo', (req,res)=>{
    res.render('afrigo',{title:'Afrigo Band'});
});


// Export Module
module.exports = router;