const express = require('express');
const router = express.Router();

// Render the ivunga page when path / is hit
router.get('/ivunga',(req,res)=>{

    res.render('ivunga', {title:'Ivunga Band'})

});

router.post('/ivunga', (req,res)=>{
    res.render('ivunga',{title:'Ivunga Band'});
});


// Export Module
module.exports = router;