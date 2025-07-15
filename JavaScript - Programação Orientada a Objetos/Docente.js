import User from "./User.js";

export default class Docente extends User {
    constructor(nome, sobreNome, email, nascimento, cpf, role='Docente', ativo=true) {
        super(nome, sobreNome, email, nascimento, cpf, role, ativo);
        this.cpf = cpf;//Nova propriedade exclusiva de Docente
    };
    aprovarEstudante(nomeEstudante, curso) {//Nova função(método) exclusivo de Docente
        return `O Estudante ${nomeEstudante} passou no curso de ${curso}, o responsável é ${this.nome}`;
    };
};
// const novoDocente = new Docente('EdenilsonJP', 'ed@ed.com', '2025/11/07', '031237859-46');
// console.log(novoDocente, '\n');
// console.log(novoDocente.aprovarEstudante('Nino', 'JavaScript'));
// console.log('A Class User é Protótipo da instância novoDocente? ', User.prototype.isPrototypeOf(novoDocente)); //TRUE
