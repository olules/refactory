const express = require('express');
const router = express.Router();

// Render the qwela page when path /qwela is hit
router.get('/qwela',(req,res)=>{

    res.render('qwela', {title:'Qwela Band'})

});

router.post('/qwela', (req,res)=>{
    res.render('qwela',{title:'Qwela Band'});
});


// Export Module
module.exports = router;