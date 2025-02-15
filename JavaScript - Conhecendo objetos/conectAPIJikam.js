'use strict';
async function conectaAPIJikan(){
    //https://api.jikan.moe/v4/anime/${id}/full
    //https://api.jikan.moe/v4/genres/anime
    //https://api.jikan.moe/v4/top/anime
    try {
        const respostaAPIJikan = await fetch(`https://api.jikan.moe/v4/genres/anime`);
        if (!respostaAPIJikan.ok) {
            throw new Error('Não foi possível conectar a API JIKAN!');
        };
        const objDadosJikam = await respostaAPIJikan.json();
        return objDadosJikam;
        // console.log(objDadosJikam, typeof objDadosJikam);
    } catch (error) {
        console.log('Ocorreu um erro ao conectar na API Jikan', error);
    };
};
const objGenerosAnimes = await conectaAPIJikan();
// console.log(objGenerosAnimes.data, typeof objGenerosAnimes);
// const chaves = Object.keys(objGenerosAnimes);
// console.log(chaves, '\n');//Retornou data

const listaNomesGeneros = objGenerosAnimes.data.map((ojbGenero) => ojbGenero.name);
console.log(listaNomesGeneros, listaNomesGeneros.length -1);
