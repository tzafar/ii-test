const express = require('express');
const {handleError} = require('./src/errors/error_handler')
const routes = require('./src/routes/routes.js');
const bodyParser = require('body-parser');
require('./src/scheduler')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);
app.use(handleError)

module.exports = app
