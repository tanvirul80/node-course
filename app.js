const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/about', (req, res) =>{
  res.render('about.hbs');
});

app.listen(3000);
