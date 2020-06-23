
// if ternario, não usa palavras reservadas e só testa duas condições. se escreve de uma forma horizontal
let dia = "quinta";

let resultado = dia == "domingo"? "Vou a praia" : "Fico em casa";

//console.log(resultado);

// switch testa a coisa toda
switch(dia){
    case "segunda":
        console.log("Vou tomar café");
        break
    case "quarta":
        console.log("Vou no cinema");
        break
    case "sexta":
        console.log("Vixe, vou fazer lasanha!!")
        break
        default:
            console.log("Não vou fazer nada")
}