// CACHORO
let cachorro = {
    nome: "Bolt",
    idade: 4,
    sexo: "M",
    castrado: true,
    vacinas: ["Raiva", "Verme", "Cinomose"]
}

//OBJETO:
// é um conjunto de propriedades e valores ( nome: valorNome; idade: valorIdade)

//ARRAY:                                                          0         1         2
// é um conjunto de dados, mas a estrutura dele é por posição ["Raiva", "Verme", "Cinomose"]

// MOSTRA O OBJETO INTEIRO
// console.log(cachorro);

// QUERO UMA PROPRIEDADE
// console.log(cachorro.nome);

// O ARRAY INTEIRO (só chamar a propriedade)
// console.log(cachorro.vacinas);

// UM ELEMENTO ESPECIFICO DO ARRAY
// console.log(cachorro.vacinas[2]);

let nomeCachorro = cachorro.nome;
// console.log("Oi " + nomeCachorro + " é hora de tomar suas vacinas");

// Escreva a funcao eCastrado que me diga se o cachorro é castrado ou não!
// Se o cachorro for castrado retorne true
// Se o cachorro não for castrado retorne false

function eCastrado(cachorroTestado) {
    // eu quero comparar se cachorro.castrado é true (verdadeiro) ou false (falso)
    if (cachorroTestado.castrado == true) {
        console.log("O " + cachorroTestado.nome + " é castrado")
        return true;
    } else {
        console.log("O " + cachorroTestado.nome + " não é castrado")
        return false;
    }
}

eCastrado(cachorro);

let cachorros = [
    {
        nome: "Malu",
        idade: 3,
        sexo: "M",
        castrado: true,
        servicos: ['banho', 'tossa'],
    },
    {
        nome: "Batman",
        idade: 2,
        sexo: "M",
        castrado: false,
        servicos: ["banho", "tosa", "corte de unha"]
    },
    {
        nome: "Mel",
        idade: 4,
        sexo: "F",
        castrado: false,
        servicos: ["banho", "corte de unha"]
    }
];
// TODOS OS CACHORROS
// console.log(cachorros);

// UM CACHORRO EM ESPECÍFICO
// console.log(cachorros[1].servicos);

// console.log("O cachorro da posição 0 se chama " + cachorros[0].nome + " e o cachorro da posição 1 se chama " + cachorros[1].nome);

// console.log(cachorros[2].nome, cachorros[1].idade, cachorros[0].sexo, cachorros[2].castrado, cachorro.nome);

// COMO PERCORRER ARRAY COM UM LOOP
for (let i = 0; i < cachorros.length; i++) {
     console.log("=================================")
     console.log(cachorros[i].nome, cachorros[i].sexo);
} 
// exercicio.
// 1 -Uma função que liste os cachorros castrado
// Percorra a array e retorne o nome dos cachorros castrado
// loops - for/whiile/do-wile
// onde armazenar o nome dos cachorros cadastrados?
// e se não for castrado? faço~algo?
// fazer uma função que adicione um cachorro no array cachorros;
//.push

/*ENUNCIADO DOS EXERCÍCIOS DE HOJE (para quem gostaria de refazer) :
// Escreva o objeto cachorro, com as propriedades: nome (string), idade (numero), sexo (string "M" ou "F"), castrado (booleano: true ou false), vacinas (array com vacinas! ARRAY é com [   ] );
// Escreva a funcao eCastrado que me diga se o cachorro é castrado ou não!
// Se o cachorro for castrado retorne true
// Se o cachorro não for castrado retorne false
======================================
ARRAY E OBJETO
// Escreva o array (cachorros) de objetos que possuem as seguintes propriedades: nome (string), idade (numero), sexo (string "M" ou "F"), castrado (booleano: true ou false), servicos (array com vacinas! ARRAY é com [   ] );
// Faça um console.log para mostrar o nome de UM cachorro em específico;
// Faça um console.log mostrando o nome de DOIS cachorros diferentes;
// Usando um loop (lembra do for do nivelamento?) percorra os cachorros da array!
Deem prioridade ao conteúdo do playground para nossa aula de segunda!
Temos a semana e a aula de sexta-feira para falarmos sobre os exercícios e revisões,
podem me mandar mensagem no Slack!
*/


