/*
let pessoa = {
    nome: "Alexandre",
    altura: 1.81
}
const {nome, altura} = pessoa;
console.log(nome);

let listaCompras = ["pão", "leite", "açucar"];

const [item1,item2,item3] = listaCompras;

console.log(item2);
*/
// muito utilizado para extração de dados.
// colaca elemento em uma variavel.

// USANDO ARRAYS
const vingadores = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'];
const [vingador1, vingador2, vingador3] = vingadores;
console.log(vingador1);
console.log(vingador2);
console.log(vingador3);
 

// Desestruturar o array em variáveis individuais, o padrão do array fica na direita
// da atribuição (o "=") e o array sendo descontruido fica na esquerda.
// imprimir as variáveis
/*
const personagens = ['Tony Stark', ['Steve Rogers', 'Zé Carioca'], ['Mickey Mouse', 'Pateta']];

// USANDO OBJETOS
const vingadores2 = {
    homemDeFerro: 'Tony Stark',
    capitaoAmerica: 'Steve Rogers',
    viuvaNegra: 'Natasha Romanoff'
};
// Desestruturar esse objeto e salvar o valor das propriedades em variaveis

// Desestruturar objetos aninhados (que contém outros objetos)
const avengers = {
    viuvaNegra: 'Natasha Romanoff',
    ironManCharacters: {
        casal: {
            ironMan: 'Tony Stark',
            esposa: 'Pepper Potts',
        },
        parceiro: {
            warMachine: 'James Brodie'
        }
    },
    capitaoCharacters: {
        cap: 'Steve Rogers',
        parceiro: {
            falcao: 'Sam Wilson'
        }
    }
};
*/