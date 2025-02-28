'use strict';

export function contaPalavras(texto){
    const arrayObjtsParagrafos = extraiParagrafo(texto);
    const contaPalavraParagrafo = arrayObjtsParagrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    });
    //Poderia ser feito com .filter() e .map(), mas seriam 2 loops
    // .filter((paragrafo) => paragrafo)
    // .map((paragrafo) => { return verificaPalavrasDuplicadas(paragrafo) });
    //Outra Abordagem com .reduce()
    // const contaPalavraParagrafo = arrayDeParagrafos.reduce((acum, paragrafo) => {
    //     if (paragrafo) { return [...acum, verificaPalavrasDuplicadas(paragrafo)]; };
    //     return acum;
    // }, []);
    // console.log(contaPalavraParagrafo);
    return contaPalavraParagrafo;
};
//--------------------------------------------------------------------------

function extraiParagrafo(texto) {
    return texto.toLowerCase().split('\n');
};
//--------------------------------------------------------------------------

// Expressões Regulares - RegEx ou RegExp
// /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
//--------------------------------------------------------------------------
function verificaPalavrasDuplicadas(texto) {
    const arrayPalavras = texto.split(' ');
    const objContagemPalavras = {}
    arrayPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            objContagemPalavras[palavraLimpa] = (objContagemPalavras[palavraLimpa] || 0) + 1;
        };
    });
    return objContagemPalavras;
};
//--------------------------------------------------------------------------
