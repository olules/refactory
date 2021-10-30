const express = require('express');
const router = express.Router();

// Render the shafic page when path /shafiq is hit
router.get('/shafiq',(req,res)=>{

    res.render('shafiq', {title:'Shafiq'})

});

router.post('/shafiq', (req,res)=>{
    res.render('shafiq',{title:'Shafiq'});
});


// Export Module
module.exports = router;