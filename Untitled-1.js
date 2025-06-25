let prompt = require('prompt-sync')(); 
let senha = prompt('digite a senha')
let opcao = parseFloat(prompt('Escolha a opção: \n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n'));

if (senha === 'senai123'){
  console.log('Tabuada do número: ', numero);


switch (opcao) {
  case 1: 
    // console.log('Escolha a tabuada: ', opcao);
    let numero = parseFloat(prompt('Escolha a tabuada: '));


   console.log("Tabuada Soma");
      for(let i = 1; i <= 10; i++) {
        console.log(numero + ' + ' + i + ' = ' + (numero + i));
    } 
        break;
    
    case 2:
    console.log("Tabuada Menos");
   for(let i = 1; i <= 10; i++) {
        console.log(numero + ' - ' + i + ' = ' + (numero - i));
    }
    break;

    case 3: 
    console.log("Opção Multiplicar");
    for(let i = 1; i <= 10; i++) {
        console.log(numero + ' * ' + i + ' = ' + (numero * i));
    }
    break;

    case 4: 
    console.log("Opção Divisão");
    for(let i = 1; i <= 10; i++) {
        console.log(numero + ' / '+ i + ' = ' + (numero / i).toFixed(2));
    }
    break;

}

}else {
  console.log('Senha incorreta');
}


