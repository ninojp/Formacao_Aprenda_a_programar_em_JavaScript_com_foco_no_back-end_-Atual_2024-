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
console.log(user);
// console.log(user.nome);
