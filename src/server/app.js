const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: false })); // Handles post requests
app.use(express.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './public')));



routes.forEach((routeObj) => {
  const { method, route, middlewares = [], controller } = routeObj;

  app[method](`/api${route}`, middlewares, controller);
});

module.exports = app;