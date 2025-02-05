'use strict';

//1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa.
//2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
export function exibeInfoPessoa(objPessoa) {
    console.log('exibeInfoPessoa(): Informações da Pessoa:');
    for (const chaveProp in objPessoa) {
        // console.log(chave);
        // console.log(objPessoa[chave]);
        const valorProp = objPessoa[chaveProp]
        // console.log(`O nomeChave é: ${chaveProp} - Seu Valor é: ${JSON.stringify(valorProp)} - Tipo: ${typeof valorProp}`);
        console.log(`O nomeChave é: ${chaveProp} - Seu Valor é: ${valorProp} - Tipo: ${typeof valorProp}`);
        // if(typeof valorProp === 'object'){
        //     console.log(`O nomeChave é: ${chaveProp} - Seu Valor é: ${JSON.stringify(valorProp[0])}`);
        //     console.log(`O nomeChave é: ${chaveProp} - Seu Valor é: ${JSON.stringify(valorProp[1])}`);
        //     console.log(`O nomeChave é: ${chaveProp} - Seu Valor é: ${JSON.stringify(valorProp[2])}`);
        // }
        // console.log(`Nome: ${objPessoa.nome}\nIdade: ${objPessoa.idade}\nSolteiro: ${objPessoa.solteiro}\nHobbies: [${objPessoa.hobbies.join(', ')}]\nEndereços: ${JSON.stringify(objPessoa.enderecos)}\n`);
    }
    console.log('\n');

};
export function mostrarInfoPessoa(objPessoa) {
    console.log('mostrarInfoPessoa(): Informações da Pessoa:');
    console.log(`Nome: ${objPessoa.nome} (Tipo: ${typeof objPessoa.nome})`);
    console.log(`Idade: ${objPessoa.idade} anos (Tipo: ${typeof objPessoa.idade})`);
    console.log(`Solteiro: ${objPessoa.solteiro} (Tipo: ${typeof objPessoa.solteiro})`);
    // console.log(`Hobbies: [${objPessoa.hobbies.join(", ")}] (Tipo: ${typeof objPessoa.hobbies})`);
    console.log(`Hobbies: [${objPessoa.hobbies}] (Tipo: ${typeof objPessoa.hobbies})`);
    console.log(`Endereço: ${JSON.stringify(objPessoa.enderecos)} (Tipo: ${typeof objPessoa.enderecos})`);
    // console.log(`Hobbies: ${objPessoa.hobbies} (Tipo: ${typeof objPessoa.hobbies})`);
    // console.log(`Endereço Detalhes:`);
    // console.log(`Rua: ${objPessoa.enderecos[0].rua} (Tipo: ${typeof objPessoa.enderecos[0].rua})`);
    // console.log(`Cidade: ${objPessoa.enderecos[0].cidade} (Tipo: ${typeof objPessoa.enderecos[0].cidade})`);
    // console.log(`Estado: ${objPessoa.enderecos[0].estado} (Tipo: ${typeof objPessoa.enderecos[0].estado}) \n`);
};
// module.exports = {mostrarInfoPessoa, exibeInfoPessoa};
//==============================================================================================================================


//3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. 
//Cada objeto deve representar uma pessoa e conter as seguintes propriedades...
export function mostrarListaPessoas(listaObjetos) {
    // listaObjetos.forEach((objPessoa, indice) => console.log(`Objeto: ${indice} - Pessoa: ${JSON.stringify(objPessoa)}`));
    listaObjetos.forEach((objPessoa, indice) => {
        // console.log(objPessoa);
        // console.log(indice);
        // console.log(objPessoa[indice]);//undefined
        console.log(`Nome: ${objPessoa.nome}\nIdade: ${objPessoa.idade}\nSolteiro: ${objPessoa.solteiro}\nHobbies: [${objPessoa.hobbies.join(', ')}]\nEndereços: ${JSON.stringify(objPessoa.enderecos)}\n`);
    });
};
export function filtrarPorCidade(listaObjetos, termoBusca) {
    return listaObjetos.filter((objPessoa) => objPessoa.nome === termoBusca);
};
//==================================================================================================================================

//4 - Crie um objeto chamado calculadora que terá os seguintes métodos:
//A resolução esta no arquivo: exercicios-aula2.js
