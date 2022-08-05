Radar (130);

function Radar (velocidade) { 
    const VelocidadeMaxima =70;
    const KmPorPonto = 5;

    

    if ( velocidade <= VelocidadeMaxima)
    console.log ( 'OK! Dentro dos Limites')

    else {
        const pontos = Math.floor (((velocidade - VelocidadeMaxima) / KmPorPonto));

        if ( pontos >= 12)
        console.log ('Sua carteira foi suspensa','você atingiu',pontos, 'pontos');

        else 
        console.log ( 'Sua velocidade era de:', velocidade,'KM' ,'Então serão descontados', pontos, 'pontos na carteira!')


    }
}   

//