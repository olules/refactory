const express = require('express');
const router = express.Router();

// Render the luswata page when path /luswata is hit
router.get('/luswata',(req,res)=>{

    res.render('luswata', {title:'Luswata Phillip'})

});

router.post('/luswata', (req,res)=>{
    res.render('luswata',{title:'Luswata Phillip'});
});


// Export Module
module.exports = router;