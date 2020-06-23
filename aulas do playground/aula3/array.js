let pessoa = ["Alexandre",1.81,"Alexandre"];

console.log(pessoa);

//push par ainserir elementos no final
    pessoa.push(41);
    console.log(pessoa);
//pop para retirar
    // let excluido = pessoa.pop();
    // console.log(excluido); 
//unshit para inserir elmentos no inicio de uma array
    pessoa.unshift(41);
    console.log(pessoa);
//shift para retirar
    pessoa.shift();
    console.log(pessoa);
//indexOf para perguntar o índice de ocorrência de um elemento
    console.log(pessoa.indexOf(1.81));
//lastIndesOf para perguntar o índice de ocorrência de um elemento
    console.log(pessoa.lastIndexOf("Alexandre"));
    console.log(pessoa);
//join par aunir todos os elementos presentes em um array
    console.log(pessoa.join("-"));