const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const server = express();

const origin = process.env.ORIGIN_URL === 'live' ? 'https://clever-liskov-29b49a.netlify.com' : 'http://localhost:3000';

const corsOptions = {
  origin: '*',
  credentials: true
};

//const usersRouters = require('./users/usersRouters.js');
const seekersRouters = require('./seekers/seekersRouters.js');
const companiesRouters = require('./companies/companiesRouters.js');
const markersRouters = require('./markers/markersRouters.js');
const favoritesRouters = require('./seekers/favoritesRoutes.js');
const conversationsRouters = require('./conversations/conversationsRouters.js');

// const configureServer = require('./serverConfig');
const configureRoutes = require('./stripe-routes');

server.use(cors(corsOptions));
server.use(express.json(), helmet());
//server.use('/api/database', usersRouters);

server.use('/api/database/seekers', seekersRouters);
server.use('/api/database/companies', companiesRouters);
server.use('/api/markers', markersRouters);
server.use('/api/database/favorites', favoritesRouters);
server.use('/api/database/conversations', conversationsRouters)

server.get('/', (req, res) => {
 res.status(200).send('Developer Map API. Currently In Development.');
});

// configureServer(server);
configureRoutes(server);

module.exports = server;
