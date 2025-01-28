'use strict';
import { metodoPush, calculaMedia, metodoPop } from './arrays-metodos.js';
// const metodoPush = require('./arrays-metodos.js');

let notas = [10, 6, 8];
const notas2 = [9, 4.5, 7];

// push() - Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
notas = [...notas, ...notas2]; //spread operator ...desestruturação de array ...[notas] e ...[notas2]
console.log(`\n Método: push(), Adiciona um ou mais elementos ao final de um array ${notas}`);
// notas.push(5);
metodoPush(notas, 5);
const mediaNotas = calculaMedia(notas);
document.getElementById('idParagrafo').innerHTML = `arrayNotas Atualizado: [${notas}]<br>`;
document.getElementById('idParagrafo').innerHTML += `Media das notas: ${mediaNotas.toFixed(2)}`;
console.log(`arrayNotas Atualizado: [${notas}]`);
console.log(`Media das notas: ${mediaNotas.toFixed(2)}`);
//=======================================================================================================

// pop() - Remove o último elemento de um array e retorna o elemento removido.
console.log(`\n pop() - Remove o último elemento de um array ${notas}`);
notas.pop();
document.getElementById('idParagrafo2').innerHTML = `POP() - novoArrayNotas : [${notas}]<br>`;
console.log(`POP() - novoArrayNotas : [${notas}]`);
