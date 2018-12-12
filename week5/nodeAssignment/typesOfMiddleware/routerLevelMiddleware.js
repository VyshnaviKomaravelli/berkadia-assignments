var express = require('express')
var app = express()
const router = express.Router();
app.use('/', router)
router.post('/users',function (req, res, next) {  
    var query=req.query;
    var user=query.user;
    var pwd=query.pass;
    if(user=='vyshu' && pwd=='vyshu')
    {
        res.send("user id is:"+user+" pwd is:"+pwd);
   
     
    }
    next();
});

  app.listen(3333,()=>{
      console.log("listening 3333");
  });
  
