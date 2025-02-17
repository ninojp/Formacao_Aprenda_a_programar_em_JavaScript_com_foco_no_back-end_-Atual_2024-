'use strict';
import dotHack from './dotHack.json' with{type: 'json'};
const animes = [
    {
        id: 1,
        nome: '.Hack',
        listaMalID: [48, 298, 454, 873, 1143, 1487, 1994, 3269, 9332, 10390, 2928],
        imgNome: 'exemplo.jpeg'
    },
    {
        id: 2,
        nome: '7 seeds',
        listaMalID: [48],
        imgNome: 'exemplo.jpeg'
    },
    {
        id: 3,
        nome: '7 s',
        listaMalID: [28],
        imgNome: 'exemplo.jpeg'
    },
    {
        id: 4,
        nome: 'eeds',
        listaMalID: [48],
        imgNome: 'exemplo.jpeg'
    },
    {
        id: 5,
        nome: 'ds',
        listaMalID: [8],
        imgNome: 'exemplo.jpeg'
    },
    {
        id: 6,
        nome: 'Seeds',
        listaMalID: [4],
        imgNome: 'exemplo.jpeg'
    }
];

function encontrarAnimePorId(id) {
    //Resposta Professor
    // return biblioteca.find(livro => livro.id === id) || null;
    const animeEncontrado = animes.find((anime) => anime.id === id);
    if (animeEncontrado) {
        console.log(`Anime Encontrado: ${JSON.stringify(animeEncontrado)}`);
    } else {
        console.log('Nenhum Anime corrêsponde a este ID!');
    }
    // return animeEncontrado;
}
// console.log(encontrarAnimePorId(4));
console.log(`Aula 5 - Exercício 1:`);
encontrarAnimePorId(4)
//======================================================================================================

//2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:
console.log(`\nAula 5 - Exercício 2:`);
// console.log(Object.keys(dotHack), typeof dotHack);
// console.log(dotHack.animes);
function filtrarAnimesPorAno(ano4dig) {
    const resAnimesFiltrados = dotHack.animes.filter(anime => anime.inicio?.includes(ano4dig));
    return resAnimesFiltrados.length === 0 ? 'Nenhum Anime Encontrado!' : resAnimesFiltrados;
    // if (resAnimesFiltrados.length === 0) {
    //     console.log('Nenhum Anime Encontrado!');
    // }else{
    //     return resAnimesFiltrados;
    // };
};
const animesFiltrados = filtrarAnimesPorAno(2003);
console.log(animesFiltrados, animesFiltrados.length, typeof animesFiltrados);
// filtrarAnimesPorAno(2002);
//===============================================================================================

//3. - Crie um array de objetos JavaScript representando informações fictícias de produtos. 
//Cada objeto deve conter pelo menos as seguintes propriedades:
console.log(`\nAula 5 - Exercício 3:`);
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
];
function filtrarOrdenarProdutosPorPreco(maxPreco) {
    const resultMenorPreco = listaProdutos.filter(produto => produto.preco <= maxPreco);
    return resultMenorPreco.sort((a, b) => {
        if (a.preco < b.preco) return -1;
        if (a.preco > b.preco) return 1;
        return 0;
    });
    //Resposta Professor
    //return produtosFiltrados.sort((a, b) => a.preco - b.preco);
};
const listaProdPorPreco = filtrarOrdenarProdutosPorPreco(49.99);
console.log('Lista Ordenada: ', listaProdPorPreco, typeof listaProdPorPreco);
//==================================================================================================

//4. - Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]
console.log(`\nAula 5 - Exercício 4:`);
//Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.
// Função para ordenar animais com base na função de comparação fornecida
function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

// Função de comparação para ordenar por idade de forma crescente
function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
}
// Ordena os animais por idade de forma crescente e imprime no console
const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeCrescente);
console.log("Animais Ordenados por Idade (Crescente):");
console.log(animaisOrdenadosCrescente);

// Função de comparação para ordenar por idade de forma decrescente
function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
}
// Ordena os animais por idade de forma decrescente e imprime no console
const animaisOrdenadosDecrescente = ordenarAnimais(compararIdadeDecrescente);
console.log("\nAnimais Ordenados por Idade (Decrescente):");
console.log(animaisOrdenadosDecrescente);
//=================================================================================================================

//5. - Crie um array de objetos JavaScript representando informações fictícias de departamentos. 
//Cada objeto deve conter pelo menos as seguintes propriedades:
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
];
console.log(`\nAula 5 - Exercício 5:`);
/* Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário
e retorna o objeto do funcionário correspondente em qualquer departamento.

 Utilize a função para encontrar um funcionário com um id existente e imprima 
 no console as informações do funcionário encontrado. Em seguida, utilize a função para 
 encontrar um funcionário com um id inexistente e imprima no console 
 uma mensagem indicando que o funcionário não foi encontrado.*/

function encontrarFuncionarioPorId(id) {
    /* 
    Problemas com .map() e .forEach()
    Uso do .map(): O método .map() é utilizado para transformar cada elemento de um array em um novo array. 
    No seu caso, você está tentando encontrar um funcionário específico, mas o .map() não é a melhor escolha, 
    pois ele retornará um array com os resultados da transformação, mesmo que alguns deles sejam undefined 
    (caso o funcionário não seja encontrado em um departamento). Isso significa que você 
    acabaria com um array de resultados, e não com o funcionário encontrado.
    
    Uso do .forEach(): O método .forEach() é usado para iterar sobre os elementos de um array, mas não retorna um novo array. 
    Ele é útil para executar efeitos colaterais (como imprimir no console), mas não é adequado para encontrar e retornar um valor específico. 
    Assim, você não conseguiria retornar o funcionário encontrado de dentro do .forEach().
    */
    // const funcionarioEncontrado = departamentos.map(dep => dep.funcionarios.find(funcionario => funcionario.id === id));
    // if(funcionarioEncontrado){
    //     return funcionarioEncontrado
    // }
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
    }
    return console.error('Funcionário não encontrado!');
    // return funcionarioEncontrado;
    // return null;
    // console.log(funcionarioEncontrado);
};
// encontrarFuncionarioPorId(201);
console.log(encontrarFuncionarioPorId(101));
// const funcEncontrado = encontrarFuncionarioPorId(100)
// console.log(funcEncontrado);
