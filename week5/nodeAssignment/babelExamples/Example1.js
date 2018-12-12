var express = require('express');
var app = express();
app.get('/',(req,res)=>{
   res.send("arrow functions usage in internet explorer")});

app.listen(3333,()=>{
        console.log("listening 3333");
    });
