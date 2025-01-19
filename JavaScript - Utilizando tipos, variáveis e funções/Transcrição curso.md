# Curso Alura JavaScript: utilizando tipos, variáveis e funções

## Aula 1 - JS, Node.js e o Back-end

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá! Boas-vindas ao curso de fundamentos do JavaScript voltado para back-end, funções, tipos de dados e variáveis. Meu nome é Juliana Amoasei e irei te acompanhar durante essa jornada!

Audiodescrição: Juliana se descreve como uma mulher branca, com cabelo curto liso pintado de azul, e olhos castanho-escuros. Ela usa óculos de armação redonda vermelha, brincos de argola prateados, veste uma camisa preta, e está sentada em uma cadeira preta no estúdio da Alura, com uma estante preta com enfeites ao fundo, iluminado em gradiente de verde para azul-escuro.

Para quem é este curso?  
Este curso é indicado para você, que está começando em programação, escolheu o JavaScript como linguagem, e pretende trabalhar com back-end.

Pré-requisitos  
Para aproveitar melhor o conteúdo deste curso, recomendamos que você já tenha passado pela formação de iniciante em programação, pois vamos considerar alguns conteúdos já aplicados nos cursos anteriores dessa formação.

Este curso não vai abordar tópicos de front-end, embora várias particularidades da linguagem sejam compartilhadas entre back-end e front-end. Se você não tiver certeza do que é back-end e front-end, também vamos abordar isso no curso.

O que vamos aprender?  
Neste curso, você aprenderá o que é o JavaScript voltado para o back-end, o que é o Node.js, ferramenta utilizada durante este curso para executar nosso código em JavaScript, alguns fundamentos que são muito importantes em basicamente qualquer linguagem de programação, como funções, variáveis e tipos de dados, e os específicos da sintaxe do JavaScript para esses fundamentos.

Vamos abordar tudo isso com exemplos práticos, então vamos declarar variáveis, testar erros, entender as diferenças entre tipos de dados, e também conhecer outras características específicas da linguagem, como as formas do JavaScript de declarar funções.

Aproveite os recursos da plataforma que estão disponíveis para você. Além dos vídeos, há bastante conteúdo em texto e muitos exercícios. Aproveite também nosso fórum e a comunidade do Discord para tirar dúvidas e conversar sobre seus projetos e sobre seu código.

Vamos estudar?

### Aula 1 - JavaScript e o backend - Vídeo 2

Transcrição  
Neste curso, vamos focar em JavaScript para back-end. Mas o que normalmente se entende por front-end e back-end?

JavaScript e o back-end  
Front-end vs Back-end  
Front-end se refere à parte onde há tela envolvida. As interfaces pelas quais as pessoas usuárias interagem com nossa aplicação são atribuições do front-end.

Portanto, botões que serão clicados, roupas que aparecerão em um e-commerce, formulários, tudo isso é atribuição do front-end. Além disso, tudo o que ocorre no front-end acontece no navegador. Essa é uma informação muito importante, lembre-se dela.

Já quando falamos de foco em back-end, nos referimos a tudo que acontece em uma aplicação ou site que está além da interface gráfica.

Ou seja, o que ocorre quando você clica para comprar um produto em um site? Toda essa interação, o que acontece com as informações que saem da tela, como as compras são processadas, como isso é armazenado no banco de dados, isso é atribuição do back-end e não ocorre mais no navegador. Isto é, o processamento do código não é mais feito no navegador.

Portanto, o JavaScript vai precisar de outra plataforma, de outra ferramenta para justamente fazer o processamento do código em um ambiente que não é mais a tela do navegador.

Por que tratamos de maneira diferente se é a mesma linguagem? De fato, é a mesma linguagem, no entanto, as ferramentas que o JavaScript utiliza no front-end e no back-end são diferentes.

No front-end, o JavaScript precisa ter acesso, por exemplo, a funções de cliques de botão. No back-end, como não há botão algum para clicar, não precisamos dessas funções, mas necessitamos de outras.

É nisso que reside a diferença principal entre o JavaScript para back-end e o JavaScript para front-end. Porém, a linguagem em si é a mesma.

O que há por trás das telas?  
O que temos por trás das interfaces gráficas? O que significa JavaScript com foco em back-end? Quando vemos, por exemplo, a interface da plataforma da Alura com um curso selecionado, esse curso tem várias informações. Aparece na tela da plataforma o nome do curso, a carga horária do curso, quantas pessoas estão fazendo o curso, a avaliação, entre outros dados.

Essas informações são acessadas através do back-end. O back-end vai buscar nas bases de dados onde está o nome do curso, onde está a duração do curso, a lista de pessoas que participaram, e assim por diante. O back-end, ou seja, a parte de trás da aplicação, é responsável por juntar todas essas informações e fornecer ao front-end de forma que ele consiga exibir cada uma delas.

Assim, serão buscadas as informações de nome do curso, nome da categoria, em qual formação o curso se encontra, e colocar essas informações na tela para que a pessoa usuária interaja com nosso site.

Temos vários cursos a partir deste ponto que vão ensinar a criar essas aplicações, mas é importante entender as diferenças entre um e outro. Mas por que existe essa separação?

Uma linguagem interpretada  
O JavaScript é uma linguagem interpretada. Vamos disponibilizar material extra explicando o que são linguagens interpretadas e linguagens compiladas.

O navegador é um programa capaz de analisar um código JavaScript, executar esse código e fazer o que esperamos que ele faça, por exemplo, nossas interações de tela, nossos cliques de botão, e assim por diante. Outras linguagens não funcionam no navegador; são as chamadas linguagens de back-end.

Quando executamos um código em JavaScript, por exemplo, através do Node.js, uma ferramenta que funciona fora do navegador, utilizamos o terminal para isso.

Portanto, quando precisamos executar código que não será lido pelo navegador, ou seja, os códigos JavaScript que trabalharão na parte de trás da aplicação, utilizamos outro interpretador para isso, e um desses interpretadores é o Node.js.

Conclusão  
Agora que já conhecemos a diferença principal básica entre o front-end e o back-end, podemos entender um pouco mais sobre o que é o Node.js e por que ele é diferente do navegador. Afinal, essa será a ferramenta que vamos utilizar no desenvolvimento do curso. Vamos lá!

### Aula 1 - Para saber mais: características do JavaScript

O JavaScript desde sua criação em meados dos anos 1990, serviu ao propósito de dar interação a páginas web. Porém, com o desenvolvimento do Node.js em 2009, a partir da engine V8 do Chrome, foi possível adaptar o JavaScript para, entre outras funcionalidades, aplicações back-end.

