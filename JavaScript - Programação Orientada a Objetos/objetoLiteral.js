'use strict';

const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibeInfos: function() {
        console.log(`${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`);
    }
};
// console.log(user);
// console.log(user.nome);

//a função abaixo mostra apenas que o this é o objeto global, não o user
// const exibir = user.exibeInfos;
const exibir = function() {
    console.log(`${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`);
};
// exibir(); // undefined, porque exibeInfos aqui perdeu o contexto do objeto user

// Para corrigir isso, podemos usar o método bind para vincular o contexto do objeto user à função exibir
const exibirNome = exibir.bind(user);
exibirNome(); // Juliana,
//---------------------------------------------------------------------------------------

//Podemos também usar o call ou apply, mas bind é mais comum para manter o contexto
exibir.call(user); // Juliana,
exibir.apply(user); // Juliana,
//---------------------------------------------------------------------------------------

// Podemos também usar arrow functions, que não têm seu próprio this
const exibirArrow = () => {
    console.log(`${user.nome}, ${user.email}, ${user.nascimento}, ${user.role}, ${user.ativo}`);
}   
exibirArrow(); // Juliana,


