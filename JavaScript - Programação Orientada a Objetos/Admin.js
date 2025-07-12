import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role='Admin', ativo=true) {
        super(nome, email, nascimento, role, ativo);
    };
    criarCurso(nomeCurso, qtdVagas) {
        return `Curso de ${nomeCurso} criado com ${qtdVagas} vagas.`;
    }
};
// const novoAdmin = new Admin('NinoJP', 'adm@adm.com', '2025/11/07');
// console.log(novoAdmin, '\n');
// // console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('JavaScript', 20));
// console.log('A Class User é Protótipo da instância Admin? ', User.prototype.isPrototypeOf(Admin)); //FALSE
// console.log('A Class User é Protótipo da instância novoAdmin? ', User.prototype.isPrototypeOf(novoAdmin)); //TRUE

