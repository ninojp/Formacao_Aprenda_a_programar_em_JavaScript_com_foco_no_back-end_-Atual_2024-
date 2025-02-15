'use strict';

async function conectAPIAlura(){
    try {
        const respostaAPI = await fetch('https://www.alura.com.br/api/formacao-programacao');
        if(!respostaAPI.ok){
           throw new Error('Não foi possível conectar a API_ALURA');
        }
        const objDadosAPI = await respostaAPI.json();
        console.log(objDadosAPI, typeof objDadosAPI);
    } catch (error) {
        console.error('Houve um problema com a requisição:', error);
    }
};
conectAPIAlura();
