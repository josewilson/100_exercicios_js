// Variáveis globais
var nome = "Jose";
const cpf = "123.123.123-12";

// Função para definir sobrenome
function Sobrenome() {
    let sobreNome = "Souza";
    return sobreNome;
}

// Execução do programa
function imprimirDados() {
    // Chama a função para obter o sobrenome
    let sobrenome = Sobrenome();
    
    // Imprime o nome completo na ordem correta
    console.log(nome + " " + sobrenome + " " + cpf);
    
    // Imprime uma mensagem concatenando os valores
    console.log("Nome completo: " + nome + " " + sobrenome + ", CPF: " + cpf);
}

// Chama a função para executar o programa
imprimirDados();
