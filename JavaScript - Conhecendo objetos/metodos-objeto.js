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
// Object.keys(obj)
// O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, 
//na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in enumera
//propriedades que estejam na cadeia de protótipos).
const listaChavesObj = Object.keys(estudante);
console.log(listaChavesObj, '\n');
if(listaChavesObj.includes('bolsista')){
    console.log('Possui a Chave');
}else{
    console.log('NÃO TEM a Chave');
}
//-----------------------------------------------------------------------------------------------------------------------------------

// Object.values(obj)
// O método Object.values() retorna um array com os valores das propriedades de um dado objeto, 
//na mesma ordem provida pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).
// const listaValoresObj = Object.values(estudante);
// console.log(listaValoresObj, '\n');
//-----------------------------------------------------------------------------------------------------------------------------------

// Object.entries(obj)
//O método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto, 
//na mesma ordem dos objetos providos através do loop for...in (sendo a diferença que o for-in loop enumera também
//propriedades dispostas na cadeia de prototipagem - prototype chain).
const listaEntriesObj = Object.entries(estudante);
console.log(listaEntriesObj, '\n');
//-----------------------------------------------------------------------------------------------------------------------------------

// O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis 
//de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino.
const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { c: 3, e: 4 };
const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);
console.log(objetoFusionado, '\n');
//-----------------------------------------------------------------------------------------------------------------------------------
