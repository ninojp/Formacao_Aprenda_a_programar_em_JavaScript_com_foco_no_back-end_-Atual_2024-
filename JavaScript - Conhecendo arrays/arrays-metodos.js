'use strict';

// push() - Modifica o array atual, Adicionando um ou mais elementos ao final de um array e retorna o novo comprimento do array.
export function metodoPush(array, add) {
    // console.log(array);
    // console.log(add);
    array.push(add);
    console.log(array);
    return array;//retorna o novo comprimento do array.
};
//-------------------------------------------------------------------------------------------------------

// Função que calcula a média de um array
export function calculaMedia(array) {
    let total = 0;
    array.map((elemento) => {
        total += elemento;
    });
    return total / array.length;
};
//-------------------------------------------------------------------------------------------------------

// pop() - Modifica o array atual, Removendo o último elemento de um array e retorna o elemento removido.
export function metodoPop(array) {
    array.pop();
    return array;//retorna o elemento removido.
};
//-------------------------------------------------------------------------------------------------------

// slice() - Retorna um NOVO array “fatiando” o array de acordo com o índice inicial e final.
export function metodoSlice(array, inicioLista, fimLista) {
    return array.slice(inicioLista, fimLista);//retorna um NOVO array “fatiado”.
};
//-------------------------------------------------------------------------------------------------------

// splice() - Modifica o array atual, Adicionando ou removendo elementos em um array.
export function metodoSplice(array, indice, quantidadeDel, addElemento) {
    array.splice(indice, quantidadeDel, addElemento);
    return array;//retorna o próprio array modificado.
};
//-------------------------------------------------------------------------------------------------------

// concat() - Concatena dois ou mais arrays.
export function metodoConcat(array1, array2) {
    return array1.concat(array2);//retorna um novo array concatenado.
};
//-------------------------------------------------------------------------------------------------------

// includes() - Verifica se um array contém um determinado elemento e retorna true ou false.
export function buscarAlunoNota(listAlunosMedia2, nomeAluno) {
    const [alunos, media] = listAlunosMedia2; // DESESTRUTURAÇÃO DE ARRAY
    // if (listAlunosMedia2[0].includes(nomeAluno)) {
    if (alunos.includes(nomeAluno)) {
        let indiceAluno = alunos.indexOf(nomeAluno);
        let mediaAluno = media[indiceAluno];
        document.getElementById('idParagrafo7').innerHTML += `O Aluno(a): ${nomeAluno} está na lista. E Sua Media é: ${mediaAluno}<br>`;
        console.log(`O Aluno(a): ${nomeAluno} está na lista. E Sua Media é: ${mediaAluno}`);
    } else {
        document.getElementById('idParagrafo7').innerHTML += `O Aluno(a): ${nomeAluno} NÃO está na lista!`;
        console.log(`O Aluno(a): ${nomeAluno} NÃO está na lista!`);
    };
    return;
};
//-------------------------------------------------------------------------------------------------------

// .forEach() - array.forEach((elemento, indice, array) => {});
// O método forEach() executa uma dada função em cada elemento de um array. E retorna undefined.
export function metodoForEach(array) {
    array.forEach((elemento, indice) => {
        console.log(`Indice: ${indice} Nota: ${elemento}`);
        document.getElementById('idParagrafo11').innerHTML += `forEach() - Indice: ${indice} Nota: ${elemento}<br>`;
    });
};
//-------------------------------------------------------------------------------------------------------

//=========================================================================================================

