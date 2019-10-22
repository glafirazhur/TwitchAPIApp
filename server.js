import express from 'express';
import Cookies from 'universal-cookie';
import axios from 'axios';

require('dotenv').config();

const app = express();
const cookies = new Cookies();

const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api/auth', (req, res) => {
  const { code } = req.query;
  const token = cookies.get('auth_token');

  // token expired == cookies expired

  if (!token) {
    console.log('Saving token');
    axios.post('https://id.twitch.tv/oauth2/token'
      + '?client_id=' + process.env.REACT_APP_TWITCH_API_CLIENT_ID
      + '&client_secret=' + process.env.REACT_APP_TWITCH_SECRET_CODE
      + '&code=' + code
      + '&grant_type=authorization_code'
      + '&redirect_uri=http://localhost:5000/api/auth')
      .then((result) => result)
      .then(({ data }) => {
        cookies.set('auth_token', data.access_token);
        res.redirect('http://localhost:3000');
      })
      .catch((error) => {
        console.log(error.response.data);
        res.send(error);
      });
  } else {
    res.redirect('http://localhost:3000');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
