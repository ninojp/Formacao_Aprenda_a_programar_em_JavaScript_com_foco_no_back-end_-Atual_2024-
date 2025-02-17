'use strict';
const fs = require('fs');
// O process.argv é uma instrução do NODE, esta propriedade retorna um array contendo os 
//argumentos de linha de comando passados ​​quando o processo Node.js foi iniciado. 
// O primeiro elemento será process.execPath. Veja process.argv0, se o acesso ao valor original de argv[0] é necessário. 
// O segundo elemento será o caminho para o arquivo JavaScript que está sendo executado. 
// Os elementos restantes serão quaisquer argumentos de linha de comando adicionais.
const caminhoArquivo = process.argv;
// console.log(caminhoArquivo);
const linkArquivo = caminhoArquivo[2]
// console.log(linkArquivo);

fs.readFile(linkArquivo, 'utf-8', (erro, texto) => {
    if(erro) throw erro;
    console.log(texto);
});
