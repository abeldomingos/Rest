//Arquivo principal da nossa API...
//Declaração do http e da pora a ser ouvida
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
//Convidar o app a executar funções do servidor
const server = http.createServer(app);
server.listen(port);

