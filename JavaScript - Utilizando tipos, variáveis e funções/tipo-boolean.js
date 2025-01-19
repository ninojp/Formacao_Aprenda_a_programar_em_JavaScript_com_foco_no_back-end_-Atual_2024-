'use strict';

const estudante = 'Fernando';

const estaAprovado = true;

if (estaAprovado === true) {
    console.log('parabéns, boas festas');
} else {
    console.log('REPROVADO, boas festas');
}

if (estudante === 'Fernando') {
    console.log(`olá, ${estudante}`);
} else {
    console.log('quem é vc');
}

//Comparações de igualdade e uniformidade
// JavaScript fornece três diferentes operações de comparação de valores:

// igualdade estrita (ou "três iguais" ou "identidade") usando ===,
// igualdade ampla ("dois iguais") usando ==,
// e Object.is (novo no ECMAScript 6).
