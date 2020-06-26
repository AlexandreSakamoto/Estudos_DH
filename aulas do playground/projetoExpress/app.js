
let series = require('./series');

const express = require('express');

const router = require('./routes/rota');


let app =  express();
//criando rota
app.get('/',(req, res) => res.send ("Olá mundo!"));
//app.get('/contatos',(req,res)=>res.send(["Contato1","Contato2"])); arrays
app.get('/contatos',(req,res)=>res.send({nome:"Alexandre",idade:22}));
app.use('/produtos',router);



// app.get('/produtos/:id?',(req,res)=>{                   //id rotas para metrizadas
//     let {id} = req.params;                             //desestruturando pode ser feito criando variável let id = req.params.id lembrando que id é um objeto com valores 
//     res.send("Eu tenho um produto com id: " + id)
// })

// app.get('/serie/:id?',(req,res)=>{
//     let{id} = req.params;
//     res.send(series[id])
// })

app.get('/serie/:id?',function (req,res) {
    let id = req.params.id-1;
    res.send(series[id]);
})


//criando servidor
app.listen(4000,()=>console.log("Servidor rodando"));