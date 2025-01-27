'use strict';
// Arrow Function
// Arrow Function é uma forma mais curta(atual) de escrever uma função em JavaScript.
// A principal diferença entre Arrow Function e a declaração de função é que o this é herdado do escopo pai.
// Arrow Function não tem seu próprio this, arguments, super ou new.target.
// Arrow Function não é adequado para métodos de objeto.
// Arrow Function não pode ser usada como construtor.
// Arrow Function não tem prototype.
// Arrow Function não pode ter nome.
// Arrow Function não pode ser usada como gerador.
// Arrow Function não pode ser chamada com new.
// hoisting não funciona com Arrow Function.

const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
};
// forma simplificada
const estudanteReprovou1 = (notaFinal, faltas) => notaFinal < 7 && faltas > 4 ? true : false;
// Eu achei que seria necessário usar o operator ternário, mas não é necessário.
const estudanteReprovou2 = (notaFinal, faltas) => notaFinal < 7 && faltas > 4;

console.log(estudanteReprovou(6, 5)); // true
console.log(estudanteReprovou1(7, 4)); // false
console.log(estudanteReprovou2(8, 4)); // false

// Se tivermos apenas uma linha, por exemplo, para dar um return no nome, podemos escrever apenas nome, suprimindo tanto as chaves quanto a palavra-chave return.
function exibeNome(nome) {
    return nome;
};
// forma simplificada
const exibeNome1 = nome => nome;

console.log(exibeNome('Lucas')); // Lucas
console.log(exibeNome1('Nino JP')); // Nino JP
//====================================================================================================

// Exercício - Arrow function
function calculadoraSimples(a, b, operacao) {
    let resultado;
    if (operacao === 'soma') {
        resultado = a + b;
    } else if (operacao === 'subtracao') {
        resultado = a - b;
    } else if (operacao === 'multiplicacao') {
        resultado = a * b;
    } else if (operacao === 'divisao') {
        resultado = a / b;
    } else {
        resultado = 'Operação não reconhecida';
    }
    return resultado;
};
const calculadoraSimples1 = (a, b, operacao) => {
    let resultado;
    switch (operacao) {
        case 'soma':
            resultado = a + b;
            break;
        case 'subtracao':
            resultado = a - b;
            break;
        case 'multiplicacao':
            resultado = a * b;
            break;
        case 'divisao':
            resultado = a / b;
            break;
        default:
            resultado = 'Operação não reconhecida';
            break;
    };
    return resultado;
};
console.log(calculadoraSimples(5, 5, 'soma')); // 10
console.log(calculadoraSimples1(5, 5, 'soma')); // 10
