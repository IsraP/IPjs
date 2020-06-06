Função_Botao: {
    btnPesquisa.onclick = () => {
        const Key = "8e6ca302e24947d1be592b5fbfe2295d"
        let query = pesquisa.value
        let requestShow = new XMLHttpRequest;

        requestShow.onload = showNews;
        requestShow.open("GET", `https://newsapi.org/v2/everything?q=${query}&apiKey=${Key}`)
        requestShow.send();
    }
}

Função_Formatar_Datas: {
    function dateFormat(date) {
        let ano = date.slice(0, 4);
        let mes = date.slice(5, 7);
        let dia = date.slice(8, 10);
        return `${dia}/${mes}/${ano}`;
    }
}

Função_Mostrar_Noticias: {
    function showNews() {
        console.log(JSON.parse(this.response))
        let divTela = document.getElementById("newsContainer");
        let textoAdd = "";

        // Montando texto html das noticias
        let dados = JSON.parse(this.responseText);
        for (i = 0; i < dados.articles.length; i++) {
            textoAdd += `<div class="boxNoticia">
            <img src="${dados.articles[i].urlToImage}" alt="img${i}">
            <span class="titulo">${dados.articles[i].title}</span><br>
            <span class="credits">${dateFormat(dados.articles[i].publishedAt)} - ${dados.articles[i].source.name} - ${dados.articles[i].author}</span><br>
            <span class="text">
                ${dados.articles[i].description}(...)<br><a href="${dados.articles[i].url}">
                    Leia mais (...)
                </a>
            </span>
        </div>`
        }

        document.getElementById("newsContainer").innerHTML = textoAdd

        // Preencher a div com o texto html


    }
}

