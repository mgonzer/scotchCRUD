const express = require('express');

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const scotch = require('./routes/scotch')

app.use(scotch);

const port = process.env.DATABASE_URL || 'postgresql://localhost/beverages';
app.listen(port, () =>{
  console.log(`Listening on ${port}`)
})
