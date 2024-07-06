//Declaração do objeto aluno
const aluno = {
    nome: "Jose Wilson",
    cpf: "123.123.123-12",
    cidade: "João Pessoa",
    notas: [7.5, 8.2, 6.9, 9.1]
};

//Impressão das propriedades do objeto aluno
console.log(`Nome: ${aluno.nome}`);
console.log(`CPF: ${aluno.cpf}`);
console.log(`Cidade: ${aluno.cidade}`);

// Impressão de cada uma das notas do array notas
aluno.notas.forEach((nota, index) => {
    console.log(`Nota ${index + 1}: ${nota}`);
});

// Cálculo da média das notas
const somaNotas = aluno.notas.reduce((abc, nota) => abc + nota, 0);
const mediaNotas = somaNotas / aluno.notas.length;
console.log(`Média das notas: ${mediaNotas.toFixed(2)}`);

// Sorteio de uma das nota e conversão para a escala de 0-100
const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
const notaConvertida = notaAleatoria * 10;
console.log(`Nota sorteada aleatóriamente: ${notaAleatoria}`);
console.log(`Nota convertida para a escala de 0-100: ${notaConvertida}`);