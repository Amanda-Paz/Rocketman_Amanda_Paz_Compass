const array = [80, 80, 70];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let soma = 0;
    for ( let nota of notas) {
        soma += nota;
    }
    const media = soma/(notas.length);
    
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}