var express = require('express');
var app = express();
var path=require('path');

app.use(express.static(path.join(__dirname,"public")));
app.get('/',(req,res)=>{
   });

app.listen(3333,()=>{
        console.log("listening 3333");
    });
