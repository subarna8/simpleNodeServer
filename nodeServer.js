var http = require('http');
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  var server = http.Server(app);
  var mongoose = require('mongoose');
  mongoose.connect("mongodb://localhost:27017/node-cw8");
  
  mongoose.connection.on('error', function(){
    console.log("Could not connect to mongodb");
  });
  //for local
  //var db, uri = "mongodb://localhost:"
 // var db, uri = "mongodb://"+process.env.IP+":27017";
  
  //var mongoose = require('mongoose');
  //mongoose.connect(uri);
  
  //var Schema = mongoose.Schema;
  
  var userSchema = new mongoose.Schema({
      name:{ 
        type: String,
        required: "Name is required"
        
      },
      email: String
    
  });
  
  var User = mongoose.model('User', userSchema);
  
  /*mongo.MongoClient.connect(uri,{useNewUrlParser:true}, 
                                  function(err,client){
                                    if(err){
                                      console.log('Could not connect to MongoDB');
                                    }
                                    else{
                                      db = client.db('node-cw8');
                                    }
                                  });*/
  
  var save = function(index1_data){
    db.createCollection('users', function(err,collection){});
    var collection = db.collection('users');
    collection.save(index1_data);
  };
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  

  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
  });
  
  app.get('/about', function(req, res){
    res.sendFile(__dirname+'/about.html');
  });
  
   app.get('/index1', function(req, res){
    res.sendFile(__dirname+'/index1.html');
  });
  
  app.post('/signup', function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    console.log("post received: %s %s", username, email);
});
app.post('/submit_user', function(req, res){
  console.log(req.body);
  var new_user = new User(req.body);
  new_user.save(function(err, data){
    if(err)
    return res.status(400)
              .json({message: "Could Not Save User"});
              res.status(200).json(data);
  })
});


  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });