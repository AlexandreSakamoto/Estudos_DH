let frutas = ["maça","banana","uva"];

let frutasDois = ["laranja","abacate", "goiaba" ];

let listaCompleta = [...frutas,...frutasDois];
// se usar os ... na frente das arrays o spread operator junta numa array só

//console.log(listaCompleta);

let pessoa = {
    nome:"Alexandre",
    idade: 41
}

let infoPessoal = {
    tel:"119927898250",
    rg: 17749749,
    ...pessoa
}

let pessoaCompleta = {
    endereco: "Rau Analia Franco, 30",
    ...infoPessoal
}

// funciona com array tanto com objetos literais
//console.log(pessoaCompleta);

function letras(...paramns){


    console.log(paramns[2])

}
letras("a","b","c");

//com funções o spread operator coloca as informações organiçadas dentro de uma array


