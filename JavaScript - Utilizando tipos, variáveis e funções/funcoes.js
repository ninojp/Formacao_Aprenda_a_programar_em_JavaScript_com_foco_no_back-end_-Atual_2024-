'use strict';

let dataHoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo'});
console.log(`Aula 5 Funções - Data Atual: ${dataHoje}`); // retorna o timestamp atual
console.log('\n');

// Função sem parâmetros
function exibeNomeEstudante() {
    console.log('Caroline');
};
exibeNomeEstudante();
//------------------------------------------------------------------------------------------

// Função com parâmetros/argumentos
// retorno
function exibeInfosEstudante(nome, nota) {
    // console.log(`o nome é ${nome} e a nota é ${nota}`);
    return `o nome é ${nome} e a nota é ${nota}`;
}
// exibeInfosEstudante('Caroline',10);
console.log(exibeInfosEstudante('Caroline',10));
