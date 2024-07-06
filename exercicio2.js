// Variáveis globais
var produto = "PCGamer";
const codigoProduto = "A11B22C33";

// Função para definir categoria
function definirCategoria() {
    let categoria = "Eletrônicos";
    return categoria;
}

// Execução do programa
function DetalhesProduto() {
    // Chama a função para obter a categoria
    let categoria = definirCategoria();
    
    // Imprime os detalhes do produto na ordem correta
    console.log(produto);
    console.log(categoria);
    console.log(codigoProduto);
}

// Chama a função para executar o programa
DetalhesProduto();
