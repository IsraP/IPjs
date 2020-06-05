Funções_Requests: {
    function success () {
        console.log(`${get} ${this.status} ${this.statusText}`)
        var obj = JSON.parse(this.responseText)
        $(document).ready (() => {
            $("#tela").html(`<p>Nome: ${obj.name}</p><p>Localização: ${obj.location}</p>`)
        })
    }

    function error (err) {
        console.log("Erro: ", err);
    }
}

Requests: {
    var xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    get = "GET";
    xhr.open(get, "https://api.github.com/users/IsraP");
    xhr.send();
}


/*Bloco_Fetch: {
    fetch("https://api.github.com/users/IsraP")
        .then(res => res.json()) // Declara uma resposta que, após retornado, adquire o json de tal
        .then(data => console.log(data)) // O que foi retornado será chamado de data. É printado
        .catch(err => console.error("Erro: ", err)) // Se der ruim, ele printa no console o err, erro.
}*/