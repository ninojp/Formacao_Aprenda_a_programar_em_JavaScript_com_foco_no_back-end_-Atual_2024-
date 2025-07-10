'use strict';

function User(nome, email) {
    this.nome = nome;
    this.email = email;
    this.exibirInfos = function() {
        return `Nome: ${this.nome}, Email: ${this.email}`;
    };
};

const novoUser = new User('Nino', 'n@n.com');
console.log(novoUser);
console.log(novoUser.exibirInfos());
