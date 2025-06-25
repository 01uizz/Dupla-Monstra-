let prompt = require('prompt-sync')(); 
let numero = parseFloat(prompt('Escolha a tabuada: '));
let senha = prompt('digite a senha')

if (senha === 'senai123'){
  console.log('Escolha a tabuada: ', numero)

  console.log('\n Tabuada de Multiplicação')
 // Tabuada de multiplicação
  for(let i = 1; i <= 10; i++) {
        console.log(numero + ' * ' + i + ' = ' + (numero * i));
    }
   console.log('\n Tabuada de Divisão')

 // Tabuada de Divisão
    for(let i = 1; i <= 10; i++) {
        console.log(numero + ' / '+ i + ' = ' + (numero / i).toFixed(2));
    }
 console.log('\n Tabuada de soma')
  // Tabuada de soma
     for(let i = 1; i <= 10; i++) {
        console.log(numero + ' +' + i + ' = ' + (numero + i));
    }

     console.log('\n Tabuada de Menos')
  // Tabuada de menos
     for(let i = 1; i <= 10; i++) {
        console.log(numero + ' - ' + i + ' = ' + (numero - i));
    }
 
 } else console.log('escolha tabuada a ser realizada', numero)
  
             
     


