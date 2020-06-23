 let pessoa = {
     nome: "Alexandre",
     idade: 21,
     altura: 1.80
 }

 let listaCompras = ["pão","presunto","queijo"]

 let json = JSON.stringify(listaCompras);

  //console.log(json);
 
 let objetoDeNovo = JSON.parse(json);

 console.log(objetoDeNovo);

 