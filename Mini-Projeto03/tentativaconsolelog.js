// tentativa com console.log


const resultado = FizzBuzz (15);
console.log (resultado);

function FizzBuzz (entrada){ 
    

    if (typeof entrada !== 'number') 
    console.log ('Não é um número')

    if (( entrada % 3 == 0) && (entrada % 5 == 0))
    console.log ('FizzBuzz');

    
    if ( entrada % 3 == 0)
    console.log ('Fizz');

    if (entrada % 5 == 0)
    console.log ('Buzz');
    
    else
    console.log (entrada);
}