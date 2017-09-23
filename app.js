const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/about', (req, res) =>{
  res.render('about.hbs');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
