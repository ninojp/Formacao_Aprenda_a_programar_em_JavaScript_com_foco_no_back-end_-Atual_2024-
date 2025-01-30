'use strict';

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
alunos.forEach((aluno, indice) => {
    console.log(`Indice: ${indice} Aluno: ${aluno}`);
});
//================================================================================================

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array 
//e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento
//do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
function executaOperacaoEmArray(array, fnCallBack) {
    return array.map(fnCallBack);//o parametro da função não é passado, pois o map já faz isso.
}
function concatenaString(elemento) {
    return elemento + ' -01';
};
console.log('Exercício 4 - ', executaOperacaoEmArray(alunos, concatenaString));
//================================================================================================

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico
//está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, 
//se o número não estiver presente, o programa deve retornar "-1".
const numeros = [10, 20, 30, 40, 50];
const numeroProcurado = 30;
let posicao = -1;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}
console.log(`Exercício 3, Posição do número ${numeroProcurado}: ${posicao}`);
//================================================================================================

// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. 
//Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. 
//Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, 
//retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
const nomesTurmaA = ['João Silva', 'Maria Santos', 'Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'];
const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
console.log('Exercício 4 - ', todosAlunos);
// todosAlunos.find((aluno) => aluno === 'Ana Souza' ? console.log('Exercício 4 - Aluno encontrado ', aluno) : console.log('Exercício 4 - Aluno não encontrado ', aluno));
const alunoProcurado = todosAlunos.find(nome => nome === 'Ana Souza');
if (alunoProcurado) {
  console.log('Aluno(a) encontrado:', alunoProcurado);
} else {
  console.log(`Aluno(a): ${alunoProcurado} não foi encontrado!`);
};
//================================================================================================

// 5 - Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. 
//Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
const numerosLista = [6, 9, 12, 15, 18, 21];
numerosLista.forEach((numero) => {
    console.log(`Exercício 5 - ${numero} * 3 = ${numero * 3}`);
});
numerosLista.findIndex((numero) => numero === 18 ? console.log(`Exercício 5 - O número 18 está na posição: ${numerosLista.indexOf(numero)}`) : '');

//Sulução do professor
const numers = [6, 9, 12, 15, 18, 21];
console.log('Elementos do array multiplicados por 3:');
numers.forEach(numero => {
  const resultado = numero * 3;
  console.log(resultado);
});
const indiceDoNumero18 = numers.findIndex(numero => numero === 18);
if (indiceDoNumero18 !== -1) {
  console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
} else {
  console.log('O número 18 não está presente no array.');
}
//================================================================================================
