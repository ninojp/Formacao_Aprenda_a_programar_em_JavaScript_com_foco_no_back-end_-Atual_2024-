'use strict';

// Conversão implícita
console.log(Number("1")); // retorna o número 1 
console.log(Number("Alura")); // retorna NaN
console.log(Number(undefined)); // retorna NaN
console.log(Number(null)); // retorna 0

// document.write(numeroCinco + Number(stringCinco)); // write não funciona em MODO asincrono(async ou defer)
let numeroCinco = 5;
let stringCinco = '5';
document.getElementById('pResultados').innerHTML = numeroCinco + stringCinco +'<br>'; // 55
document.getElementById('pResultados').innerText += numeroCinco + stringCinco +'\n'; // 55
document.getElementById('pResultados').innerHTML += numeroCinco + Number(stringCinco) +'<br>'; // 10
document.getElementById('pResultados').innerHTML += `${numeroCinco + Number(stringCinco)}`; // 10

// Number.parseInt() e Number.parseFloat()
//Ambos funcionam de forma parecida, porém, 'parseIntvai tentar converter o valor em um número inteiro e parseFloat`, em um número de ponto flutuante.
console.log(parseInt('4')); // retorna o número 4
console.log(parseInt('4.5')); // retorna o número 4

console.log(parseFloat('4')); // retorna o número 4
console.log(parseFloat('4.5')); // retorna o número 4.5
console.log(parseFloat('4.56789').toFixed(2)); // retorna uma STRING 4.57
console.log(parseFloat('4.5abc')); // retorna o número 4.5

// Uma outra forma de fazer a coerção de tipos (quando o JavaScript tenta “forçar” de forma implícita a conversão de um valor
// de um tipo para outro) é utilizando o operador unário +. Por exemplo:

+'45' // retorna o número 45
+true // retorna o número 1

console.log(typeof +'45'); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’

// Conversão para strings
// Assim como Number(), o JavaScript também disponibiliza a função global String() quando é necessário converter outros tipos
//de dado em formato de texto.

String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'

//=======================================================================
//exercícios
let valor1;
let valor2 = null;
let valor3 = 0;
console.log(valor1, typeof valor1); // retorna undefined, TIPO undefined
console.log(valor2, typeof valor2); // retorna null, TIPO object
console.log(valor3, typeof valor3); // retorna 0, TIPO number
