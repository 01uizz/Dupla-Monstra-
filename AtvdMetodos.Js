// Criando o array inicial
let frutas = ["maçã", "banana"];

console.log("Array inicial:", frutas);

// Adicionando um item no final com push
frutas.push("laranja");
console.log("Após push (adiciona 'laranja'):", frutas);

// Removendo o último item com pop
let ultimaFruta = frutas.pop();
console.log("Fruta removida com pop:", ultimaFruta);
console.log("Após pop:", frutas);

// Removendo o primeiro item com shift
let primeiraFruta = frutas.shift();
console.log("Fruta removida com shift:", primeiraFruta);
console.log("Após shift:", frutas);

// Adicionando um item no início com unshift
frutas.unshift("abacaxi");
console.log("Após unshift (adiciona 'abacaxi'):", frutas);

// Usando indexOf para encontrar a posição de 'banana'
let indiceBanana = frutas.indexOf("banana");
console.log("Índice de 'banana':", indiceBanana);

// Usando indexOf para tentar encontrar uma fruta que não existe
let indiceMelancia = frutas.indexOf("melancia");
console.log("Índice de 'melancia':", indiceMelancia); // Deve retornar -1

// Usando includes para verificar se 'banana' está no array
let temBanana = frutas.includes("banana");
console.log("O array contém 'banana'? ", temBanana);

// Usando includes para verificar se 'melancia' está no array
let temMelancia = frutas.includes("melancia");
console.log("O array contém 'melancia'? ", temMelancia);

// Usando slice para pegar uma parte do array (do índice 0 ao 1)
let frutasFatiadas = frutas.slice(0, 2);
console.log("Nova fatia do array (slice de 0 a 2):", frutasFatiadas);

// Verificando que o array original não foi modificado
console.log("Array original após slice:", frutas);

// Usando splice para remover 1 item a partir do índice 1
let frutasRemovidas = frutas.splice(1, 1); // remove 1 elemento no índice 1
console.log("Fruta removida com splice:", frutasRemovidas);
console.log("Array após splice (remoção):", frutas);

// Usando splice para adicionar um novo item no índice 1
frutas.splice(1, 0, "kiwi"); // não remove nada, apenas insere 'kiwi' na posição 1
console.log("Array após splice (adição de 'kiwi'):", frutas);

// Usando forEach para exibir cada fruta no array
console.log("Listando todas as frutas com forEach:");
frutas.forEach(function(fruta, index) {
  console.log(`Fruta ${index}: ${fruta}`);
});

// Usando map para criar um novo array com frutas em maiúsculas
let frutasMaiusculas = frutas.map(function(fruta) {
  return fruta.toUpperCase();
});

console.log("Novo array com frutas em maiúsculas (map):", frutasMaiusculas);

// Usando filter para criar um novo array com frutas cujo nome tem mais de 5 letras
let frutasLongas = frutas.filter(function(fruta) {
  return fruta.length > 5;
});
console.log("Frutas com nome maior que 5 letras (filter):", frutasLongas);

// Usando join para transformar o array em string, separando por vírgula e espaço
let frutasString = frutas.join(", ");
console.log("Array convertido em string com join:", frutasString);
