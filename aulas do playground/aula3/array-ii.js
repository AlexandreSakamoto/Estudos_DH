
let numerosPares = [2,4,6,8,10];
//map
let numerosParesDobro = numerosPares.map(function(valor){
    return valor*2;
})
console.log(numerosParesDobro);

//filter

let numerosFiltrados = numerosPares.filter(function(valor){
    return valor > 10;
})
console.log(numerosFiltrados);

//reduce só funciona no array

let somaPares = numerosPares.reduce(function(acum, valor){
    return acum + valor;
})

console.log(somaPares);

//foreach

numerosPares.forEach(function(valor, indice){
    console.log("O indice " + indice + " tem o valor: " + valor);
    
})
