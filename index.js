var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
mongoose.connect('mongodb://ruchi:retina@ds149603.mlab.com:49603/ru3008mongo',function(err){
  if(err){
    console.log('Couldnot connect to database');
  }else {
    console.log('Connected to database');
  }
});
mongoose.Promise = global.Promise;
app.use(express.static(__dirname + '/client/dist'));
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3000,function(req,res){
  console.log("Server Started");
});
