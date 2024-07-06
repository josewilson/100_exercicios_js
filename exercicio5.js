//Função da forma tradicional
function objetivoCarreiraTradicional(carreira) {
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
}

//Função usando arrow function
const objetivoCarreiraArrow = (carreira) => {
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
}

//Imprimindo as 2 funções
console.log(objetivoCarreiraTradicional("Desenvolvedor Web"));
console.log(objetivoCarreiraArrow("Desenvolvedor Fullstack"));