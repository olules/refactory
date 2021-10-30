const express = require('express');
const router = express.Router();

// Render the chenkobe page when path /chenkobe is hit
router.get('/chenkobe',(req,res)=>{

    res.render('chenkobe', {title:'Chenkobe from Bantu Vibes'})

});

router.post('/chenkobe', (req,res)=>{
    res.render('chenkobe',{title:'Chenkobe from Bantu vibez'});
});


// Export Module
module.exports = router;