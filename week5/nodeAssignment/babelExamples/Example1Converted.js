'use strict';

var express = require('express');
var app = express();
app.get('/', function (req, res) {
   res.send("arrow functions usage in internet explorer");
});

app.listen(3333, function () {
   console.log("listening 3333");
});
