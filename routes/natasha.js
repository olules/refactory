const express = require('express');
const router = express.Router();

// Render the natasha page when path /natasha is hit
router.get('/natasha',(req,res)=>{

    res.render('natasha', {title:'Natasha Sinayobye '})

});

router.post('/natasha', (req,res)=>{
    res.render('natasha',{title:'Natasha Sinayobye '});
});


// Export Module
module.exports = router;