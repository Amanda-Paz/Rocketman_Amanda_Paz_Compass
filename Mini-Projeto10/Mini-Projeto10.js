// ex (10 e 11)

numerosP (15);

function numerosP (limite){
   
for ( let i = 2; i <= limite; i++){
    let Primo = true; 
    for (let divisor =2; divisor < i; divisor++){

    if (i % divisor ===0){
        Primo= false;
        break;
    }
}
 if (Primo) console.log (i + '- É primo');
}

}
