for(let i=0; i <= 4; i++){
    console.log(i)
}


function papagaio(texto){
    for(let i=0; i<=4 ; i++){
        console.log(texto)
    }
}
let resultado = papagaio("Sim, Tudo o que ouve, repete!");


function naoPareDeContarImparesAte(numero){
    let impares = 0;
    for(let i=1; i <= numero; i++){
        if(i % 2 == 1){
        impares = i;   
        return impares;
        //return impares;
     
        }
    }
    console.log(impares);
    
}

/*
naoPareDeContarImparesAte(10);

function cont(inicio, fim){
    //Escreva seu código aqui
    
    while (inicio < fim){
        inicio++;
        console.log("O número atual é " + inicio + " e é menor que " + fim);
    }
}
cont(3,10);
*/