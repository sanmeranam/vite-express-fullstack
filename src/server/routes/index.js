const { sample } = require("../controller/sample");

const routes = [
  {
     method: 'get',
     route: '/',
     middlewares: [],
     controller: sample,
   },
];

module.exports = routes;