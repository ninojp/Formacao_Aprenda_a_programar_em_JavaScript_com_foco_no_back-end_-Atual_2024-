'use strict';
// const estudante = require('./estudante.json');
import estudante from './estudante.json' with {type: 'json'};
console.log(estudante);

const listChavesObj = Object.keys(estudante);
console.log(listChavesObj);
