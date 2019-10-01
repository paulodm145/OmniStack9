/** Arquivo de Configuração de Rotas */
const express = require('express');

/**IMPORTAR CONTROLADORES */
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();/**responsaveis pela rotas */

/**....Rota para cadastro de Usuário....*/
routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotController.store);

module.exports = routes;