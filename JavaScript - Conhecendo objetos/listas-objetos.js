'use strict';

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
        rua: 'Rua Clotilde',
        numero: '271',
        complemento: ''
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
};
estudante.enderecos.push({
    rua: 'Rua cinco Rosas',
    numero: '24'
})
console.log(estudante, '\n');
console.log(estudante.enderecos[1], '\n');
// Nesse caso, o que pedimos para o filter() fazer é, para cada ocorrência no array de endereco,
//retornar só as ocorrências onde endereco.complemento seja true.
const enderecosComComplemento = estudante.enderecos.filter(endereco => !endereco.complemento);
console.log(enderecosComComplemento);
