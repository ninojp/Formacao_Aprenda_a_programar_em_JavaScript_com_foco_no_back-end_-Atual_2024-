'use strict';

export default function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        // throw new Error('Arquivo de texto não encontrado!');// Se quiser visualizar o Objeto de erro.
        return 'Arquivo de texto não encontrado!\n', erro;
    } else {
        return 'Erro inesperado!';
    };
};
// module.exports = trataErros;//exportação via require
