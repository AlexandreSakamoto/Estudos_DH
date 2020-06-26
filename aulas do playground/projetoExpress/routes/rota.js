const express = require('express');
const ProdutoController = require ('../controllers/ProdutoController'); //assim o acesso sairá da pasta com ..

const router = express.Router();

router.get('/criar', ProdutoController.criarProduto);
router.get('/deletar/:id',ProdutoController.deletarProduto);

// router.get('/', (req,res) => res.send("Você Está na nossa página!")); nesse formato sem controler
// router.get('/deletar', (req,res) => res.send("Deletando um produto")); nesse formato sem controler
// router.get('/criar', (req,res) => res.send("Criando um Produto")); nesse fromato sem controler

 module.exports = router;
