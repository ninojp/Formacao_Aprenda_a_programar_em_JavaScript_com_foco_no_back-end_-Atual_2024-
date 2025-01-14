'use strict';

let estudante;

let telEstudante = null;

console.log(estudante);
console.log(typeof estudante);

console.log(telEstudante);
console.log(typeof telEstudante);

// como se conporta o null e undefined em operações matemáticas
console.log(5 + estudante); // undefined é tratado como NaN
console.log(5 + telEstudante); // null é tratado como 0
