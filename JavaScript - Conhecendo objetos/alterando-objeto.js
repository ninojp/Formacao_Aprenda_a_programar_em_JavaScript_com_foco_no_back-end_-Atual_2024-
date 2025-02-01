'use strict';

const objEstudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
};

// inserindo uma nova propriedade no objeto
objEstudante.telefone = '48123456789';//Para criar uma nova Propriedade: nomeDoObjeto.nomeNovaPropriedade = valorNovaPropriedade
objEstudante['telefone2'] = '48123456789';//pode ser feito dessa forma também
console.log(objEstudante);
console.log(objEstudante.telefone);//48123456789

// alterando o valor de uma propriedade
objEstudante.nome = 'João Pereira';//Para alterar o valor de uma Propriedade: nomeDoObjeto.nomePropriedade = novoValor
console.log(objEstudante);
//---------------------------------------------------------------------------------------------------------------------

// Mesmo declarando o objeto como const, é possível alterar o valor de suas propriedades. 
// O que não é permitido é alterar o objeto em si, ou seja
const objEstudante2 = {};
objEstudante2.nome = 'Maria';
console.log(objEstudante2);

// objEstudante2 = { nome: 'Maria' }; // erro: Assignment to constant variable. Não é possível alterar o objeto em si, apenas suas propriedades.
// objEstudante2 = ['Maria']; // erro: Assignment to constant variable. Não é possível alterar o objeto em si, apenas suas propriedades.
//--------------------------------------------------------------------------------------------------------------------------------------------

// Removendo uma propriedade do objeto
// Importante! Note que o delete remove do objeto o valor da propriedade, assim como a chave.
// O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false
delete objEstudante.nome;//Para remover uma Propriedade: delete nomeDoObjeto.nomePropriedade
delete objEstudante['idade'];//Outra forma de remover uma Propriedade
console.log(objEstudante.nome) //undefined
