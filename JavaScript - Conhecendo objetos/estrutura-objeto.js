'use strict';

//objeto é uma coleção de propriedades
const objEstudante = {
    nome: 'José Silva',//cada conjunto chave: 'valor'; é uma propriedade
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
};
console.log(objEstudante);
console.log(`Usa-se o .ponto para acessar uma propriedade do objeto: ${objEstudante.nome}`);//as propriedades são acessadas por ponto
console.log(`Outra forma de acessar e usando objeto['nomePropriedade']: ${objEstudante['idade']}`);//ou acessadas por colchetes
console.log(`Pode-se acessar e já iterar sobre uma propriedade: ${objEstudante.cpf.substring(0, 3)}`);//método de string
