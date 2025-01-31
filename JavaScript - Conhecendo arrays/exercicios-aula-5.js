'use strict';

//1. Faça uma função que aceite vários arrays como argumentos e retorne um único array
//contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
const notas5 = [7, 5, 8, 9];
const listAlunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const turmaPython = [7, 3.5, 8, 9.5];

function concatenarArrays(...arrays) {
    return arrays.reduce((acumulador, array) => acumulador.concat(array), []);
};

//O professora fez assim:
function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
};

const arrayTodosElementos = concatenarArrays(notas5, listAlunos, turmaPython);
console.log('exercício 1: ', arrayTodosElementos);
//-----------------------------------------------------------------------------------

//2 - Crie um array de números chamado valores. Depois, escreva um programa que some todos os elementos deste array utilizando o método reduce.
const valores = [4, 7, 9, 3, 8, 10];

function somandoValores(array) {
    return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
};
console.log('\n exercício 2: ', somandoValores(valores));
//-----------------------------------------------------------------------------------

//3. Considere duas listas de cores:
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const arraylistasCores = [...new Set([...coresLista1, ...coresLista2])];
console.log('\n exercício 3: ', arraylistasCores);
//-----------------------------------------------------------------------------------

//4. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pares = [];
function numerosPares(array) {
    return array.filter(elemento => elemento % 2 === 0);
    // array.forEach(element => {
    //     if (element % 2 === 0) {
    //         pares.push(element);
    //     }
    // });
};
console.log('\n exercício 4: ', numerosPares(numeros));
// console.log('\n exercício 4: ', pares);
//-----------------------------------------------------------------------------------

//5. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
};
const numerosFiltrados = filtraNumeros(listaNumeros);
console.log('\n exercício 5: ', numerosFiltrados); // Saída: [6, 9, 12]
//-----------------------------------------------------------------------------------

//6. Crie uma função que receba um array de números e retorne a soma de todos os elementos.
const listaNumeros2 = [3, 6, 9, 4, 12, 2, 7];
function somaElementos(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};
console.log('\n exercício 6: ', somaElementos(listaNumeros2)); // Saída: 43
//-----------------------------------------------------------------------------------
