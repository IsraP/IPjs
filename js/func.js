{
    function message(){
        console.log("Hey!");
    }

    message();
}


{
    function soma(a=0, b=0){
        var soma = a + b;
        return soma;
    }

    var executar = function(func, p1, p2){
        return func(p1, p2);
    }

    console.log(executar(soma, 1, 3))
}


{

    let f = function fatorial(n){
        if (n<=1)
            return 1;
        return n*fatorial(n-1);
    }

    console.log(f(4));
}

{
    let soma = (a,b) => a+b;
    console.log(soma(3, 4));
}