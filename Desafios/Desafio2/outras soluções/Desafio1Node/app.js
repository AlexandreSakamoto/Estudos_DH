/** Resolvido pelo professor 12/06/2020
 * Enunciado 
 * Escreva um servidor nodeJs que tenha quatro rotas:
 *  1) Retorna todos os usuários que definiram uma senha
 *  2) Retorne todos os usuários que gostaram do filme Ghost in the Shell
 *  3) Retorne todos os usuários que deram 5 estrelas nos filmes Alita e Vingadores: Ultimato
 *  4) Retorne todos os usuários que gostaram de todos os filmes e deram mais de 4 estrelas em todos os filmes
 * 
 * As informações que devem ser retornadas do usuário são: nome e email.
 */

let usuarios = require('./usuarios')
let http = require('http').createServer(server)
const port = 4000
function server(request, response) {
    let url = request.url
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if(url == '/com-senha') {
        response.writeHead(200)
        comSenha(response)
        response.end()
    }

    if(url == '/gostaram-ghost')  {
        response.writeHead(200)
        gostaramGhostInTheshell(response)
        response.end()

    }

}



function comSenha(response) {
    usuarios.forEach(usuario => {
        if(usuario.senha != null) {
            response.write('<p>Usuário: ' + usuario.nome + ' | Email: ' + usuario.email + "</p>" +console.log(usuario.nome))
        }
    })
}

// Retorne todos os usuários que gostaram do filme Ghost in the Shell
function gostaramGhostInTheshell(response) {
    usuarios.forEach(usuario => {
        usuario.filmes.forEach(filme => {
            if(filme.nome == "Ghost in the Shell" && filme.gostou) {
            response.write('<p>Usuário: ' + usuario.nome + ' | Email: ' + usuario.email + " (tem bom gosto)</p>")

            }
        })
    })
}
// Retorne todos os usuários que deram 5 estrelas nos filmes Alita e Vingadores: Ultimato
function cincoEstrelasAlitaEVingadores(response) {
    usuarios.forEach(usuario => {
        usuario.filmes.forEach(filme => {
            if((filme.nome == 'Alita' && filme.estrelas == 5) || (filme.nome == 'Vingadores: Ultimato' && filme.estrelas == 5)) {
                response.write('<p> Usuário: ' + usuario.nome + ' | E-mail: ' + usuario.email + ' | Filme: ' + filme.nome)
            }
        })
    })
}

// Retorne todos os usuários que gostaram de todos os filmes e deram mais de 4 estrelas em todos os filmes
function maisDeQuatroEstrelas(response) {
    usuarios.forEach(usuario => {
        let todosOsFillmesSaoCincoEntrelas = true
        usuario.filmes.forEach(filme => {
            if(filme.estrelas < 5) {
                todosOsFillmesSaoCincoEntrelas = false
            }
        })
        if(todosOsFillmesSaoCincoEntrelas) {
            // 
        }
    })
}

http.listen(port, () => console.log('Server online! Port: ' + port))















