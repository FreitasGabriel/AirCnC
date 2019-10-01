const express = require('express')
const routes = express.Router();
const SessionController = require('./controllers/SessionController')

//req.query = acessar query params (para filtros)
//req.params = acessar route params (edição, delete)
//req.body = acessar body da requisição

routes.post('/sessions', SessionController.store );

module.exports = routes;