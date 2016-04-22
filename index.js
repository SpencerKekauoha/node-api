var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();


app.use(bodyParser.json());
app.use(function(req, res, next){
  console.log(req.body);
  next();
})
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/lastest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.post('/name', mainCtrl.createName);
app.put('/name/:id', mainCtrl.updateName);
app.put('/location/:id', mainCtrl.updateLocation);
app.post('/hobbies/', mainCtrl.createHobbies);
app.post('/occupations', mainCtrl.createOccupations);
app.get('/skills', mainCtrl.getSkills);
// app.post('/skills', middleware.generateId, mainCtrl.postSkills);
// app.get('/secrets/:pin', middleware.canEnter);




var port = 8000;
app.listen(8000, function(){
  console.log('listening on port', port);
})
