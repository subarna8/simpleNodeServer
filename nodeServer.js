var http = require('http');
  var express = require('express');
  var app = express();
  var server = http.Server(app);


  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
  })

  app.get('/about', function(req, res){
    res.sendFile(__dirname+'/about.html');
  });
   app.get('/index1', function(req, res){
    res.sendFile(__dirname+'/index1.html');
  });

  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });