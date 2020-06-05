Criando_Vetores: {
    var carros = [`Ford`, `Aston Martin`, `Ferrari`];
    var vazio = new Array();

}

Atribuição: {
    carros[3] = `Audi`;
}

Função_do_Print: {
    function printcarros(list){
        for(var contador = 0; contador < list.length; contador++)
            console.log(`O ${contador+1}o carro é da marca ${list[contador]}`);
        return carros;
    }
}

Métodos: {
    carros.push(`Lamborghini`);
    carros.unshift(`Toyota`);
    carros.sort();
    carros.push(`banana`);
    carros.pop(); // popa o ultimo item. Da pra printar q nem em python
    carros.unshift(`laranja`);
    carros.shift(); // tira o primeiro cidadao do vetor
}



Executando_Prints: {
    console.log(carros[2]);
    console.log(printcarros(carros));

}