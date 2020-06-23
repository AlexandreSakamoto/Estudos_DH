/*
let oi="hello world";
console.log(oi);

function encontreUm5(numeros){
    var iArray = numeros.length
    var contador = 0
    do {
        if (numeros[contador] == 5){
            console.log("Encontramos um 5!")
            contador = iArray
        }
         else { console.log("numero do array é " + numeros[contador])
         }
         contador++
    } while (contador < iArray)
}
encontreUm5([3,4,2,1,6,5,4,4]);
*/
/*
let texto = "texto";
console.log(texto.length);
*/
/*
function substituicaoRapida(texto,texto2,texto3){
    console.log(texto.indexOf(texto2));
    console.log(texto.replace(texto2,texto3));
}
substituicaoRapida("Boa tarde","tarde","noite");
substituicaoRapida("Olá, usuário!","usuário","Ana");
*/
/*
let textoNovo = substituicaoRapida(texto,texto2,texto3){
console.log(textoNovo(texto.replace(texto2,texto3))) //'Boa noite'
}
textoNovo=('Boa tarde','tarde','noite');
*/
/*
function substituicaoRapida(texto,texto2,texto3){
    if(texto.indexOf(texto2) > 0){
    let textoNovo = texto.replace(texto2,texto3);
    //console.log(texto.indexOf(texto2));
    console.log(textoNovo);
    }
}
substituicaoRapida("Boa tarde","tarde","noite");

function menciona(texto,palavra){
    if(texto.indexOf(palavra) > 0){
    }return true
}
menciona("Boa tarde","tarde")
*/
let texto = "Olá, sou Carlos!";
let nomeUsuario = texto.slice(9,15);
console.log(nomeUsuario);