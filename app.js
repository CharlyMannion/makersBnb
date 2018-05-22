var express = require('express');
var app = express();
var spacesDB = require('./server/models').spaces;
// spacesDB.findAll( {}
// ).then(function(spaces){
//   spaces.forEach(function(space){
//     console.log(space)
//   })
// })

app.get('/', function(req, res){
  res.send('Hello, MakersBnB!');
});

app.listen(3000, function(){
  console.log('MakersBnB up and running on port 3000')
});
