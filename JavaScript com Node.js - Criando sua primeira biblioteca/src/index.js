'use strict';
const fs = require('node:fs');
// O process.argv é uma instrução do NODE, esta propriedade retorna um array contendo os 
//argumentos de linha de comando passados ​​quando o processo Node.js foi iniciado. 
// O primeiro elemento será process.execPath. Veja process.argv0, se o acesso ao valor original de argv[0] é necessário. 
// O segundo elemento será o caminho para o arquivo JavaScript que está sendo executado. 
// Os elementos restantes serão quaisquer argumentos de linha de comando adicionais.
const caminhoArquivo = process.argv;
const linkArquivo = caminhoArquivo[2]

fs.readFile(linkArquivo, 'utf-8', (erro, texto) => {
    if (erro) throw erro;
    quebraEmParagrafo(texto);
});
//--------------------------------------------------------------------------
function quebraEmParagrafo(texto) {
    const arrayDeParagrafos = texto.toLowerCase().split('\n');
    // const contaPalavraParagrafo = arrayDeParagrafos.flatMap((paragrafo) => {
    //     if(!paragrafo) return [];
    //     return verificaPalavrasDuplicadas(paragrafo);
    // });

    //Poderia ser feito com .filter() e .map(), mas seriam 2 loops
    // .filter((paragrafo) => paragrafo)
    // .map((paragrafo) => { return verificaPalavrasDuplicadas(paragrafo) });

    // Outra Abordagem com .reduce()
    const contaPalavraParagrafo = arrayDeParagrafos.reduce((acum, paragrafo) => {
        if (paragrafo) {
            return [...acum, verificaPalavrasDuplicadas(paragrafo)];
        };
        return acum;
    }, []);
    console.log(contaPalavraParagrafo);
}
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
