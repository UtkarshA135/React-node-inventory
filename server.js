var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

let path = __dirname + '/build/';
app.use(express.static('build'));
// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

const Item = require('./app/models/item.model.js');
 
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Successfully connected to MongoDB.");   
     
    }).catch(err => {
        console.log(err);
        console.log('Could not connect to MongoDB.');
        process.exit();
    });
   

    app.get('/', function (req,res) {
        res.sendFile(path + "index.html");
      });
require('./app/routes/customer.router.js')(app);
// Create a Server
var server = app.listen(8080, function () { 
  var host = server.address().address
  var port = server.address().port || process.env.PORT
 
  console.log("App listening at http://%s:%s", host, port) 
})