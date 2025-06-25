let = require('prompt-sync')();

let opcao = parseFloat(prompt('Digite uma opção de 1 a 4: '));
let usernumero = parseFloat(prompt('Escolha a tabuada: '));

switch (opcao) {
  case 1: 
    console.log("Opção Somar");
    for (let i = 1; i <= 10; i++) {
      console.log(usernumero + ' + ' + i + ' = ' + (usernumero + i));
    }
    break;

  case 2: 
    console.log("Opção Subtrair");
    for (let i = 1; i <= 10; i++) {
      console.log(usernumero + ' - ' + i + ' = ' + (usernumero - i));
    }
    break;

  case 3: 
    console.log("Opção Multiplicar");
    for (let i = 1; i <= 10; i++) {
      console.log(usernumero + ' * ' + i + ' = ' + (usernumero * i));
    }
    break;

  case 4: 
    console.log("Opção Divisão");
    for (let i = 1; i <= 10; i++) {
      console.log(usernumero + ' / ' + i + ' = ' + (usernumero / i));
    }
    break;

  default:
    console.log("Opção inválida. Digite um número de 1 a 4."); }

    
    