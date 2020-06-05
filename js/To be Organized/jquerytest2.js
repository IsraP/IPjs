Bloco_Onload: {
    $(document).ready(() => {

        Bloco_ToggleClass: {
            $("#btnred").click(() => {
                $("#pred").toggleClass('red');
            })
        }

        Bloco_Filtro: {
            // Selecionando os com classe list, que são filhos pares
            $(".list").even().addClass("marked")
            // Selecionando os com classe list, filhos pares, com i
            $(".list").even().has('i').addClass("marked2")
            // Usando filter
            $(".list").filter('.marcar:even').addClass('marked3')
            $(".list").filter(function () {
                return $(this).hasClass("mark");
            }).addClass("marked4");

            let lista = $(".list")
            .add('#title')
            .map(function () {
                return $(this).attr('id');
            })

            console.log(lista);

            let VetorLista = lista.get();

            console.log(VetorLista);
        }






    })
}