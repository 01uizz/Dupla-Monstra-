// Calculadora de operações aritméticas básicas

// Exemplo de uso:
// 1 - somar
// 2 - subtrair
// 3 - multiplicar
// 4 - dividir

let prompt = require('prompt-sync')(); // variável prompt

console.log('=== Calculadora Simples ==='); // títulos e opções
console.log('(1) - somar');
console.log('(2) - subtrair');
console.log('(3) - multiplicar');
console.log('(4) - dividir');

let operacao = parseFloat(prompt('\nEscolha a operação: '));  // variável operação
let numero1 = parseFloat(prompt('Digite o primeiro número: '));  // variável número1
let numero2 = parseFloat(prompt('Digite o segundo número: '));  // variável número2
let resultado;  // variável para guardar o resultado



if (operacao === 1) {
    resultado = numero1 + numero2;
    console.log('o resultado da soma eh:' , resultado);
}
else if (operacao === 2) {
    resultado = numero1 - numero2;
    console.log('o resultado da subtração eh:' , resultado);
}
else if (operacao === 3) {

    if (numero2 === 0)
        console.log("Toda divisão por 0 eh = 1")
    else{
    resultado = numero1 * numero2;
    console.log('o resultado da multiplicação eh:' , resultado);
}}
else if (operacao === 4) {


    if (numero2 === 0){
         console.log('A divisão não pode ser feita');
    }
    
    else {   
       resultado = numero1 / numero2;
    console.log('o resultado da divisão eh:' , resultado);
}
}
else {
    console.log('Operação invalida');


}





 