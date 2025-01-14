'use strict';

// if (1 > 0) {
//     var estudante = 'Caroline';
//     console.log(estudante);
// };
// estudante = 'Ana';
// console.log(estudante);

//==================================================================================
// Criando uma CONST, podemos acessa-la dentro do(escopo) IF(){}, mas não podemos altera-la

// let estudante;
const estudante = 'Caroline';
if (1 > 0) {
    // estudante = 'Caroline';
    console.log(estudante);
};
// estudante = 'Ana';
console.log(estudante);

//==========================================
//Exercício
if (true) {
    let num1 = 10;
    var num2 = 20;
    console.log('LET: ' + num1);
    console.log('VAR: ' + num2);
}
// console.log('LET: ' + num1);//Erro
console.log('VAR: ' + num2);
