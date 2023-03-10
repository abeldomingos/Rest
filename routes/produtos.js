const express = require('express');
const router = express.Router();


//OS NOSSOS METÓDOS ESTÃO FUNCIONANDO CONFORME OS VERBOS

//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os Produtos'
    });
});


//INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Insere um produtos'
    });
});

//
//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
     const id = req.params.id_produto

     //Condicionar o que estamos recebendo
     if (id == 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id:id
        });
        
     }else{
        res.status(200).send({
            mensagem: 'Você Passou um ID'
        })
     }
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto alterado'
    });
});


//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluido'
    });
});
//Exportar a rota do produto
module.exports = router;