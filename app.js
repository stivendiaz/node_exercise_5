const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index');
});

app.post('/saludo', function(req, res){
    
    res.send(`<h1>Hola ${req.body.name}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));