# Curso Alura - JavaScript programação Orientada a Objetos

## Aula 01 - Entendendo a Orientação a Objetos

### Aula 01 - Apresentação - Vídeo 1

Transcrição  
Boas-vindas ao curso de Orientação a Objetos com JavaScript! Eu sou Ju Amoasei.

Audiodescrição: Juliana Amoasei se identifica como uma mulher branca. Possui cabelos curtos pintados de azul, olhos e sobrancelhas castanho-escuros. Nos olhos, usa óculos de armação vermelha. No nariz, usa piercing de argola na narina direita. Na orelha direita, usa dois brincos de argola médios. No corpo, usa uma camiseta cinza mescla com o logo da Alura. Ao fundo, um dos estúdios da Alura, com uma parede lisa e uma estante de livros à direita, ambos iluminados em tons de verde e azul.

Para quem é este curso?  
Este conteúdo é quem está iniciando na programação e escolheu o JavaScript como linguagem.

Pré-requisitos  
Para fazer este curso, recomendamos fortemente que você já tenha acompanhado os cursos sobre Fundamentos de Objetos com JavaScript e sobre Biblioteca aqui na plataforma.

O que aprenderemos?  
Este curso não vai abordar temas relacionados à programação front-end. Porém, alguns dos conceitos que vamos apresentar serão bem similares.

Vamos aprender como utilizar o paradigma de orientação a objetos com JavaScript, um dos paradigmas mais usados em algumas das linguagens mais utilizadas no mercado.

Também vamos aprender como a linguagem JavaScript funciona e como a forma específica de implementar algumas funcionalidades dessa linguagem influencia na forma como utilizamos a orientação a objetos.

Também vamos aprender cinco fundamentos da orientação a objetos:

- Objetos
- Classes
- Herança
- Encapsulamento
- Polimorfismo.

Vamos aproveitar os recursos da plataforma! Além dos vídeos, há várias atividades extras que complementam o conteúdo.

Além disso, você pode contar com o apoio do fórum do curso e da nossa comunidade no Discord.

Vamos estudar?

### Aula 01 - Preparando o ambiente

> Se você já fez os cursos que constam como pré-requisito, é muito provável que o ambiente já esteja pronto. Ainda assim, organizamos algumas instruções, que estão logo abaixo, para você conferir!

Node.js  
Caso já tenha feito algum curso anterior de JavaScript para back-end, o Node.js pode já estar instalado na sua máquina.

> Recomendamos fortemente que tenha feito os cursos anteriores da formação para acompanhar melhor o conteúdo! Se não tiver certeza, é possível conferir com os seguintes passos:

1 - Abra uma janela do terminal em seu computador. Isso pode ser feito da seguinte forma:

- Windows: você pode acessar a busca no menu iniciar e procurar por Prompt de Comando, ou acessar via Menu Iniciar > Sistema do Windows > Prompt de Comando.
- MacOs: o Terminal está disponível no menu de Aplicações, dentro da pasta de Utilitários.
- Linux (Ubuntu): o Terminal está disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.

2 - No terminal, digite node --version ou node -v. Se retornar um número de versão, como v20.11.0, o Node.js já está instalado.

