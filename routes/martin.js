const express = require('express');
const router = express.Router();

// Render the martin page when path /martin is hit
router.get('/martin',(req,res)=>{

    res.render('martin', {title:'Martin'})

});

router.post('/martin', (req,res)=>{
    res.render('martin',{title:'Martin'});
});


// Export Module
module.exports = router;