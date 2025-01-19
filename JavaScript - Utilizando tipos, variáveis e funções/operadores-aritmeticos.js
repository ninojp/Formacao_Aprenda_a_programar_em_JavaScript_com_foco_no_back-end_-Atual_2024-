'use strict';

const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

//teste meu
// media >= 7? media = 'Aprovado': media = 'Reprovado';
// console.log(media);

if(media >= 7){
    media += media * 0.1;
    console.log(`Aprovado: A média é = ${media.toFixed(2)}`);
}else{
    console.log(`Reprovado: A média é = ${media.toFixed(2)}`);
};

// Exercício Proposto, Luri
const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
// 3500 - 1200 - 500 = 1800 * 12 = 21600 + 800 * 12 = 9600 + 3000 = 34200
console.log(`O resultado é = ${resultado}`);

// Exercício 2
let resultado2;
resultado2 = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado2); //27.333333333...
//Se considerarmos a precedência correta das operações matemáticas primeiro ocorre a multiplicação (5 * 2), depois a divisão ((5 * 2) / 3), em seguida, as operações de adição e subtração. Por tanto o código ficaria assim:
//let resultado;
//resultado = 10 + ((5 * 2) / 3) - 7 + ((15 * 3) / 5) + 20 - (4 * 2);
//resultado = 10 + (10 / 3) - 7 + (45 / 5) + 20 - 8;
//resultado = 10 + 3.33 - 7 + 9 + 20 - 8;
//resultado = 10 + 3.33 - 7 + 9 + 20 - 8;
//resultado = 27.33;

// Exercício 3 - Operadores de incremento
let contadorVisitas = 0;
console.log(contadorVisitas);

contadorVisitas = contadorVisitas + 1;
console.log(contadorVisitas);

contadorVisitas += 1;
console.log(contadorVisitas);

contadorVisitas++;
console.log(contadorVisitas);
