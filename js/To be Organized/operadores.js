{
    var a; 
    var b;
    a = a++ * 8; // Multiplica primeiro, soma depois.
    b = ++b * 8; // Soma primeiro, multiplica depois.
}

{
    c = +`${a}`; // Transforma string em numerico

    console.log("7" + 4); // isso aqui concatena
    console.log(+"7" + 4); // isso aqui soma
    console.log("8" + "2"); // concatena
    console.log("8" / "2"); // divide
}