'use strict';

// Exercícios - Aula 3
const precos = [5.5, 6.2, 14, 19.5];
let desconto = 0.90;
// for (let i = 0; i < precos.length; i++) {
//  precos[i] = precos[i] * desconto;
// }
// console.log(precos);
for (let preco of precos) {
    preco = preco * desconto;
}
console.log(precos);//retorna [5.5, 6.2, 14, 19.5], porque o for of não altera o array original.
//-------------------------------------------------------------------------------------------------------

const numeros = [5, 8, 6, 10, 7];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
const media = soma / numeros.length;
console.log("A média dos números é:", media);
//-------------------------------------------------------------------------------------------------------

//3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
function somaElementos(numeros) {
    let somaFor = 0;
    // Usando o Método.forEach()
    // numeros.forEach((elemento, indice) => {
    //     somaFor += elemento;// O retorno é a soma dos elementos.
    //     console.log(`Indice: ${indice} Elemento: ${elemento}`);
    // });
    // Usando o For()
    // for (let i = 0; i < numeros.length; i++) {
    //     somaFor += numeros[i];
    //     console.log(`Indice: ${i} Elemento: ${numeros[i]}`);
    // };
    //Usando o For(of)
    // for (const element of numeros) {
    //     somaFor += element;
    //     console.log(element);
    // }
    // Usando o For(in)
    for (const i in numeros) {
        somaFor += numeros[i];
        // console.log(numeros[i]);
    }
    return somaFor;
};
let somaForElementos = somaElementos(numeros);
console.log("A soma dos elementos é:", somaForElementos);
//==========================================================================================

//4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, 
//no seguinte formato: 'o menor número é X e o maior número é Y'.
const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];
function imprimeMaiorEMenor(array) {
  let maior = 0;
  let menor = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
    if (array[i] < menor) {
      menor = array[i]
    };
  };
  return `O Maior número é: ${maior} e o Menor número é: ${menor}`;
};
console.log(imprimeMaiorEMenor(arrMenoresMaiores), '\n');
//============================================================================================

//5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] 
//e exibir no console apenas os números pares contidos nesse array.
const listaNumeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
function exibeNumerosPares(paramsListaNumeros){
    let arrayPares = [];
    for (let i = 0; i < paramsListaNumeros.length; i++) {
        if(paramsListaNumeros[i] % 2 === 0){
            arrayPares.push(paramsListaNumeros[i]);
        };               
    };
    console.log('Os numeros pares são: ', arrayPares);            
};
exibeNumerosPares(listaNumeros);
//=============================================================================================

//6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
function calculaMediaArray(paramsArray){
    let total = 0;
    for (let i = 0; i < paramsArray.length; i++) {
        total += paramsArray[i];
    }
    const media = total / paramsArray.length;
    return media;
};
console.log('A Média do Array é: ', calculaMediaArray(listaNumeros));
//===============================================================================================

let controle = 0;
let arrayContagem = [];
while (controle < 10) {
    // console.log(controle);
    arrayContagem.push(controle);
    controle++;
}
console.log("Fim do laço while", arrayContagem);
