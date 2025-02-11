'use strict';
import { metodoPush, calculaMedia, metodoPop, metodoSplice, metodoSlice, metodoConcat, buscarAlunoNota, metodoForEach, atualizarNotas, calculaMediaTurmas } from './arrays-metodos.js';
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
//==================================================================================================================

// for of - for (let elemento of array) {};
// O for of, percorre os elementos do array, e não os índices.
// O retorno é o elemento do array. Porque o for of não altera o array original.
document.getElementById('idParagrafo9').innerHTML += `for of - for (let elemento of array) {} ${JSON.stringify(notas3)}<br>`;
for (const element of notas3) {
    console.log(`Nota: ${element}`);
    document.getElementById('idParagrafo9').innerHTML += `FOR OF - Nota: ${element}<br>`;
}

//==================================================================================================================

// for in - for (let indice in array) {};
// O for in, percorre os índices do array, e não os elementos.
document.getElementById('idParagrafo10').innerHTML += `for in - for (let indice in array) {} ${JSON.stringify(notas3)}<br>`;
for (const indice in notas3) {
    console.log(`Indice: ${indice} Nota: ${notas3[indice]}`);
    document.getElementById('idParagrafo10').innerHTML += `FOR IN - Indice: ${indice} Nota: ${notas3[indice]}<br>`;
}
//==================================================================================================================

// .forEach() - array.forEach((elemento, indice, array) => {});
// O método forEach() executa uma dada função em cada elemento de um array. E retorna undefined.
const notas4 = [10, 8, 7.5, 9, 7.5];
document.getElementById('idParagrafo11').innerHTML += `forEach() - array.forEach((elemento, indice, array) => {}) ${JSON.stringify(notas4)}<br>`;
metodoForEach(notas4);

let somatoria = 0;
notas4.forEach((elemento) => {
    somatoria += elemento;
});
let mediaNotas4 = somatoria / notas4.length;
document.getElementById('idParagrafo11').innerHTML += `forEach() - A média das notas é: ${JSON.stringify(mediaNotas4)}<br>`;
//==================================================================================================================

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
//==================================================================================================================

// .map() - O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
const notasList = [10, 9.5, 8, 7, 6];
document.getElementById('idParagrafo13').innerHTML = `Array Original: ${JSON.stringify(notasList)}<br>`;
console.log(`Array Original: ${JSON.stringify(notasList)}`);
const notasListAtual = atualizarNotas(notasList);
document.getElementById('idParagrafo13').innerHTML += `.map() - Array Atualizado: ${JSON.stringify(notasListAtual)}<br>`;
console.log(`.map() - Array Atualizado: ${JSON.stringify(notasListAtual)}`);
//-------------------------------------------------------------------------------------------------------------------
// Desafio
const nomesList = ["ana Julia", "Caio vinicius", "BIA silva"];
document.getElementById('idParagrafo13').innerHTML += `Array nomesList: ${JSON.stringify(nomesList)}<br>`;
console.log(`Array nomesList: ${JSON.stringify(nomesList)}`);

const nomesPadronizadosUp = nomesList.map(nome => nome.toLocaleUpperCase());
document.getElementById('idParagrafo13').innerHTML += `Array Padronizado toLocaleUpperCase:<br> ${JSON.stringify(nomesPadronizadosUp)}<br>`;
console.log(`Array Padronizado toLocaleUpperCase:: ${JSON.stringify(nomesPadronizadosUp)}`);

const nomesPadronizadosDown = nomesList.map(nome => nome.toLocaleLowerCase());
document.getElementById('idParagrafo13').innerHTML += `Array Padronizado toLocaleLowerCase:<br> ${JSON.stringify(nomesPadronizadosDown)}<br>`;
console.log(`Array Padronizado toLocaleLowerCase:: ${JSON.stringify(nomesPadronizadosDown)}`);
//==================================================================================================================

// filter() - O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const listAlunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
document.getElementById('idParagrafo14').innerHTML += `Array listAlunos: ${JSON.stringify(listAlunos)}<br>`;
const listMedias = [7, 4.5, 8, 7.5];
document.getElementById('idParagrafo14').innerHTML += `Array listMedias: ${JSON.stringify(listMedias)}<br>`;

const alunosReprovados = listAlunos.filter((_, indice) => {
    return listMedias[indice] < 7; //se a validação for verdadeira, o elemento é adicionado ao novo array.
    // return aluno.length < 4;
});
document.getElementById('idParagrafo14').innerHTML += `filter() - Alunos Reprovados: ${JSON.stringify(alunosReprovados)}<br>`;
console.log(`filter() - Alunos Reprovados: ${alunosReprovados}`);
//==================================================================================================================

// reduce() - O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
const turmaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
document.getElementById('idParagrafo15').innerHTML = `Array turmaJS: ${JSON.stringify(turmaJS)}<br>`;
const turmaJava = [6, 5, 8, 9, 5, 6];
document.getElementById('idParagrafo15').innerHTML += `Array turmaJava: ${JSON.stringify(turmaJava)}<br>`;
const turmaPython = [7, 3.5, 8, 9.5];
document.getElementById('idParagrafo15').innerHTML += `Array turmaPython: ${JSON.stringify(turmaPython)}<br>`;

console.log(calculaMediaTurmas(turmaJS));
document.getElementById('idParagrafo15').innerHTML += `Média turmaJS: ${JSON.stringify(calculaMediaTurmas(turmaJS))}<br>`;
console.log(calculaMediaTurmas(turmaJava));
document.getElementById('idParagrafo15').innerHTML += `Média turmaJava: ${JSON.stringify(calculaMediaTurmas(turmaJava))}<br>`;
console.log(calculaMediaTurmas(turmaPython));
document.getElementById('idParagrafo15').innerHTML += `Média turmaPython: ${JSON.stringify(calculaMediaTurmas(turmaPython))}<br>`;
//==================================================================================================================

// Clonando arrays - spread operator
const notas5 = [7, 7, 8, 9];
document.getElementById('idParagrafo16').innerHTML = `Array notas5: ${JSON.stringify(notas5)}<br>`;

// com tipos de dados primitivos, para clona-los, basta fazer a atribuição de um array para outro.
let nota = 9.75;
let novaNota = nota;// novaNota é uma cópia de nota.
nota = 10 //não altera a novaNota.
console.log(nota);
console.log(novaNota);

// com arrays, a atribuição de um array para outro, faz com que ambos apontem para o mesmo endereço de memória.
// para clonar um array, pode-se usar o spread operator.
const notas6 = [...notas5, 10];
document.getElementById('idParagrafo16').innerHTML += `Novo Array notas6: ${JSON.stringify(notas6)}<br>`;
console.log('Novo Array notas6: ', notas6);
//==================================================================================================================

// new Set() - O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências de objetos.
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
document.getElementById('idParagrafo17').innerHTML = `Array nomes: ${JSON.stringify(nomes)}<br>`;
console.log('Array nomes: ', nomes);

const setNomesAtualizados = new Set(nomes);
document.getElementById('idParagrafo17').innerHTML += `Set() - setNomesAtualizados: ${setNomesAtualizados}<br>`;
console.log('Set() - setNomesAtualizados: ', setNomesAtualizados);
const arrayNomesAtualizados = [...setNomesAtualizados];
document.getElementById('idParagrafo17').innerHTML += `Array arrayNomesAtualizados: ${JSON.stringify(arrayNomesAtualizados)}<br>`;
console.log('Array arrayNomesAtualizados: ', arrayNomesAtualizados);
//==================================================================================================================
