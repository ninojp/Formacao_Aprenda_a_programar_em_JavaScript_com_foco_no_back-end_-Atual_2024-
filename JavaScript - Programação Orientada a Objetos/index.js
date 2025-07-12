import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js";

// Encapsulamento, protegendo as propriedades de User, com o uso de # (private fields)
//Atributos privados não são acessíveis fora da classe, mas podem ser acessados por métodos da classe.

// const novoUser = new User('Nino', 'n@n.com', '12/07/2025');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// novoUser.nome = 'Pedro';//Agora(depois do encapsulamento) ao tentar alterar nome, cria-se esta nova propriedade. pois #nome é privado.
// console.log('Exemplo de como podemos tentar "alterar" valores das propriedades! \n');
// console.log('Exemplo de como podemos acessar um método privado de uma classe! \n');
// console.log(novoUser.exibirInfos());
//----------------------------------------------------------------------------------

// const novoAdmin = new Admin('Edenilson', 'ed@ed.com', '12/07/2025');
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('JavaScript', 30));
// console.log(novoAdmin.nome);
// // novoAdmin.nome = 'João';//Agora(depois do getter) ao tentar alterar nome: TypeError: Cannot set property nome of #<User> which has only a getter
// novoAdmin.nome = 'João';//Depois do setter, conseguimos alterar nome: João
// novoAdmin.nome = '';//Se tentarmos atribuir um valor inválido, o setter irá lançar um erro.
// console.log(novoAdmin.nome);
//----------------------------------------------------------------------------------

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobreNome) //'Silva Souza'
console.log(novoUser.nomeCompleto) //'Juliana Silva Souza'
//----------------------------------------------------------------------------------

// const novoDocente = new Docente('Nino JP', 'jp@jp.com', '12/07/2025', '234.456.675-23');
// console.log(novoDocente);
// console.log(novoDocente.aprovarEstudante('Nino', 'JavaScript'));
