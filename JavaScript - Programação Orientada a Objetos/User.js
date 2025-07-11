'use strict';

export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'Estudante';
        this.ativo = ativo;
    };
    exibirInfos() {
        return `O ${this.role}, ${this.nome} tem o E-Mail: ${this.email}!`;
    };
};
const novoUser = new User('Nino', 'n@n.com', '25/04/81');
console.log(novoUser);
console.log(novoUser.exibirInfos());
console.log('A Class User é Protótipo de novoUser? ', User.prototype.isPrototypeOf(novoUser));


