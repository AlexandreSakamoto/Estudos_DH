/*
let contador = 0;

while(contador < 10){
    console.log("Estou dentro de um while")
    contador++;
}
*/
/*

let contador = 0;

do{
    console.log("Estou dentro de um while")
    contador++;
}while(contador < 10)
*/
/*
function tabelaDeMultiplicacao(numero) {
    var inicio = 0;

    //Escreva seu código aqui
        while (inicio <= numero){
       inicio++;
       //inicio = inicio * numero;
       console.log(inicio + "*" + numero + "=" + inicio*numero);
   }
}
tabelaDeMultiplicacao(10);
*/
/*
function tabelaDeMultiplicacao(numero) {
    var i = 0;
    while (i < 10){
     i++;
	 resultado= i * numero;
     console.log(numero + " * " + i + " = " + resultado);
   }
}
tabelaDeMultiplicacao(5);
*/
//Exercício: encontre o 5
//Queremos construir uma função que receba um array de números como parâmetro. 
//A função deve passar por esse array e imprimir cada um dos números pelo console.
// Se você encontrar um 5, deverá parar a execução e imprimir com console o texto "Encontramos um 5!".
//Para resolver este exercício, você DEVE usar o do-while.

/* minha solução ta cagada
function encontre(){
    let numero =[4,7,8,9,10];
    do{
    if(numero[5]=5);
    console.log(numero);
    } while (numero=0) ;
}
encontre();
*/
//solução do coleguinha Franco
function encontreUm5(numeros){
    var iArray = numeros.length
    var contador = 0
    do {
        if (numeros[contador] == 5){
            console.log("Encontramos um 5!")
            contador = iArray
        }
         else { console.log("numero do array é " + numeros[contador])
         }
         contador++
    } while (contador < iArray)
}
encontreUm5([2,3,8,33,5,4])