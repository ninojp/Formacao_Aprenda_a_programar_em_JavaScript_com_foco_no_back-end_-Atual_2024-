export default class User {
    // Propriedades #privadas, não acessíveis fora da classe
    #nome; #sobreNome; #email; #nascimento; #role; #ativo;
    constructor(nome, sobreNome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobreNome = sobreNome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'Estudante';
        this.#ativo = ativo;
    };
    // Getters para acessar as propriedades privadas que queremos expor
    get nome() {
        return this.#nome
    }
    get sobreNome() {
        return this.#sobreNome
    }
    get nomeCompleto() {
        return `${this.#nome} ${this.#sobreNome}`
    }
    get email() {
        return this.#email;
    };
    get nascimento() {
        return this.#nascimento;
    };
    get role() {
        return this.#role;
    };
    get ativo() {
        return this.#ativo;
    };
    //O setter permite alterar a propriedade privada #nome de forma controlada.
    set nome(novoNome) {
        //O uso do setter é opcional, mais extremamente importante no TRATAMENTO(verificação) dos dados.
        if (novoNome === '') {
            throw new Error('Nome não pode ser vazio!');
        };
        // this.#nome = nome;
        let [nome, ...sobreNome] = novoNome.split(' ');
        sobreNome = sobreNome.join(' ')
        this.#nome = nome
        this.#sobreNome = sobreNome
    };
    // Métodos privados, não acessíveis fora da classe
    // #montarObjetoUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     });
    // };
    exibirInfos() {
        return `O ${this.role}, ${this.nome} tem o E-Mail: ${this.email}!`;
        // Internamente podemos acessar as propriedades privadas, criar um objeto e retornar para fora da clase ...
        // const objUser = this.#montarObjetoUser();
        // return `O ${objUser.role}, ${objUser.nome} tem o E-Mail: ${objUser.email}!`;
    };
};
// const novoUser = new User('Nino', 'n@n.com', '25/04/81');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log('A Class User é Protótipo de novoUser? ', User.prototype.isPrototypeOf(novoUser));


