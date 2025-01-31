# Curso Alura - JavaScript Conhecendo Objetos

## Aula 1 - O Que são objetos

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Boas-vindas ao curso de Fundamentos do JavaScript para Back-end focado em Objetos!

Me chamo Ju Amoasei e serei a sua instrutora ao longo deste curso.

Audiodescrição: Ju Amoasei se declara como uma mulher branca de cabelos curtos pintados de azul. Veste uma camiseta preta com o logo da Alura e usa óculos de grau com aros vermelhos. No momento do vídeo, se encontra nos estúdios da Alura.

Para quem é esse curso?  
Este curso é voltado para você que está começando em programação e escolheu o JavaScript como linguagem.

Pré-requisitos para acompanhar o curso  
Para que consigam aproveitar melhor o curso, recomendamos fortemente que já tenham feito os cursos anteriores dessa formação. O primeiro de Fundamentos do JavaScript voltado para tipos de dados e funções, e o segundo voltado para Arrays.

Neste curso não vamos abordar nada que é relacionado a front-end, embora alguns dos conteúdos possam ser cruzados ou relacionados.

- O que aprenderemos?
- O que é um objeto;
- importância do objeto;
- estrutura básica do objeto;
- manipulação de objetos;
- formato json;

pratica.  
Neste curso, exploraremos os conceitos fundamentais de objetos, compreendendo sua definição, a importância que têm e a estrutura básica (sintaxe) em JavaScript.

Além disso, aprenderemos a manipular objetos através de métodos específicos, entenderemos o formato de dados JSON e sua conexão com os objetos em JavaScript. Para consolidar o aprendizado, iremos aplicar esses conhecimentos em casos reais e práticos de projeto.

Aproveitem os recursos da plataforma! Além dos vídeos, temos o apoio do fórum e a comunidade no Discord, que está pronta e aberta para receber a sua participação e também as suas dúvidas.

### Aula 1 - O que são objetos - Vídeo 2

Transcrição
Neste curso, continuaremos trabalhando no contexto de uma escola. Portanto, teremos listas de professores, listas de pessoas estudantes, etc.

Compreendendo o Curso: O Estudo de Objetos
Antes de iniciarmos, é importante compreender o que abordaremos neste curso, que é o estudo de objetos. Conforme indicado pelo título, iremos criar um arquivo denominado objeto.js no Visual Studio Code (VSC) e explorar essa estrutura.

Para isso, do lado esquerdo clicamos em "New File", digitamos "objeto.js" e posteriormente teclamos "Enter".

Aprendemos anteriormente, em outros cursos desta formação, uma estrutura de dados que chamamos de array (lista ordenada). Agora, precisamos trabalhar com outro tipo de estrutura de dados e veremos as diferenças entre eles.

Iniciando com Arrays: Estruturas de Dados Básicas
Suponha que queremos armazenar todos os números de CPF das pessoas estudantes da nossa escola. Podemos criar uma constante chamada listaCPFs e, entre colchetes, passar todas essas strings de CPF. O CPF é uma sequência numérica de 11 dígitos.

objeto.js

const listaCPFs = ['12312312312', '123234435345'];
Copiar código
O array funciona muito bem para este caso, pois não temos apenas um tipo de dado, temos uma descrição de um dado, um CPF, por exemplo.

Transição para Estruturas Mais Complexas
Entretanto, imagine que precisamos armazenar mais informações sobre uma pessoa estudante além do CPF. Como poderíamos fazer isso utilizando um array? Uma abordagem seria criar uma constante chamada infosPessoa e começar a listar esses dados. O primeiro conjunto de informações seria o nome, precisamos indicar que esse dado é um nome.

Assim, nós iniciamos uma string (aspas simples), escrevemos o nome e, em seguida, passamos o nome da pessoa, como por exemplo, José Silva. Além disso, a pessoa estudante pode ter uma idade associada. Dessa forma, adicionamos outra string, 'idade', e então fornecemos a idade da pessoa estudante, como por exemplo, 32 anos.

objeto.js

const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
Copiar código
Entretanto, já se percebe que o array não é ideal para armazenar este tipo específico de estrutura de dados. Se quisermos, por exemplo, acessar o nome do estudante, teríamos que usar console.log() no índice [1] do array, assumindo que José Silva está nessa posição.

objeto.js

const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
console.log(infosPessoa[1]);
Copiar código
Podemos até realizar testes no terminal para verificar se isso funciona. Para isso, clicamos em "Terminal > New Terminal" na parte superior esquerda. O terminal será exibido na parte inferior do VSCode (garanta que a pasta que está rodando é a correta) e usamos o comando node:

node objeto.js
Copiar código
Obtemos como retorno:

José Silva

Contudo, é evidente que o array não é a melhor escolha neste cenário, já que os dados como nome, idade, CPF e descrição são armazenados sequencialmente, sem um indicador lógico de qual é qual.

Introdução a Objetos no JavaScript
Se pegarmos essas informações e passarmos para uma estrutura que chamamos de objeto, como ficaria? Vamos criar outra constante chamada objPessoa e usar o símbolo de igual para atribuir uma variável e abrir chaves, não colchetes.

objeto.js

const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
console.log(infosPessoa[1]);

const objPessoa = {

}
Copiar código
Dentro destas chaves, vamos fornecer o nome e o CPF da seguinte forma: primeiro, o nome, que pode ser simplesmente uma variável, não necessariamente uma string. Utilizamos dois pontos e, em seguida, uma string para indicar o nome da pessoa, como por exemplo, "José Silva": nome: 'José Silva'.

Após quebrar a linha (não obrigatório, mas utilizado para uma melhor formatação), passaremos a idade, representada por um número, como por exemplo, 32. Além disso, podemos incluir outro dado, o CPF, seguido por uma sequência numérica de 11 dígitos qualquer. Por exemplo, para representar a turma da pessoa, utilizaremos o dado chamado "turma", que será uma string, como "JavaScript", indicando que esta pessoa é estudante do curso de JavaScript.

objeto.js

const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
console.log(infosPessoa[1]);

const objPessoa = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
Copiar código
Agora, podemos observar tanto o array quanto o objeto, e perceber que a estrutura de objeto funciona muito melhor quando precisamos armazenar grupos mais complexos de informações.

O array funciona muito bem quando desejamos armazenar grupos de um único tipo de informação, seja string, seja número, por exemplo, listas de CPFs, ou mesmo listas de nomes. Vamos aprender como trabalhar com casos um pouco mais complexos de array ainda neste curso.

Objetos Como Representação da Realidade
No entanto, ao tentarmos representar a realidade, como por exemplo, descrever uma pessoa, um usuário ou um computador, os quais consistem em diversos conjuntos de informações como nome, idade, CPF, endereço, celular, entre outros, utilizamos uma estrutura de dados chamada objeto. O principal conceito por trás de um objeto é justamente tentar refletir, de maneira abstrata, as entidades da vida real.

Próximos Passos
Vamos agora praticar e entender como interagimos com essas propriedades.

### Aula 1 -  - Vídeo 3
### Aula 1 -  - Vídeo 4
### Aula 1 -  - Vídeo 5
### Aula 1 -  - Vídeo 6
