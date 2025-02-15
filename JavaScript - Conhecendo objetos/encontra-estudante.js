'use strict';

import listaEstudantes from './estudantes.json' with {type: 'json'};
// console.log(listaEstudantes);

function buscaInformacao(listObj, nomeChave, oqBuscar){
    // return listObj.find((objEstudante) => objEstudante[nomeChave] === oqBuscar);
    return listObj.find((objEstudante) => objEstudante[nomeChave].includes(oqBuscar));
};
const objEstudanteEncontrado = buscaInformacao(listaEstudantes, 'nome', 'Oralle');
const foneEstudanteEncontrado = buscaInformacao(listaEstudantes, 'telefone', '1918820860');
console.log(objEstudanteEncontrado);
console.log(foneEstudanteEncontrado);
