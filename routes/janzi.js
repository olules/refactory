const express = require('express');
const router = express.Router();

// Render the janzi page when path /janzi is hit
router.get('/janzi',(req,res)=>{

    res.render('janzi', {title:'Janzi Band'})

});

router.post('/janzi', (req,res)=>{
    res.render('janzi',{title:'Janzi Band'});
});


// Export Module
module.exports = router;