// Express method we are using 
// GET/POST/PUT/DELETE

// For every controller you will use lines 5,6 and 8  
let express = require('express');
let router = express.Router();

//similar to app.use
router.get('/practice', function(req,res){
    res.send("This is a practice route!")
});

// router.get('/about', function(req,res){
//     res.send("this is an about route")
// });

module.exports = router;

