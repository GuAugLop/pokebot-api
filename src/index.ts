require('dotenv').config();
import express = require('express');
const app: express.Application = express();
const PORT = process.env.PORT || 8080;
require('./db');
import groupRoute from './controllers/group';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', groupRoute);

app.listen(PORT, () => {
  console.log('API is running in port ', PORT);
});
