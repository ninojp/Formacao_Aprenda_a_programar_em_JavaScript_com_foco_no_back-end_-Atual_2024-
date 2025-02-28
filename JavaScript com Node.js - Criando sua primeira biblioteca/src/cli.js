'use strict';
import fs from 'fs';
import trataErros from './funcoesErro/funcoesErro.js';
import { contaPalavras } from './index.js';
import { exibeResultados } from './helpers.js';
// O process.argv é uma instrução do NODE, esta propriedade retorna um array contendo os 
//argumentos de linha de comando passados ​​quando o processo Node.js foi iniciado. 
// O primeiro elemento será process.execPath. Veja process.argv0, se o acesso ao valor original de argv[0] é necessário. 
// O segundo elemento será o caminho para o arquivo JavaScript que está sendo executado. 
// Os elementos restantes serão quaisquer argumentos de linha de comando adicionais.
const caminhoArquivo = process.argv;
const linkArquivo = caminhoArquivo[2]
const enderecoNomeSalvar = caminhoArquivo[3];

fs.readFile(linkArquivo, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;//O THROW assim como o RETURN, interrompe a execução do código!
        //Por isso FOI USADO o bloco TRY-CATCH para capturar o erro e tratar, sem necessáriamente interromper a execução do código
        const arrayObjtsParagrafos = contaPalavras(texto);
        // console.log(arrayObjtsParagrafos);        
        criaESalvaArquivo(arrayObjtsParagrafos, enderecoNomeSalvar);
    } catch (erro) {
        // if(erro.code === 'ENOENT') console.log('ERRO! esperado: ', erro);
        // else console.log('Outro erro!', erro);
        console.log(trataErros(erro));
    };
});
//==========================================================================================

async function criaESalvaArquivo(arrayObjtsParagrafos, enderecoSalvar){
    try {
        const enderecoNomeArquivo = `${enderecoSalvar}/resultado.txt`;
        // const conteudoArquivo = JSON.stringify(arrayObjtsParagrafos);
        const conteudoArquivo = exibeResultados(arrayObjtsParagrafos);
        await fs.promises.writeFile(enderecoNomeArquivo, conteudoArquivo, 'utf-8');
        console.log('Arquivo criado com sucesso!');
    } catch (error) {
        trataErros(error);
    }
};
//=========================================================================================

//Usando o .then() para tratar o retorno da PROMISE, .catch() para tratar o erro e 
//O .finally() é executado sempre, independente de ter ocorrido erro ou não.
// function criaESalvaArquivo(arrayObjtsParagrafos, enderecoSalvar) {
//     const enderecoNomeArquivo = `${enderecoSalvar}/resultado.txt`;
//     const conteudoArquivo = JSON.stringify(arrayObjtsParagrafos);
//     fs.promises.writeFile(enderecoNomeArquivo, conteudoArquivo, 'utf-8')
//         .then(() => console.log('Arquivo criado com sucesso!'))
//         .catch((error) => trataErros(error))
//         .finally(() => console.log('Fim da execução!'));
// };
