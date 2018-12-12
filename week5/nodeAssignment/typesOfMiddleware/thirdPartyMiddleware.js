var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.post('/users', function(req, res) {
    var user_id = req.body.id;
    var password = req.body.pwd;
  

    res.send(user_id + ' ' + password );
});
app.listen(3333,()=>{
      console.log("listening 3333");
  });