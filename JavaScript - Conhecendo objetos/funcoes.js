'use strict';

//Funções dentro de objetos, funçao anonima
//não deve-se usar arrow function, pois o this, na arrow function, não é o objeto
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
};
console.log(estudante.estaAprovado(7));
/*
A notação de arrow function não deve ser usada dentro de objetos quando 
você precisa acessar o contexto do objeto (this). Isso ocorre porque
as arrow functions não têm seu próprio this; elas herdam o this do escopo léxico 
onde foram definidas. Isso significa que, dentro de uma arrow function, o this não se 
refere ao objeto que contém a função, mas ao contexto onde a função foi criada.
*/
