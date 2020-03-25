const express = require('express');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
*Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
* Route PArams: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da Requisição utilizado para criar ou alterar recursos
*/

app.listen(3333);

