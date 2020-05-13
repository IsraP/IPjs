Criando_Blueprints: {
    function player(nome, numero, posicao){
        this.nome = nome;
        this.numero = numero;
        this.posicao = posicao;
    }
}

Criando_Diciobjetos: {
    var KD = {
        nome: `Kevin Durant`,
        numero: 7,
        posicao: `Small Forward`,
    }

    var Bron = new player(`Lebron`, 23, `Small Forward`);
}

print: {
    function print(item){
        return console.log(item);
    }
}

Métodos: {
    keys = Object.keys(KD); // me da minhas key
    values = Object.values(KD); // me da meus valores
}

Pythonzando: {
    for(key in KD) // quase igualzinho a python q bunito
        print(key);
}

Printando: {
    print(KD.nome);
    print(KD[`posicao`]);
    print(Bron);
}