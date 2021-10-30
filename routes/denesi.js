const express = require('express');
const router = express.Router();

// Render the denesi page when path /denesi is hit
router.get('/Denesi',(req,res)=>{

    res.render('denesi', {title:'Denesi from Bantu Vibes'})

});

router.post('/Denesi', (req,res)=>{
    res.render('denesi',{title:'Denesi from Bantu Vibes'});
});


// Export Module
module.exports = router;