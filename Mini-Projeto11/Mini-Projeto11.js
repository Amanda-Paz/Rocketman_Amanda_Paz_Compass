let endereço ={
    Rua : 'Rua dos bobos',
    Cidade : 'Cidade numero 0',
    CEP: 09869-000
};
function ExibirEndereço (endereço){
  for ( let chave in endereço)
  console.log (chave, endereço [chave]);
}

ExibirEndereço(endereço);
