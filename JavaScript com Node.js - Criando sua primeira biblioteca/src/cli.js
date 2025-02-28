'use strict';
import fs from 'fs';
import path from 'path';
import trataErros from './funcoesErro/funcoesErro.js';
import { contaPalavras } from './index.js';
import { exibeResultados } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';
// O process.argv é uma instrução do NODE, esta propriedade retorna um array contendo os 
//argumentos de linha de comando passados ​​quando o processo Node.js foi iniciado. 
// O primeiro elemento será process.execPath. Veja process.argv0, se o acesso ao valor original de argv[0] é necessário. 
// O segundo elemento será o caminho para o arquivo JavaScript que está sendo executado. 
// Os elementos restantes serão quaisquer argumentos de linha de comando adicionais.

// const caminhoArquivo = process.argv;
// const linkArquivo = caminhoArquivo[2]
// const enderecoNomeSalvar = caminhoArquivo[3];

const program = new Command();
program.version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;
        if (!texto || !destino) {
            console.error(chalk.red('erro: favor inserir caminho de origem e destino'));
            program.help();
            return;
        };
        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);
        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Texto processado com sucesso!'));
        } catch (error) {
            console.error(chalk.red('Erro! ao processar arquivo - ERRO: ', error));
            throw error;
        };
    });
program.parse();
//==========================================================================================

function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro;//O THROW assim como o RETURN, interrompe a execução do código!
            //Por isso FOI USADO o bloco TRY-CATCH para capturar o erro e tratar, sem necessáriamente interromper a execução do código
            const arrayObjtsParagrafos = contaPalavras(texto);
            // console.log(arrayObjtsParagrafos);        
            criaESalvaArquivo(arrayObjtsParagrafos, destino);
        } catch (erro) {
            // if(erro.code === 'ENOENT') console.log('ERRO! esperado: ', erro);
            // else console.log('Outro erro!', erro);
            console.log(chalk.red(trataErros(erro)));
            throw erro;
        };
    });
};
//==========================================================================================

async function criaESalvaArquivo(arrayObjtsParagrafos, enderecoSalvar) {
    try {
        const enderecoNomeArquivo = `${enderecoSalvar}/resultado.txt`;
        // const conteudoArquivo = JSON.stringify(arrayObjtsParagrafos);
        const conteudoArquivo = exibeResultados(arrayObjtsParagrafos);
        await fs.promises.writeFile(enderecoNomeArquivo, conteudoArquivo, 'utf-8');
        console.log(chalk.green('Arquivo criado com sucesso!'));
    } catch (error) {
        console.log(trataErros(error));
    };
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
