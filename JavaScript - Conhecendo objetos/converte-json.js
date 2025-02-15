'use strict';
import estudante from './estudante.json' with {type: 'json'};
// import estudantes from './estudantes.json' with {type: 'json'};

// console.log('Importe estudante.json', estudante);
// console.log('Importe Lista estudantes.json', estudantes);
const stringObjEstudante = JSON.stringify(estudante);
console.log('\nObjeto convertido em String: ', stringObjEstudante, typeof stringObjEstudante);

const objEstudante = JSON.parse(stringObjEstudante)
console.log('\nString convertida em Objeto Novamente! ', objEstudante, typeof objEstudante);
