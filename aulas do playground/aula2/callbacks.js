/*
const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(10,20,(somar)));
*/ 
/*
const dobro = (numero) => numero*2;

const triplo = (numero) => numero*3;

const aplicar =(numero, dobro) => numero && dobro;
*/
/*
function dobro(numero){
    return numero*2;
}
function triplo(numero){
    return numero*3;
}

 function aplicar(numero,especial){
    especial(dobro(numero) || triplo(numero))
    console.log(numero,especial(numero));
    return especial(numero)
}
aplicar(50, dobro)
*/
/*
function somar(numeroA,numeroB){
   return numeroA + numeroB;
}
function subtrair(numeroA,numeroB){
    return numeroA - numeroB;
}
function multiplicar(numeroA,numeroB){
    return numeroA * numeroB;
}
function dividir(numeroA,numeroB){
    return numeroA / numeroB;
}
function calculadora(numeroA,numeroB,operacao){
    operacao(somar(numeroA,numeroB) || subtrair(numeroA,numeroB) || multiplicar(numeroA,numeroB) || dividir(numeroA,numeroB));
    console.log(numeroA, numeroB,operacao(numeroA,numeroB))
    return operacao(numeroA,numeroB);
}
calculadora(10,10,multiplicar);
*/
/*
function adicionarHttp(url){
    let urlCompleta = "http://" + url;
    //console.log(urlCompleta);
    return urlCompleta;
}
let arrayNova = [];
function processar(array){
    for(let i=0; i < array.length; i++){
        arrayNova.push(adicionarHttp(array[i]));
    }
    console.log(arrayNova);
    return arrayNova;
}
processar(["www.google.com","www.uol.com.br","www.microsoft.com",]);
*/
function adicionarHttp(url){
    let urlCompleta = "http://" + url;
    //console.log(urlCompleta);
    return urlCompleta;
}
function processar(array,incluir){
    incluir(adicionarHttp(array))
    console.log(array)
    
    return array;
}
processar("www.google.com","www.uol.com.br","www.microsoft.com",);