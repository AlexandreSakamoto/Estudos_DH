/**
 * Desafio
 * Implementar as seguintes funções:
 *  - Mostrar no terminal (console.log) todos os usuários (informar o nome e e-mail) que são menores de idade
 *  - Mostrar no terminal (console.log) todos os usuários (informar o nome e e-mail) que possuem maior de 60 anos
 *  - Mostrar no terminal (console.log) todos os usuários (informar o nome, e-mai e o produto) que possuem produtos que ainda estão na garantia
 *  - Mostrar no terminal (console.log) todos os usuários (informar o nome, e-mai e o produto) que possuem produtos que não estão mais na garantia
 *  - Mostrar no terminal (console.log)(informar o nome, e-mai e o total) o valor total que cada usuário gastou na nossa loja 
 */
let usuarios = [
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
            },
            {
                nome: 'Celular Y',
                marca: 'Aquela Outra Lá',
                valor: 858.99,
                data_de_compra: '2020/05/17',
                tempo_de_validade_em_meses: 6,
            }
        ]
    },
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
            },
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

function dentroDaGarantia(usuarios) {
    usuarios.forEach(usuario => {
        usuario.compras.forEach(compra => {
            let dataDeCompra = new Date(compra.data_de_compra)
            let dataDeValidade = new Date(compra.data_de_compra)
            dataDeValidade.setMonth(dataDeValidade.getMonth() + compra.tempo_de_validade_em_meses)
            let dataAtual = new Date()
            if(dataDeValidade.getTime() > dataAtual.getTime()) {
                console.log('[Dentro-Validade]Nome: ' + usuario.nome + ' | Email: ' + usuario.email + ' | Produto: ' + compra.nome + ' | Data de Compra: ' + dataDeCompra.toLocaleDateString())
            } else {
                console.log('[Fora-Validade]Nome: ' + usuario.nome + ' | Email: ' + usuario.email + ' | Produto: ' + compra.nome + ' | Data de Compra: ' + dataDeCompra.toLocaleDateString())
            }
        })
    })
}

function totalGasto(usuarios) {
    usuarios.forEach(usuario => {
        let total = 0;
        usuario.compras.forEach(compra => {
            total += compra.valor
        })
        console.log(total)
    })
}

totalGasto(usuarios)