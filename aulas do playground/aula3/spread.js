let frutas = ["maça","banana","uva"];

let frutasDois = ["laranja","abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutasDois];

//console.log(listaCompleta);


let pessoa = {
    nome: "Alexandre",
    idade: 22
}

let infoPessoal = {
    tel: "123456789",
    rg: 12212212,
    ...pessoa
}

let pesssoaCompleta = {
    endereco: "Rua dos Bocó",
    ...infoPessoal
}

//console.log(infoPessoal);

function letras(...paramns){
    console.log(paramns[1])
}
letras("a","b","c");


//da para passar spred operator como parametros de metodos 
let numeros = [10,15,21,13,5,6,1,10,13];
console.log(Math.min(...numeros));



