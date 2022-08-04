// SOMA
export default class Calculadora {

    static soma (a,b){

        return a + b
    }
    // SUBTRAÇÃO

    static sub (a,b){
        return a - b
    }

    //DIVISÃO

    static div (a,b){

        return a / b
    }

    
 
   // MULTIPLICAÇÃO

    static mult (a,b){

        return a * b
    }

      // RAIZ QUADRADA

    static raiz (a) {

        return Math.sqrt(a) 
         // retirado de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
    }

    // NUMERO AO QUADRADO 

     static quad (a) {
        return a * a
     }

     // PORCENTAGEM

     static  por (a,b) {

        return (a/100) * b
     }
      // fiz com a ajuda do Renan.

}

       //