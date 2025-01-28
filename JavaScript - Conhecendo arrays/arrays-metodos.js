'use strict';

// push() - Modifica o array atual, Adicionando um ou mais elementos ao final de um array e retorna o novo comprimento do array.
export function metodoPush(array, add){
    // console.log(array);
    // console.log(add);
    array.push(add);
    console.log(array);
    return array;// faz as alterações no array e retorna o novo comprimento do array.
};

// Função que calcula a média de um array
export function calculaMedia(array){
    let total = 0;
    array.map((elemento) => {
        total += elemento;
    });
    return total / array.length;
};

// pop() - Modifica o array atual, Removendo o último elemento de um array e retorna o elemento removido.
export function metodoPop(array){
    array.pop();
    return array;//retorna o elemento removido.
};
