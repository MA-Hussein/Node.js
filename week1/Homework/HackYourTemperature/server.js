'use strict';

const express = require('express');
const axios = require('axios');
const exphandlebars = require('express-handlebars');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => res.send('hello from backend to frontend!'));

app.listen(PORT, () => console.log(`This app is listening on port ${PORT}!`));