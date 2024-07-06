// Variáveis globais
var nomeAluno = "Jose Wilson";
const matricula = "2023133500002";

// Função para definir o curso
function definirCurso() {
    let curso = "Especialização em Desenvolvimento Backend Jr";
    return curso;
}

// Função para obter as informações do aluno
function obterInformacoesAluno() {
    // Chama a função para obter o curso
    let curso = definirCurso();
    
    // Concatena todas as informações do aluno em uma única linha usando template literals
    return `Nome: ${nomeAluno}, Curso: ${curso}, Matrícula: ${matricula}`;
}

// Execução do programa
console.log(obterInformacoesAluno());
