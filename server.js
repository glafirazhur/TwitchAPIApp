import express from 'express';
import routers from './routers';

require('dotenv').config();

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('api/auth', routers.auth);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
