Bloco_Ready: {
    $(document).ready( () => {


        $("#imagens > img").click(function (event) {
            $("#imagens > img").removeClass("selecionada");
            $(this).addClass("selecionada");
            console.log(event.target.id)
        })








    })

}