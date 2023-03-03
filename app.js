const express = require('express');
const app = express();
const morgan = require('morgan')

//Instancia da rota produto
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev')) // Vai executar um call back para dar sequência nas demais rotas, vai monitorar dando um log(verbo) pra nós

//Fazer uso da rota produto
app.use('/produtos', rotaProdutos);
//Fazer uso da rota pedido
app.use('/pedidos', rotaPedidos);

//Tratamento incluido para qdo o morgan não encontrou nem1 rota, //Qdo não encontra rota
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
})

//
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensage
        }
    });
})

/*
app.use('/testes',(req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, Deu certo Abel'
    });
});
*/

module.exports = app;