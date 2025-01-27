'use strict';
import { metodoPush } from './arrays-metodos.js';
// const metodoPush = require('./arrays-metodos.js');

// push() - Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
console.log(`\n Método: push(), Adiciona um ou mais elementos ao final de um array`);
const notas = [10, 6, 8];
// notas.push(7);
metodoPush(notas, 7);
document.getElementById('idParagrafo').innerHTML = `[${notas}]`;
console.log(notas); // [ 10, 6, 8, 7 ]
