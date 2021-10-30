const express = require('express');
const router = express.Router();

// Render the artists when path /artists is hit
router.get('/solo-artists',(req,res)=>{

    res.render('artists', {title:'Artists'})

});

router.post('/solo-artists', (req,res)=>{
    res.render('solo-artists',{title:'Artists'});
});


// Export Module
module.exports = router;