'use strict';

//1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. 
//O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado 
//calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

const pessoa = {
    nome: 'EuMemo',
    notas: [4.5, 5, 3, 7],
    calcularMediaNotas: function(notas){
        // let soma = 0;
        const soma = this.notas.reduce((acu, elem) => acu + elem, 0);
        const media = soma / this.notas.length;
        return media.toFixed(2);
        // this.notas.forEach((nota) => {
        //     soma += nota;
        // });
        // let media = soma / this.notas.length;
        // return media;
    },
    classificarDesempenho: function(media){
        if(media >= 9){
            console.log(`O Aluno: ${this.nome}, Desempenho Excelente!`);
        }
        if(media >= 7.6 && media < 8.9 ){
            console.log(`O Aluno: ${this.nome}, Bom Desempenho!`);
        }
        if(media >= 6 && media < 7.5 ){
            console.log(`O Aluno: ${this.nome}, Desempenho Regular!`);
        }
        if(media < 6){
            console.log(`O Aluno: ${this.nome}, Desempenho insuficiente!`);
        };
    }
};
// pessoa.calcularMediaNotas();
// console.log(pessoa.calcularMediaNotas());
let mediaCalculada = pessoa.calcularMediaNotas();
console.log('Exercício 1', mediaCalculada);
pessoa.classificarDesempenho(mediaCalculada);
console.log('\n');
//==================================================================================

//2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:
console.log('Exercício 2');
const carro = {
    marca: 'Audi',
    modelo: 'C4',
    ano: 2024,
    cor: 'Preto'
};
//Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
for(let chave in carro){
    console.log(`O Obj Carro tem a Propriedade: ${chave}: ${carro[chave]}`);
};
carro.airBag = true
carro.VidroEletrico = `Completo`
for(let chave in carro){
    console.log(`O Obj Carro tem a Propriedade: ${chave}: ${carro[chave]}`);
};
//=======================================================================================

//3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.
// reosolução do problema no arquivo: metodosObjeto.js
//=======================================================================================

//4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. 
//Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
//=======================================================================================

//5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

