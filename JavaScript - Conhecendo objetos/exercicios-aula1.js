'use strict';

/*
1. Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro.
O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.

No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
*/
console.log("Exercício 1: ");
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
};
console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero} \n`);
//--------------------------------------------------------------------------------------

/* 2. Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. 
Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
*/
const anoAtual = new Date().getFullYear();
console.log('Exercício 2 - Data Atual: ', anoAtual);
const livro2 = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    genero: "Romance",
    anoPublicacao: 1988,
};
const publicadoAh = (anoAtual - livro2.anoPublicacao);
console.log(publicadoAh);

livro2.idadePublicacao = publicadoAh;
console.log(livro2);

//Resposta do professor
// livro.js
const anoAtual1 = new Date().getFullYear();
const livro1 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoDePublicacao: 1954,
    genero: "Fantasia",
};
// Adicionando a propriedade idadePublicacao diretamente ao objeto livro
livro1.idadePublicacao = anoAtual1 - livro1.anoDePublicacao;
// Criando uma string com os detalhes do livro, incluindo a idade de publicação
livro1.mostrarDetalhes = "Detalhes do Livro:\n" +
    "Título: " + livro1.titulo + "\n" +
    "Autor: " + livro1.autor + "\n" +
    "Ano de Publicação: " + livro1.anoDePublicacao + "\n" +
    "Gênero: " + livro1.genero + "\n" +
    "Idade de Publicação: " + livro1.idadePublicacao + " anos";
// Exibindo os detalhes do livro no console
console.log(livro1.mostrarDetalhes);
//----------------------------------------------------------------------------------------

//3. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
//Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
console.log('Exercício 3: ');
const livro3 = {
    titulo: "O Hobbit",
    autor: "Sei lá",
    genero: "Romance",
    anoPublicacao: 1994,
};
livro3.idadeDaPublicacao = anoAtual1 - livro3.anoPublicacao;
console.log(livro3);
// Exemplos de acesso direto às propriedades do objeto livro
console.log("Detalhes do Livro:");
console.log("Título: " + livro['titulo']);
console.log("Autor: " + livro['autor']);
console.log("Ano de Publicação: " + livro['anoPublicacao']);
console.log("Gênero: " + livro['genero']);
console.log("Idade de Publicação: " + livro['idadePublicacao'] + " anos");
//----------------------------------------------------------------------------------------

/*4. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
  Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
No final do arquivo livro.js, adicione uma avaliação ao objeto.
Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
*/ console.log('Exercício 4: ');
const livro4 = {
    titulo: "O Silmarillion",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    anoPublicacao: 1977,
    idadeDaPublicacao: anoAtual1 - 1977
};
livro4.avaliacao = null;
console.log(livro4);
// Adicionando uma avaliação fictícia ao objeto livro
const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro4.avaliacao === null) {
    livro4.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
};

// Exibindo detalhes do livro, incluindo a avaliação
console.log("Detalhes do Livro:");
console.log("Título: " + livro4.titulo);
console.log("Autor: " + livro4.autor);
console.log("Ano de Publicação: " + livro4.anoPublicacao);
console.log("Gênero: " + livro4.genero);
console.log("Idade de Publicação: " + livro4.idadeDaPublicacao + " anos");
console.log("Avaliação: " + (livro.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro4.avaliacao.nota + ", Comentário: \"" + livro4.avaliacao.comentario + "\""));

//5. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
console.log('Exercício 5: ');
const livro5 = {
    titulo: "O Titulo",
    autor: "J.R.R.",
    genero: "Fantasia",
    anoPublicacao: 1987,
    idadeDaPublicacao: anoAtual1 - 1977
};
console.log(livro5);
livro5.genero = "Aventura";
console.log(livro5);

//6. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
//Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, 
//verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
console.log('Exercício 6: ');
const livro6 = {
    titulo: "Titulo Livro",
    autor: "EleMesmo",
    genero: "Fantasia",
    anoPublicacao: 1987,
    idadeDaPublicacao: anoAtual1 - 1987,
    avaliacao: { nota: 4.5, comentario: "Ótima leitura!" }
};
// Excluir a propriedade 'avaliacao' do objeto livro
delete livro.avaliacao;

// Exibir detalhes do livro no console sem a avaliação
console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    Idade de Publicação: ${livro.idadePublicacao} anos
    Avaliação: Nenhuma avaliação disponível.`);
//----------------------------------------------------------------------------------------
