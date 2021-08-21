const express = require('express');
require('./src/scheduler')

const express_app = express();
const bodyParser = require('body-parser');
express_app.use(bodyParser.urlencoded({extended: true}));
express_app.use(bodyParser.json());

let routes_file = './src/routes/routes.js';
const routes = require(routes_file);
routes(express_app);

module.exports = express_app
