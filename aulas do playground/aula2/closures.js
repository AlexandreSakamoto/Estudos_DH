function saudacao(nome){
    let menssagem = "Olá seja bem vindo";

    function juntarNome(){
        return menssagem + ' ' + nome;   
    }
    return juntarNome();
}
console.log(saudacao("Vinicius"));