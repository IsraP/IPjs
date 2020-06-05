{
    // Tipo numérico 
    var num = 3;
    var numero = 3.14;
    // tem float nem nada nao, é só numero 

    // tipo numerico gigantesco 
    var numerooo = 100000000000000000000000000000000000000000000;
    // ele é grande. 

    // Tipo String
    var string1 = 'oi';
    var string2 = "oie";
    var string3 = `<div>
                    <h1>HEY</h1>
                    </div>
                    `
    /*
    As 2 primeras sao normaizonas

    A format string é uma string diferente que permite a quebra de linha e a incoporação de variaveis e strings
    em seu conteudo usando o $
    */

    var format = `${string1}, 
    tudo bem?`;
    console.log(format);
    console.log(`${num} + ${numero} = ${num + numero}`);


    // Tipo logico
    var verdadeiro = true;
    var falso = false;
    var verdade = numerooo>1;

    console.log(verdade);

    // Outros

    var nulo = null; // apaga um valor
    var nada; // undefined, tem nada

}

{
    // testando tipos

    console.log(typeof string1);
}