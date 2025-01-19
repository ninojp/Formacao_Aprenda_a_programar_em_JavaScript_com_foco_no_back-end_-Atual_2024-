'use strict';

// Operador lógico OR (||)
const notaFinal = 7;
const faltas = 3;
if (notaFinal < 7 || faltas > 4) {
    console.log('reprovado, boas festas');
} else {
    console.log('não foi reprovado por falta');
};

// Operador lógico AND (&&)
const notaFinal1 = 7;
// const notaFinal1 = 6;
const faltas1 = 3;
// const faltas1 = 4;
if (notaFinal1 < 7 && faltas1 > 4) {
    console.log('Reprovado! Precisa estudar mais');
} else if (notaFinal1 >= 7 && faltas1 < 4) {
    console.log('Aprovado, Boas férias');
} else {
    console.log('Não foi reprovado por falta');
};

// Utilizando o operador de negação (!)
const notaFinal2 = 6;
const faltas2 = 5; 
const advertencias = 0;

if (notaFinal2 < 7 && faltas2 > 4) {
  console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}

if (faltas2 <=2 && !advertencias){
  console.log('recebeu bônus');
} else {
  console.log('não recebeu bônus');
};
