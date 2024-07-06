//Definição da função
function objetidoDoCurso(tecnologia) {
    return "Meu objetivo é estudar: " + tecnologia;
}

//Criando e imprimindo a constante
const tecnologia = "JavaScript"
console.log(objetidoDoCurso(tecnologia));

//Exemplo com arrow function
const objetidoDoCursoArrow = (tecnologia) => {
    return `Meu objetivo é estudar ${tecnologia}`;
};

console.log(objetidoDoCursoArrow(tecnologia));