'use strict';
import dados from './dados.json' with {type: 'json'};
//1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. 
//O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.
// console.log(dados);
const produtos = dados.produtos
const usuarios = dados.usuarios
console.log('Exercício 1', produtos[0].nome);
console.log('Exercício 1', usuarios[0].nome);
//============================================================================================

//2 - Crie um arquivo chamado dados.json contendo informações em formato JSON. 
//O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.

//Me pareceu o mesmo exercício, não fiz
//=============================================================================================

//3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:
const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}
const stringProdutos = JSON.stringify(produto);
console.log('\nExercício 3');
console.log(stringProdutos, typeof stringProdutos);
//==============================================================================================

//4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. 
//O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.
// Realize as seguintes operações: A, B, C, D, E, F, G.
console.log('\nExercício 4');
//A
const stringArrayAnimais = JSON.stringify(dados.animais);
console.log('A', stringArrayAnimais, typeof stringArrayAnimais);
//B
const objArrayAnimais = JSON.parse(stringArrayAnimais);
console.log('\nB', objArrayAnimais, typeof objArrayAnimais);
//C
dados.animais.push({
    id: 4,
    nome: "Tigre",
    tipo: "Mamífero",
    habitat: "Selva",
});
console.log('\nC', dados.animais);
//D
// Modifica o habitat de um animal existente no array de animais
//Professor
// const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
// if (animalParaModificar) {
//     animalParaModificar.habitat = "Oceano Antártico";
// }
//Minha resposta
dados.animais[3].habitat = 'Floresta';
console.log('\nD\n', dados.animais[3].habitat);
//E
// Remove um animal do array de animais
//Professor
// const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
// if (indiceAnimalRemover !== -1) {
//     objetoAnimais.animais.splice(indiceAnimalRemover, 1);
// }
//minha resposta
dados.animais.splice(2, 1);
console.log('\nE - Removendo elemento ', dados.animais);
dados.animais.splice(2, 0, {id: 3.5, teste: 'valor'});
console.log('\nE - Adicionando elemento', dados.animais);
//F
// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(dados.animais[0], null, 4);
console.log('\nF', novaStringJsonAnimais);
console.log('\nF', JSON.stringify(dados.animais[3], null, 4));
//==================================================================

//5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:
const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};
function copiarPessoa(objPessoa){
    const copiaPessoa = {...objPessoa};
    return copiaPessoa;
    //Resposta - Professor
    return JSON.parse(JSON.stringify(objPessoa));
};
const copiaDaPessoa = copiarPessoa(pessoaOriginal);
// Modifica a cópia do objeto (pessoa modificada)
pessoaOriginal.idade = 43;//não pode ser antes da chamada da função
console.log('\nExercício 4 - Original: ', pessoaOriginal);
console.log('\nExercício 4 - Cópia: ', copiaDaPessoa);
