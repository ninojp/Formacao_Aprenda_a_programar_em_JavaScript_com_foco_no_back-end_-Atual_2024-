'use strict';

let dataHoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo'});
console.log('Data Atual: ', dataHoje); // retorna o timestamp atual
console.log('\n');
//=======================================================================================
// Operador Ternário
const valor = 49;
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente';
console.log(texto); // retorna ‘valor suficiente’
console.log('\n');
//--------------------------------------------------------------------

// let matriculaAtiva = true;
function verificaMatriculaAtiva(matriculaAtiva) {
//  if (matriculaAtiva === true) {
//    return 'matrícula ativa no sistema';
//  } else {
//    return 'matrícula não está ativa';
//  }
return matriculaAtiva ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}
console.log(verificaMatriculaAtiva(0));
// retorna 'matrícula ativa no sistema'
console.log('\n');
//--------------------------------------------------------------------

let idadeEstudante = 17;
let precisaDeAutorizacao;
// if (idadeEstudante < 18) {
//  precisaDeAutorizacao = true;
// } else {
//  precisaDeAutorizacao = false;
// }
precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutorizacao); // retorna true

//Exercício Proposto, Luri
const numero = 10;
const resultado1 = (numero > 5 && numero < 15);
const resultado2 = (numero === 10 || numero > 20);
const resultado3 = !(numero < 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);

// resultado1 retora true, pois 10 é maior que 5 e menor que 15
// resultado2 retorna true, pois 10 é igual a 10
// resultado3 retorna true, pois 10 não é menor que 5, porque foi usado ! (negação)
