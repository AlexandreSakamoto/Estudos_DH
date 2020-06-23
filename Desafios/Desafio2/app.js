/**
 * Enunciado
 * Escreva um servidor nodeJs que tenha quatro rotas:
 *  1) Retorna todos os usuários que definiram uma senha
 *  2) Retorne todos os usuários que gostaram do filme Ghost in the Shell
 *  3) Retorne todos os usuários que deram 5 estrelas nos filmes Alita e Vingadores: Ultimato
 *  4) Retorne todos os usuários que gostaram de todos os filmes e deram mais de 4 estrelas em todos os filmes
 * 
 * As informações que devem ser retornadas do usuário são: nome e email.
 */

var usuarios = require('./usuarios');
//console.log(usuarios);

const { resolve } = require('url');
let http = require('http').createServer(server);
let porta = 3030;

function server(req,res){
    //console.log("Sevidor está rodando...");
    res.writeHead(200,{"Content-type":"text/plain; charset=utf-8"}) //metodo res três tipos de parametros são passadas como resposta a requisição (texto sem formatação, texto html, texto JASON)

        switch(req.url){
            case "/":
                res.end("Você está na página home!");
                break;
            case "/contato":
                res.end("Você está na pagina contato!");
                break;
            case "/temSenha":
                comSenha(res)
                res.end("Usuários com Senha");
                break;
            default:
                res.end("Voce está no nosso servidor!");
                break;
        }
    res.end("Meu primeiro servidor!")
}    


function comSenha(res){ 
    for(i=0;i<usuarios.length;i++){
    let usuario = usuarios[i];
    res.write(usuarios[0].nome);
    console.log(usuarios[0].nome);
    
    
    //     if(usuario.senha != null) {
    //           response.write('<p>Usuário: ' + usuario.nome + ' | Email: ' + usuario.email + "</p>" +console.log(usuario.nome))
    //}

// function comSenha(res){
//     for(i=0;i<usuarios.length;i++)
//         console.log(usuarios.nome);
}


http.listen(3030,'localhost');