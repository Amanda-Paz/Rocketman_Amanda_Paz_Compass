const filme = {
    Titulo: ' - Tá chovendo Hamburguer',
    Ano : - 2009,
    Diretor: '- Phill Lord e Chris Miller',
    Personagem: '- Flint Lockwood'
}
Propriedades(filme);
function Propriedades (obj){
    for (prop in obj)
    if (typeof obj[prop] === 'string')
    console.log (prop, obj [prop])

}