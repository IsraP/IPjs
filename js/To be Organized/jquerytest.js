Bloco_Onlaod: {
    $(document).ready( () => {

        $("a").click( (event) => {
            alert("CLICOU!");
            event.preventDefault();
        });

        $("#botao").click( () => {
            console.log('Olá!')
        })

        $('li.first').css("background-color", "#ffcccc");

        $("li:even").css("color", "Blue");

        $("[lang='en']").css("font-style", 'italic');

        $("#another").click( () => {
            let cont = parseInt($("span.cont").text());
            $("span.cont").html(++cont);
            if(cont > 0){
                $("#menos").prop("disabled", false);
            }
        })

        $("#menos").click( () => {
            let cont = parseInt($("span.cont").text());
            $("span.cont").html(--cont);
            if(cont == 0){
                $("#menos").prop("disabled", true);
            }
        })

        let cont = 1;
        $("#lista").click( () => {
            $("#itemlista").append(`<li>Item ${++cont}</li>`)
        })

        let img = $("<img />", {
            id: "foto",
            alt: "foto pic",
            src: "https://picsum.photos/200",
        })

        $("#pfoto").append(img);

        let para = $('<p></p>', {
            id: "p2",
            html: "second boi",
        })

        // attr é o valor original no document, enquanto prop é uma propiedade em determinado momento.

        $(".divisao").append(para);
    });
}
