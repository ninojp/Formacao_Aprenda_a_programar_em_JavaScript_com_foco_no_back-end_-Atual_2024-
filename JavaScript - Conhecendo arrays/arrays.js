'use strict';
import { metodoPush, calculaMedia, metodoPop, metodoSplice, metodoSlice, metodoConcat, buscarAlunoNota, metodoForEach } from './arrays-metodos.js';
// const metodoPush = require('./arrays-metodos.js');

let notas = [10, 6, 8];
const notas2 = [9, 4.5, 7];

// push() - Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
notas = [...notas, ...notas2]; //spread operator ...desestruturação de array ...[notas] e ...[notas2]
console.log(`\n Método: push(), Adiciona um ou mais elementos ao final de um array ${notas}`);
// notas.push(5);
metodoPush(notas, 5);
const mediaNotas = calculaMedia(notas);
document.getElementById('idParagrafo').innerHTML = `arrayNotas Atualizado: [${notas}]<br>`;
document.getElementById('idParagrafo').innerHTML += `Media das notas: ${mediaNotas.toFixed(2)}`;
console.log(`arrayNotas Atualizado: [${notas}]`);
console.log(`Media das notas: ${mediaNotas.toFixed(2)}`);
//=======================================================================================================

// pop() - Remove o último elemento de um array e retorna o elemento removido.
console.log(`\n pop() - Remove o último elemento de um array ${notas}`);
metodoPop(notas);
document.getElementById('idParagrafo2').innerHTML = `POP() - novoArrayNotas : [${notas}]<br>`;
console.log(`POP() - novoArrayNotas : [${notas}]`);
//=======================================================================================================

// slice() - Retorna um novo array “fatiando” o array de acordo com o índice inicial e final.
// Desafio: Divida os alunos da sala abaixo em duas listas com a mesma quantidade de estudantes:
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
console.log(`slice() - Retorna um novo array “fatiado”.\n ${listaEstudantes}`);
const metadeLista = listaEstudantes.length / 2;

const sala1 = metodoSlice(listaEstudantes, 0, metadeLista);
document.getElementById('idParagrafo3').innerHTML = `Sala 1: [${sala1}]<br>`;
console.log(`sala1: ${sala1}`);

const sala2 = metodoSlice(listaEstudantes, metadeLista);
document.getElementById('idParagrafo3').innerHTML += `Sala 2: [${sala2}]<br>`;
console.log(`sala2: ${sala2}`);
//=======================================================================================================

// splice() - Adiciona ou remove elementos em um array.
const listaAlunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo', 'Nino', 'outro'];
document.getElementById('idParagrafo4').innerHTML = `Array Original: [${listaAlunos}]<br>`;
console.log(`splice() - Adiciona ou remove elementos em um array.\n ${listaAlunos}`);
const indice = 1;//indice 1, ou seja, o elemento 'Ana' será o primeiro a ser removido.
const quantidade = 2;//quantidade 2, de elementos a serem removidos.
const addElemento = 'Pedro';//elemento a ser adicionado.

metodoSplice(listaAlunos, indice, quantidade, addElemento);
document.getElementById('idParagrafo4').innerHTML += `Array Modificado: [${listaAlunos}]<br>`;
console.log(`Array Modificado: [${listaAlunos}]`);

listaAlunos.splice(3, 1);//remove somente o elemento 'Lara'.
listaAlunos.splice(6, 0, 'NinoJP');//adiciona 'NinoJP' na posição 6 sem remover nenhum elemento.
document.getElementById('idParagrafo4').innerHTML += `Array com indice 3 Removido: [${listaAlunos}]<br>`;
console.log(`Array com indice 3 Removido: [${listaAlunos}]`);

//Exercícios -----------------------------------------------------------------------------------------
const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']
animaisDoAquario.splice(1, 0, 'sardinha') //adiciona 'sardinha' na posição 1 sem remover nenhum elemento
animaisDoAquario.splice(3, 2, 'atum') //adiciona 'atum' na posição 3 e remove 'golfinho' e 'tubarão'
console.log(animaisDoAquario) //retorna: ['baleia', 'sardinha', 'polvo', 'atum']
//=======================================================================================================

// concat() - Concatena dois ou mais arrays.
const salaJS = ['Evaldo', 'Camis', 'Mari'];
document.getElementById('idParagrafo5').innerHTML = `Array Original: salaJS [${salaJS}]<br>`;
const salaPython = ['Ju', 'Leo', 'Raquel'];
document.getElementById('idParagrafo5').innerHTML += `Array Original: salaPython [${salaPython}]<br>`;

const salasJuntas = metodoConcat(salaJS, salaPython);
// const salasJuntas = [...salaJS, ...salaPython]; //pode ser feito com spread operator. 
document.getElementById('idParagrafo5').innerHTML += `Array Concatenado: salasJuntas ${JSON.stringify(salasJuntas)}<br>`;
console.log(`Array Concatenado: salasJuntas [${salasJuntas}]`);
//=======================================================================================================

// Arrays multidimensionais - Array de arrays
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
document.getElementById('idParagrafo6').innerHTML = `Array alunos [${alunos}]<br>`;
const medias = [10, 8, 7.5, 9];
document.getElementById('idParagrafo6').innerHTML += `Array medias [${medias}]<br>`;

