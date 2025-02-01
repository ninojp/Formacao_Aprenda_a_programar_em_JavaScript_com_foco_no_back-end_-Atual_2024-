'use strict';

const objEstudante = {
    nome: 'José Silva',//cada conjunto chave: 'valor'; é uma propriedade
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
};

function exibeNomeEstudante(nomeObj, propriedadeObj) {
    return nomeObj[propriedadeObj];
};
console.log(exibeNomeEstudante(objEstudante, 'nome'));//José Silva
console.log(objEstudante['nome']);//retorna a mesma coisa que a linha acima
// console.log(objEstudante[nome]);//ERRO, não existe variável(ou parametro) nome
console.log(exibeNomeEstudante(objEstudante, 'cpf'));//12312312312

//acessando uma propriedade que não existe
console.log(objEstudante.endereco);//undefined
console.log(objEstudante['endereco']);//undefined

