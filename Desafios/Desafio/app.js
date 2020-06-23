
let usuario = [
    {
        nome: 'Fulano de Tal',
        idade: 18,
        email: 'email@gmail.com',
        compras: [
            {
                nome: 'Celular X',
                marca: 'Aquela Lá',
                valor: 1999.99,
                data_de_compra: '2020/01/01',
                tempo_de_validade_em_meses: 6,
            }
            ,
            {
                nome: 'Celular Y',
                marca: 'Aquela Outra Lá',
                valor: 858.99,
                data_de_compra: '2020/05/17',
                tempo_de_validade_em_meses: 6,
            }
        ]
    }
    ,
    {
        nome: 'Marcelo do Marmelo',
        idade: 69,
        email: 'outro_email@gmail.com',
        compras: [
            {
                nome: 'Celular A',
                marca: 'Uma Bela Marca',
                valor: 259.87,
                data_de_compra: '2015/07/12',
                tempo_de_validade_em_meses: 12,
            }
            ,
            {
                nome: 'Cafeteira Bela',
                marca: 'Aquela Marca Lá',
                valor: 89.90,
                data_de_compra: '2020/03/02',
                tempo_de_validade_em_meses: 12,
            }
        ]
    }
]
//console.log("idade = " + usuario[0].idade + " nome:  " + usuario[0].nome + " e-mail: " + usuario[0].email);
// let [{nome:nomeUsuario,
//       idade:idadeUsuario,
//       email:emailUsuario,
//       compras:comprasProduto =      
//         [{nome:nomeProduto,
//           marca:marcaProduto,
//           valor:valorProduto,
//           data_de_compra:data_de_compraProduto,
//           tempo_de_validade_em_meses:tempo_de_validade_em_mesesProduto}]}] = usuario;
// console.log(usuario[1].nome);

const [{nome,idade,email,
       compras = [{nome,marca,valor,data_de_compra,tempo_de_validade_em_meses}]
       }] = usuario;
//console.log(usuario[1].nome, usuario[1].idade,usuario[1].compras[1].marca);
// console.log(usuario[0].compras[1].nome);
// console.log("+++++++++++++++++++++");
// console.log(usuario[1].compras[1].nome);

//* Desafio
// Implementar as seguintes funções:

// Mostrar no terminal (console.log) todos os usuários (informar o nome e e-mail) que são menores de idade
function menoresIdade(){
    for(i=0;i<usuario.length;i++){
        if(usuario[i].idade <= 18){ 
        //console.log(usuario[i].nome);
        console.log("São menores de idade: ");
        console.log("nome: " + usuario[i].nome);
        console.log("email: " + usuario[i].email);
        console.log("!!!!!!!!!!!!!!!!!!!!!!!");
        }
    
    }
}
menoresIdade(); 

// // Mostrar no terminal (console.log) todos os usuários (informar o nome e e-mail) que possuem maior de 60 anos
function melhorIdade(){
    for(i=0;i<usuario.length;i++){
        if(usuario[i].idade > 60){ 
        //console.log(usuario[i].idade);
        console.log("Estão na melhor de idade: ");
        console.log("nome: " + usuario[i].nome);
        console.log("email: " + usuario[i].email);
        console.log("======================================");
        }
    }
}
melhorIdade();

// Mostrar no terminal (console.log) todos os usuários (informar o nome, e-mai e o produto) que possuem produtos que ainda estão na garantia

function naGarantia(){
    for(i=0;i<usuario.length;i++){
        for(var y in compras){
            var d = new Date() / 2.628e+9;
            var c = Date.parse(usuario[i].compras[y].data_de_compra) / 2.628e+9;
            var g = (usuario[i].compras[y].tempo_de_validade_em_meses) * 2.628000000000;
            var garantia = g + c;
                if(d < garantia){        // console.log("data compra " + c);
        // console.log("garantia: " + c + g);
        // console.log(d);
                
        console.log("+++++++++++++++++++++++++++++++++++++++");
        console.log("Estão na garantia: ");
        console.log("produto: " + usuario[i].compras[y].nome);
        console.log("data da compra: " + usuario[i].compras[y].data_de_compra + " Meses de garantia: " + usuario[i].compras[y].tempo_de_validade_em_meses);
        console.log("nome: " + usuario[i].nome);
        console.log("email: " + usuario[i].email);
        console.log("+++++++++++++++++++++++++++++++++++++++");
            }
        }

    }
  
}
naGarantia();


// Mostrar no terminal (console.log) todos os usuários (informar o nome, e-mai e o produto) que possuem produtos que não estão mais na garantia
function foraDaGarantia(){
    for(i=0;i<usuario.length;i++){
        for(var y in compras){
            var d = new Date() / 2.628e+9;
            var c = Date.parse(usuario[i].compras[y].data_de_compra) / 2.628e+9;
            var g = (usuario[i].compras[y].tempo_de_validade_em_meses) * 2.628000000000;
            var garantia = g + c;
                if(d > garantia){        // console.log("data compra " + c);
        // console.log("garantia: " + c + g);
        // console.log(d);
                
        console.log("------------------------------------------");
        console.log("Estão fora da garantia: ");
        console.log("produto: " + usuario[i].compras[y].nome);
        console.log("data da compra: " + usuario[i].compras[y].data_de_compra + " Meses de garantia: " + usuario[i].compras[y].tempo_de_validade_em_meses);
        console.log("nome: " + usuario[i].nome);
        console.log("email: " + usuario[i].email);
        console.log("------------------------------------------");
            }
        }
    }
}
foraDaGarantia();


// - Mostrar no terminal (console.log)(informar o nome, e-mai e o total) o valor total que cada usuário gastou na nossa loja
function quantoGastou(){
    for(i=0;i<usuario.length;i++){
        for(var y in compras){
            var v = usuario[i].compras[y].valor;
            var v = v + 1;
            // console.log("garantia: " + c + g);
        // console.log(d);
                
        console.log("");
        //console.log("produto: " + usuario[i].compras[y].nome);
        console.log("Voce gastou na nossa loja: R$" + v);
        console.log("nome: " + usuario[i].nome);
        console.log("email: " + usuario[i].email);
        console.log(":-) ;-) :-) ;-) :-) ;-) :-) ;-) :-) ;-) :-) ;-)");
        
        }
    }
}
quantoGastou();


usuario.forEach(function(elemento) {
    console.log(elemento)
})
