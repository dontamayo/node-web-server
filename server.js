console.log('express app');

const express = require('express');
const PORT = 3000;

let app = express();

app.get('/', (req, res) =>{
  //res.send('<h1>hello express! PORT</h1>');
  //json view
  res.send({
    name: 'DOn',
    likes: [
      'Biking',
      'Basketball',
      'web developing'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
});

app.get('/bad', (req, res) => {
  res.send ( {
    errorMessage: 'Unable to handle request'
  });
});

app.get('/contact', (req,res) => {
  res.send('<h1>Contact</h1>')
});


app.listen(PORT);
