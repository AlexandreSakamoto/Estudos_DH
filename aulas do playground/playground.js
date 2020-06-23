


//Exercício: Passando um Callback recarregado
/*
function adicionarHttp(url){
    let urlCompleta = "http://" + url;
    //console.log(urlCompleta);
    
    return urlCompleta;
}
//adicionarHttp("www.google.com")

let array = [];
let resultado = 0;
function processar(array){
    for(let i=0; i < array.length; i++){
        resultado = adicionarHttp(array[i]);
        console.log(resultado);
    }return resultado;
}
processar(["www.google.com","www.uol.com.br","www.microsoft.com",]);
*/

function adicionarHttp(url){
    let urlCompleta = "http://" + url;
    //console.log(urlCompleta);
    return urlCompleta;
}
let novaArray = [];
//let resultado = 0;
function processar(array,adicionarHttp){
    array.pushadicionarHttp(arr)
    for(let i=0; i < array.length; i++){
        
        novaArray.push(adicionarHttp(array[i]))
        
    }console.log(novaArray);
    return novaArray;
}
processar(["www.google.com","www.uol.com.br","www.microsoft.com",],adicionarHttp("www.terra.com.br"));