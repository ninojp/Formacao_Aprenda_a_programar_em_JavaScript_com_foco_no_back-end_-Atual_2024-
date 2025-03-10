'use strict';

// Declaração de função
function estudanteReprovou(notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
};
console.log(estudanteReprovou(6, 5));

// Expressão de função (função anônima)
// Uma das principais diferenças entre a declaração de função e a expressão de função é o hoisting.
const estudanteAprovado = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
};
console.log(estudanteAprovado(6, 5));
console.log(estudanteAprovado(10, 3));

//=========================================================================================
// Exercício - Aula 5 - Escrevendo funções
function calculaProduto(a, b = 2, c = 1) {
    return a * b * c;
};
const resultado1 = calculaProduto(3);
const resultado2 = calculaProduto(2, 4);
const resultado3 = calculaProduto(1, 2, 3);
const resultado4 = calculaProduto(2, undefined, 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);
