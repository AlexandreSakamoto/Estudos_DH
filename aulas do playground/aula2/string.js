//lenght

let texto = "Oi eu sou o Alexandre"
console.log(texto.length);

//indexOf
console.log(texto.indexOf("Alexandre"));

//slice

let palavra = texto.slice(0,3);
console.log(palavra);

//função trim remove espaços do inicio ou do final (não remove no meio do texto)

console.log(texto.trim());

//split

console.log(texto.split(" "));

//replace

console.log(texto.replace("Alexandre","João"))

let textoNovo = texto

function dominio(url){
    console.log("http://" + url)
}
dominio("teste");