function encriptarDados(dado, key){
    var encripted = CryptoJS.AES.encrypt(dado, key).toString();
    return encripted;
}

function decriptarDados(dado, key){
    var dadoBytes  = CryptoJS.AES.decrypt(dado, key);
    var dadoOriginal = dadoBytes.toString(CryptoJS.enc.Utf8);
    return dadoOriginal;
}

onload = () => {
    console.log(decriptarDados(encriptarDados('israel', "1234"), "1234"));
}