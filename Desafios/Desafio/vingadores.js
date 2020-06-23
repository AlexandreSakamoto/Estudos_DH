// USANDO ARRAYS
const vingadores = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'];

// Desestruturar o array em variáveis individuais e imprimir os seus valores!
// Dica: o padrão do array fica na esquerda da atribuição (o "=")
// e o array sendo desestruturado fica na direita.
// const [homemDeFerro, capitaoAmerica, viuvaNegra] = vingadores;
// console.log(homemDeFerro, capitaoAmerica, viuvaNegra);


const personagens = ['Tony Stark', ['Steve Rogers', 'Zé Carioca'], ['Mickey Mouse', 'Pateta']];

// const [homemDeFerro2, [capitaoAmerica2, zeCarioca], [mickey, pateta]] = personagens;


// console.log(mickey);


// USANDO A DESESTRUTURAÇÃO EM OBJETOS
const vingadores2 = {
    // propriedade : valor
    homemDeFerro: 'Tony Stark',
    capitaoAmerica: 'Steve Rogers',
    viuvaNegra: 'Natasha Romanoff',
};
// Desestruturar esse objeto e salvar o valor das propriedades em variaveis
// const {
//     homemDeFerro, // equivale a homemDeFerro: homemDeFerro
//     capitaoAmerica, // equivale a capitaoAmerica: capitaoAmerica
//     viuvaNegra, // equivale a capitaoAmerica: capitaoAmerica
// } = vingadores2

// console.log(homemDeFerro, capitaoAmerica, viuvaNegra);


// Desestruturar objetos aninhados (que contém outros objetos)
// OBJETO
const avengers = {
    // propriedade : valor
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

// DESESTRUTURAÇÃO
const {
    viuvaNegra: viuvaNegraNome,
    ironManCharacters: {
        casal: {
            ironMan: ironManNome,
            esposa: ironManEsposa,
        },
        parceiro: {
            warMachine: warMachineNome,
        }
    },
    capitaoCharacters: {
        cap: capitaoNome,
        parceiro: {
            falcao: falcaoNome
        }
    }
} = avengers

// Extraindo um valor específico aninhado no objeto
// let { ironManCharacters } = avengers

// console.log(ironManCharacters);

const ironManCharacters2 = {
    casal: {
        ironMan: 'Tony Stark',
        esposa: 'Pepper Potts',
    },
    parceiro: {
        warMachine: 'James Brodie'
    }
}

// let { casal: casal } = ironManCharacters

// console.log(casal)

const casal2 = {
    ironMan: 'Tony Stark',
    esposa: 'Pepper Potts',
}

let { esposa: esposa2 } = casal2;

const { ironManCharacters } = avengers;
// console.log(ironManCharacters);

const { ironManCharacters: { casal } } = avengers;
console.log(casal);
console.log(casal2);
console.log(esposa2);


const { ironManCharacters: { casal: { esposa } } } = avengers;


// console.log(esposa);

// let Pepper = avengers.ironManCharacters.casal.esposa;
// console.log(esposa);

// If ternário
// condição ? se for true : se for false
// Pepper ? console.log(Pepper + ' é a esposa') : console.log('Não é casado');


const ligaDaJustica = {
    batman: 'Bruce Wayne',
    superHomem: 'Clark Kent',
    mulherMaravilha: 'Diana'
};

// Desestruturando o objeto para uma variável individual nomeada
const {
    batman   // equivalente a 'batman: batman'
} = ligaDaJustica;

// batman = 'Bruce Wayne'

// console.log(batman)
