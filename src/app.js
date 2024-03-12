const express = require('express');
const bodyParser = require('body-parser');
const appleRoute = require('./routes/appleRoute');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/apple', appleRoute);

require('./models/apple');

module.exports = app;

