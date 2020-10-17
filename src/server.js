const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();

server
  .use(express.static('public'))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  .get('/', pages.index)
  .get('/orphanages', pages.orphanages)
  .get('/orphanage', pages.orphanage)
  .get('/create-orphanage', pages.createOrphanage)

server.listen(80);
console.log('Estou online!');