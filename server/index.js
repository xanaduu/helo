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

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }));


massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
}).catch(error => {
    console.log('error', error);
  });

  app.post('/login', (req, res) => {
    const { userId } = req.body;
    const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`;
    axios.get(auth0Url, {
      headers: {
        Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN
      }
    }).then(response => {
      const userData = response.data;
      req.session.user = {
        name: userData.name,
        email: userData.email,
        auth0_id: userData.user_id
      };
      res.json({ user: req.session.user });
      app.get('db').find_user(userData.user_id).then(users => {
        if (!users.length) {
          app.get('db').create_user([userData.user_id, userData.email, userData.name]).then(() => {
            
          }).catch(error => {
            console.log('error', error);
          });
        }
      })
    }).catch(error => {
      console.log('error', error);
      console.log(userData)
      res.status(500).json({ message: 'Oh noes!' });
    }) 
  });

app.get('/user-data', (req, res) => {
    res.json({ user: req.session.user });
  });

  app.post('/logout', (req, res) => {
    req.session.destroy();
    res.send();
  });
    

app.post('/api/form/update', ctr.updateProfile);
app.get('/api/profile', ctr.read);
app.get('/api/search', ctr.search)

  
const port = 3003;

app.listen(port, () => console.log(`I'm listening... on port: ${port}`));

