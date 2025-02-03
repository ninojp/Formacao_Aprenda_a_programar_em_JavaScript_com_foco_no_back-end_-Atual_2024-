'use strict';

/*
1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. 
Este objeto deve ter as seguintes propriedades...
2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades...
*/
// import jsonPessoa from './jsonPessoa.json';//DEU ERRO
// import jsonPessoa from './jsonPessoa.json' assert { type: 'json' };//TAMBÉM DEU ERRO - SyntaxError: Unexpected identifier 'assert'
// Esse erro ocorre porque, a partir de versões mais recentes do Node.js, 
//ao importar arquivos JSON como módulos, é necessário especificar um atributo de importação. 
//Para resolver isso, você deve adicionar o atributo type: "json" na sua importação.
import jsonPessoa from './jsonPessoas.json' with { type: 'json' };
// const jsonPessoa = require('./jsonPessoa.json');
import { mostrarInfoPessoa, exibeInfoPessoa, mostrarListaPessoas, filtrarPorCidade } from './infoPessoa.js';
console.log('\n');
// console.log('Lista de objetos, Pessoas, Importada via .JSON: ', jsonPessoa, typeof jsonPessoa);

// exibeInfoPessoa(jsonPessoa);

// mostrarInfoPessoa(jsonPessoa);
//======================================================================================================

//3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos.
//Cada objeto deve representar uma pessoa e conter as seguintes propriedades:
jsonPessoa.push({
    nome: 'Ana Gabriella',
    idade: 13,
    solteiro: true,
    hobbies: ['Jogar', 'Jogar', 'assistir besteiras'],
    enderecos: {
        rua: 'Rua Dela',
        cidade: 'Floripa',
        estado: 'SC'
    }
})
mostrarListaPessoas(jsonPessoa)

const pessoaEncontrada = filtrarPorCidade(jsonPessoa, 'Nino JP');
console.log(pessoaEncontrada);
console.log('\n');
//==================================================================================================================================

//4 - Crie um objeto chamado calculadora que terá os seguintes métodos:
/*
soma: uma função que aceita dois parâmetros e retorna a soma deles.
subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.*/
const calculadora = {
    arrayList: [7.7, 8, 5, 9],
    soma: function(num1, num2) {
        return num1 + num2;
    },
    subtracao: function(num1, num2) {
        return num1 < num2 ? 'O num1 deve ser maior que num2!' : num1 - num2;
    },
    multiplicacao: function(num1, num2) {
        return num1 * num2;
    },
    divisao: function(num1, num2) {
        return num1 <= 0 || num2 <= 0 ? 'O numeros devem ser maiores que 0!' : num1 / num2; 
    },
    calcularMedia: function(arrayList) {
        // let somaElem = 0;
        const somaElem = this.arrayList.reduce((acu, elem) => acu + elem, 0);
        // console.log(somaElem);
        return somaElem / this.arrayList.length;
    }
};
console.log('Método Soma: ', calculadora.soma(10, 20));
console.log('Método Subtrair: ', calculadora.subtracao(10, 20));
console.log('Método Multiplicar: ', calculadora.multiplicacao(2, 10));
console.log('Método Dividir: ', calculadora.divisao(0, 2));
// const arrayList = [7.7, 8, 5, 9];
// console.log('Calcular Média: ', calculadora.calcularMedia(arrayList));
console.log('Calcular Média: ', calculadora.calcularMedia());
console.log('\n');

//=====================================================================================

//5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:
const contaBancaria = {
    titular: 'EuMemo',
    saldo: 100,
    depositar: function(valorDepo) {
        this.saldo += valorDepo;
    },
    sacar: function(valorSaque) {
        this.saldo >= valorSaque ? this.saldo -= valorSaque : 'O valor do Saque ultrapassa o Saldo!';
    } 
}
console.log('Objeto contaBancaria: ', contaBancaria);
console.log('\n');

contaBancaria.depositar(500);
console.log('Depois do Depósito: ', contaBancaria);
console.log('\n');
const cliente = {
    nome: "Carlos",
    conta: contaBancaria
}
function mostrarSaldo(objCliente) {
    console.log('Nome do Cliente: ', objCliente.nome);
    console.log('Saldo do Cliente: ', objCliente.conta.saldo);
};
contaBancaria.sacar(200);
mostrarSaldo(cliente);
