import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

// SOMA // 
describe ('Testes de soma', () => {

    it ('Deve somar 4 e 5 resultando em 9', () => {

       let  resultado = Calculadora.soma(4,5)

       expect(resultado).to.be.eq(9)
  
})  
 
it ('Deve somar -4 e 5 resultando em 1', () => {

    let  resultado = Calculadora.soma(-4,5)

    expect(resultado).to.be.eq(1)

})  

it ('Deve somar -4 e -5 resultando em 9', () => {

    let  resultado = Calculadora.soma(-4,-5)

    expect(resultado).to.be.eq(-9)

})  

it ('Deve somar 30 e 25 resultando em 55 (ERRO)', () => {

    let  resultado = Calculadora.soma(30,25)

    expect(resultado).to.be.eq(55).and.to.be.a ('string')
               // com erro
}) 

it  ('Deve somar 30 e 25 resultando em 55', () => {

    let  resultado = Calculadora.soma(30,25)

    expect(resultado).to.be.eq(55).and.to.be.a ('number')
               
}) 

})


// SUBTRAÇÃO// 

describe ('Testes de subtração', () => {

    it ('Deve subtrair 5 de 4 resultando em -1', () => {

       let  resultado = Calculadora.sub(4,5)

       expect(resultado).to.be.eq(-1)
  
})  

it ('Deve subtrair 0 de 5 resultando em 5 (ERRO)', () => {

    let  resultado = Calculadora.sub(0,5)
             
    expect(resultado).to.be.eq(5).and.to.be.a('string')

})  

it ('Deve subtrair 10 de 100 resultando em 90', () => {

    let  resultado = Calculadora.sub(100,10)
            
    expect(resultado).to.be.eq(90).and.to.be.a('number')

})  
it  ('Deve subtrair 25 de 20 resultando em -25', () => {

    let  resultado = Calculadora.sub(20,25)
            
    expect(resultado).to.be.eq(-5).and.to.be.a('number')

})

it ('Deve subtrair 1500 de 2000 resultando em 500', () => {

    let  resultado = Calculadora.sub(2000,1500)
            
    expect(resultado).to.be.eq(500)


})
})

// DIVISÃO //

describe ('Testes de divisão ', () => {

    it ('Deve dividir 4 por 2 resultando em 2', () => {

       let  resultado = Calculadora.div(4, 2)

       expect(resultado).to.be.eq(2)
    })  

    it ('Deve dividir 16 por 2 resultando em 8', () => {

        let  resultado = Calculadora.div(16,2)
 
        expect(resultado).to.be.eq(8)


})

it ('Deve dividir 30 por 5 resultando em 6', () => {

    let  resultado = Calculadora.div(30,5)

    expect(resultado).to.be.eq(6).and.not.be.a('string')


})

it ('Deve dividir 30 por 5 resultando em 6 (ERRO)', () => {

    let  resultado = Calculadora.div(30,5)

    expect(resultado).to.be.eq(6).and.not.be.a('number')


})

it ('Deve dividir 27 por 9 resultando em 3', () => {

    let  resultado = Calculadora.div(27,9)

    expect(resultado).to.be.eq(3)

})

})

// MULTIPLIÇÃO //

describe ('Testes de multiplicação ', () => {

    it  ('Deve multiplicar 2 e 4 resultando em 8', () => {

       let  resultado = Calculadora.mult(2,4)

       expect(resultado).to.be.eq(8)
    })  

    it  ('Deve multiplicar 9 e 3 resultando em 27', () => {

        let  resultado = Calculadora.mult(9,3)
 
        expect(resultado).to.be.eq(27)
     })  

     it  ('Deve multiplicar 9 e 9 resultando em 81', () => {

        let  resultado = Calculadora.mult(9,9)
 
        expect(resultado).to.be.eq(81)
     })      
     
     it  ('Deve multiplicar 5 e 5 resultando em 25 (ERRO)', () => {

        let  resultado = Calculadora.mult(5,5)
 
        expect(resultado).to.be.eq(24)
     })  

     it ('Deve multiplicar 5 e 0 resultando em 0', () => {

        let  resultado = Calculadora.mult(5,0)
 
        expect(resultado).to.be.eq(0)
     }) 



})


// RAIZ QUADRADA //

describe ('Testes de Raiz Quadrada ', () => {

    it ('Deve encontrar a raiz quadrada de 9 que é 3', () => {

       let  resultado = Calculadora.raiz(9)

       expect(resultado).to.be.eq(3)
    })  

    it ('Deve encontrar a raiz quadrada de 64 que é 8', () => {

        let  resultado = Calculadora.raiz(64)
 
        expect(resultado).to.be.eq(8)
     })  

     it ('Deve encontrar a raiz quadrada de 196 que é 14', () => {

        let  resultado = Calculadora.raiz(196)
 
        expect(resultado).to.be.eq(14)
     })  

     it ('Deve encontrar a raiz quadrada de 676 que é 26', () => {

        let  resultado = Calculadora.raiz(676)
 
        expect(resultado).to.be.eq(26)
     })  

     it ('Deve encontrar a raiz quadrada de 729 que é 2 (ERRO)', () => {

        let  resultado = Calculadora.raiz(729)
 
        expect(resultado).to.be.eq(2)
     })  




})


 // NUMERO X AO QUADRADO //

 describe ('Testes de um numero x ao quadrado ', () => {

    it ('Deve mostrar o valor de 3 ao quadrado que é 9', () => {

       let  resultado = Calculadora.quad(3)

       expect(resultado).to.be.eq(9)
    })  

    it ('Deve mostrar o valor de 8 ao quadrado que é 64', () => {

        let  resultado = Calculadora.quad(8)
 
        expect(resultado).to.be.eq(64)
     })  

     it  ('Deve mostrar o valor de 4 ao quadrado que é 16', () => {

        let  resultado = Calculadora.quad(4)
 
        expect(resultado).to.be.eq(16)
     })   
     
     it ('Deve mostrar o valor de 10 ao quadrado que é 100', () => {

        let  resultado = Calculadora.quad(10)
 
        expect(resultado).to.be.eq(100)
     })  

     it ('Deve mostrar o valor de 10 ao quadrado que é 99(ERRO)', () => {

        let  resultado = Calculadora.quad(10)
 
        expect(resultado).to.be.eq(99)
     })  


})

 // PORCENTAMGEM //

 describe ('Testes de porcentagem ', () => {

    it  ('Deve mostrar 50 % de 100', () => {

       let  resultado = Calculadora.por(100, 50)

       expect(resultado).to.be.eq(50)
    })  
    
    it ('Deve mostrar 5 % de 25', () => {

        let  resultado = Calculadora.por(25,5)
 
        expect(resultado).to.be.eq(1.25)
     })  

     it  ('Deve mostrar 30 % de 150', () => {

        let  resultado = Calculadora.por(150, 30)
 
        expect(resultado).to.be.eq(45)
     })  

     it  ('Deve mostrar 10 % de 30', () => {

        let  resultado = Calculadora.por(30, 10)
 
        expect(resultado).to.be.eq(3)
     })  

     it ('Deve mostrar 50 % de 100 (ERRO)', () => {

        let  resultado = Calculadora.por(100, 50)
 
        expect(resultado).to.be.eq(15)
     })  


})


//