'use strict';
import pLimit from 'p-limit';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function conectaAPIJikan(id_mal) {
    await delay(600);//Delay de 333ms para limitar a 3 requisições por segundo
    try {
        const respostaAPIJikan = await fetch(`https://api.jikan.moe/v4/anime/${id_mal}/full`);
        if (!respostaAPIJikan.ok) {
            throw new Error(`Erro na requisição: ${respostaAPIJikan.statusText}`);
        };
        const objDadosJikam = await respostaAPIJikan.json();
        return objDadosJikam.data;
        // console.log(objDadosJikam, typeof objDadosJikam);
    } catch (error) {
        console.error(`Erro ao conectar com API para o ID ${id_mal}:`, error);
        throw error;
    };
};

//https://api.jikan.moe/v4/anime/${id}/full
//https://api.jikan.moe/v4/genres/anime
//https://api.jikan.moe/v4/top/anime

// const objGenerosAnimes = await conectaAPIJikan();
// console.log(objGenerosAnimes.data, typeof objGenerosAnimes);
// const chaves = Object.keys(objGenerosAnimes);
// console.log(chaves, '\n');//Retornou data

// const listaNomesGeneros = objGenerosAnimes.data.map((ojbGenero) => ojbGenero.name);
// console.log(listaNomesGeneros, listaNomesGeneros.length -1);
export default conectaAPIJikan;
//=====================================================================================

//Colocar em um ARQUIVO SEPARADO
const arrayAnimes = anime.listaMalID;
async function listaTodosAnimes(listAnimes) {
    const limit = pLimit(1); //(AGORA 2) Limitar a 3 requisições simultâneas
    const results = await Promise.all(listAnimes.map((id_mal) => 
        limit(async () => {
            try {
                const resultado = await conectaAPIJikan(id_mal);
                return resultado;
            } catch (error) {
                console.error(`Erro ao conectar com API para o ID ${id_mal}:`, error);
                throw error;
            }
        })
    ));
    return results;
};
(async () => {
    try {
        const listDAnimes = await listaTodosAnimes(arrayAnimes);
        console.log(listDAnimes);
    } catch (error) {
        console.error('Erro ao obter lista de animes:', error);
        throw error;
    }
})();
//=====================================================================================
