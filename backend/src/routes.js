const { Router } = require('express');
const routes = Router();
const devController = require('./controllers/devController')
const SearchController = require('./controllers/SearchController')
//controller tem 5 funcoes = index = mostra lista, show = mostra unico, store = criar, update, destroy
routes.post('/devs',devController.store);
routes.get('/devs',devController.index);
routes.get('/search',SearchController.index);
module.exports = routes;