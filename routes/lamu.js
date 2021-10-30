const express = require('express');
const router = express.Router();

// Render the lamu when path /lamu is hit
router.get('/lamu',(req,res)=>{

    res.render('lamu', {title:'Lamu'})

});

router.post('/lamu', (req,res)=>{
    res.render('lamu',{title:'Lamu'});
});


// Export Module
module.exports = router;