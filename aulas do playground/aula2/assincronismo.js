function alarme1(){
    return "Hora de acordar são 08:00";
}

function alarme2(){
    return "Está perto da sua hora de acordar são 07:50";
}
setTimeout(function(){
    console.log(alarme1())
}, 2000);

console.log(alarme2())