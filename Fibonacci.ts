function Fibonacci(Num : number) : number {
    var a = 0, b = 1;
    console.log(a)
    console.log(b)
    var nextTerm;
    for(var i = 2; i < num; i++){
        nextTerm = a + b;
        a = b;
        b = nextTerm;
        
        console.log(nextTerm)
    }

    return 0;
}

Fibonacci(21)