let express = require('express');
let app = express();
let journal = require("./controllers/journalcontroller");
const sequalize = require("./db");

// app.use("/Teayarnna", function(req,res){
//     res.send("My name is Teayarnna and I am 33 years old.")
// });

// app.use('/test', function(req,res){
//     res.send("This is a message from the test endpoint on the server!");
// });

 app.use("/journal", journal);
app.listen(3030, function(){
    console.log("App is listening on port 3030");
});