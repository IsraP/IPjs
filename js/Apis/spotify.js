Funções_Requests: {
    function success() {
        var obj = JSON.parse(this.responseText)
        console.log(obj);
        if (obj.error){
            console.log("fudeu.")
        }
        else{
            shr.open("GET", "https://api.spotify.com/v1/playlists/5NzCS5Myp5HZlwRvuA6ciG");
            shr.send();
        }
        
        //$(document).ready (() => {
        //  $("#tela").html(`<p>Nome: ${}</p><p>Localização: ${}</p>`)
        //})
    }

    function error(err) {
        console.log("Erro: ", err);
    }

    function sok() {
        console.log("Okay!");
        var pl = JSON.parse(this.responseText);
        console.log(pl);
    }
}

Requests: {
    var xhr = new XMLHttpRequest();
    var shr = new XMLHttpRequest()
    xhr.onload = success;
    shr.onload = sok;
    xhr.onerror = error;
    shr.onerror = error;
    //xhr.open("GET", "https://accounts.spotify.com/authorize?client_id=67b2e26049524b538a98b02f66af958e&response_type=code&redirect_uri=http://127.0.0.1:5500/html/Apis/spotify.html");
    //xhr.send();
}


/*Bloco_Fetch: {
    fetch("https://api.github.com/users/IsraP")
        .then(res => res.json()) // Declara uma resposta que, após retornado, adquire o json de tal
        .then(data => console.log(data)) // O que foi retornado será chamado de data. É printado
        .catch(err => console.error("Erro: ", err)) // Se der ruim, ele printa no console o err, erro.
}*/