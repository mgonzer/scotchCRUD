const express = require('express');

const bodyParser = require('body-parser')

const app = express();
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())

const scotch = require('./routes/scotch')

app.use(scotch);

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`)
})
