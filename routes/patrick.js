const express = require('express');
const router = express.Router();

// Render the patrick page when path /patrick is hit
router.get('/patrick',(req,res)=>{

    res.render('patrick', {title:'Patrick Ssenjovu'})

});

router.post('/patrick', (req,res)=>{
    res.render('patrick',{title:'Patrick Ssenjovu'});
});


// Export Module
module.exports = router;