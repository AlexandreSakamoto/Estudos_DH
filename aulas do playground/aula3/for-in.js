/*
let carro = {
    nome: "fox",
    ano: "2011"
}

for(let prop in carro){
    console.log(prop + ": " + carro[prop]);
    // variavel prop é sobre a propriedade o valor tem que ser chamado 
    //como se fosse um array com []
    // o for in enumera Objetos, mas não array ou matrizes
}
*/

let series = ["Friends", "Game of Thrones", "Breaking Bad"];

for(let valor of series){
    console.log(valor);
    //o far enumera arrays e matrizes, e uso com strings 
    //Não serve para objetos
}