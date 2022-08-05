const resultado = FizzBuzz (15);
console.log (resultado);

function FizzBuzz (entrada){ 
    

    if (typeof entrada !== 'number') 
    return 'Não é um numero'

    if (( entrada % 3 == 0) && (entrada % 5 == 0))
    return 'FizzBuzz';

    
    if ( entrada % 3 == 0)
    return 'Fizz'

    if (entrada % 5 == 0)
    return 'Buzz';
    
    else
    return entrada;
}