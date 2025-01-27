'use strict';

// Calcula a média de um array de números
console.log(`Calcula a média de um array de números`);
const nota1 = 9;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;
const notas = [nota1, nota2, nota3, nota4];

const media = (nota1 + nota2 + nota3 + nota4) / 4;
const media1 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media); // 8
console.log(media1); // 8

// Função que calcula a média de um array de números
console.log(`\nFunção que calcula a média de um array`);
function calcularMedia(notas) {
    let soma = 0;
    notas.map((nota, i) => {
        soma += nota;
        console.log(`A nota é: ${nota}, e seu Indice é: ${i}`);
    });
    console.log(`A Soma das notas é: ${soma}`);
    return soma / notas.length;
};
let mediaAtual = calcularMedia(notas);
console.log(`A Média das notas é: ${mediaAtual}`);