const listAlunosMedia = [alunos, medias];
document.getElementById('idParagrafo6').innerText += `Array multidimensional - Array de arrays ${JSON.stringify(listAlunosMedia)}`
// document.getElementById('idParagrafo6').innerHTML += `Arrays multidimensionais - Array de arrays [${listAlunosMedia}]<br>`;
document.getElementById('idParagrafo6').innerHTML += `<br>O Aluno(a): ${listAlunosMedia[0][1]} tem Média: ${listAlunosMedia[1][1]}`;
// console.log('Array multidimensional - Array de arrays: ', listAlunosMedia);
// Usando template string com JSON.stringify para exibir o array no formato [[], []]
console.log(`Array multidimensional - Array de arrays ${JSON.stringify(listAlunosMedia)}`);
//=======================================================================================================

// includes() - Verifica se um array contém um determinado elemento e retorna true ou false.
const alunos2 = ['João', 'Juliana', 'Caio', 'Ana'];
document.getElementById('idParagrafo7').innerHTML = `Array alunos [${alunos2}]<br>`;
const medias2 = [10, 8, 7.5, 9];
document.getElementById('idParagrafo7').innerHTML += `Array medias [${medias2}]<br>`;
const listAlunosMedia2 = [alunos2, medias2];
document.getElementById('idParagrafo7').innerHTML += `Array multidimensional ${JSON.stringify(listAlunosMedia2)}<br>`;

buscarAlunoNota(listAlunosMedia2, 'Ana');
buscarAlunoNota(listAlunosMedia2, 'Caio');
//=======================================================================================================

// DESESTRUTURAÇÃO DE ARRAY
// const [alunos, media] = listAlunosMedia2; // DESESTRUTURAÇÃO DE ARRAY
//------------------------------------------------------------------------------------------------------

// pos-incremento e pre-incremento
let i = 5;
let valorA = i++; //incrementado após a execução
let valorB = ++i; //incrementado antes de ser usado
console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);
//=======================================================================================================

// Laços de repetição - (for - for in - for of - while - do while - .forEach)

// for classico - for (let indice = 0; indice < array.length; indice++) {};
// O retorno é o índice do array.
const notas3 = [10, 8, 7.5, 9, 7.5];
document.getElementById('idParagrafo8').innerHTML += `Array notas3: ${JSON.stringify(notas3)}<br>`;
let somaNotas = 0;
for (let indice = 0; indice < notas3.length; indice++) {
    somaNotas += notas3[indice];
    console.log(`Indice: ${indice} Nota: ${notas3[indice]}`);
    document.getElementById('idParagrafo8').innerHTML += `Indice: ${indice} Nota: ${notas3[indice]}<br>`;
    //retorna: Indice: 0 Nota: 10, Indice: 1 Nota: 8, Indice: 2 Nota: 7.5, Indice: 3 Nota: 9, Indice: 4 Nota: 7.5
};
let mediaNotas3 = somaNotas / notas3.length;
document.getElementById('idParagrafo8').innerHTML += `A Média de todas as notas é: ${mediaNotas3}<br>`;
//---------------------------------------------------------------------------------------------------------------

// for of - for (let elemento of array) {};
// O for of, percorre os elementos do array, e não os índices.
// O retorno é o elemento do array. Porque o for of não altera o array original.
document.getElementById('idParagrafo9').innerHTML += `for of - for (let elemento of array) {} ${JSON.stringify(notas3)}<br>`;
for (const element of notas3) {
    console.log(`Nota: ${element}`);
    document.getElementById('idParagrafo9').innerHTML += `FOR OF - Nota: ${element}<br>`;
}

//---------------------------------------------------------------------------------------------------------------

// for in - for (let indice in array) {};
// O for in, percorre os índices do array, e não os elementos.
document.getElementById('idParagrafo10').innerHTML += `for in - for (let indice in array) {} ${JSON.stringify(notas3)}<br>`;
for (const indice in notas3) {
    console.log(`Indice: ${indice} Nota: ${notas3[indice]}`);
    document.getElementById('idParagrafo10').innerHTML += `FOR IN - Indice: ${indice} Nota: ${notas3[indice]}<br>`;
}
//---------------------------------------------------------------------------------------------------------------

// .forEach() - array.forEach((elemento, indice, array) => {});
// O método forEach() executa uma dada função em cada elemento de um array. E retorna undefined.
document.getElementById('idParagrafo11').innerHTML += `forEach() - array.forEach((elemento, indice, array) => {}) ${JSON.stringify(notas3)}<br>`;
metodoForEach(notas3);
//---------------------------------------------------------------------------------------------------------------

// while - O laço de repetição while executa a instrução especificada enquanto a condição especificada for verdadeira.
let controle = 0;
let arrayContagem = [];
while (controle < 10) {
    // console.log(controle);
    arrayContagem.push(controle);
    controle++;
};
document.getElementById('idParagrafo12').innerHTML += `while(condição) {} - ${JSON.stringify(arrayContagem)}<br>`;
console.log("Fim do laço while", arrayContagem);
