const http = require('http');

http.createServer(function(req,res){
    //console.log("Sevidor está rodando...");
    res.writeHead(200,{"Content-type":"text/plain"}) //metodo res três tipos de parametros são passadas como resposta a requisição (texto sem formatação, texto html, texto JASON)

        switch(req.url){
            case "/":
                res.end("Você está na página home!");
                break;
            case "/contato":
                res.end("Você está na pagina contato!");
                break;
            default:
                res.end("Voce está no nosso servidor!");
                break;
        }
        res.end("Meu primeiro servidor!")
        
}).listen(3030,'localhost');
