const express = require('express');

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const scotch = require('./routes/scotch')

app.use(scotch);

const port = process.env.POR || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`)
})
