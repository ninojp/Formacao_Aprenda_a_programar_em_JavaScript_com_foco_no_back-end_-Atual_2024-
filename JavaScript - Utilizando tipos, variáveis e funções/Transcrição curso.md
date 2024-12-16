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

Se precisar, utilize as ferramentas de tradução dos navegadores para entender bem as mensagens de erro que recebemos no terminal ou no navegador porque elas são importantes para nós.

Neste caso, o Node retornou um type error (erro de tipo), falaremos mais sobre erros de tipo durante o curso, e ele passa uma mensagem avisando o que deu errado.

Ele diz que houve um assignment to constant variable (atribuição a uma variável constante), ou seja, o erro que ocorreu foi uma atribuição a uma variável constante.

"Variável constante" parece um nome que não faz muito sentido, mas é literalmente isso. Variável, que é um espaço na memória onde guardamos um dado, do tipo constante, ou seja, ela tem que ser constante, ela não pode ser alterada. E o erro acusado é que tentamos fazer isso no nosso código.

Um pouco mais para cima, ele avisa o nome do arquivo, variaveis.js:4, que é justamente o número da linha onde tentamos fazer essa alteração. Ou seja, tentamos alterar algo que não podíamos, o Node não conseguiu trabalhar com isso e devolveu um erro para nós.

O que precisamos fazer agora é deletar a linha 4, onde tentamos fazer a reatribuição, porque isso não é possível fazer com const.

Modos de lidar com variáveis
let e const não são formas originais, digamos assim, do JavaScript de trabalhar com variáveis. Elas foram criadas posteriormente.

A forma original é var, que você pode encontrar em alguns conteúdos na internet ainda. Então, var estudante e var professora. var e let trabalham de formas similares, ambas podem ser reatribuídas ao contrário da const. Porém, existem algumas outras diferenças entre var, let e const que veremos nos próximos vídeos.

Não deixaremos var aqui no nosso código, deixaremos let professora e const estudante. E agora que você já sabe que tem três formas de se trabalhar com variáveis em JavaScript, você deve estar se perguntando qual usar.

A maior parte dos guias vai dizer para usar sempre const. A não ser que realmente precise trocar o valor da variável, veremos esses casos também futuramente neste curso e nos próximos. Se não precisar mudar o valor da variável, use sempre const.

Hoje em dia não se utiliza mais o var. Veremos o porquê futuramente. O var é muito solto, ela nos permite fazer muitos outros tipos de alteração que normalmente não queremos fazer no código. Então, qual utilizar? const ou let.

Use let só quando tiver certeza de que precisa alterar a variável e const em todos os outros casos.

Além disso, outra diferença entre let e const é que não conseguimos criar uma const sem atribuir um valor a ela. O VSC até reclama se tentarmos fazer isso, ele acusa grifado em vermelho no nome da variável.

Já uma let pode ser criada sem um valor e podemos atribuir um valor a ela depois, passando professora = 'Ana'. Isso pode ser feito com let, mas não pode ser feito com const.

const estudante = 'Caroline';
let professora;

professora = 'Ana';

console.log(estudante, professora);
Copiar código
Agora que já descobrimos coisas novas, vamos continuar praticando e entendendo mais diferenças entre var, let e const e por que elas são importantes.

### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
### Aula 2 -  - Vídeo 7
