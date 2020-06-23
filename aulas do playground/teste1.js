function dobro(numero){
    return numero*2;
}
function triplo(numero){
    return numero*3;
 }
 function aplicar(numero,especial){
    especial(dobro(numero) || triplo(numero))
    return(especial(numero));
 }
console.log(aplicar)
aplicar(2,dobro(2))