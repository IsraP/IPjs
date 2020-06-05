Funções_Requests: {
    function success () {
        console.log(`${get} ${this.status} ${this.statusText}`)
        var obj = JSON.parse(this.responseText)
        console.log(obj)
        $(document).ready (() => {
            let size = 0;
            objVal = Object.values(obj);
            for (key in obj){
             document.getElementById("tela").innerHTML += `<p>${key}: ${objVal[size]}</p>`
             size++;
            }
            
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
    xhr.open(get, "https://api.themoviedb.org/3/movie/550?api_key=fe23f99db504791ccc8d4b685f994f1c");
    xhr.send();
}


/*Bloco_Fetch: {
    fetch("https://api.github.com/users/IsraP")
        .then(res => res.json()) // Declara uma resposta que, após retornado, adquire o json de tal
        .then(data => console.log(data)) // O que foi retornado será chamado de data. É printado
        .catch(err => console.error("Erro: ", err)) // Se der ruim, ele printa no console o err, erro.
}*/