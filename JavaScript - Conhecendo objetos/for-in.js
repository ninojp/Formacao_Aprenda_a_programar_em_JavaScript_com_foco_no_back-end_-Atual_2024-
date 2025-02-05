'use strict';
//Aula 3 - for in
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
};
console.log('Percorrendo o Objeto com FOR IN');
for (let chave in estudante) {
    let tipo = typeof estudante[chave];
    // if (tipo !== 'object' && tipo !== 'function')
    if(tipo === 'object'){
        console.log(`Nessa Chave: ${chave}, Temos um Objeto: ${estudante[chave]}, Tipo: ${tipo}`);
    }
    console.log(`A Chave: ${chave}, Tem o Valor: ${JSON.stringify(estudante[chave])}, ${tipo}\n`);
};
// console.log('Percorrendo o Objeto com FOR OF'); //ERRO - O (FOR OF) NÃO É PARA OBJETOS
// for (let chave of estudante){
//     console.log(`A Chave: ${chave}, Tem o Valor: ${JSON.stringify(estudante[chave])}, ${typeof estudante[chave]}\n`);
// };

