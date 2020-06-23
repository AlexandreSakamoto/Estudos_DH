function substituicaoRapida(texto,palavra,substituta){
    if(texto.indexOf(palavra) > 0){

    let textoNovo = texto.replace(palavra,substituta);
    console.log(textoNovo);
}
}
substituicaoRapida("Boa tarde","tarde","noite");
substituicaoRapida("Olá, usuário!","usuário","Ana");