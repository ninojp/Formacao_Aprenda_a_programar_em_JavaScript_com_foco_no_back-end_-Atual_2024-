'use strict';
import listEstudantes from './estudantes.json' with{type: 'json'};

function filtrarPorPropriedade(listObjs, nomeProp){
    return listObjs.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(nomeProp);
    });
};
const listEstudantesIncompletos = filtrarPorPropriedade(listEstudantes, 'cep');
console.log(listEstudantesIncompletos);

