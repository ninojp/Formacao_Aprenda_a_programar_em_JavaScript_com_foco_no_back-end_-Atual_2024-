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
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
};
function exibeTelefones(tel1, tel2) {
    console.log(tel1, tel2);
};
exibeTelefones(estudante.telefones[0], estudante.telefones[1]);
exibeTelefones(...estudante.telefones);//Usando o ...spread
exibeTelefones(...estudante.enderecos);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
};
console.log(dadosEnvio);
