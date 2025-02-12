'use strict';

console.log('metodosObjeto \n');
const carro = {
    marca: 'Audi',
    modelo: 'C4',
    ano: 2024,
    cor: 'Preto',
    ligado: false,
    ligar: function () {
        if (this.ligado === true) {
            console.log('O Carro está Ligado');
        } else {
            console.log('O Carro está desligado!');
        }
    },
    desligar: function () {
        if (this.ligado === false) {
            console.log('O Carro está desligado!');
        } else {
            console.log('O Carro está Ligado');
        };
    },
    obterDetalhes: function () {
        for (let props in carro) {
            // console.log(typeof props, typeof carro[props]);
            if (typeof carro[props] === 'function') {
                console.log(`O Obj Carro tem a Propriedade: ${props}: Function()`);
            } else {
                console.log(`O Obj Carro tem a Propriedade: ${props}: ${carro[props]}`);
            };
        };
    }
};
carro.ligar();
carro.desligar();
carro.obterDetalhes();
console.log('\n');
/*
- desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: 
se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
- obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
=====================================================================================================================*/


//4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. 
//Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
// Criando uma propriedade não enumerável

Object.defineProperty(carro, 'placa', {// placa(chaveNome): 
    value: 'MDN 12022025', //Valor atribuido a chaveNome(placa)
    enumerable: true//Define se vai ser(true) enumeravel ou não(false)
});
console.log('Exercício 4');
for (let prop in carro) {
    if (typeof carro[prop] !== 'function')
        console.log(`Propriedade Enumeravel: ${prop}: ${carro[prop]}`);
};

const arrayChavesObjCarro = Object.keys(carro);
console.log(arrayChavesObjCarro);
console.log(carro.placa);
//===================================================================================

//5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
const carroNovo = {
    marca: 'Lamburgueni',
    modelo: 'Diablo',
    ano: 2000,
    cor: 'Gold'
};
const carroComNovosDetalhes = {
    ...carro,
    ...carroNovo
};
console.log('\n Exercício 5');
console.log(carroComNovosDetalhes);
Object.defineProperty(carroComNovosDetalhes, 'placa', { enumerable: false });
// Object.defineProperty(carroComNovosDetalhes, 'placa', {
//     value: 'MVC 20251202',
//     enumerable: true
// });
console.log(carroComNovosDetalhes);
