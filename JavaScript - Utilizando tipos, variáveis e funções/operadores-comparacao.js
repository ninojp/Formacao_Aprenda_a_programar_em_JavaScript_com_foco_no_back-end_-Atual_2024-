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
};
//======================================================
if ("0" == 0) {
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }

if ("0" === 0) {
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }
//======================================================
const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima) {
  console.log('não precisa de autorização');
} else {
  console.log('precisa de autorização');
}
//======================================================

// testes meus... 
console.dir(document.location);

let dataAtualPtBr = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo'});
console.log(dataAtualPtBr); // retorna o timestamp atual
