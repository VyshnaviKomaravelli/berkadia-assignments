var express = require('express')
var app = express()

app.use(function (req, res, next) {
    
    var query=req.query;
    var user=query.user;
    var pwd=query.pass;
   
    if(user=='vyshu' && pwd=='vyshu')
    {
        res.send(" Application level middleware");
  
    }
    next();
  });

app.get('/', function (req, res) {
  console.log('Application level middleware');
});

app.listen(3333);
