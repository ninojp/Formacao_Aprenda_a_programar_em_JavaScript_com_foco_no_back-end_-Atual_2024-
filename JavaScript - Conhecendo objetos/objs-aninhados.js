'use strict';
// Objetos aninhados, objetos dentro de objetos
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
};
console.log('Objetos aninhados, objetos dentro de objetos\n', estudante);
estudante.endereco = {
    rua: 'Rua do Carmo',
    numero: 12,
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil',
};
console.log('Objetos aninhados\n', estudante);
console.log('objetos dentro de objetos\n', estudante.endereco.rua);
