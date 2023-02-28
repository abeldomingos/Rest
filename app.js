const express = require('express');
const app = express();

//Instancia da rota produto
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');


//Fazer uso da rota produto
app.use('/produtos', rotaProdutos);
//Fazer uso da rota pedido
app.use('/pedidos', rotaPedidos);

/*
app.use('/testes',(req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, Deu certo Abel'
    });
});
*/

module.exports = app;