Caso precise instalar, siga as instruções para cada sistema operacional que estão na [página inicial do Node.js](https://nodejs.org/en). Este curso foi desenvolvido usando a versão 20.11.0.

O site do Node.js (no momento em que produzimos este curso) oferece na página inicial o download da versão LTS (long term support, ou suporte a longo prazo). Clique no botão correspondente para baixar e instalar normalmente como qualquer outro programa.

alt: Site oficial do Node.js. O botão para download da versão LTS se encontra à esquerda, abaixo do texto “Run JavaScript Everywhere. Node.js is a free, open-source, cross-plataform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.”. À direita, há um exemplo de código para criar um servidor HTTP. O site tem tons escuros e a cor de destaque é verde.

Confira no link um [tutorial em vídeo de instalação do Node.js](https://youtu.be/Wqrx5FrmpZc). O site estará diferente no vídeo, porém as instruções e o passo a passo da instalação são os mesmos.

Se você utiliza Linux ou WSL (Subsystem Linux no Windows) também pode utilizar o NVM, Node Version Manager, para gerenciar as versões do Node.js instaladas em seu computador. [Confira nosso artigo com tutorial para instalação e uso](https://www.alura.com.br/artigos/descomplicando-o-trabalho-com-node).

Visual Studio Code  
O Visual Studio Code é o editor que escolhemos utilizar para escrever nossos códigos durante este curso. Os links para baixar e instalar de acordo com o seu sistema operacional estão na [página inicial do VSC](https://code.visualstudio.com/).

Recomendamos o uso do VSC para um melhor acompanhamento dos vídeos.

Porém, existem vários outros editores, como o Atom, o Sublime e o Notepad++. Caso já tenha algum destes instalado ou tenha preferência por outro, fique à vontade! Apenas note que alguns recursos e ferramentas variam de editor para editor e podem não estar disponíveis ou funcionar de forma diferente.

Agora podemos começar!

### Aula 01 - Relembrando objetos - Vídeo 2

Transcrição  
Neste curso, vamos trabalhar especificamente com orientação a objetos. A orientação a objetos é um dos vários paradigmas de programação. Mas o que é um paradigma?

Entendendo os paradigmas de programação  
Paradigmas de programação são abordagens sobre como resolver problemas de programação, baseados em uma teoria ou um conjunto de princípios definidos. Em outras palavras, um paradigma normalmente se baseia em alguma teoria matemática ou computacional que propõe resolver determinado problema de uma forma específica.

Cada paradigma tem um conjunto de regras que especificam como os dados são tratados, a organização do sistema, a forma como o código é escrito, entre vários outros aspectos.

Abstraindo conceitos com orientação a objetos  
A orientação a objetos, especificamente, é um princípio que busca espelhar o mundo real por meio de uma estrutura de objetos com características e ações. Esses objetos, por sua vez, interagem uns com os outros.

Ou seja, a programação orientada a objetos parte de uma premissa de aproximar a modelagem do código do "mundo real" para o software. O propósito é transformar em software aspectos como uma pessoa, um produto ou um processo.

O intuito dessa abordagem é aproximar a abstração lógica de um programa ou aplicativo aos problemas da vida real que o software deve resolver.

Quando falamos em objetos, precisamos abstrair conceitos que existem na vida real.

Por exemplo, vamos pensar em um gato. Para abstrair um gato seguindo os conceitos da orientação a objetos, começamos dividindo este gato (não literalmente) em duas partes: características e comportamentos.

Como características desse gato, identificaremos:

- O sexo;
- A idade, que calculamos a partir da data de nascimento;
- A cor da pelagem;
- Alguns status como:
- Ser castrado;
- Estar vacinado;
- Estar vermifugado.

Os comportamentos que este gato pode ter são ações. Nessa etapa, descreveremos o que o gato pode fazer:

- Miar;
- Comer:
- Comer ração úmida;
- Comer ração seca;
- Dormir;
- Se limpar com lambidas;
- Brincar:
- Brincar com bolinha;
- Brincar com laser;
- Brincar com fita;

Se transferirmos isso para o JavaScript, podemos utilizar um objeto literal, único para cada gato.

O objeto literal é a forma mais comum de se criar objetos em JavaScript, na qual temos uma variável e criamos o objeto a partir dela.

```JavaScript
const gato = {
    nome: "Churrumina",
    nascimento: "25/11/2018",
    pelagem: "mesclada",
    status: {
        castrada: true,
        vacinada: true,
        vermifugada: true
    }
}
```

O objeto gato criado como exemplo acima possui diversas propriedades:

- O nome, com o valor Churrumina do tipo string;
- O nascimento, também do tipo string, com sua data de nascimento;
- A pelagem, com o valor mesclada;
- Um bloco status com uma lista de valores booleanos, que retornam verdadeiro ou falso (true ou false):
- castrada, igual a true;
- vacinada, igual a true e
- vermifugado, igual a true.

Além das propriedades, esse objeto tem comportamentos. No JavaScript, podemos atribuir isso a uma função, como no exemplo miar abaixo, inserido dentro do objeto gato, abaixo do bloco status.

```JavaScript
const gato = {
    nome: "Churrumina",
    nascimento: "25/11/2018",
    pelagem: "mesclada",
    status: {
        castrada: true,
        vacinada: true,
        vermifugada: true
    }
    miar: function() {
        console.log("miau")
    }
}
```

Nesse exemplo, a função miar chama um console.log com o som "miau" do gato em uma string. A partir disso, temos o comportamento de miar do gato, que será chamado com gato.miar().

Criando modelos de objetos  
Entendemos como abstrair conceitos da vida real em um objeto, transformando um gato de verdade em um gato de software.

Mas e se tivermos mais de um gato?

Vamos pensar, por exemplo, em uma clínica veterinária que atende vários gatos. Poderíamos ter um objeto literal, único para cada um dos gatos, conforme o exemplo abaixo.

```JavaScript
const gato1 = {
    nome: "Churrumina",
    nascimento: "25/11/2018",
    pelagem: "mesclada",
    status: {
        castrada: true,
        vacinada: true,
        vermifugada: true
    }
}

const gato2 = {
    nome: "Wen Ning",
    nascimento: "25/01/2021",
    pelagem: "creme",
    status: {
        castrado: true,
        vacinado: true,
        vermifugado: true
    }
}
```

Temos o gato1, Churrumina, e o gato2, Wen Ning, cada qual com todas as suas características.

Mas se pensarmos em termos de um sistema, essa estrutura não é gerenciável nem prática. Não dá para criar variáveis e objetos literais para cada um dos gatos, cachorros e papagaios que temos em uma clínica veterinária.

Para resolver esse problema, podemos ter um modelo que se reflita no objeto que queremos criar.

Ou seja, podemos ter uma base para a estrutura gato, conforme o exemplo abaixo. Podemos criar esse modelo no formato de objeto literal mesmo, dizendo que modeloGato vai ter um nome, do tipo string, um nascimento, do tipo string, uma pelagem, do tipo string, e os status, que é um bloco com outro objeto, dentro do qual temos castrado, vacinado, e vermifugado, do tipo booleano.

```JavaScript
const modeloGato = {
    nome: stringNome,
    nascimento: stringData,
    pelagem: stringPelagem,
    status: {
        castrado: boolCastrado,
        vacinado: boolVacinado,
        vermifugado: boolVermifugado
    },
}
```

Esse modelo é uma das bases da orientação a objetos. Com ele, não só abstraímos os conceitos da vida real e transformamos em estrutura de código, como abstraímos os próprios modelos.

A partir desses modelos, criarmos todos os nossos gatos, pessoas usuárias, produtos do nosso e-commerce, e assim por diante.

A partir de um modelo, conseguimos criar instâncias diferentes, ou seja, cópias de um objeto. No nosso exemplo, a partir do modeloGato, criamos abaixo um objeto com os dados do gato Churrumina e outro com os dados do gato Wen Ning.

```JavaScript
[
    {
        nome: "Churrumina",
        nascimento: "25/11/2018",
        pelagem: "mesclada",
        status: {
            castrado: true,
            vacinado: true,
            vermifugado: true
        },
    },
    {
        nome: "Wen Ning",
        nascimento: "25/01/2021",
        pelagem: "creme",
        status: {
            castrado: true,
            vacinado: true,
            vermifugado: true
        },
    }
]
```

Um dos fundamentos explorados da orientação a objetos é conseguir fazer essa abstração que pode ser reaproveitada para vários gatos, clientes, produtos e outras entidades. A seguir, vamos colocar isso em prática.

### Aula 01 - Para saber mais: paradigmas de programação

Além do paradigma orientado a objetos, temos também outras formas de lidar e organizar os programas. Uma forma muito comum de categorizar esses paradigmas é dividi-los entre paradigmas imperativos ou declarativos.

Os paradigmas imperativos são aqueles que usam afirmações para alterar o estado de um programa, da mesma forma como o modo verbal imperativo no português expressa um comando ou ordem para ser executada. Essa categoria se preocupa com o “como” uma tarefa vai ser executada, o seu passo a passo e a sequência dessas etapas. Alguns dos paradigmas que se encaixam aqui são os seguintes:

- Estrutural
- Procedural
- Orientado a objetos

Um exemplo que mostra o paradigma imperativo é a implementação da seguinte função que recebe um vetor e retorna outro vetor com cada um dos valores dobrado:

```JavaScript
function dobra(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length ; i++){
        resultados.push(arr[i] * 2);
}
return resultados;
}
```

Podemos notar que passamos as instruções de como percorrer o vetor, qual operação fazer e o que devemos adicionar ao resultado.

Uma outra categoria de paradigma é o declarativo. Podemos dizer que uma característica dele é expressar a lógica de um processo sem descrever o seu controle de fluxo. Ou seja, é associado a “o quê” uma tarefa vai resultar ou retornar. Um paradigma que pode se encaixar nessa categoria é o paradigma funcional.

Uma implementação declarativa do mesmo problema de dobrar os valores de um vetor pode ser feita da seguinte forma:

```JavaScript
function dobra(vetor){
return vetor.map((item) => item * 2);
}
```

Podemos observar que não foi necessário explicitar como iterar sobre o laço de repetição ou atribuir os novos valores.

No cotidiano temos diversos outros exemplos de afirmações que podem ser consideradas declarativas, como arquivos HTML:

```HTML
<h1> Programação Declarativa</h1>
<p> Estou declarando como quero que o texto apareça, e não dizendo para o computador como renderizar um texto</p>
```

Ou até mesmo as queries SQL, nas quais apenas dizemos qual resultado esperamos, sem especificar como a busca deve ser feita:

```SQL
SELECT * FROM Alunos WHERE Escola=’Alura’;
```

O JavaScript e algumas outras linguagens podem utilizar mais de um paradigma. É comum ouvir o termo “multiparadigma” quando nos referimos a esse tipo de linguagem, e isso traz alguns benefícios, pois permite perfis diferentes de desenvolvedores e sistemas utilizarem uma linguagem em comum.

Claro que um paradigma não é necessariamente melhor que o outro, mas dependendo das circunstâncias podemos utilizar um que seja mais otimizado para determinada aplicação. Algumas funcionalidades precisam alterar o estado de uma aplicação, não podendo ser escritas de forma declarativa, assim como os códigos declarativos que utilizamos podem ter uma implementação imperativa por baixo dos panos.

Você pode conferir mais conteúdos sobre o tema na plataforma da Alura:

- [POO: o que é programação orientada a objetos?](https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos)
- [Alura+: O que é Programação Funcional?](https://cursos.alura.com.br/extra/alura-mais/o-que-e-programacao-funcional--c696)
- [Programação funcional: O que é?](https://www.alura.com.br/artigos/programacao-funcional-o-que-e)
- [Linguagens Funcionais – Hipsters #91](https://hipsters.tech/linguagens-funcionais-hipsters-91/)
- [Programação Funcional (e (clojure)) – Hipsters #158](https://hipsters.tech/linguagens-funcionais-hipsters-91/)

### Aula 01 - Modelando o projeto - Vídeo 3

Transcrição  
Neste curso, vamos trabalhar com um sistema que gerencia pessoas usuárias de uma plataforma de ensino, docentes e a parte de administração da plataforma.

Antes de começar a codar, precisamos entender o que vamos codar. Por onde começaremos?

Mapeando pessoas usuárias  
Vamos começar definindo quem são as pessoas usuárias. Assim como definimos um modelo para gatos, vamos fazer um modelo para as pessoas usuárias do sistema.

As pessoas usuárias básicas de um sistema de plataforma de ensino são estudantes e docentes que ministram aulas e criam cursos. Além disso, queremos pessoas para fazer a administração da plataforma, deletando coisas, colocando cursos no ar, deletando estudantes, entre outras tarefas.

Para isso, criamos um diagrama, dentro do qual mapeamos as propriedades de tipos de pessoa usuária do sistema. Precisamos fazer isso antes de codar para entender o que vamos programar.

![alt text](image.png)

No diagrama acima, estabelecemos um tipo de pessoa usuária básico chamado User, pensando no projeto atual. Os projetos que você fizer provavelmente terão propriedades diferentes.

No modelo User, estabelecemos dados básicos para ele:

- nome;
- e-mail;
- data de nascimento;
- role ou papel (estudante, docente, gerente, admin, entre outros);
- se está ativo no sistema.

A propriedade ativo retornará um booliano true ou false, enquanto as outras são todas do tipo string ou data. Para facilitar, podemos tratar esse data como string também.

Também estabelecemos nesse modelo duas funções, constructor() e exibirInfos(), das quais falaremos posteriormente. É possível ver que são funções, pois possuem parênteses no final.

Vamos explorar os outros dois perfis que criamos. O Docente possui as funções constructor() e aprovarEstudante(), enquanto o Admin também possui constructor() e outra função chamada criarCursos().

No diagrama que criamos, apenas a pessoa usuária básica tem propriedades. Contudo, isso não significa que as outras não precisam ter nome e e-mail.

A partir daqui, vamos começar a entender, em orientação a objetos, como criar bases de objetos, e a partir delas, criar outras, assim como criamos Admin e Docente a partir de User.

As entidades Admin e Docente têm setas que apontam para User no diagrama porque partiremos dela e vamos desmembrá-la em outros tipos de objeto, com outras características.

No diagrama, estamos dizendo que uma pessoa usuária básica não pode criar cursos, somente uma pessoa admin. O mesmo vale uma pessoa docente, a única que pode aprovar uma pessoa estudante.

Já a pessoa usuária básica só pode exibir informações, não sendo capaz de criar cursos, nem de aprovar uma pessoa estudante.

Essas limitações ocorrem porque decidimos os impedimentos e permissões que serão adicionados ao sistema para cada tipo de pessoa usuária.

Será que os tipos Admin e Docente também exibem informações? A seguir, vamos começar a codar para saber a resposta.

### Aula 01 - Para saber mais: a linguagem UML

Existe uma forma muito prática de ilustrar sistemas, controles de fluxo e outros comportamentos chamado UML. A UML é a Linguagem de Modelagem Unificada - do inglês Unified Modeling Language.

Ela consiste na padronização de algumas notações para facilitar o entendimento entre os times de desenvolvimento que eventualmente irão lidar com um determinado sistema.

Um dos diagramas mais comuns de ser representado utilizando a UML é o diagrama de classe. A função dele é representar as estruturas e relações entre as classes de um projeto e interfaces com outros sistemas. Aqui está um exemplo:

![alt text](image-1.png)

Diagrama UML representando um cliente, que pode possuir contratos de aluguel. O contrato de aluguel que se refere a 0 ou 1 veículo alugado e possui apenas uma empresa de aluguel de veículos. A empresa de aluguel de veículos pode possuir contratos de aluguel. A classe veículo alugado pode ser um caminhão, utilitário ou carro de passeio.

Neste diagrama, representamos a existência de uma relação por uma reta e as associações são indicadas por setas. Os números que acompanham as retas indicam a quantidade de itens que estão se relacionando. No exemplo, um cliente pode possuir 0 ou mais contratos de aluguel, enquanto um contrato de aluguel só pode se referir a 0 ou 1 veículo alugado.

Existem outras versões de diagramas de classe que incluem, por exemplo, os tipos de variáveis dos dados associados, informações sobre tipos de dados abstratos, relações de herança e composição de classes e métodos que são implementados pelas classes.

Atualmente, a [UML](https://www.uml.org/) é mantida por um consórcio internacional que regula esse padrão. Existem diversos programas disponíveis que nos permitem descrever em um código próprio um diagrama e exportar as imagens que ilustram o sistema, como o [PlantUML](https://plantuml.com/).

### Aula 01 - Criando usuários - Exercício

Você vai trabalhar em um novo projeto para uma escola de programação e começou mapeando os tipos de usuários da plataforma. Conversando com colegas, você se inteirou sobre quem serão os usuários e quais as necessidades de cada; a partir disso, desenhou o seguinte modelo de diagrama:

![alt text](image-2.png)

Revisando o diagrama junto com colegas, assinale as alternativas que correspondem às conclusões que vocês chegaram.

Alternativa correta;  
Todos os usuários deverão ter as mesmas propriedades em comum: nome, email, data de nascimento, role e ativo.

> Os tipos de usuário Admin e Docente não terão propriedades específicas, apenas as mesmas propriedades que o usuário padrão.

Alternativa correta;  
Todos os usuários deverão ter acesso à funcionalidade exibirInfos().

> O método exibirInfos() faz parte da lista de métodos do usuário padrão. Assim, qualquer outro tipo de usuário que derive deste deverá ter acesso aos mesmos métodos.

Alternativa correta;  
Caso um usuário deseje excluir um curso da plataforma, deverá ter permissões de usuário do tipo Admin.

> O método excluirCurso() faz parte apenas dos métodos de Admin, ou seja, outros tipos de usuário não terão acesso a este método.

Alternativa correta;  
Um usuário Admin pode se matricular em um curso da plataforma, se quiser.

> Os métodos implementados no usuário padrão, inclusive o método matricularEmCurso(), também podem ser acessados pelos tipos de usuários que derivam do padrão.

### Aula 01 - OO com JavaScript - Vídeo 4

Transcrição  
Após relembrar o que são objetos literais e temos uma ideia de como queremos começar a estruturar esse sistema, vamos criar a primeira pessoa usuária para ter um ponto de partida.

No diagrama exibido anteriormente, definimos que a pessoa usuária tem algumas propriedades. Além disso, na raiz da pasta do projeto, criamos um arquivo chamado objetoLiteral.js, que vamos acessar pelo VS Code.

Criando o objeto user  
Dentro desse arquivo, criamos um objeto com a const user, que possui as mesmas características que definimos no diagrama: nome, email, nascimento, role e ativo.

objetoLiteral.js:

```JavaScript
const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
}
```

No sistema, definimos que toda vez que criamos uma pessoa usuária, o criamos como ativo por padrão, ou seja, com o valor true no atributo ativo. Afinal, não faz sentido para o sistema criar uma pessoa usuária que esteja inativa.

Nesse caso, você pode pensar no que faz mais sentido para o seu projeto.

Você pode consultar esse objeto pronto no repositório de código do curso.

Criando a função exibirInfo()  
Além das propriedades que já inserimos, também definimos que as pessoas usuárias têm uma função que chamamos de exibirInfo(). Esta fará o papel de pegar os dados das propriedades que julgarmos relevantes e enviá-las para algum lugar, exibindo na tela, no console, ou outro local.

Agora que já temos as propriedades, vamos criar essa função para começar a trabalhar. Para isso, entre as chaves do user e abaixo de ativo: true, vamos criar um novo atributo chamado exibirInfos(), o mesmo nome que definimos no diagrama, acompanhado de dois pontos e o primeiro método, function(), que possui um par de chaves.

```JavaScript
const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {}
}
```

Ele não precisa receber nenhum parâmetro, portanto, manteremos os parênteses e as chaves vazios, passando somente um console.log() entre as chaves.

```JavaScript
const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log()
    }
}
```

Quais informações são relevantes para começar? Por enquanto, vamos exibir somente nome e email. Portanto, adicionaremos essas propriedades entre os parênteses do console.log().

Ao digitar "nome", notaremos que a ferramenta de autocompletar do Visual Studio Code, representada por uma lista suspensa, será exibida. Ela sugerirá a opção "nome", destacando-a na lista de possíveis propriedades.

Nesse caso, vamos clicar e aceitar. Quando fazemos isso, o autocompletar adiciona, além de nome, a palavra-chave this e um ponto, transformando a propriedade em this.nome.

Vamos fazer a mesma coisa com o email, transformando-o em this.email.

```JavaScript
const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}
```

Com isso, o VS Code está nos dando uma dica, dizendo que precisamos dessas informações nesse local, oferecendo ajuda para adicioná-las.

Mas afinal, o que é esse this?

Antes de explicar o this, palavra-chave importante do JavaScript, vamos voltar o conteúdo para entendermos o contexto do nosso código.

Conhecendo a história da classe Javascript  
Vamos acessar o link da documentação do MDN para classes. Se você já pesquisou ou ouviu algo sobre orientação a objetos, é muito possível que já tenha visto a palavra ou sintaxe de classe ou class, em inglês, conforme aparece na tela dessa documentação.

Essa sintaxe de classe, usando a palavra-chave class, não existia no JavaScript até a atualização ECMAScript 2015 ou ES6, uma das mais importantes dessa linguagem.

Antes disso, era possível fazer orientação a objetos com JavaScript, só que fazíamos isso exclusivamente com funções, já que a palavra-chave class não existia.

Essa palavra-chave foi implementada em 2015 devido a uma demanda da comunidade. Nessa época, o JavaScript havia se popularizado muito, e muitas pessoas que migravam de outras linguagens, acostumadas a trabalhar com orientação a objetos utilizando classes, passaram a solicitar a adição desse class, que então, foi adicionado.

Mas que isso tem a ver com o this adicionado pelo VS Code em nosso código?

O JavaScript possui um paradigma nativo que não é exatamente a orientação a objetos clássica das outras linguagens, mas sim um paradigma que chamamos de herança de protótipo.

A partir dele, o núcleo da linguagem inteira se constrói. E essa palavra-chave this tem tudo a ver com esse paradigma.

Se agora o JavaScript já tem a sintaxe de classe, por que não vamos direto para isso e começamos a mostrar como funciona essa palavra-chave?

Se voltarmos à documentação, o próprio MDN informa no começo do texto que a sintaxe para classes do JavaScript não introduz um novo modelo de herança de orientação a objetos, e que as classes provêm uma maneira simples e clara de se criar objetos e lidar com herança.

Isso quer dizer que a sintaxe de classes em JavaScript é construída em cima do modelo original da linguagem, o modelo de herança de protótipo. Portanto, para entender exatamente como funciona a orientação a objetos em JavaScript, antes de usar classes, devemos entender muito bem como funciona a herança de protótipo.

Resumindo, as classes são basicamente uma "capa" ou interface, que chamamos, às vezes, de "açúcar sintático", colocado em cima do modelo original, que utiliza funções.

A seguir, vamos entender o que é a herança de protótipo e como o this funciona.

### Aula 01 - Conceito de objeto - Exercício

Durante esta aula, relembramos as características de objetos, como acessamos seus valores e métodos e como criamos um objeto literal.

Analise o objeto a seguir:

```JavaScript
const user = {
 nome: 'Juliana',
 email: 'j@j.com',
 nascimento: '2024-01-01',
 role: 'estudante',
 ativo: true,
 exibirInfos: function() {
   console.log(this.nome);
 }
}
```

Assinale as alternativas corretas.

Alternativa correta;  
É correto ter a propriedade ativo = true no objeto, pois as características de algo do mundo real podem ser representadas não apenas por strings e números, mas também utilizando booleanos para, por exemplo, representar status como “é ou não é”, “está ou não está”, “é válido ou não é válido”.

> É possível estruturar um objeto com tipos diversos de dados para cada propriedade, entre dados primitivos e estruturados como strings, números, booleanos, arrays e até mesmo outros objetos:

```JavaScript
const objProduto = {
 tipo: "caneca",
 preco: 10,
 tamanho: {
   grande: '300ml',
   pequena: '120ml'
 },
 fragil: true,
 cores: ['preto', 'branco', 'azul']
}
```

Alternativa correta;  
A programação orientada a objetos busca abstrair conceitos da vida real para estruturas de código que possam ser reaproveitadas e combinadas, visando aproximar a lógica dos problemas que o sistema deve resolver.

> O conceito central da POO é a criação e manutenção de objetos, conjuntos de chave/valor em que os valores podem ser tanto dados primitivos/estruturados (as propriedades) quanto funções (os métodos). A partir destes “modelos”, chamados de classes, podemos criar cópias de objetos que têm a mesma estrutura, propriedades e métodos, e as classes refletem partes do negócio, como produto, usuario, pedido, carro etc.

### Aula 01 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

- Durante a aula trabalhamos com algumas regras de negócio bastante simplificadas, para a partir delas criarmos nossas classes. Caso tenha interesse, confira nosso [artigo sobre regras de negócio](https://www.alura.com.br/artigos/o-que-sao-regras-de-negocio);
- Documentação do MDN sobre classes.

### Aula 01 - Mão na massa: criando entidades

Durante a aula trabalhamos com uma versão mais concisa do diagrama UML. Porém, é possível imaginar mais ações ou comportamentos que os diferentes tipos de usuários podem fazer em um sistema. Por exemplo, acompanhe uma outra versão do diagrama abaixo:

alt: Diagrama de relações entre user, admin e docente em um sistema. User, admin e docente têm os atributos: nome: string, email: string, nascimento: date, role: string, ativo: bool, e as funções: criarPerfil(), apagarPerfil(), exibirInfos(), exibirListaCursos(), matricularEmCurso(), exibirCursosMatriculados(). Admin tem as funções: criarPerfil(), criarCurso(), excluirCurso(), desativarPerfil(). Docente tem as funções: criarPerfil(), aprovarEstudante(), reprovarEstudante().

Agora é com você! Pense em um produto que gostaria de criar ou no seu app preferido e pratique montando diagramas ou mesmo objetos JavaScript que reflitam no funcionamento do sistema.

Opinião do instrutor

Você pode usar ferramentas como o [Lucidchart](https://www.lucidchart.com/pages/) ou o [draw.io](https://www.drawio.com/), que têm opções gratuitas para a criação de diagramas de diferentes tipos.

### Aula 01 - O que aprendemos?

Nessa aula, você aprendeu:

- Qual é a motivação e a base conceitual da programação orientada a objetos, que é abstrair modelos a partir de conceitos da vida - real e estruturar a forma como o programa é desenvolvido a partir destes modelos.
- Quais são as características de um objeto literal: um tipo de dado composto de pares de chave/valor, com valores que podem ser - tanto dados primitivos quanto arrays e outros objetos (também chamados de propriedades) e funções que dão comportamento ao objeto - (também chamados de métodos).
- Sobre o princípio de usar modelos (ou classes) para criar cópias (ou instâncias) de um objeto e como isso ajuda a reaproveitar - código.
- A estrutura e os conceitos por trás da UML (Linguagem de Modelagem Unificada), linguagem que oferece uma série de ferramentas e padrões para definirmos as classes de um sistema, quais métodos serão necessários e quais seus desdobramentos.

## Aula 02 - 

### Aula 02 -  - Vídeo 1
### Aula 02 -  - Vídeo 2
### Aula 02 -  - Vídeo 3
### Aula 02 -  - Vídeo 4
### Aula 02 -  - Vídeo 5
### Aula 02 -  - Vídeo 6
### Aula 02 -  - Vídeo 7
### Aula 02 -  - Vídeo 8
