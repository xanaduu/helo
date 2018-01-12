require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session');
const axios = require ('axios')
const cors = require('cors')
const ctr = require ('./controller.js')

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
}).catch(error => {
    console.log('error', error);
  });

app.post('/api/form/update', ctr.updateProfile);
  
const port = 3003;

app.listen(port, () => console.log(`I'm listening... on port: ${port}`));

