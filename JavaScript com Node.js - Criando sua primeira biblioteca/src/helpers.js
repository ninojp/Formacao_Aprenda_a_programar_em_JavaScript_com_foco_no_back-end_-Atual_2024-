'use strict';

function filtrarOcorencias(objParagrafo){
    return Object.keys(objParagrafo).filter((ChaveObj) => objParagrafo[ChaveObj] > 1);
};
//--------------------------------------------------------------------------------
export function exibeResultados(arrayObjtsParagrafos) {
    let textoFinal = '';
    arrayObjtsParagrafos.forEach((objParagrafo, indice) => {
        const palavrasDuplicadas = filtrarOcorencias(objParagrafo).join(', ');
        if(palavrasDuplicadas !== ''){
            textoFinal += `\nParagrafo ${indice +1}: Palavras com mais de uma ocorrência ==> ${palavrasDuplicadas}\n`;
            return;
        };
    });
    console.log('\n function exibeResultados(): ', textoFinal);
    return textoFinal;
};
//--------------------------------------------------------------------------------
