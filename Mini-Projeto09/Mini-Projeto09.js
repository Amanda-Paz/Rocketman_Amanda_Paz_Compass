Asteristicos (10);

function Asteristicos (linhas) {
    let padrao = '';
    for (let linha = 0; linha <= linhas; linha++){ 
    padrao += '*';   
    console.log (linha +'-'+ padrao);
    }
}