Um dos principais pontos sobre o JavaScript é que se trata de uma [linguagem de programação](https://www.alura.com.br/artigos/linguagem-programacao) multiparadigma, o que significa que a linguagem não está restrita a uma única forma de fazer as coisas. É possível utilizar diferentes paradigmas de programação, como [orientado a objetos](https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos), [funcional](https://www.alura.com.br/artigos/programacao-funcional-o-que-e) ou procedural.

O Javascript é uma linguagem interpretada, isso significa que o código fonte é executado diretamente por um interpretador, que analisa o código linha por linha e executa as instruções em tempo real. Neste artigo você pode ler mais sobre [linguagens interpretadas e compiladas](https://www.alura.com.br/artigos/o-que-e-compilacao).

Se comparado com outras linguagens, como Java, ele se destaca por sua natureza mais flexível e dinâmica. O JavaScript oferece uma abordagem mais leve e ágil, isso porque é uma [linguagem fracamente tipada e de tipagem dinâmica](https://www.alura.com.br/artigos/o-que-sao-as-tipagens-estatica-e-dinamica-em-programacao), em que os tipos são inferidos durante a execução do programa, não sendo necessário declarar explicitamente o tipo das variáveis. Por sua vez, o Java é uma linguagem fortemente tipada e de tipagem estática, onde os tipos das variáveis são declarados explicitamente e verificados em tempo de compilação.

Mas ainda tem mais! O JavaScript é conhecido por sua vasta comunidade e por um ecossistema repleto de ferramentas, bibliotecas e recursos prontos para serem explorados. Essa gama de recursos facilita a vida dos times de desenvolvimento, permitindo a criação de projetos complexos de forma mais rápida e eficiente.

Por último, mas não menos importante, o JavaScript permite que profissionais que já têm familiaridade com o JavaScript no front-end migrem facilmente para o back-end.

Então prepare-se para aprender com novos desafios e possibilidades com JavaScript ao decorrer das aulas. Vamos lá!

### Aula 1 - O Node.js - Vídeo 3

Transcrição  
Para entender adequadamente o que é o Node.js e para qual propósito é utilizado, é crucial compreender como o JavaScript é executado, ou seja, como ele funciona dentro do computador.

Navegador vs Node.js  
O navegador é o ambiente de interpretação original do JavaScript, pois opções além do navegador, como o Node.js, surgiram muito depois. Cada navegador, como já discutimos, desenvolve seu próprio motor (ou engine) de interpretação. A Google desenvolve para o Chrome, a Microsoft para o Edge, e assim por diante.

O Node.js nada mais é do que outro motor de interpretação do JavaScript que funciona fora do navegador. Mas por que ele existe? Por que ele funciona fora do navegador?

A resposta é para que possamos utilizar o JavaScript para outras funcionalidades no desenvolvimento web que ocorrem fora do navegador. Nesse sentido, o navegador tem funções diferentes do Node.js.

O interpretador de JavaScript do navegador tem funções para interpretar, por exemplo, o clique de um botão. Já o Node.js tem outras funcionalidades que o navegador não precisa, mas que são necessárias fora do navegador, no back-end.

Embora mencionamos que o Node.js possui uma engine diferente, na verdade, ele utiliza a mesma do Chrome. Portanto, o Chrome e o Node.js compartilham o mesmo motor de interpretação para executar o JavaScript, mas com funcionalidades diferentes.

Quando falamos em engines diferentes, queremos dizer que elas têm implementações distintas. Isso significa que, por trás de uma função pronta, por exemplo, Math.random(), que usamos nos cursos de iniciação à programação para gerar números aleatórios, cada navegador a interpreta de forma diferente.

A função é a mesma, utilizamos a mesma função tanto no Chrome quanto no Firefox, por exemplo. No entanto, internamente, a parte que normalmente não vemos na implementação do navegador, o código é diferente. Mas por que precisamos saber disso?

Esse é um dos motivos pelos quais os navegadores podem ter diferenças de desempenho. O código que executa uma função diferente pode afetar a performance do navegador.

O mesmo ocorre, por exemplo, ao analisarmos o console.log(), também utilizado nos cursos de iniciante em programação. A implementação do console.log() será a mesma tanto no navegador quanto no Node.js.

No entanto, a implementação de fato é distinta, isto é, o código que existe dentro da função console.log() é diferente. Ele processará as informações necessárias e executará nosso código de maneira diferente no Node.js, no Chrome e também no Firefox.

Conclusão  
Agora que já entendemos o que é o Node.js, um ambiente de interpretação do JavaScript fora do navegador, se você ainda não conferiu as etapas de instalação dele na atividade Preparando o ambiente, faça uma pausa e confira, pois precisaremos colocar a mão na massa e ver o Node.js em ação!

### Aula 1 - Para saber mais: outros interpretadores

No mundo da programação, a diversidade de interpretadores para linguagens como JavaScript representa uma das facetas mais dinâmicas e inovadoras do desenvolvimento de software.

Dentro desse panorama, além de conhecidos ambientes como Node.js e Deno, surge o Bun, um interpretador de JavaScript que despertou interesse na comunidade, prometendo uma abordagem distinta na execução e interpretação do código.

Confira abaixo mais detalhes sobre cada um dos interpretadores:

#### Node.js

Como vimos no vídeo anterior, Node.js é um ambiente de execução de código JavaScript no “lado do servidor”, ou runtime, funcionando fora do navegador. Ele usa o motor (também chamado de engine) V8 do Google Chrome para executar o código e oferece uma ampla gama de funcionalidades para criar aplicativos web e servidores. Tem como características-chave:

- Suporte a bibliotecas e frameworks variados;
- Uso do [NPM](https://www.npmjs.com/) para gerenciamento de pacotes;
- Arquitetura baseada em eventos e assíncrona;
- Popular para construção de servidores web e APIs.

#### Deno

Deno é outro ambiente de execução para JavaScript e TypeScript, desenvolvido pelo mesmo criador do Node.js, Ryan Dahl. Ele foi criado para abordar algumas limitações do Node.js, com foco em segurança e desenvolvimento moderno. As características-chave do Deno são:

- Sistema de segurança baseado em permissões;
- Suporte nativo a TypeScript;
- Não depende do NPM para gerenciar pacotes;
- Módulos importados diretamente via URL.

Ao contrário do Node.js, no qual os scripts têm permissões amplas por padrão, o Deno adota uma abordagem que prioriza a segurança, exigindo que as pessoas desenvolvedoras concedam permissões explicitamente para operações potencialmente confidenciais, como acesso ao sistema de arquivos ou conectividade de rede.

Vale a pena conferir o episódio do [podcast Hipster.talks sobre Deno e Node](https://cursos.alura.com.br/extra/hipsterstech/deno-o-novo-node-hipsters-203-a350).

#### Bun

Bun, o mais recente dos interpretadores, lançou sua versão 1.0 em setembro de 2023. O Bun é outro ambiente de execução JavaScript criado do zero usando a linguagem de programação Zig, com foco em inicialização rápida e execução eficiente de código. Ele fornece ferramentas e recursos para otimizar e agilizar o desenvolvimento de aplicativos JavaScript e foi projetado para ser compatível com ecossistemas JavaScript existentes.

Até o momento as características que mais têm chamado atenção são:

- Alta velocidade no tempo de execução do código;
- Design leve, resultando em uma base de código menor e menos requisitos de recursos, permitindo melhor desempenho em termos de velocidade e uso de memória em comparação com outros runtimes;
- Otimização de desempenho, pois em vez de depender do motor V8, Bun utiliza o JavaScriptCore do WebKit, que é amplamente reconhecido por seu desempenho superior;
- Funcionalidade integrada ao oferecer ferramentas e recursos nativos que agilizam o processo de desenvolvimento. Ele inclui um empacotador integrado, substituindo a necessidade de ferramentas externas como Webpack, bem como um transpilador nativo que suporta a escrita direta de código TypeScript. Além disso, o Bun incorpora um executor de testes semelhante ao Jest e carrega automaticamente variáveis de ambiente sem exigir instalações adicionais de pacotes como o dotenv.

Explorar esses interpretadores não apenas amplia o entendimento sobre o funcionamento do JavaScript, mas também revela as nuances e as diferentes filosofias por trás de cada ambiente de execução.

Neste curso utilizamos o Node.js por sua grande popularidade, performance e versatilidade que permite trabalhar com:

- APIs;
- Aplicações web em tempo real como servidores de chat ou aplicações colaborativas entre múltiplos usuários;
- Jogos multiplayer;
- Aplicações que demandam alta escalabilidade;
- Servidores de streaming de dados;

Tudo isso graças a sua capacidade de processar um número muito grande de requisições, uma das principais vantagens que o torna tão utilizado e motiva tantos times de desenvolvimento a explorar esta tecnologia.

### Aula 1 - Para saber mais: loop de eventos do Node.js

Após dar os primeiros passos no aprendizado sobre Node.js nessa aula, é importante se aprofundar e entender um pouco melhor sobre pontos importantes como sua arquitetura e as ferramentas que trabalham em conjunto com o Node.js para garantir a execução do código.

No artigo [“Arquitetura do Node.js: entenda o loop de eventos”](https://www.alura.com.br/artigos/arquitetura-node-js-entenda-loop-de-eventos), podemos mergulhar um pouco mais a fundo no assunto.

### Aula 1 - O Node.js e o navegador

Nesta primeira aula focamos em entender o sentido de “JavaScript para back-end” e os principais conceitos por trás do Node.js, no nosso ambiente de execução de escolha para este curso.

Pensando no que aprendemos, assinale as afirmativas corretas:

1. Apesar de a linguagem ser o JavaScript, os interpretadores de front-end têm ferramentas que o Node.js não tem.

Para que as páginas web funcionem corretamente, é preciso que o JavaScript disponibilize funcionalidades específicas, como as relacionadas a cliques de botão e “scroll” da tela. O navegador é capaz de interpretar estes comandos, porém o Node.js não, pois não há a necessidade de interagir com páginas no back-end.

2. O navegador é o ambiente de execução “original” do JavaScript; ferramentas como o Node.js surgiram depois para executar código JavaScript fora do navegador.

O Node.js foi o primeiro runtime JavaScript que não era executado dentro de um navegador, permitindo que a linguagem fosse utilizada para o desenvolvimento de outros tipos de aplicação além de páginas web.

3. Existem métodos do JavaScript como o console.log() que podem ser executados tanto no navegador quanto no Node.js.

Com exceção de métodos específicos - como por exemplo os utilizados para interação com telas de navegador, entre outros - existem diversas ferramentas da linguagem que podem ser usadas de forma semelhante tanto para uso no navegador quanto no Node.js. Porém, a forma como a ferramenta funciona dentro do programa pode ser diferente.

### Aula 1 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

- [Node.js: o que é, como funciona esse ambiente de execução JavaScript e um Guia para iniciar](https://www.alura.com.br/artigos/node-js);
- Um vídeo ainda mais completo sobre o [Node.js: o que é e como funciona](https://cursos.alura.com.br/extra/alura-mais/Node.js-o-que-e-e-como-funciona-c1414);
- [Artigo sobre compilação e compiladores](https://www.alura.com.br/artigos/o-que-e-compilacao) para saber mais sobre o que é uma linguagem interpretada.

### Aula 1 - O que aprendemos?

Nessa aula, você aprendeu:

- O papel do JavaScript no contexto do back-end, abordando conceitos fundamentais e diferenciando back-end e front-end;
- A diferença entre Node.js e navegador, explorando as características do Node.js como runtime/motor de interpretação, destacando suas especificidades em comparação ao navegador.

## Aula 2 - Variáveis no JS

### Aula 2 - Variáveis no JS - Vídeo 1

Transcrição  
Neste curso, utilizaremos um sistema de uma escola com listas de alunas e alunos, listas de professoras e professores, notas, cálculos de médias de notas, para relembrarmos alguns conceitos de JavaScript vistos anteriormente e para adicionarmos mais conhecimentos necessários para trabalhar com o back-end.

**Trabalhando com variáveis**  
Começamos relembrando alguns conceitos de JavaScript importantes vistos anteriormente e o primeiro deles é como trabalhar com variáveis.

Já temos o Visual Studio Code aberto, criamos uma pasta para guardar os arquivos deste curso. Usaremos o botão New File, representado por um ícone de uma folha com a ponta superior dobrada, que está na parte superior do Explorer, na lateral esquerda da interface, para criar um novo arquivo dentro dessa pasta. Vamos chamá-lo de variaveis.js.

Escreveremos uma variável, lembrando que para criar uma variável com JavaScript, usamos a palavra-chave let. Vamos criar uma variável let estudante, atribuindo a ela o valor, ou seja, o nome de uma estudante, 'Caroline'. Como um nome é uma sequência de caracteres, um texto, precisamos envolver entre aspas e chamamos normalmente esse conjunto de caracteres de string (cadeia de caracteres).

Criaremos outra let, que chamaremos de professora, e atribuiremos a ela o valor 'Ana'. Agora temos duas variáveis, ou seja, dois valores que queremos guardar na memória, ambos com valor do tipo string, sendo um 'Caroline' e o outro 'Ana'.

Para testar, sem usar o navegador, podemos utilizar o console.log. Vejamos como o console.log funciona no Node. Vamos criar console.log() e passar dentro dos parênteses o nome das duas variáveis que criamos, estudante e professora, ponto e vírgula, e agora executar esse arquivo.

```Javascript
let estudante = 'Caroline';
let professora = 'Ana';

console.log(estudante, professora);
```

Executaremos o arquivo utilizando o Node. No VSC, na parte superior, temos um menu chamado Terminal, clicando em Terminal e depois em New Terminal, abrirá uma janela na parte inferior do VSC para executarmos os nossos códigos.

O ideal é verificar se o terminal já está iniciando na pasta que utilizamos para este curso. Recomendamos que você crie uma pasta para criar os arquivos dentro. Isso porque agora iremos passar o comando para executar este arquivo, que será node variaveis.js.

Ao pressionar Enter, serão exibidos no console os dois valores que pedimos, o valor da variável estudante, que é Caroline, e o valor da variável professora, que é Ana.

Portanto, é assim que utilizamos o Node no terminal para executar os nossos arquivos. Primeiro passamos a palavra-chave node e em seguida o nome do arquivo que queremos que seja executado.

> É importante verificar que você está dentro da pasta correta, sendo exibido o nome da pasta correta no terminal, caso contrário o Node não encontrará o arquivo e não conseguirá executar.

Vamos fazer mais um teste. Depois da let estudante e da let professora, chamaremos novamente apenas o nome da variável estudante, sem o let e alteraremos o nome dessa estudante, por exemplo, para 'Mariana'.

Portanto, estudante = 'Mariana'. Voltaremos ao terminal e usaremos um atalho do terminal, que é a seta. Se pressionarmos seta para cima do teclado, o terminal retornará os comandos anteriores e não precisaremos digitar de novo.

Reexecutaremos o código do arquivo variaveis.js, com node variaveis.js, e agora ao invés de Caroline e Ana, o valor da variável estudante foi modificado.

Na maior parte das vezes, esse comportamento não é o que queremos. Por quê? Porque normalmente quando guardamos um valor de uma variável na memória do computador, não queremos que outro ponto do código tenha acesso a essa variável e a altere.

Então, já pensou se seu nome é Caroline e de repente está tudo Caroline na sua aplicação da escola e seu nome muda para Mariana? Não faz sentido. Portanto, embora o nome seja variável, o comportamento normal que temos é não querer que esse valor seja alterado por outras partes do código.

O JavaScript permite que "protejamos" uma variável de alteração, utilizando uma outra palavra-chave na criação. Ao invés de let estudante, podemos criar const estudante.

Trocamos a let estudante para const estudante, o valor é o mesmo. Deixamos a professora como let mesmo, tentaremos fazer um novo teste no terminal executando esse arquivo novamente e vendo o que acontece.

**Lidando com um erro**  
No terminal, pressionamos seta para cima do teclado, node variaveis.js e agora ao invés do retorno no terminal, temos um erro. Mas os erros são bons porque eles normalmente nos avisam quando tem algo errado no nosso código.

> Se precisar, utilize as ferramentas de tradução dos navegadores para entender bem as mensagens de erro que recebemos no terminal ou no navegador porque elas são importantes para nós.

Neste caso, o Node retornou um type error (erro de tipo), falaremos mais sobre erros de tipo durante o curso, e ele passa uma mensagem avisando o que deu errado.

Ele diz que houve um assignment to constant variable (atribuição a uma variável constante), ou seja, o erro que ocorreu foi uma atribuição a uma variável constante.

"Variável constante" parece um nome que não faz muito sentido, mas é literalmente isso. Variável, que é um espaço na memória onde guardamos um dado, do tipo constante, ou seja, ela tem que ser constante, ela não pode ser alterada. E o erro acusado é que tentamos fazer isso no nosso código.

Um pouco mais para cima, ele avisa o nome do arquivo, variaveis.js:4, que é justamente o número da linha onde tentamos fazer essa alteração. Ou seja, tentamos alterar algo que não podíamos, o Node não conseguiu trabalhar com isso e devolveu um erro para nós.

O que precisamos fazer agora é deletar a linha 4, onde tentamos fazer a reatribuição, porque isso não é possível fazer com const.

**Modos de lidar com variáveis**
let e const não são formas originais, digamos assim, do JavaScript de trabalhar com variáveis. Elas foram criadas posteriormente.

A forma original é var, que você pode encontrar em alguns conteúdos na internet ainda. Então, var estudante e var professora. var e let trabalham de formas similares, ambas podem ser reatribuídas ao contrário da const. Porém, existem algumas outras diferenças entre var, let e const que veremos nos próximos vídeos.

Não deixaremos var aqui no nosso código, deixaremos let professora e const estudante. E agora que você já sabe que tem três formas de se trabalhar com variáveis em JavaScript, você deve estar se perguntando qual usar.

A maior parte dos guias vai dizer para usar sempre const. A não ser que realmente precise trocar o valor da variável, veremos esses casos também futuramente neste curso e nos próximos. Se não precisar mudar o valor da variável, use sempre const.

Hoje em dia não se utiliza mais o var. Veremos o porquê futuramente. O var é muito solto, ela nos permite fazer muitos outros tipos de alteração que normalmente não queremos fazer no código. Então, qual utilizar? const ou let.

> Use let só quando tiver certeza de que precisa alterar a variável e const em todos os outros casos.

Além disso, outra diferença entre let e const é que não conseguimos criar uma const sem atribuir um valor a ela. O VSC até reclama se tentarmos fazer isso, ele acusa grifado em vermelho no nome da variável.

Já uma let pode ser criada sem um valor e podemos atribuir um valor a ela depois, passando professora = 'Ana'. Isso pode ser feito com let, mas não pode ser feito com const.

```JavaScript
const estudante = 'Caroline';
let professora;

professora = 'Ana';

console.log(estudante, professora);
```

Agora que já descobrimos coisas novas, vamos continuar praticando e entendendo mais diferenças entre var, let e const e por que elas são importantes.

### Aula 2 - Para saber mais: padrão de nomes do JavaScript

Um detalhe muito importante, mas que às vezes não percebemos quando começamos a programar, é que cada linguagem possui seus próprios padrões. Eles servem não somente para a escrita de códigos que funcionem, mas também para criar nomes de variáveis, estruturar um programa e muito mais.

A primeira coisa que precisamos ter em mente é que o JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas. Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como console.log) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas.

Para ilustrar, o JavaScript trata os quatro exemplos abaixo como variáveis diferentes e não apresentará nenhum erro se você executar o programa:

```JavaScript
const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)
```

Podemos perceber que, em um programa muito grande, a possibilidade de problemas é grande. Então como sabemos a forma certa de nomear? Aí entra o que chamamos de convenções, para padronizar estes aspectos do código.

Existem várias convenções para nomes e cada linguagem de programação tem o seu. Seguem alguns deles:

- camelCase: inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

- snake_case: os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario. É o padrão utilizado, por exemplo, pela linguagem Python.

- kebab-case: similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções, pois o sinal - representa um operador de subtração. Porém, pode ser utilizada para nomear arquivos, como por exemplo exercicios-variaveis.js.

- PascalCase: similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

> Importante: nunca utilize espaço nem caracteres especiais e também não inicie os nomes das variáveis com números.

Quando falamos de convenção, estamos falando de boas práticas e padronização. Se você utilizar qualquer um dos padrões acima para nomear variáveis com JavaScript (com exceção do padrão kebab-case), seu código continuará funcionando, mas seguir as convenções é parte de desenvolver um código legível e bem escrito.

Esse é um assunto vasto e com muitos detalhes, e é parte do nosso trabalho no cotidiano como pessoas que desenvolvem garantir que os chamados guias de estilo definidos para um produto de código sejam seguidos.

Você pode ir aprendendo os detalhes aos poucos, enquanto estuda, e observá-los sendo aplicados nos códigos que encontrar durante seus estudos.

### Aula 2 - Escopo de variável - Vídeo 2

Transcrição  
Agora que já entendemos que existem três formas de se declarar variáveis no JavaScript e vimos as diferenças entre elas, vamos continuar explorando.

Vamos criar um novo arquivo dentro da nossa pasta, usando o botão New File. Vamos chamar esse arquivo de escopo.js. Logo veremos o que significa escopo.

Até agora, aprendemos que proteger dados que estão numa variável de serem alterados é muito importante. No entanto, existem outras formas de proteger nosso código de alteração externa, sendo a alteração externa aquela feita por outras partes do código.

Testando formas de alterar variáveis
Dentro do arquivo escopo.js, vamos criar uma condicional, um if, que já vimos nos cursos de iniciante em programação, e vamos criar uma variável dentro desse if.

Então, vamos lá: Por exemplo, if (1 > 0). 1 é sempre maior do que 0, então, isso garante que vamos acessar o código dentro desse if. Então, abrimos e fechamos as chaves em seguida. Dentro das chaves do if, vamos criar uma var, como vimos anteriormente, estudante = 'Caroline';, e vamos pedir também um console.log no valor da variável estudante;.

Fora do if, depois das chaves, vamos fazer parecido com o que fizemos anteriormente, vamos chamar a variável estudante, sem o var, igual a "Ana", para tentarmos reatribuir esse valor. E vamos também chamar um outro console.log para vermos o resultado disso tudo. Então, console.log em estudante.

```JavaScript
if (1 > 0) {
    var estudante = 'Caroline';
    console.log(estudante);
}

estudante = 'Ana';
console.log(estudante);
```

Vamos abrir novamente o terminal, em New Terminal lá no menu superior Terminal, garantir que estamos na pasta certa, e vamos chamar o node com o nome do nosso arquivo, agora o nosso arquivo é escopo.js.

Então, node escopo.js, executaremos pressionando a tecla Enter e o retorno será "Caroline" e "Ana", ou seja, entrou dentro do if, porque a condição de 1 maior que 0 é uma condição true, criou a variável estudante com o nome de "Caroline", deu um console.log, exibiu "Caroline", primeiro valor.

Em seguida, lembrando sempre, JavaScript vai ler de cima para baixo, linha por linha, ele achou a linha 6, onde reatribuímos o valor de estudante, o valor de estudante deixou de ser "Caroline" e passou a ser "Ana", e o novo console.log refletiu essa alteração, e o segundo valor no nosso terminal é "Ana". Até aí, tudo bem.

O que estávamos querendo testar aqui nesse código? É possível criar uma variável dentro de um bloco. O que é um bloco?

Um bloco é todo o código que fica separado, por exemplo, dentro de chaves.

Então, uma função é um bloco de código, uma condicional é um bloco de código. Onde declaramos a var estudante e o console.log é um código que está preso dentro de um bloco. Quando reatribuímos fora desse bloco um novo valor a estudante, isso quer dizer que uma variável criada dentro de um bloco pode ser modificada pelo lado de fora.

Vamos fazer um novo teste, então. Dentro do bloco, vamos trocar a variável de var para let. Então, agora, em vez de var estudante, temos uma let estudante.

Vamos deixar o resto tudo como está, voltar no terminal, pressionar a seta para cima do teclado e reexecutar o arquivo. Novamente, exibir o "Caroline" e "Ana". Parece que está tudo funcionando da mesma forma, mas não está.

```JavaScript
if (1 > 0) {
    let estudante = 'Caroline';
    console.log(estudante);
}

estudante = 'Ana';
console.log(estudante);
```

Agora, temos duas variáveis diferentes. A variável criada dentro do bloco com let, que é "Caroline", e, na linha 6, o nosso estudante = 'Ana' é outra variável.

Se criamos uma variável sem passar nenhuma palavra-chave, como let, const ou var, e essa variável não existe, automaticamente o JavaScript cria essa variável com um var escondido.

Então, agora temos duas variáveis, let estudante = 'Caroline' e var estudante = 'Ana'. Não é a mesma variável. Isso é muito importante entender a diferença entre let e var.

Essa modificação acontece devido ao que chamamos de escopo, que é o nome do nosso arquivo. O JavaScript trabalha com três escopos:

- Bloco
- Função
- Global

Um escopo é um termo em programação que normalmente significa um limite, um espaço dentro do qual trabalhamos. Por isso que chamamos de escopo de bloco o código que está preso dentro do bloco, preso entre as chaves do if ou as chaves de uma função.

As variáveis criadas com escopo global, ou seja, elas não estão dentro de nenhum bloco ou de condicional ou de função, elas podem sempre ser acessadas ou modificadas dentro dos blocos.

Por isso é importante sempre usar const para evitar que as variáveis sejam alteradas de maneira aleatória pelo restante do código.

Vamos fazer mais um teste. No arquivo, vamos adicionar uma linha, lá no topo do arquivo, vamos chamar de let estudante, vamos criar essa let sem valor nenhum, só estamos criando ali um espaço na memória. Dentro do nosso if vamos tirar o let estudante, deixa só estudante = 'Caroline';, ou seja, estamos tentando reatribuir um valor ou colocar um valor dentro da nossa let estudante. Do lado de fora vamos tirar a nossa let estudante = 'Ana'; da linha 8, e vamos deixar só o console.log.

```JavaScript
let estudante;

if (1 > 0) {
    estudante = 'Caroline';
    console.log(estudante);
}

console.log(estudante);
```

Voltando no terminal, vamos usar o atalho Ctrl + L, que serve tanto no Windows quanto no Linux, para limpar o nosso terminal das informações anteriores.

Aí pressionaremos a seta para cima, exibindo o comando node escopo.js, agora ele exibe "Caroline" e "Caroline", ou seja, isso significa que uma variável que está fora de um bloco, consegue ser alterada por dentro do bloco. Então, criamos a variável do lado de fora, alteramos do lado de dentro das chaves da condicional if.

Esse é um dos motivos pelo qual só utilizamos let quando realmente precisamos alterar alguma coisa, porque o ideal é que utilizemos uma const. Assim, já criamos o valor com "Caroline" onde ele tem que ficar, e aí podemos acessar. Então, dentro do if podemos acessar essa variável estudante e pegar um console.log, mas não conseguimos alterar essa variável.

Agora já vimos as três formas de se declarar variável, let, const e var. E por que é importante usar const e já sabemos o que é o escopo, no caso escopo de bloco ou escopo global. Então, vamos seguir vendo mais características do JavaScript para back-end.

### Aula 2 - Para saber mais: versões do JS

**Atualizações do JavaScript**
O JavaScript, ao longo de sua evolução, passou por várias versões, cada uma trazendo novos recursos e melhorias para a linguagem. Uma das versões mais significativas é o ECMAScript 6 (também conhecido como ES6), lançado em 2015, que introduziu uma série de recursos poderosos e modernos para a linguagem. Entre eles estão:

**Let e const**  

```JavaScript
let variavel = 10;
const constante = 20;
```

**Template literals ou template strings**  

```JavaScript
const nome = 'Alice';
console.log(`Olá, meu nome é ${nome}.`);
```

**Escopo de bloco com let**  

```JavaScript
if (1 > 0) {
  let nome = ‘Ana’;
  console.log(nome); // ‘Ana’
}
// variável `nome` não está acessível
console.log(nome); // Error: nome is not defined
```

Ainda existem muitas outras funcionalidades do que chamamos de “JavaScript moderno” (do ES6 em diante), que vão fazer mais sentido conforme estudamos mais a fundo as funcionalidades da linguagem.

Você pode conferir todas as atualizações neste guia do ES6.

Apesar da atualização de 2015 ser a mais famosa, são lançadas atualizações anualmente! A lista de novidades da versão 2023 (mais recente no momento em que escrevemos) pode ser conferida no [site do ECMA](https://tc39.es/ecma262/2023/), consórcio internacional que gerencia o desenvolvimento da linguagem.

**Compatibilidade**  
A retrocompatibilidade é uma característica importante do JavaScript. Isso significa que, em grande parte, o código escrito em versões anteriores do JavaScript deve continuar funcionando em versões mais recentes. Por exemplo, um código escrito em ES5 deve ser compatível com um ambiente ES6 ou posterior. No entanto, o contrário pode não ser verdadeiro, pois novos recursos introduzidos em versões mais recentes podem não ser suportados em ambientes mais antigos.

Para garantir a compatibilidade, ferramentas como transpiladores (por exemplo, [Babel](https://babeljs.io/)) são utilizadas para converter código escrito em versões mais recentes do JavaScript (como ES6+) para versões mais antigas, permitindo que seja executado em ambientes que não suportam esses recursos mais recentes.

A retrocompatibilidade é essencial para usar o JavaScript em front-end por basicamente dois motivos:

- Não é possível garantir que os computadores clientes que acessam as páginas web estejam sempre atualizados com as últimas versões dos navegadores.
- Os próprios navegadores levam algum tempo para atualizarem seus interpretadores de acordo com as últimas atualizações da linguagem.

No caso do Node.js este problema não é tão grande, pois quem desenvolve a aplicação escolhe qual a versão que quer utilizar do Node.js e adequa o computador-servidor para que execute o código de acordo. Porém, a questão da retrocompatibilidade fez com que alguns comportamentos das primeiras versões do JS não pudessem ser corrigidos, como o null que veremos mais adiante neste curso.

A evolução do JavaScript continua, e novas versões trouxeram e continuarão a trazer mais funcionalidades, melhorias na linguagem e facilitação no desenvolvimento de aplicações modernas.

#### Aula 2 - Escopo

Analise o seguinte bloco condicional if:

```JavaScript
if (true) {
  let num1 = 10;
  var num2 = 20;
}
```

Perceba que, dentro do bloco, são declaradas as variáveis num1 com let e num2 com var.

A partir disso, qual a diferença de escopo das variáveis num1 e num2 após a execução do bloco condicional?

Selecione 2 alternativas

1. Apenas num2 é acessível fora do bloco condicional.

Embora a variável num2 tenha sido declarada com var dentro do bloco condicional, ela não está restrita ao escopo do bloco como ocorre com variáveis let e const. Variáveis var têm escopo de função ou global (se declaradas fora de uma função), e o bloco condicional (if)não cria um escopo novo para elas.

2. num1 não é acessível fora do bloco condicional.

A variável num1 foi declarada usando let, o que a limita ao escopo do bloco em que foi criada. Como resultado, num1 só é acessível dentro do bloco if`. Tentar acessá-la fora desse bloco resultaria em um erro.

### Aula 2 - Lidando com erros - Vídeo 3

Transcrição  
Antes de continuarmos, vamos analisar com mais detalhes o que ocorre quando surgem erros. Ou seja, vamos examinar cuidadosamente as mensagens de erro que o Node fornece.

Vamos criar um novo arquivo chamado erros.js e realizar alguns testes de código para ver os erros ocorrendo. O primeiro passo é chamar console.log e passar para dentro do console uma variável que não existe no nosso arquivo. Portanto, vamos apenas passar a variavel, sem aspas. É importante lembrar que, quando colocamos entre aspas, o JavaScript interpretará como um texto.

Entendendo a mensagem de erro
Então, passamos console.log(variavel), vamos voltar ao terminal, escrever node erros.js, e ele já retorna um erro. Vamos analisar a mensagem de erro por partes.

juliana@juliana:~/Desktop/3513-js-funds1$ node erros.js
/home/juliana/Desktop/3513-js-funds1/erros.js:1 console.log(variavel);

ReferenceError: variavel is not defined
    at Object.`<anonymous>` (/home/juliana/Desktop/3513-js-funds1/erros.js:1:13)
    at Module. compile (node:internal/modules/cjs/loader: 1256:14)
    at Module. extensions..js (node: internal/modules/cjs/loader: 1310:10)
    at Module.load (node: internal/modules/cjs/loader: 1119:32)
    at Module. load (node:internal/modules/cjs/loader: 960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
        at node:internal/main/run_main_module:23:47

A primeira coisa que o Node nos fornece é o caminho do arquivo onde ocorreu o erro. É a nossa pasta, é o nosso arquivo erros.js, seguido de :1, que é o número da linha onde ele identificou o erro.

Em seguida, ele está copiando o código e assinala com uma seta exatamente onde na linha ocorreu o erro, ou seja, até a parte do console.log ele leu sem problemas. Quando chegou em variavel, ele já não conseguiu, porque estamos tentando passar para o console uma variável que não existe, literalmente.

Logo após, ele apresenta uma mensagem, pois o Node consegue inferir o tipo de erro e fornecer uma mensagem correspondente. Neste caso, ele fornece uma mensagem de erro de referência.

variavel, que é o nome da nossa variável, is not defined (não está definida). E é literalmente o que está ocorrendo. Ele está dizendo que essa variável não existe, ela não foi definida, então ele não consegue acessá-la. Esta é uma mensagem que pode ser útil caso você precise, utilize as ferramentas de tradução para entender exatamente o que está acontecendo.

**Stack Trace**  
A parte seguinte, que geralmente assusta um pouco, é o que chamamos de Stack Trace. O que é Stack Trace? É esta lista de arquivos estranhos e mensagens estranhas que enchem o nosso terminal de informações. Ela passa uma quantidade de nomes de arquivos, uma quantidade de caminhos de arquivos que não sabemos onde estão.

O que é o Stack Trace? É uma pilha de comandos que foram chamados internamente pelo Node para executar o programa. Ou seja, quando executamos um programa que está dentro de variáveis.js, escopo.js, internamente o Node chama muitas outras ferramentas nos bastidores, e isso ocorre de forma silenciosa normalmente.

Então, o Node chama as ferramentas que estão dentro dos arquivos para executar o nosso código, e normalmente não vemos isso acontecendo. Só vemos isso ocorrer quando há um erro, porque qualquer erro que ocorra no programa, além da mensagem de erro, ele exibe todo o código que rodou sem o nosso conhecimento, silenciosamente, que são os códigos internos do Node.js.

Por isso recebemos esse grande aviso, fornecendo muitas informações, é o que chamamos de Stack Trace, a pilha de comandos que foram utilizados para executar o nosso código.

Vamos realizar mais um teste, vamos comentar o nosso console.log(variavel), vamos criar outro console.log, que vamos apenas passar oi. Vamos passar oi, entre aspas, para ser uma string, mas vamos deletar o fechamento dos parênteses. O VSC já indica o erro, ele já sublinha em vermelho, dizendo que tem algum erro aqui, mas vamos ignorar apenas para testar.

> console.log('oi'

Então, sempre começamos observando o VSC, se estiver sublinhado em vermelho, já sabemos que há algo errado, porém, se isso falhar, vamos tentar executar este arquivo e ele retornará outro erro.

Então, no terminal, node erros.js, ele fez também a primeira parte igual, informou qual é o arquivo que deu erro, qual foi a linha que deu erro, linha 2, assinalou onde exatamente na linha começou a dar erro, que foi justamente onde tentamos escrever oi e não fechamos os parênteses, mas agora é um outro tipo de erro, é um erro de sintaxe.

Então, aviso que o Node dá, syntax error (erro de sintaxe), e ele já indica o que está ocorrendo, ele diz que falta um fechamento de parênteses após a lista de argumentos. Lista de argumentos porque console.log é uma função que recebe uma lista de argumentos, e faltou fechar essa lista.

**Os tipos de erro**  
Então, já notamos que existem dois tipos de erro, erro de referência e erro de sintaxe, eles são tipos de erro muito comuns, os sintáticos normalmente pegamos mais rápido porque quase sempre eles vão aparecer no VSC, assinalados em vermelho, porém sempre temos que interpretar a mensagem.

Então, os erros de sintaxe, eles normalmente são mais fáceis de identificar, porém erros de lógica, como o que fizemos anteriormente na variável que não existe, são um pouco mais difíceis de identificar algumas vezes porque o VSC normalmente não vai indicar esse erro, porque ele não sabe que a variável não foi declarada.

Então, sempre temos que interpretar a nossa stack trace, ver onde no arquivo que deu erro e tentar descobrir o que ocorreu. Não se esqueça de sempre utilizar o tradutor quando necessário para entender melhor os avisos.

Existem vários métodos para lidar com erros no JavaScript que não vamos ver neste curso, porque é um conteúdo um pouco mais avançado, mas à medida que formos trabalhando nas nossas aplicações, vamos abordar este tema.

Então, erros são nossos amigos: sempre que ocorrer com você, preste atenção neles, tente entender onde eles estão ocorrendo e as mensagens de erro que o Node fornece. Agora, vamos continuar codando, sabendo que não precisamos ter medo dos erros.

### Aula 2 - Para saber mais: tipos de erros do Node.js

Qualquer pessoa desenvolvedora, independente da linguagem ou área de atuação, precisa saber como identificar, compreender e corrigir erros no código. Afinal, essas habilidades são fundamentais para garantir a estabilidade, segurança e eficiência de um software.

No artigo [Lidando com erros no Node.js](https://www.alura.com.br/artigos/lidando-com-erros-node-js), temos exemplos de erros comuns que podemos encontrar quando trabalhamos com essa ferramenta.

### Aula 2 - Para saber mais: o console.log()

Quando se trata de desenvolvimento em JavaScript, uma ferramenta essencial para devs é o console.log(). Este é um método utilizado para exibir mensagens ou depurar o código durante o desenvolvimento de aplicativos web.

**O que é o console.log()?**  
O console.log() é uma função disponível nos navegadores e no ambiente Node.js. Sua principal finalidade é imprimir mensagens ou valores no console do navegador ou terminal, facilitando o acompanhamento e depuração do código.

**Como usar o console.log()?**  
Para usar o console.log(), basta inserir a função seguida pelos dados que você deseja exibir no console, como strings, variáveis, objetos, arrays, entre outros. Acompanhe alguns exemplos simples:

Exibir uma string no console:

>console.log('Olá, Mundo!');

Mostrar o valor de uma variável:

> let idade = 25;  
  console.log('A idade é:', idade);

**Por que o console.log() é importante?**  
O console.log() é uma ferramenta valiosa durante o desenvolvimento devido à sua capacidade de exibir informações úteis sobre o código. Ajuda a identificar possíveis erros, acompanhar o fluxo de execução do programa e visualizar os valores das variáveis em momentos específicos, permitindo a correção de problemas e otimização do código.

Utilizá-lo em seus projetos irá melhorar sua experiência de desenvolvimento e aprimorar a qualidade do seu código.

A função log() é a mais geral e a mais utilizada, porém o objeto Console tem várias outras ferramentas mais específicas para serem utilizadas conforme o caso. Você pode conferir a lista completa na [documentação do MDN sobre o objeto Console](https://developer.mozilla.org/pt-BR/docs/Web/API/console).

### Aula 2 - Faça como eu fiz: escopos

Durante esta aula vimos exemplos do funcionamento de escopos no JavaScript.

Aproveite este momento para conferir mais alguns exemplos abaixo e faça os testes em seu computador! Isso vai te ajudar a fixar na prática os conceitos mostrados em vídeo.

Vamos começar relembrando o que é um escopo: podemos definir como um contexto de execução onde os valores e as expressões podem ser acessados ou referenciados (conforme a [documentação do MDN sobre escopos](https://developer.mozilla.org/pt-BR/docs/Glossary/Scope)).

O JavaScript trabalha com três escopos:

- Global
- Bloco
- Função

Vamos fazer mais testes com cada um desses escopos.

**Escopo global**  
Qualquer variável que esteja no escopo global pode ser acessada por outras partes do programa. Uma variável é considerada global quando não é declarada dentro de nenhuma função ou bloco.

```JavaScript
const nome = ‘Camila’; // variável global

function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}

cumprimentar(); // ‘Olá, Camila!”
```

**Escopo de bloco**  
Variáveis declaradas dentro de chaves { }, como no caso de if, for, while etc., não ficam acessíveis para código que esteja de fora. Chamamos o código dentro das { } de bloco.

```JavaScript
if (1 > 0) {
  let nome = ‘Ana’;
  console.log(nome); // ‘Ana’
}
// variável `nome` não está acessível
console.log(nome); // Error: nome is not defined
```

IMPORTANTE:

Variáveis declaradas com var não seguem a regra do escopo de bloco! Elas serão consideradas globais e poderão ser acessadas de fora do bloco. Faça o teste:

```JavaScript
if (1 > 0) {
  var nome = ‘Ana’;
  console.log(nome); // ‘Ana’
}

console.log(nome); // ‘Ana’
```

A falta de “controle” de escopo é um dos motivos pelo qual o uso de var foi abandonado e as boas práticas atuais recomendam apenas o uso de const e let.

**Escopo de função**  
Variáveis declaradas dentro de uma função são consideradas “locais” (ou seja, o oposto de “globais”) e não podem ser acessadas por código que esteja fora do bloco da função.

```JavaScript
function cumprimentar() {
  const nome = 'Camila'; // variável local
  const cumprimento = 'Olá'; // variável local
  console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
}
// as variáveis não podem ser acessada de fora da função
console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console
```

### Aula 2 - Lista de exercícios

 Programação é prática! Criamos mais uma lista de atividades (não obrigatórias) para você exercitar e reforçar ainda mais seu aprendizado. Bora praticar?

1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião”.

Opinião do instrutor

Para te ajudar a verificar seus códigos,está disponível uma possível resolução dos [desafios neste link](https://github.com/alura-cursos/3513-JS-fundamentos1/tree/exercicios-aula2) para você construir ou validar suas soluções.

Bons estudos!

### Aula 2 - O que aprendemos?

Nessa aula, você aprendeu a:

- Diferenciar var, let e const e identificar qual a melhor forma para armazenar dados de acordo com cada situação;
- A proteger dados em uma variável de serem alterados, utilizando const;
- Lidar com mensagens de erro, entendendo o que o Node.js está tentando nos dizer com elas, para realizar correções no código;
- Trabalhar com escopos e entender como os escopos funcionam para “limitar” o acesso do código a uma variável.

## Aula 3 - Tipos de Dados

### Aula 3 - Number - Vídeo 1

Transcrição  
Nos exemplos anteriores, criamos algumas variáveis no arquivo variaveis.js, como estudante e professora, que guardavam strings (sequências de caracteres, como textos).

Agora, trabalharemos com outros tipos de informação que podemos guardar em variáveis. Faz diferença informar para o programa se queremos guardar um texto ou um número? Sim e vamos entender isso agora!

**Number**  
Criando o arquivo tipo-number.js
Criaremos um novo arquivo chamado tipo-number.js. Nesse arquivo, vamos adicionar algumas variáveis para trabalhar com nossos tipos.

Começaremos criando uma const que chamaremos de notaPrimeiroBi, igual a 8. Passamos para a variável o valor 8 sem aspas, porque queremos que seja um número.

tipo-number.js:

```JavaScript
const notaPrimeiroBi = 8;
```

Em seguida, vamos criar outra const chamada notaSegundoBi, igual a 6.3. É importante saber que, no JavaScript, se quisermos usar um número decimal, deve ser com ponto e não com vírgula.

> const notaSegundoBi = 6.3;

Feito isso, criaremos outra constante para somar esses dois valores. Portanto, vamos criar uma const chamada total, que receberá a soma dos valores das duas variáveis notaPrimeiroBi e notaSegundoBi.

> const total = notaPrimeiroBi + notaSegundoBi;

Com isso, o JavaScript irá pegar o valor da primeira variável, o valor da segunda variável, somar esses dois valores, e passar ambos para dentro da variável total.

Importante: sempre que o JavaScript passa por uma linha que faz uma atribuição de variável, primeiro ele analisa o que está à direita do igual (=), depois pega o resultado e passa para a variável que está à esquerda do igual.

Testando o código  
Vamos verificar se tudo está correto com o método console.log(). Entre os parênteses, pediremos para exibir o valor de total no terminal.

> console.log(total);

Com o terminal aberto, executaremos o seguinte comando:

> node tipo-number.js

Como retorno, foi exibido o valor 14.3.

Entendemos que o JavaScript aceita como valor numérico números inteiros e números não inteiros, o que chamamos nesse caso de ponto flutuante. Nós não chamamos de decimal, conforme explicado nos materiais extras disponibilizados, e todos eles são do tipo number. Nós usamos o operador de adição (+) para somar estes dois números e exibir no console.

Adicionando outras notas  
Vamos adicionar mais algumas notas ao código de tipo-number.js, porque um ano letivo tem mais de dois bimestres. Primeiramente, criaremos uma constante notaTerceiroBi, que será -2.

Outra const será a notaQuartoBi, com o valor 5. Porém, nesse caso específico, vamos colocar a nota entre aspas simples, ou seja, agora o valor é 5, mas quando o colocamos entre aspas, ele teoricamente é uma string, não um número. Vamos entender o que acontece no código quando usamos dessa forma.

Feito isso, atualizaremos a constante total para somar todas as notas. Assim, teremos notaPrimeiroBi mais notaSegundoBi, mais notaTerceiroBi, mais notaQuartoBi.

O console.log() pode ser mantido como está.

tipo-number.js:

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = '5';

const total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;

console.log(total);
```

Ao voltar no terminal e executar o mesmo comando anterior (node tipo-number.js), temos o valor 12.35. O que podemos entender disso? O valor 5, que estava como string, não deu nenhum erro; o Node.js não acusou que temos valores de número e valores de string e tentamos somar essas coisas.

Porém, onde foi parar esse valor 5? Se prestarmos atenção, o 5 foi parar junto com o número. Se fizéssemos a soma de 8, 6.3 e -2, daria 12.3. Esse 5 que aparece ao final do resultado é o 5 em formato de string, que simplesmente foi colado no final da conta.

Por que isso aconteceu? Porque o mesmo operador de mais (+) que usamos para somar números, também é utilizado para concatenar textos.

Concatenando strings  
Como exemplo, vamos criar mais duas constantes ao final do código. A primeira será uma const chamada nome, recebendo uma string com o nome "Juliana".

Daremos um console.log() na linha abaixo e passaremos uma frase entre parênteses e aspas simples. A frase será "meu nome é ", seguida de um sinal de mais e da variável nome.

```JavaScript
// código omitido
const nome = 'Juliana';
console.log('meu nome é ' + nome);
```

Dessa forma, concatenamos duas strings. A primeira string é "meu nome é ", e a segunda string é "Juliana", que está dentro da variável nome.

Vamos voltar ao terminal, limpá-lo com "Ctrl + L", e executar novamente o mesmo comando. Como retorno, temos a mensagem "meu nome é Juliana".

Agora conseguimos pensar no problema que é misturar strings e números, porque a situação que criamos, em vez de somar a nota do quarto bimestre, concatenou e colocou o 5 após a conta toda.

Quando fazemos operações em um programa, isso não pode acontecer. Portanto, é muito importante sempre ter em mente os tipos de dado que guardamos nas variáveis. No nosso exemplo, temos o tipo number, que pode ser inteiro, ponto flutuante, ou um número negativo.

Porém, quando colocamos um número dentro de strings (entre aspas simples), ele não é mais um número, e sim uma string, não importa que o valor dentro dela seja 5, 12, 10, ou 0.

Convertendo string em número  
É normal, em diversas situações, termos acesso aos números na nossa aplicação como string, por exemplo, quando eles chegam a partir de formulários. Existem algumas formas de converter.

Vamos passar uma das formas possíveis de usar o JavaScript para converter uma string para um número. Em const notaQuartoBi, vamos passar Number.parseInt() e, entre parênteses, colocar o número 5.

> const notaQuartoBi = Number.parseInt('5');

Agora, se executarmos o arquivo novamente, temos o resultado 17.3 no terminal. O 5 ao final não existe mais e todos os quatro valores são tratados como números.

Calculando a média  
Podemos finalizar o nosso cálculo de média. Em const total, vamos englobar o cálculo da soma das quatro notas entre parênteses e dividir o resultado por 4.

> const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

Após salvar o arquivo e testar novamente no terminal, temos 4.325. É possível também modificar o retorno, se quisermos reduzir a quantidade de casas decimais, utilizando outra função do JavaScript.

Vamos fechar o console.log() passando primeiro a string "a média é " seguida do operador de mais (+). Na sequência, o total recebe uma função para reduzir o número de casas decimais. Assim, teremos total.toFixed(2), para fixar 2 casas após a vírgula.

> console.log('a média é ' + total.toFixed(2));

De volta ao terminal, executamos novamente o comando node tipo-number.js. Agora, temos como retorno a média de 4.33, ou seja, funcionou conforme esperado.

**Conclusão**  
Queremos frisar que é muito importante termos certeza dos tipos que cada variável guarda para evitar, por exemplo, problemas em contas ou em concatenação de texto.

Além disso, aprendemos que existem funções prontas para cada tipo. Por exemplo: toFixed() é uma função que utilizamos para números, mas há outras funções que utilizamos também para strings que conheceremos durante o curso. Vamos lá?

### Aula 3 - Para saber mais: NaN

Como vimos em vídeo, NaN representa, literalmente, “not a number”, ou “não é um número”. Na maior parte dos casos, NaN é o valor retornado como resultado de uma operação aritmética mal formada, por exemplo:

> console.log(5 * 'a'); // NaN

Agora vamos ver um outro exemplo. O que você acha que vai ser retornado no console?

> console.log(5 * '5');

Nesse caso, o resultado é 25 e não NaN como esperado, afinal de contas estamos tentando multiplicar números e letras. O JavaScript, nestes casos, sempre tenta converter de forma implícita a string em número antes de tentar efetuar a operação aritmética.

É sempre importante lembrar da conversão implícita quando estamos trabalhando com operações entre dados, e garantir que estas operações estejam recebendo apenas dados do tipo Number.

O caso de operações mal formadas é uma das ocorrências mais comuns de NaN no código, mas não é a única. Existem cinco tipos de operações que podem retornar NaN:

Tentativas de converter para números valores que não podem ser convertidos, como parseInt(‘texto’) ou Number(undefined). Os valores booleanos true e false podem ser convertidos para 1 e 0 usando Number(), porém retornarão NaN caso a tentativa de conversão seja feita com parseInt().

Operações matemáticas que não resultam em números reais, por exemplo Math.sqrt(-1).

Operações onde um dos valores é NaN ou pode ser convertido para NaN, por exemplo 5 * ‘a’, 5 + NaN.

Formatos indeterminados como Infinity / Infinity, Infinity - Infinity. O valor Infinity existe no JavaScript e você pode conferir mais sobre ele na [documentação do MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity).

Outros casos onde um valor não pode ser representado como número.

Como verificar se um valor é NaN?
Você pode utilizar os métodos Number.isNaN() ou isNaN():

```JavaScript
const numero = 10;
const nome = 'Ana';

Number.isNaN(numero) // false
Number.isNaN(nome) // false
Number.isNaN(NaN) // true
```

Observe que nome não é avaliado como NaN nesse contexto. Porém, observe este novo exemplo, utilizando a função isNaN() ao invés de Number.isNan():

```JavaScript
isNaN(10) // false
isNaN(nome) // true
isNaN(NaN) // true
```

A diferença é que Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN, enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser avaliado como NaN se tentar ser convertido para número. Você pode utilizar um ou outro dependendo da sua necessidade.

Parte do conteúdo desta atividade usou de apoio a [documentação do MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN). Você pode conferir mais exemplos e casos avançados do NaN direto no verbete NaN no MDN.

### Aula 3 - Para saber mais: tipos numéricos

Os tipos numéricos desempenham um papel fundamental na manipulação de valores em programas, permitindo a representação de diferentes formas de números. Neste contexto, podemos destacar os seguintes tipos de números:

**Números Inteiros (Int)**  
Em JavaScript, todos os números são do tipo Number, o que significa que não há um tipo específico para inteiros. No entanto, os números podem ser representados sem casas decimais, como exemplificado abaixo:

```JavaScript
let numeroInteiro = 10;
console.log(numeroInteiro); // Saída: 10
```

**Números de Ponto Flutuante (Float)**  
Os números de ponto flutuante incluem valores com casas decimais, mesmo que estas sejam zero. Enquanto o sistema decimal é baseado no número 10 e é utilizado no cotidiano para representar números de forma exata, o ponto flutuante é um método binário de representação de números reais em computadores, usando a notação científica para proporcionar uma ampla gama de valores com uma precisão limitada.

Exemplo:

```JavaScript
let numeroFlutuante = 3.14;
console.log(numeroFlutuante); // Saída: 3.14
```

**Números Hexadecimais**  
Os números hexadecimais são representados na base 16, começando com 0x seguido pelo valor hexadecimal. Acompanhe o exemplo:

```JavaScript
let numHex = 0xA; // Representa o número 10 em hexadecimal
console.log(numHex); // Saída: 10
```

**Números Octais**  
Apesar de não terem uma representação direta em JavaScript, os números octais podem ser representados usando o prefixo 0o seguido pelo valor octal, como no exemplo abaixo:

```JavaScript
let numOctal = 0o10; // Isso representa o número 8 em octal
console.log(numOctal); // Saída: 8
```

Embora os números inteiros e de ponto flutuante sejam utilizados com maior frequência, os números hexadecimais e octais são representações especiais utilizadas em situações específicas, fornecendo flexibilidade adicional para lidar com diferentes bases numéricas.

### Aula 3 - String - Vídeo 2

Transcrição  
Dando continuidade à nossa aula sobre tipos de dados, já conhecemos o tipo number (número), muito importante para realizar operações usando o JavaScript. Agora, vamos continuar com um tipo que já trabalhamos anteriormente: o tipo string.

**String**
Criando o arquivo tipo-string.js
Vamos criar um novo arquivo no Visual Studio Code chamado tipo-string.js. Temos trabalhado com strings desde o início do curso. O que mais precisamos saber sobre o tipo string?

String é o nome que usamos para representar cadeias de caracteres. Qualquer conjunto de caracteres entre aspas, sejam simples, duplas ou crases, são strings para o JavaScript. Vamos observar isso na prática?

Criaremos uma const chamada estudante e atribuiremos a ela o valor "Caroline" entre aspas duplas. Lembrando que o JavaScript aceita aspas duplas. Em seguida, vamos criar outra const chamada docente e atribuir a ela o valor "Ana" usando aspas simples, o que também é aceito.

tipo-string.js:

```JavaScript
const estudante = "Caroline";
const docente = 'Ana';
```

Porém, e se precisarmos colocar algo entre aspas dentro de um texto? Vamos criar outra constante chamada cumprimento e atribuir a ela o valor "nosso lema é 'estudar bastante!'", usando aspas simples entre aspas duplas. O JavaScript aceita citações com aspas dentro de aspas.

> const cumprimento = "nosso lema é 'estudar bastante!'";

Também podemos utilizar crases (acento grave) como notação de string no JavaScript. Por exemplo: vamos criar outra const chamada citacao e atribuir a ela o valor Ju diz: "nosso lema é 'estudar bastante!'". Podemos colocar aspas duplas e aspas simples dentro das crases e também irá funcionar.

> const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

Por último, vamos imprimir com console.log() os valores das constantes cumprimento e citacao para conferir se tudo está correto.

```JavaScript
console.log(cumprimento);
console.log(citacao);
```

Testando o código
Executando o arquivo tipo-string.js no Node.js, recebemos o resultado esperado.

node tipo-string.js

Retorno do comando:

> nosso lema é 'estudar bastante!'  
  Ju diz: "nosso lema é 'estudar bastante!'"

Assim, entendemos que podemos usar aspas simples ou aspas duplas, como preferirmos. O importante é ser consistente: se decidir usar só aspas simples, use-as sempre, e o mesmo se aplica às aspas duplas.

**Usando template strings**
A crase tem um uso um pouco mais específico. Já vimos anteriormente que o sinal de mais (+), o operador de adição, é usado para concatenar, ou seja, unir strings, além de fazer contas.

Por exemplo: se criarmos um console.log() abaixo recebendo 'a estudante se chama ' + estudante, irá funcionar, mas a concatenação pode ser complicada de fazer e tornar a leitura confusa. Se precisarmos concatenar muito texto, fica complicado identificar onde estão os espaços e onde colocar o sinal de +.

Alternativamente, há outra forma de concatenar strings em JavaScript, que são as template strings. Para isso, usamos a crase. Nesse caso, em vez de concatenar texto com +, envolvemos todo o texto que queremos criar com crases, e onde queremos incluir um valor variável, usamos ${}.

Por exemplo: em vez de dizer 'a estudante se chama ' + estudante, diríamos a estudante se chama ${estudante}. Assim, a leitura fica muito mais fluida e não precisamos nos preocupar em concatenar texto com variável.

> console.log(`a estudante chama ${estudante}`);

Ao executar novamente o comando node tipo-string.js, temos o seguinte retorno:

```JavaScript
nosso lema é 'estudar bastante!'  
Ju diz: "nosso lema é 'estudar bastante!'"
a estudante chama Caroline
```

Podemos usar sempre a template string em vez de concatenação, pois ela é de versões mais antigas do JavaScript. As template strings são mais modernas.

**Testando funções do JavaScript**  
Além disso, o JavaScript tem diversas operações que podemos fazer com strings e que já estão incluídas na linguagem. Deixaremos um [link para a documentação do MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String), onde são listadas todas as funções prontas do JavaScript para fazer alterações de string.

Vamos fazer um teste em uma dessas funções para entender o que é alterar uma string. Suponha que temos uma const chamada senha e atribuímos a ela o valor "SenhaSegura123" como uma string.

Para tornar essa senha ainda mais segura, vamos concatenar o valor da senha com o valor de estudante, e vamos colocar o nome da pessoa estudante em caixa alta usando o método toUpperCase().

Feito isso, podemos dar um console.log() na variável senha para verificar o resultado.

```JavaScript
const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);
```

A nossa senha segura agora é "SenhaSegura123CAROLINE".

É muito importante lembrar que o JavaScript é case sensitive, ou seja, maiúsculas e minúsculas em nomes de variáveis e em comandos sempre fazem diferença. O método toUpperCase() deve ser escrito no seu código exatamente da forma que escrevemos acima para funcionar.

Além disso, tudo que não está entre strings para o JavaScript é considerado, por exemplo, variável ou função. Então, se houver algum erro de string, sempre confira se elas estão entre aspas corretamente, senão o JavaScript não vai entender que aquilo é uma sequência de caracteres.

**Conclusão**  
Continuaremos conhecendo os tipos de dados do JavaScript no próximo vídeo!

### Aula 3 - Para saber mais: conversão de textos

Acabamos de aprender que usamos o tipo string sempre que queremos trabalhar com sequências de caracteres alfanuméricos, como textos, senhas e dados como CPF. Mas se pararmos para pensar, vários idiomas utilizam caracteres diferentes, como acentos e ideogramas. Como as linguagens de programação lidam com isso? E o que dizer dos emojis <p>&#129300<p/>? Você já visitou algum site e notou que os caracteres dos textos não pareciam corretos, que no lugar de alguns deles apareciam sinais de interrogação, quadrados ou traços?

Isso tem a ver com a codificação de caracteres, ou character encoding. Nas últimas décadas, foram desenvolvidos diversos conjuntos de caracteres especiais, cada um com seus próprios códigos, para que pessoas que escrevem e leem em linguagens diferentes do inglês pudessem utilizar computadores em seus próprios idiomas.

Como um computador decifra caracteres especiais?
Para que o computador consiga decifrar caracteres especiais, é preciso utilizar um sistema específico que tenha basicamente um código para cada caractere. O computador precisa acessar esse sistema para fazer a conversão - uma ideia similar a que está por trás da criptografia.

Foram desenvolvidos diversos conjuntos de caracteres, desde os específicos de cada linguagem como Western, Latin-US, Japanese e assim por diante, até o ASCII (American Standard Code for Information Interchange ou ”Código Padrão Americano para o Intercâmbio de Informação”). Só a partir de 2007 foi adotado o formato Unicode.

O padrão UTF (de Unicode Transformation Format ou “formato de conversão de unicode”, em tradução livre) é utilizado como padrão na web até hoje.

O Unicode tem códigos específicos para “cifrar” e “decifrar” caracteres de mais de 150 idiomas antigos e modernos, e também outros conjuntos de caracteres como símbolos matemáticos e inclusive emojs. A [Wikipedia tem uma lista extensa](https://en.wikipedia.org/wiki/List_of_Unicode_characters) de todas as tabelas com os códigos Unicode e os caracteres, como por exemplo os que estão abaixo:

caractere UTF-16 descrição oficial

`$ - U+0024 DOLLAR SIGN
 A - U+0041 LATIN CAPITAL LETTER A
✅ - U+2705 CHECK MARK
ぁ - U+3041 HIRAGANA LETTER SMALL A`

Podemos testar a transformação/conversão do código Unicode em caractere utilizando o console.log(). Faça o teste:

```JavaScript
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
```

Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

O JavaScript usa, por padrão, o UTF-16. O número 16 está relacionado aos espaços em bits ocupados por cada caractere, 16 neste caso. Não vamos nos aprofundar na relação entre tipos de dados e espaço de memória ocupado por cada tipo - você pode pesquisar mais sobre o assunto, assim como sobre o que são caracteres de escape! - mas por enquanto é importante entendermos como o Unicode funciona.

Bancos de dados podem aceitar outros tipos de codificação de caracteres, o que faz sentido se pensarmos que o UTF-16 utiliza uma quantidade relativamente grande de espaço em memória para salvar cada caractere. 16 bits parece pouco, mas algumas vezes os bancos precisam salvar quantidades enormes de dados! Porém, com as tecnologias de armazenamento e tráfego de dados que temos hoje, esta já não é uma preocupação tão grande, a não ser em casos muito específicos.

Não é comum utilizar uma codificação diferente da UTF em bancos, mesmo em caso de grandes volumes de dados, mas sempre vai depender muito de cada caso.

Mais detalhes precisos e documentação sobre o Unicode na [página da Unicode Foundation](https://home.unicode.org/).

### Aula 3 - Boolean - Vídeo 3

Transcrição  
Vamos continuar conhecendo os tipos de dados do JavaScript, em especial, os tipos primitivos.

**Boolean**  
Por exemplo: em variaveis.js, se o valor de uma variável não é um texto, um nome, uma informação ou um número, o que ela pode ser? Quais outros valores podemos usar?

Criando o arquivo tipo-boolean.js
Vamos criar mais um arquivo, chamado tipo-boolean.js, que é o tipo que vamos abordar nesse vídeo: o tipo booleano. O que é um tipo booleano?

Trata-se de um tipo especial que só tem dois valores. Vamos criar nesse novo arquivo uma const chamada estudante e atribuir a ela o valor "Fernando".

tipo-boolean.js:

> const estudante = 'Fernando';

Queremos saber se esse estudante está aprovado ou não. O que podemos fazer nesse caso? Podemos criar uma const chamada estaAprovado. Se está aprovado, poderíamos criar uma string com o texto "sim".

No entanto, essa não é a melhor solução; "sim" está em português, teríamos que identificar o que significa "sim", porque o JavaScript não sabe o que é. Para ele, é apenas uma sequência de três letras.

Para isso, utilizamos o tipo booleano que só tem dois valores: true ou false (verdadeiro ou falso, respectivamente), sim ou não, ou está ou não está. Então, se o estudante Fernando está aprovado, utilizamos o valor true, com "T" minúsculo.

> const estaAprovado = true;

Como utilizamos normalmente um booleano em nosso código? Vamos fazer um teste e criar uma condicional, ou seja, um bloco if, e dizer que se estaAprovado === true, ou seja, se o valor da variável estaAprovado for igual a true, passamos uma mensagem no console.log() ("parabéns, boas festas").

Agora podemos usar o else, com o qual já trabalhamos nos cursos de iniciante em programação, que é o outro lado do if. Se a condição que passamos para o if não se conclui, ou seja, se não dá true, o código automaticamente cai no else e executa o que está dentro dele. No escopo do else, vamos passar outro console.log() dizendo "REPROVADO, boas festas".

```JavaScript
if (estaAprovado === true) { 
  console.log('parabéns, boas festas');
} else {
  console.log('REPROVADO, boas festas');
}
```

Testando o código
Agora podemos testar esse código. Executaremos o seguinte comando no terminal:

> node tipo-boolean.js

O console exibiu "parabéns, boas festas", porque o valor da variável estaAprovado é true, então ele entrou no bloco if, executou o que estava dentro dele, e ignorou automaticamente o else.

Quando trabalhamos com booleanos, há uma questão muito importante para sempre prestarmos atenção. Por exemplo: a condição do if diz que, para o if ser executado, o valor da variável estaAprovado precisa ser true.

No entanto, o código JavaScript não faz um juízo de valor se é sim ou não, o que importa é o resultado da comparação. O resultado da comparação é true, porque as informações batem.

Nós esperamos o valor de uma variável na comparação e recebemos o valor dessa variável. Ou seja, se trocarmos o valor da variável estaAprovado para false e pedirmos para a comparação no if ser estaAprovado === false, ao executar o código, ele entra no if normalmente, porque o que importa quando utilizamos booleanos é o resultado da comparação.

Não é o valor da variável ser true que faz com que entre no bloco if ou não.

Essa distinção é muito importante para entendermos como as comparações utilizando booleanos funcionam. Vamos fazer outro teste, porque é uma forma muito comum de trabalharmos com JavaScript.

Já sabemos que o importante é o resultado da comparação. Como o valor da variável é true, podemos, nesse caso, suprimir a comparação e passar apenas a variável estaAprovado. Se tirarmos o === true e executarmos o código, ele ainda funcionará normalmente, porque o valor da variável é true.

```JavaScript
if (estaAprovado === true)
```

Criando uma nova condicional  
Para entendermos melhor essa questão da avaliação da condição, vamos criar mais um bloco if. Criaremos um if que vai analisar se o valor de estudante é igual a 'Fernando', valor da variável.

No escopo do if, vamos exibir com console.log() a mensagem olá, ${estudante}" usando template string. Dessa forma, aparecerá no terminal "Olá, Fernando".

No bloco else, vamos colocar outra informação para dizer que houve falha. Para isso, passaremos um console.log() com o texto "quem é vc".

```JavaScript
if (estudante === 'Fernando') {
  console.log(`olá, ${estudante}`);
} else {
  console.log('quem é vc');
}
```

De volta ao terminal, podemos limpá-lo e executar o código novamente. Agora ele passa a mensagem "olá, Fernando". Portanto, a avaliação feita no if é se o valor da variável estudante é exatamente igual a "Fernando". Quando é feita essa avaliação, o resultado dela é true, porque as informações batem. É por isso que o JavaScript acessa o código dentro do bloco e executa, dispensando o else.

Foi feita uma avaliação entre o valor da variável estudante e o que esperamos que tenha dentro, e esse valor é true, porque é verdadeiro, ou seja, a comparação deu certo. Por isso conseguimos entrar no if. É importante ter isso em mente quando trabalhamos com comparações e com booleanos.

O tipo booleano não é somente um valor, um tipo de dado, mas é também o resultado de qualquer comparação (ou seja, quando usamos ===) feita no código. Então, qualquer comparação que façamos irá sempre resultar em true ou false.

Conclusão
Vamos deixar materiais extra sobre booleanos e alguns exercícios para fixar. Na sequência, continuaremos abordando os últimos tipos de dados do JavaScript!

### Aula 3 - Para saber mais: coerção e conversão de tipos

Coerção e conversão de tipos são conceitos em JavaScript que envolvem a maneira como os valores são tratados e convertidos entre diferentes tipos de dados. Vamos entender melhor com exemplos:

**Coerção de Tipos em JavaScript**  
A coerção de tipos em JavaScript refere-se à conversão automática e implícita de um tipo de dado para outro durante operações. Isso pode acontecer em operações matemáticas, comparações ou concatenações de strings.

Exemplo de Coerção de Tipos:

```JavaScript
let valorString = '10';
let valorNumero = 5;

let resultado = valorString + valorNumero;
console.log(resultado); // Saída: '105' (o número 5 foi convertido para string e concatenado com a string ‘10’)
```

Neste exemplo, a operação de adição entre uma string e um número resultou em uma concatenação de strings, pois o JavaScript coage (converte) o número para uma string para realizar a operação.

Conversão de Tipos em JavaScript
A conversão de tipos é a transformação explícita de um tipo de dado em outro. Isso pode ser feito de várias maneiras, como utilizando funções ou operadores específicos para converter um tipo em outro.

Exemplo de Conversão de Tipos:

```JavaScript
let valorString = '20';
let valorNumero = parseInt(valorString);

console.log(valorNumero); // Saída: 20 (valor convertido para número usando parseInt)
```

Neste exemplo, utilizamos a função parseInt() para converter a string '20' em um número inteiro.

Além do parseInt(), existem outras funções como parseFloat() para converter strings em números de ponto flutuante, Number() para converter valores em números, String() para converter valores em strings, entre outros métodos e operadores que permitem a conversão explícita de tipos em JavaScript.

A compreensão da coerção e conversão de tipos em JavaScript é essencial para evitar comportamentos inesperados e para garantir que os dados sejam manipulados da maneira desejada em suas aplicações.

### Aula 3 - null e undefined - Vídeo 4

Transcrição  
Sabemos que as informações dos nossos programas são, normalmente, textos ou números. Além disso, também sabemos como estabelecer fluxos: está aprovado ou reprovado, é verdadeiro ou falso, a informação existe ou não existe. Para isso, usamos os booleanos.

Porém, existe um caso muito comum que precisamos assinalar: a ausência de valores. Como trabalhar no código quando não existe nenhum valor para ser trabalhado?

**Null e Undefined**  
Criando o arquivo tipo-null-undefined.js
Para testar, vamos criar um novo arquivo chamado tipo-null-undefined.js.

Faz sentido trabalhar com a ausência de valores? Sim, faz sentido. Vamos criar alguns exemplos. Começaremos criando uma variável com a palavra reservada let, chamada nomeEstudante.

Lembrando que quando criamos uma variável com let, podemos criá-la sem atribuir nenhum valor a essa variável, apenas reservando o espaço de memória para atribuir o valor depois.

Portanto, criamos a variável nomeEstudante e vamos dar um console.log() nessa variável.

tipo-null-undefined.js:

```JavaScript
let nomeEstudante;
console.log(nomeEstudante);
```

Feito isso, vamos ao terminal executar o seguinte comando:

node tipo-null-undefined.js

O único resultado que temos é "undefined" (indefinido).

Vamos fazer outro exemplo: criaremos outro console.log() na linha abaixo, e em vez de passar apenas o nome da variável nomeEstudante, vamos passar a palavra-chave typeof antes.

> console.log(typeof nomeEstudante);

Ao executar novamente, obtemos o seguinte:

undefined
undefined

O primeiro console.log() nos informa que não traz nenhum valor, porque não tem nenhum valor para ser buscado na variável. Ele nos diz que o valor dessa variável é indefinido, um tipo especial de dado.

Já no segundo console.log(), pedimos para informar qual é o tipo de dado que tem na variável nomeEstudante. Com isso, ele nos diz que essa variável é do tipo undefined, porque não atribuímos nenhum valor a essa variável. Ou seja, a variável existe, mas não tem nada dentro dela.

Atribuindo o valor null
Existe outra forma de trabalhar com a ausência de valores: o null. Se criarmos, por exemplo, uma variável let chamada telefoneEstudante, e atribuirmos null a ela, afirmamos que não existe nenhum valor dentro da variável telefoneEstudante.

> let telefoneEstudante = null;

Porém, não existir nenhum valor é diferente de valor indefinido. No caso acima, nitidamente usamos o operador de atribuição (=) para atribuir um tipo de dado a essa variável. Simplesmente dizemos que não há nenhum valor de telefone de estudante neste cadastro.

O null é muito útil, por exemplo, em situações de cadastro, quando há um campo sem nenhum valor. Porém, o campo ainda existe, então, no exemplo acima, existe o campo telefoneEstudante no cadastro, porém ele não tem nada, apenas um valor null. Literalmente, nulo.

Essa é a diferença entre null e undefined. Existe outra diferença muito importante que é como eles se comportam em operações. Por acaso, se aparecer null em uma operação matemática, como se comporta? Vamos fazer uma conta para testar: passaremos console.log(telefoneEstudante + 3).

> console.log(telefoneEstudante + 3);

Após executar no terminal, o valor retornado foi 3, porque o null se comportou como 0 dentro de uma operação matemática. Se tentássemos fazer essa mesma operação passando a variável nomeEstudante, que é uma variável indefinida, o que aconteceria?

> console.log(nomeEstudante + 3);

Em vez de 3, o terminal retorna NaN (Not a Number, em português, Não é um número).

O NaN é um valor do tipo número que representa qualquer operação matemática mal formada. Ou seja, tentamos somar um valor indefinido com 3, e o JavaScript retornou para nós que esse resultado não é um número. Por incrível que pareça, NaN é um valor do tipo número.

Verificando o tipo de dado  
Sendo assim, como verificamos se uma variável é null, undefined, number, e assim por diante? Conforme abordado anteriormente, utilizamos a palavra-chave typeof. Portanto, sempre que quisermos verificar um tipo de dado, podemos utilizar o typeof no console.log().

Vamos criar outra variável, por exemplo, uma const chamada professora que será igual à string "Ana", e também pedir o typeof dessa variável. Além disso, vamos pedir o console.log() do typeof de telefoneEstudante, que está definido como null.

```JavaScript
let nomeEstudante;
const professora = 'Ana';

console.log(nomeEstudante);
console.log(typeof nomeEstudante);
console.log(typeof professora);

let telefoneEstudante = null;

console.log(typeof telefoneEstudante);
```

Ao executar, temos o seguinte resultado:

```JavaScript
undefined 
undefined 
string 
object
```

Ele trouxe os dois undefined anteriores, e também trouxe a informação string, porque pedimos typeof da variável professora, que é uma string de fato. Porém, observe que a variável telefoneEstudante, que é do tipo null, foi devolvida como object. O que aconteceu?

Isso é algo muito importante quando utilizamos o typeof para fazer verificações de tipo no JavaScript. Por um erro do JavaScript nas primeiras versões, o tipo null quando utilizamos o typeof para verificar devolve o tipo objeto.

Portanto, sempre que quisermos verificar se o valor de uma variável é null, não podemos usar o typeof. Vamos deixar no material extra como contornar esse erro!

O que precisamos saber sobre null e undefined? Null representa normalmente a ausência intencional de algum valor, ou seja, não há o telefone da pessoa estudante no cadastro.

O undefined é normalmente o tipo assumido pelo JavaScript quando uma variável não está associada a nenhum valor no momento em que o código foi executado. Ela pode ser associada a um valor posteriormente ao momento em que passamos por essa linha.

Normalmente, o undefined dá uma dica de que alguma operação não ocorreu como deveria, porque não retorna um valor, mas sim "undefined"; ou de que o código está tentando pegar algum valor que não está acessível naquele momento; ou é o resultado de alguma função que não tem return, algo que abordaremos mais adiante no curso.

Sendo assim, variáveis que acabaram sem valor nenhum, ou seja, que não conseguimos atribuir durante o código nenhum valor a essa variável, são retornadas como undefined.

Ambos são tipos primitivos, mas o null é comum em diversas linguagens, enquanto o undefined não existe em diversas linguagens. Não são todas as linguagens que trabalham com undefined, sendo o JavaScript uma delas. O undefined foi criado para evitar alguns tipos de erros em páginas web no começo, quando o JavaScript ainda não podia ser trabalhado fora do navegador.

Saber que o undefined, muitas vezes, é retornado no lugar de possíveis erros é muito importante, porque nos ajuda a debugar. Portanto, muitas vezes o JavaScript não vai indicar erro no código, mas vai retornar undefined, e normalmente é uma dica de que tem algo a ser visto naquele ponto do código.

Conclusão  
Nesta aula, conhecemos os tipos primitivos do JavaScript: string, number, boolean, null e undefined. Agora podemos começar a fazer mais operações com esses tipos. Vamos lá!

### Aula 3 - Para saber mais: tipo Symbol

Nesta aula falamos sobre três tipos primitivos: Number, String e Boolean. Mas existe mais um que não abordamos com profundidade: Symbol.

O tipo Symbol é um dos tipos primitivos em JavaScript, introduzido no ES6 (ECMAScript 2015), e representa um identificador único e imutável. Símbolos são frequentemente utilizados para criar propriedades de objeto que são únicas e não interferem com outras propriedades existentes.

```JavaScript
Exemplo de uso do Tipo Symbol:
// Criando um símbolo
const meuSimbolo = Symbol();

// Símbolos podem receber uma descrição (opcional)
const simboloComDescricao = Symbol('descricao_do_simbolo');

// Símbolos são únicos
const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); // Saída: false

// Símbolos podem ser usados como chaves de propriedades de objetos
const obj = {
  [meuSimbolo]: 'valor_do_simbolo'
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'
```

Dado que os símbolos são únicos, mesmo quando criados com a mesma descrição, tornam-se ideais para a criação de chaves de propriedades de objetos. Essa característica evita conflitos com outras chaves, prevenindo a sobrescrita acidental de propriedades.

Além disso, símbolos também podem ser usados para adicionar propriedades "escondidas" em objetos, tornando-as inacessíveis sem a referência direta ao símbolo correspondente. Essa prática é particularmente útil em bibliotecas ou frameworks, contribuindo para evitar colisões de nomes de propriedades.

### Aula 3 - Para saber mais: tipagem dinâmica e estática

Nesta aula, exploramos os tipos primitivos do JavaScript e discutimos como trabalhar com esses tipos ao criar variáveis.

A sintaxe do JS não requer que o tipo seja definido de forma explícita quando declaramos variáveis, uma vez que JavaScript é uma linguagem dinamicamente tipada. Isso implica que:

o tipo do dado contido na variável é avaliado no momento da execução do código e
uma mesma variável pode ter diferentes tipos de dados (nos casos de let e var).
Exemplo de tipagem dinâmica em JavaScript

```JavaScript
let exemplo = 10; // exemplo é do tipo número (Number)
console.log(exemplo); // Saída: 10

exemplo = 'Olá, mundo!'; // agora exemplo é uma string (String)
console.log(exemplo); // Saída: Olá, mundo!

exemplo = true; // exemplo agora é um booleano (Boolean)
console.log(exemplo); // Saída: true
```

Como podemos notar, a variável exemplo começa como um número, depois é alterada para uma string e, por fim, para um booleano. Houve uma mudança dinâmica de tipos.

Essa característica proporciona flexibilidade ao desenvolvimento, mas também demanda maior atenção na manipulação de dados, já que uma mesma variável pode armazenar diferentes tipos de dados ao longo do programa, o que pode resultar em erros se o programa receber um tipo de dado diferente do esperado.

No artigo [O que são as tipagens estática e dinâmica em programação](https://www.alura.com.br/artigos/o-que-sao-as-tipagens-estatica-e-dinamica-em-programacao#o-que-sao-tipos?) podemos entender melhor quais as diferenças entre linguagens de tipagem estática e dinâmica.

### Aula 3 - Faça como eu fiz: convertendo números e textos

Não deixe de praticar, executando os exemplos desta atividade em seu computador!

Vamos revisar os métodos do JavaScript para conversão de strings e números e também conhecer outros que não praticamos em vídeo.

Conversão para números

> Number()

Esta função converte qualquer outro tipo de dado em um tipo Number. Caso o valor não possa ser convertido, retornará NaN.

```JavaScript
Number("1"); // retorna o número 1 
Number("Alura"); // retorna NaN
Number(undefined); // retorna NaN
Number(null); // retorna 0
```

> Number.parseInt() e Number.parseFloat()

Ambos funcionam de forma parecida, porém, 'parseIntvai tentar converter o valor em um número inteiro eparseFloat`, em um número de ponto flutuante.

```JavaScript
parseInt('4'); // retorna o número 4
parseInt('4.5'); // retorna o número 4

parseFloat('4'); // retorna o número 4
parseFloat('4.5'); // retorna o número 4.5
parseFloat('4.5abc'); // retorna o número 4.5
```

Uma outra forma de fazer a coerção de tipos (quando o JavaScript tenta “forçar” de forma implícita a conversão de um valor de um tipo para outro) é utilizando o operador unário +. Por exemplo:

```JavaScript
+'45' // retorna o número 45
+true // retorna o número 1

console.log(typeof +'45'); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’
```

> Importante: embora seja prático, o uso do operador + para coerção de tipos não é tão conhecido e sua função no código não fica tão óbvia quanto a das funções. Se for o caso, combine o seu uso junto às outras pessoas que trabalharão no mesmo código.

Qual a diferença?  
As funções parseInt() e parseFloat() funcionam de forma similar a Number(), porém convertem apenas strings, enquanto Number() é capaz de converter outros tipos de dados conforme os exemplos acima.

Confira mais usos detalhados de cada um na documentação do MDN:

- [number](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Reference/Global_Objects/Number);
- [parseInt](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt);
- [parseFloat](https://developer.mozilla.org/pt-br/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat);

Conversão para strings  
Assim como Number(), o JavaScript também disponibiliza a função global String() quando é necessário converter outros tipos de dado em formato de texto.

```JavaScript
String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'
```

É possível utilizar diversos métodos do JavaScript para modificar strings. Confira abaixo alguns dos mais comuns:

> [includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

Determina se um conjunto de caracteres pode ser encontrado dentro de uma string, retornando true ou false:

> 'estudando JavaScript'.includes('Java'); // retorna true

É sempre possível passar o valor a ser convertido a partir de uma variável:

```JavaScript
const texto = 'estudando JavaScript';
texto.includes('Java'); // retorna true
```

> [toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)  
Converte todos os caracteres da string para letras minúsculas.

```JavaScript
'POR FAVOR, NÃO GRITE'.toLowerCase(); // retorna 'por favor, não grite'
```

Assim como no exemplo anterior, a string que será convertida pode estar em uma variável:

```JavaScript
const texto = 'POR FAVOR, NÃO GRITE';
texto.toLowerCase(); // retorna 'por favor, não grite'
```

Da mesma forma que existe um método para transformar textos em minúsculas, também é possível usar [texto.toUpperCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) para converter em maiúsculas.

Confira a lista completa de [métodos de string na documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos).

### Aula 3 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

Documentação do MDN: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number);
Documentação do MDN: [Lista de métodos de string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods);
Documentação do MDN: [diferença entre nulll e undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null#difference_between_null_and_undefined).

### Aula 3 - Lista de exercícios

Programação é prática! Criamos mais uma lista de atividades (não obrigatórias) para você exercitar e reforçar ainda mais seu aprendizado. Bora praticar?

1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião”.

### Aula 3 - O que aprendemos?

Nessa aula, você aprendeu a:  

- Armazenar dados utilizando variáveis e quais tipos de dados podemos armazenar para utilizar posteriormente em programas desenvolvidos;
- Converter um dado do tipo string em number para realizar operações;
- Realizar operações com strings e como trabalhar utilizando template strings para criar expressões embutidas e tornar o código mais legível;
- Trabalhar com o tipo booleano para representar valores lógicos, realizar controle de fluxo, tomada de decisões e validações.

## Aula 4 - Operadores

### Aula 4 - Operadores aritméticos - Vídeo 1

Transcrição  
Para continuarmos a entender as partes principais de uma linguagem de programação como o JavaScript, é importante que separemos as funções básicas de um programa.

A primeira função básica de um programa costuma ser realizar cálculos ou operações matemáticas. A segunda é trabalhar com algoritmos, ou seja, com fluxos de tarefas finitos (que têm um início e um fim). Partindo das informações, conseguimos definir o fluxo dessa tarefa.

![alt text](image.png)

Fluxograma simples de processo de avaliação escolar sobre fundo escuro quadriculado. À esquerda, um oval com a palavra "início" conecta-se a um retângulo com o texto "notas das provas", que por sua vez conecta-se a outro retângulo com o texto "calcula média". A partir deste, uma seta aponta para um losango com a condição "média >= 7" escrita. Duas saídas são possíveis a partir deste ponto de decisão: uma seta apontando para a direita com a palavra "TRUE" leva até um retângulo com bordas arredondadas e o texto "aprovado", enquanto uma seta apontando para cima com a palavra "FALSE" conduz a um retângulo com bordas arredondadas e o texto "reprovado".

Por exemplo, podemos afirmar que em nosso sistema escolar, uma pessoa estudante só será aprovada se a média for igual ou maior do que 7. Então, temos um dado, o número 7, e para o programa definir se a pessoa estudante está aprovada ou não, e dar a informação correspondente no sistema, precisamos utilizar alguns símbolos para cruzar essas informações.

Para comparar 7 com uma média estabelecida, perguntamos: a média é maior ou igual que 7? Isso vai depender da pessoa estudante. Ela tirou 6.5? Tirou 10? Todos os fluxos de um algoritmo precisam desse tipo de informação.

Por exemplo, se a média de uma pessoa estudante for 6.5, é menor do que 7, nosso programa define um fluxo para isso, indicando que a pessoa estudante está reprovada. Por outro lado, se a pessoa estudante tirou 10, está aprovada. Mas para o programa criar esses fluxos e decidir a partir deles, precisamos de alguns símbolos, que chamamos de operadores.

**Operadores aritméticos**  
Vamos voltar ao Visual Studio Code para praticar um pouco com os operadores do JavaScript. Acessaremos o arquivo tipo-number.js que trabalhamos anteriormente. Copiaremos as quatro constantes que foram criadas, a constante total e o console.log(). São as primeiras linhas do arquivo.

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5');

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log('a média é ' + total.toFixed(2));
```

Podemos fechar o tipo-number.js, criar um novo arquivo e nomeá-lo como operadores-aritmeticos.js. Nesse novo arquivo, vamos colar o que copiamos.

Temos const notaPrimeiroBi = 8, const notaSegundoBi = 6.3, vamos retirar o número negativo de notaTerceiroBi, que estava como -2 para 7, porque uma nota negativa não faz sentido, foi só para dar um exemplo. E o notaQuartoBi, vamos trocar o 5 que estava sendo "parseado" por 9.3.

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
console.log('a média é ' + total.toFixed(2));
```

Em relação à nossa constante total, vamos mudar seu nome para media. Nela, estamos fazendo uma conta que é a soma das notas dos bimestres dividida por 4.

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
const media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
console.log('a média é ' + total.toFixed(2));
```

Vamos adicionar mais um teste em nosso programa. Se a pessoa estudante tem uma média maior do que 7 ou igual, ela ganha um bônus na nota de um décimo dessa média.

Portanto, construiremos esse fluxo. Já que é uma condição — se a pessoa estudante tiver uma média 7 ou maior — podemos usar um if. Então, if (media >= 7) {}. Precisamos pegar o valor da média e adicionar um décimo de nota.

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
const media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
if (media >= 7) {
 media
}
console.log('a média é ' + total.toFixed(2));
```

Nesse caso, teríamos que alterar o valor da variável media. Se estamos alterando o valor da variável media, quer dizer que nossa media não pode mais ser uma constante, tem que ser, por enquanto, uma let.

Portanto, esta é uma situação em que não podemos usar constantes. Nesse caso específico, utilizamos a let, porque precisamos adicionar um valor, isto é, modificar o valor da nossa variável media.

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
if (media >= 7) {
 media
}
console.log('a média é ' + total.toFixed(2));
```

Então, se média for maior ou igual a 7, if (media >= 7), diremos que media += media * 0.1;. Podemos aproveitar para ajustar o console.log().

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
if (media >= 7) {
 media += media * 0.1;
}
console.log(`a média é ${media}`);
```

Vamos abrir o terminal para testar. Então, no menu acessaremos "Terminal > New Terminal", passaremos o comando node e o nome do arquivo: operadores-aritmeticos.js.

node operadores-aritmeticos.js

> A média é 8.415000000000001

**O que fizemos até aqui?**  
Utilizamos um operador de adição, isto é, um operador aritmético para fazer a soma, um operador de divisão para fazer uma divisão e um operador de comparação, ou seja, se media >= 7 (se média for maior ou igual a 7).

Assim como temos o >= (maior igual), temos o <= (menor igual) e o = (igual), que já utilizamos anteriormente. Além disso, utilizamos outro operador, que é o += (mais, igual). Ele pega o valor da variável que está à esquerda e adiciona o que está à direita. Lembrando que sempre que temos uma atribuição, analisamos primeiro o que está à direita da atribuição para depois passar para o lado esquerdo.

No nosso caso, temos media multiplicada por 0.1. Após essa operação ter sido feita, ela será adicionada ao valor da variável já existente, media. Para isso, utilizamos +=.

Existe, por exemplo, *= (vezes, igual) para fazer o mesmo processo multiplicando. Uma lista de operadores será disponibilizada, mas, basicamente, o que temos são operadores diferentes que nos permitem, justamente, fazer esses fluxos de comparação, alterar variáveis, fazer contas, etc.

Para fixar o ponto flutuante em dois dígitos, basta fazer media.toFixed(2), sendo "2" a quantidade de casas que queremos.

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
if (media >= 7) {
 media += media * 0.1;
}
console.log(`a média é ${media.toFixed(2)}`);
```

Agora, vamos testar novamente no terminal.

node operadores-aritmeticos.js

> a média é 8.42

O [link da documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators) será disponibilizado com toda a lista de operadores do JavaScript. Então, temos operadores de atribuição, por exemplo, o = (igual) para atribuir variáveis, comparação foi o que já utilizamos, === (igual, igual, igual), >= (maior igual), <= (menor igual), operadores aritméticos, etc.

### Aula 4 - Operador de incremento

Julia está criando um programa para controlar o número de visitantes em um site. Para isso, ela está implementando um contador que registra a quantidade de visitas a cada vez que alguém acessa uma página específica.

O contador é representado pela variável contadorVisitas, inicializada com o valor zero. A cada visita à página, o contador deve ser incrementado em uma unidade.

Julia está considerando diferentes maneiras de realizar o incremento na variável contadorVisitas. Ela tentou as seguintes abordagens:

```JavaScript
let contadorVisitas = 0;
contadorVisitas = contadorVisitas + 1;
contadorVisitas += 1;
contadorVisitas++;
```

Quais alternativas descrevem a relação entre as formas de incrementar o contador:

- As três formas de incremento são equivalentes e atualizam o contador contadorVisitas da mesma maneira.

Esta alternativa é correta. As três formas de incremento (contadorVisitas = contadorVisitas + 1, contadorVisitas += 1 e contadorVisitas++) realizam a mesma ação de adicionar uma unidade ao valor da variável contadorVisitas. Todas as formas resultam no aumento do valor de contadorVisitas em 1 unidade.

- Embora haja uma diferença sutil na implementação, contadorVisitas += 1 e contadorVisitas++ resultam no mesmo valor para contadorVisitas.

Para o propósito prático deste exercício, ambas as operações resultam no incremento de contadorVisitas em 1 unidade. Porém, há uma diferença sutil entre elas. A expressão contadorVisitas += 1 é uma operação de atribuição aditiva que incrementa contadorVisitas em 1 unidade, enquanto a operação contadorVisitas++ é um operador de incremento pós-fixo que primeiro retorna o valor original de contadorVisitas e depois o incrementa em 1.

### Aula 4 - Controle de estoque

Você está desenvolvendo um programa para controlar o estoque de produtos de uma loja.

O trecho de código a seguir é parte do sistema de registro de vendas e atualização de estoque:

> let estoqueProdutoA = 50;

O próximo passo que deve ser desenvolvido é a funcionalidade de vendas. Com ela queremos verificar se os produtos estão disponíveis em estoque, atualizar o estoque após a venda e, caso a venda seja realizada, exibir uma mensagem informando que a venda foi realizada com sucesso.

Para criar essa solução, qual trecho pode ser implementado?

```JavaScript
function realizarVenda(quantidade) {
    if (quantidade > estoqueProdutoA) {
        console.log("Quantidade insuficiente em estoque.");
    } else {
        estoqueProdutoA -= quantidade;
        console.log(`Venda realizada com sucesso. Novo estoque: ${estoqueProdutoA}`);
    }
}
```

Nesta opção, observamos a lógica de verificar se a quantidade solicitada está disponível no estoque antes de realizar a venda, a mensagem de feedback para incluir uma declaração explícita indicando que a venda foi realizada com sucesso, fornecendo informações sobre a quantidade vendida e o novo estoque após a venda. Além disso, caso a quantidade exceda o estoque disponível, a mensagem informa que a venda não foi realizada devido à quantidade insuficiente em estoque.

### Aula 4 - Operadores lógicos - Vídeo 2

Transcrição  
Até agora, nós trabalhamos com alguns tipos de operadores, como, por exemplo, o operador de atribuição, que usamos sem nem perceber ao criar uma variável com o sinal de "igual (=)".

Outro operador de atribuição que conhecemos anteriormente é o "mais, igual (+=)", usado para incrementar e atribuir a uma variável. Temos também os operadores de comparação, como o "maior, igual (>=)", "três iguais (===)" para comparar exatamente e assim por diante.

Agora, vamos trabalhar com outro tipo de operador fundamental para a criação de algoritmos e fluxos: os operadores lógicos.

**Operadores lógicos**  
Vamos criar um novo arquivo chamado operadores-logicos.js e elaborar alguns exemplos para um melhor entendimento.

Suponha que em nossa escola, uma pessoa estudante vai reprovar se, além da nota, tiver uma quantidade X de faltas. Então, podemos dizer que, se a nota final da pessoa estudante for menor do que 7 e a quantidade de faltas for maior do que 4, ela reprovará.

```JavaScript
if (notaFinal < 7 faltas > 4) {
 console.log('reprovado, boas festas');
}
```

Porém, notaFinal < 7 e faltas > 4 são duas condições. Queremos que o if obedeça as duas. Neste caso, usamos um operador lógico de OU. Em JavaScript, o símbolo do operador lógico OU são dois pipes, ||, que são dois riscos verticais.

No teclado, geralmente ficam perto da barra. Isso significa que a condição do if só será verdadeira se uma das condições ou a outra estiver correta.

```JavaScript
if (notaFinal < 7 || faltas > 4) {
 console.log('reprovado, boas festas');
}
```

Vamos criar uma constante notaFinal, e atribuir o valor 7. Também vamos criar outra constante, faltas, e atribuir o valor 3, um a menos do que o permitido. Vamos colocar um else depois do if para, caso nenhuma das condições seja atendida, o console exibir não foi reprovado por falta.

```JavaScript
const notaFinal = 7;
const faltas = 3; 
if (notaFinal < 7 || faltas > 4) {
 console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}
```

Ao executar o código, o console exibe não foi reprovado por falta, porque nenhuma das condições faz com que entremos no bloco do if.

> node operadores-logicos.js

não foi reprovado por falta

Porém, se alterarmos apenas uma delas, por exemplo, mudando o valor de faltas para 5, a saída do console será reprovado, boas Festas, porque o operador OU requer que apenas uma das condições seja verdadeira para entrar no bloco do if.

Agora, vamos considerar uma situação onde a pessoa estudante só reprova se, além da nota ser menor que 7, tiver mais do que 4 faltas. Nesse caso, queremos que ambas as condições sejam verdadeiras para que a pessoa estudante seja reprovada. Para isso, vamos usar outro operador lógico importante, o operador E (&&).

```JavaScript
const notaFinal = 7;
const faltas = 3; 
if (notaFinal < 7 && faltas > 4) {
 console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}
```

Ao fazer isso, o programa só entrará no bloco do if se ambas as condições, tanto nota, quanto faltas, forem avaliadas como "true", isto é, foram verdadeiras forem verdadeiras. Portanto, precisamos que a "nota" seja menor que 7 e "faltas" seja maior que 4. Então, alteramos o valor de notaFinal para 6 e mantemos o valor de faltas como 5.

```JavaScript
const notaFinal = 6;
const faltas = 5;
if (notaFinal < 7 && faltas > 4) {
  console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}
```

Agora, ao executar o código novamente, o console exibirá reprovado, boas festas, porque o operador E estabelece que o bloco do if só será avaliado como verdadeiro se todas as condições envolvidas na comparação forem verdadeiras.

> node operadores-logicos
> reprovado, boas festas

Isso garante que, quando temos muitas condições em um fluxo, podemos estabelecer se só algumas das condições são necessárias para dar certo, ou se precisamos de todas as condições para dar certo.

Além disso, o JavaScript ainda tem um outro operador lógico, que é o operador de negação, mas abordaremos ele posteriormente.

### Aula 4 - Para saber mais: tabela da verdade

A Tabela Verdade é uma representação lógica que exibe todas as possíveis combinações de valores de verdade (true ou false) para diferentes proposições. Vamos conhecer algumas delas!

Tabela da Verdade para os Operadores Lógicos Básicos:

**Operador Lógico AND (&&):**

| Expressão       | Resultado |
| --------------- | --------- |
| true && true    | true      |
| true && false   | false     |
| false && true   | false     |
| false && false  | false     |

O operador && (E lógico) retorna true apenas se ambos os operandos forem true. Caso contrário, retorna false.

```JavaScript
const idade = 25;
const possuiCarteira = true;
if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}
```

**Operador Lógico OR (||):**

| Expressão       | Resultado |
| --------------- | --------- |
| true OR true    | true      |
| true OR false   | true      |
| false OR true   | true      |
| false OR false  | false     |

O operador || (OU lógico) retorna true se pelo menos um dos operandos for true. Retorna false apenas se ambos os operandos forem false.

```JavaScript
const temExperiencia = true;
const temDiploma = false;
if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
}
```

**Operador Lógico NOT (!):**

|Expressão|Resultado|
|---------|---------|
|!true    | false   |
|!false   | true    |

O operador ! (NÃO lógico ou negação) inverte o valor do operando. Se o operando for true, ! retorna false. Se o operando for false, ! retorna true.

```JavaScript
const chuva = false;
if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}
```

Sempre que você tiver dúvida sobre a lógica de funcionamento de operadores, pode consultar essas tabelas! Afinal, são ferramentas que ajudam a prever os resultados de expressões condicionais em programação e a tomar decisões baseadas na lógica booleana.

### Aula 4 - Truthy e Falsy - Vídeo 3

Transcrição  
Existe mais um operador lógico, além do E e do O, que é o operador de negação, ou seja, o NOT. Para entendermos melhor como ele funciona, precisamos voltar um pouco atrás e observar um conceito muito importante do JavaScript, que é o conceito de valores truthy e false. Ou seja, valores que são avaliados como verdadeiros e avaliados como falsos.

**[Truthy](https://developer.mozilla.org/pt-BR/docs/Glossary/Truthy) e [false](https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy)**  
Na tela, duas documentações do MDN estão sendo apresentadas e o link será disponibilizado na parte de links da aula.

O que são valores true e false?  
Já sabemos que existem booleanos true ou false, existem valores numéricos, de zero a infinito, para mais ou para menos. Existem também strings, que são nomes, sequências de caracteres, etc. O JavaScript consegue avaliar esses valores como valores verdadeiros e falsos quando necessário.

Portanto, por exemplo, quais tipos de valores são avaliados como verdadeiros? O próprio valor true booleano, um objeto vazio, um array vazio, um valor numérico qualquer que não seja zero, uma string qualquer com qualquer sequência de caracteres dentro deles, etc. A lista completa ficará disponível na documentação.

```JavaScript
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

Por outro lado, o JavaScript avalia alguns outros tipos, outros valores de dados, como valores falsos. Quais são eles?
O próprio booleano, o null também é avaliado como falso, bem como o undefined, zero numérico, menos zero numérico, NAN (not a number), strings vazias, ou seja, aspas abertas e fechadas sem nada dentro. Na documentação, você também encontrará a lista completa e as descrições completas.

O que significa um valor ser avaliado como true ou como false?
Isso é muito importante também, pois quando trabalhamos com operadores, normalmente trabalhamos com comparação entre valores, ou com operações entre valores.

O que quer dizer com operações entre valores?
Se voltarmos em operadores aritméticos, e se quisermos, por exemplo, fazer a conta que anterior da nossa variável let media, todas as operações são realizadas entre um valor que está à esquerda do operador e um valor que está à direita da operação.

```JavaScript
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;
if (media >= 7) {
 media += media * 0.1;
}
console.log(`a média é ${media.toFixed(2)}`);
```

No caso da adição é um pouco diferente, conseguimos concatenar valores. Mas, por exemplo, no if (media >=7), temos valores à esquerda do operador e valores à direita do operador. Então, esses dois valores vão ser colocados em situação dependendo do operador.

Aqui, o operador está pedindo para comparar se o valor da esquerda é maior ou igual ao valor da direita. Quando estudamos tipos booleanos, usamos outro operador, que é o de comparação de igualdade estrita. Então, comparamos o valor da esquerda, se a variável estudante tinha um valor exatamente igual a uma string.

```JavaScript
const estudante = 'Fernando';
const estaAprovado = true;

if (estaAprovado === true) { 
  console.log('parabéns, boas festas');
} else {
  console.log('REPROVADO, boas festas');
}

if (estudante === 'Fernando') {
  console.log(`olá, ${estudante}`);
} else {
  console.log('quem é vc');
}
```

Quando trabalhamos com esse tipo de comparação, ela sempre vai ser avaliada em um booleano, true ou false. Toda comparação é feita dessa forma.

**Utilizando o operador de negação**  
Agora vamos criar um novo arquivo para praticarmos com esse último operador lógico. Assim, entenderemos melhor o que são as comparações avaliadas em true ou false. Então, vamos voltar no nosso arquivo de operadores lógicos para criar mais um exemplo e utilizarmos esse último operador.

Vamos dizer que a pessoa estudante vai receber um bônus de nota se, além de faltas, tiver menos de duas faltas e nenhuma advertência. Vamos criar uma nova const e chamaremos de advertencias, passando zero. Ou seja, a pessoa estudante não teve nenhuma advertência.

```JavaScript
const notaFinal = 6;
const faltas = 5; 
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
 console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}
```

Portanto, estamos supondo que a pessoa estudante não teve nenhuma advertência durante o semestre ou o ano e vamos criar um novo fluxo de comparação para isso, que será: se a quantidade de faltas for menor ou igual a duas e a pessoa estudante não tiver nenhuma advertência, ela vai receber um bônus na nota. Ou seja: if (faltas <=2 && ).

```JavaScript
const notaFinal = 6;
const faltas = 5; 
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
 console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}

if (faltas <=2 && )
```

**Como utilizar o operador de negação?**  
Para dizer que a pessoa estudante não pode ter advertências para receber o bônus, vamos utilizar o operador de negação. Vamos verificar o que está escrito na [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_NOT).

> NOT
 lógico (!)  
 !expr - (Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.

A documentação informa que a negação é representada pelo símbolo de exclamação, !, então, retornaremos ao código e adicionaremos essa exclamação na frente da variável, sem espaços.

```JavaScript
const notaFinal = 6;
const faltas = 5; 
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
  console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}

if (faltas <=2 && !advertencias)
```

O que quer dizer converter um valor de operando para verdadeiro?  
Significa que o JavaScript pegará o valor da variável advertencias e usará o conceito de truthy ou false que estudamos anteriormente. Então, se usarmos este conceito na variável advertencias, que tem um valor de zero numérico, qual será o valor retornado?

Voltando à documentação, na parte de false, lista de valores, perceberemos que o zero numérico é um dos valores que, ao aplicarmos o conceito, retorna "falso", ou seja, é avaliado como falso.

Além disso, caso o valor seja convertido para verdadeiro, a negação retorna falso. Mas esse não é o nosso caso. O nosso operando advertencias vai retornar "falso", porque seu valor é zero. Isso significa que a nossa negação não vai retornar "falso", mas, sim, verdadeiro.

Lembrando: retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.

Isso acontece por estarmos fazendo uma dupla negação, isto é, estamos negando um valor que é falso. O que acontece quando ambas as condições em if retornam true? Temos o && ("e" comercial), quer dizer que o if deu certo e poderemos acessar o que está dentro do bloco de código.

Vamos adicionar uma exclamação na frente da variável advertências, ou seja, if (faltas <=2 && !advertencias). E, então, abrimos o if. Podemos até copiar o console.log, já que essa parte será igual: ou ela vai ser reprovada, ou ela vai receber um bônus, ou ela não vai receber um bônus.

Então, vamos copiar a parte do bloco do if, só que o nosso console vai dizer teve bônus ou não teve bônus.

```JavaScript
const notaFinal = 6;
const faltas = 5; 
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
  console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}

if (faltas <=2 && !advertencias){
  console.log('recebeu bônus');
} else {
  console.log('não recebeu bônus');
}
```

Agora, se alterarmos o valor de faltas para 2 e a advertência 0, esperamos receber no console o resultado do if que é receber o bônus. Vamos voltar no terminal e executar:

> node operadores-logicos.js  
  não foi reprovado por falta  
  recebeu bônus

A pessoa estudante recebeu bônus, porque o valor de advertencias é um valor falso. Ele é um valor falso, porque é um zero numérico. E quando colocamos a exclamação, colocamos o operador de negação na frente dele, estamos negando um valor falso e esse valor se torna verdadeiro.

Parece um pouco nebuloso, precisa de um pouco de prática e disponibilizaremos exercícios para você praticar, só que essa lógica é muito importante para conseguirmos criar fluxos em algoritmo. Então, tanto o "ou" quanto o "e" e a negação são muito utilizados em algoritmos, porque precisamos deles para fazer com que os nossos fluxos funcionem.

### Aula 4 -  - Vídeo 4
### Aula 4 -  - Vídeo 5
### Aula 4 -  - Vídeo 6
