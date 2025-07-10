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

## Aula 02 - Funções e Protótipos

### Aula 02 - Entendendo o this - Vídeo 1

Transcrição  
Agora que já entendemos melhor a história por trás da herança de protótipo e das classes em JavaScript, vamos entender o que é efetivamente o this e por que ele é importante.

Vamos começar executando a nossa função exibirInfos, que ainda não executamos. Para executar um método, chamamos o objeto onde ele está e o chamamos, user.exibirInfos(), não precisa de parâmetro, apenas abrir e fechar parênteses.

Vamos abrir o terminal, digitar node objetoLiteral.js, e funcionou perfeitamente, trouxe o nome e o e-mail, que são as duas propriedades que colocamos no console.log. Vamos comentar a chamada da função.

```JavaScript
// user.exibirInfos()
```

Vamos fazer alguns exercícios para entender o que é o this. No JavaScript, uma coisa que fazemos, usualmente, é passar uma função como valor de uma variável.

No JavaScript, as funções são valores, assim como string, number, etc.

Vamos fazer um teste: vamos criar uma constante chamada exibir, igual, vamos passar para dentro da nossa constante exibir, a função exibirInfos.

Então, vamos passar para dentro dela, user.exibirInfos, sem abrir e fechar parênteses, porque não queremos executar, só queremos passar a informação para dentro da variável. E agora, para executar, vamos executar exibir().

```JavaScript
const exibir = user.exibirInfos
exibir()
```

E chamamos o terminal, escrevemos node objetoLiteral.js, e agora não deu mais certo, agora trouxe undefined undefined. O que aconteceu, então, com a função exibir?

Quando passamos exibirInfos de dentro do objeto user para dentro da variável exibir, podemos dizer que exibir, a variável, perdeu contexto. Usamos, realmente, esse termo contexto.

Ou seja, exibirInfos perdeu a conexão, digamos assim, com o objeto user, de onde ela tirava a propriedade nome e a propriedade email.

Então, vamos comentar a constante exibir que criamos e a chamada. É mais ou menos como se fizéssemos o seguinte:

```JavaScript
const exibir = function() {
    console.log(this.nome, this.email);
}
```

Só que, a partir desse momento, se observarmos a constante exibir, a nossa expressão de função, já percebemos que this.nome e this.email não têm de onde vir mesmo. Nessa função, essas propriedades estão soltas, não fazem referência a nada.

Então, como que fazemos para dar contexto para essa função? Se formos traduzir a palavra this para o português, ela significa "isso", e tanto em inglês quanto em português, this ou "isso", são palavras que só fazem sentido se elas tiverem, literalmente, um contexto atrelado a elas.

Neste caso, exibir perdeu o contexto com o nosso objeto user, e aí ela não sabe de quem é o nome, ela não sabe de quem é o e-mail e agora temos que resolver.

Tentando, então, dar um contexto para a nossa constante exibir, vamos fazer o seguinte: vamos criar uma outra constante embaixo dela, vamos chamar de exibirNome.

exibirNome vai receber a nossa constante exibir, onde está a função guardada dentro dela, só que agora vamos usar um método que utilizamos no Javascript junto com o this, que é o método bind, então exibir.bind.

O bind é um método que utilizamos justamente para prender, para bind (ligar). Vamos usar o bind para ligar a nossa constante exibir a um objeto user, então, bind(user).

Ou seja, agora o que fizemos? Estamos passando para dentro de exibirNome a nossa função exibir, que estava sem contexto nenhum, a um objeto específico. Esse objeto tem as propriedades nome, tem a propriedade e-mail, que é o nosso objeto user, e agora podemos chamar a nossa função exibirNome e fazer o teste que deve tudo funcionar.

```JavaScript
const exibir = function() {
    console.log(this.nome, this.email);
}
const exibirNome = exibir.bind(user);
exibirNome()
```

Então chamamos o terminal, escrevemos node objetoLiteral.js, e ele retorna "Juliana j@j.com", que foi o e-mail que colocamos lá, então deu tudo certo, porque agora o bind está fazendo esse papel de juntar as duas coisas.

Essa questão de contexto do this e de como prendemos métodos a objetos específicos é muito importante na herança de protótipo, e vamos praticar mais isso nas próximas aulas.

Uma coisa muito importante sobre o this, e sobre ligar métodos a contextos. Isso é central em herança de protótipo. Você pode ter notado que não usamos arrow functions para criar essas funções.

Não utilizamos arrow functions para criar métodos. Elas não funcionam exatamente da mesma forma que funções normais.

Arrow functions não devem ser usadas como métodos, porque elas só têm o contexto de onde elas são executadas.

Não conseguimos ligar uma arrow function a um contexto específico, usando o bind da mesma forma que fazemos com funções que são declaradas mesmo com a palavra-chave function.

Vamos deixar mais material sobre essas diferenças nas atividades, recomendamos muito que você dê uma conferida, porque essa é uma particularidade importante, arrow function não é exatamente a mesma coisa que uma declaração de função.

Vamos fazer mais exercício com herança de protótipo, com contexto, com o this, porque ainda tem vários outros detalhes importantes além desse arrow function que acabamos de mencionar, então, vamos continuar.

### Aula 02 - Para saber mais: call e apply

Durante as aulas usamos bind() para ligar (bind) o valor de this a um determinado contexto. Existem outros dois métodos para manipular o contexto de this: call() e apply().

call()  
O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this, ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.

Um exemplo de uso de call() para especificar o contexto de this:

```JavaScript
function exibeInfos() {
 console.log(this.nome, this.email)
}
const user = {
 nome: 'Mariana',
 email: 'm@m.com'
}
exibeInfos.call(user)
```

Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:

```JavaScript
function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibeInfos = function(){
   console.log(this.nome, this.email)
 }
}
const newUser = new User('mariana', 'm@m.com')
```

```JavaScript
const outroUser = {
 nome: 'Rodrigo',
 email: 'r@r.com'
}
newUser.exibeInfos() //mariana m@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com
```

Também é possível passar parâmetros para call(), como no próximo exemplo.

Temos uma função que monta uma determinada mensagem a partir dos parâmetros nome e email. Se quiséssemos vincular os dados da mensagem a um objeto com dados de usuários, podemos usar call() passando como primeiro parâmetro o contexto a ser considerado como this (no caso, objeto user) e a partir do segundo parâmetro definimos quais os argumentos.

```JavaScript
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.call(user, this.nome, this.email)
 }
}

user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
```

Nesse caso, a função que será executada também está sendo passada como parâmetro de executaFuncao e usamos call() para “chamar” a função com um contexto (this) específico e também argumentos específicos.

O método call() pode ser utilizado para se implementar herança utilizando funções em vez da sintaxe de classe. Vamos abordar este assunto na próxima aula.

apply()  
O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:

```JavaScript
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.apply(user, [this.nome, this.email])
 }
}
 user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
```

Usando arrays, é possível passar os argumentos via variável ou até mesmo usando a propriedade arguments que existe internamente em todo objeto.

### Aula 02 - Para saber mais: Function vs Arrow Function

Durante a aula, usamos sempre a sintaxe de criação de funções usando a palavra-chave function, apesar de o JavaScript ter uma outra forma, mais curta e considerada mais “moderna” de se criar funções, a “arrow function” =>.

Então, por que não utilizamos arrow function na criação dos nossos métodos?

Em um primeiro momento, todas as três formas de criação de função parecem funcionar de forma bem similar. Porém, as arrow functions diferem da function usual em alguns pontos, sendo o mais importante para nós nesse momento a questão do this.

O problema do this  
Caso você precise relembrar como funcionam as três formas de se escrever funções em JavaScript, veja o tópico seguinte “Relembrando os tipos de função” (logo abaixo).

A primeira diferença entre a declaração de função e as expressões de função é o hoisting. Mas, além do hoisting, existe outra diferença principal entre declaração de função e arrow function: ao contrário das funções normais, arrow functions herdam automaticamente o contexto de onde foram criadas e não têm seu próprio “contexto de invocação”. Ou seja, não podem ser ligadas a contextos específicos com this e nem fazer uso dos métodos bind(), call() e apply().

Arrow functions também não possuem a propriedade prototype e por isso não podem ser usadas como funções construtoras - assunto que veremos em seguida. Por este motivo, não usamos arrow functions em nenhum momento para a criação de métodos durante o curso.

Agradecemos ao aluno Rodolpho, que respondeu a uma dúvida sobre arrow functions no nosso fórum e nos deu a ideia de acrescentar este conteúdo.

Você pode consultar o a documentação do MDN para saber mais sobre arrow functions.

Relembrando os tipos de função  
A primeira versão, mais “clássica”, é muito parecida com outras linguagens:

```JavaScript
function soma(num1, num2) {
 return num1 + num2;
}
```

É a chamada “declaração de função”.

A segunda forma atribui a função a uma variável, funcionalidade que não é tão comum em outras linguagens:

```JavaScript
const soma = function(num1, num2) {
 return num1 + num2;
}
```

Chamamos essa forma de “expressão de função”.

A terceira e última forma é a arrow function ou “função de seta”, caracterizada pelo operador =>:

```JavaScript
const soma = (num1, num2) => {
 return num1 + num2;
}
```

Ou, no caso de blocos de código com apenas uma linha, podemos omitir o return e as chaves {}:

```JavaScript
const soma = (num1, num2) => num1 + num2;
```

Bem mais curto!

A arrow function também é uma expressão de função.

E quais são as diferenças entre elas, além do this?
A primeira diferença entre as três formas é um pouco mais teórica. Funções criadas como declaração recebem um identificador (ou seja, um nome), e funções criadas como expressão são consideradas anônimas - estas funções são atribuídas a variáveis e é através dessas variáveis que conseguimos chamá-las e executá-las.

Na prática, a diferença se dá no contexto do carregamento do código. Declarações de função têm seu código lido antes da execução de qualquer instrução, pois o interpretador “puxa” para as primeiras linhas do arquivo todas as variáveis e todas as declarações de função, deixando seus códigos e dados “carregados” para, aí sim, começar a executar os códigos. A esta ação se dá o nome de ”hoisting”, que significa algo como “içar”, pois as funções e variáveis são “içadas” para o topo do arquivo e lidas primeiro.

Já as expressões de função, que são anônimas, não passam pelo processo de hoisting e têm seu conteúdo interpretado apenas no momento da execução. Assim, o interpretador (seja o Node.js ou um navegador) não consegue executar a função sem ter lido seu conteúdo antes.

Por exemplo, o código abaixo (uma declaração de função) executa normalmente:

```JavaScript
console.log(soma(1, 1)) //2
//é possível executar a função antes de declará-la no código
function soma(num1, num2) {
 return num1 + num2;
}
```

Porém o código abaixo (uma expressão de função) não executa:

```JavaScript
console.log(soma(1, 1)) //erro
//ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1, num2) {
 return num1 + num2;
}
```

O mesmo erro acima ocorreria com uma arrow function. Faça o teste!

Agora que já relembramos os tipos de função e suas diferenças, podemos seguir em frente.

### Aula 02 - Herança de protótipo - Vídeo 2

Transcrição  
Vamos continuar a entender como funciona a herança de protótipo e o que significa esse termo. Criamos um novo arquivo chamado herancaPrototipo.js e colamos nele o mesmo objeto user que usamos anteriormente em objeto literal.

```JavaScript
const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};
```

Agora, temos o nosso usuário base. De acordo com o diagrama, usuários padrão podem exibir informações, mas usuários admin podem criar cursos, o que os usuários padrão não podem.

Criando um usuário Admin
Então, poderíamos criar um objeto admin em nosso arquivo. Abaixo do nosso const user, vamos criar uma const admin. Lembrando que todos os tipos de usuário no nosso sistema têm as mesmas propriedades básicas.

Então, vamos copiar e colar essas informçaões do usuário de cima. Nome, vamos dizer que é "Mariana". O e-mail dela pode ser m@m.com. A data de nascimento pode ficar a mesma. E o role vai ser admin. Ativo o true.

Mas nós também definimos no nosso sistema que todos os tipos de usuário precisam exibir informações. Então, também vamos copiar a função exibirInfos e colocá-la embaixo de ativo na nossa const admin.

No entanto, agora temos algo que não parece tão certo, porque temos exatamente as mesmas propriedades e a mesma função que faz a mesma coisa nos dois objetos.

Então, podemos remover exibirInfos de admin e deixar dentro do nosso objeto admin apenas a função criarCurso?

Vamos fazer isso. Vamos criar aqui uma função, que vamos chamar de criarCurso: function(), abre e fecha parênteses, sem parâmetro nenhum. Por enquanto, vamos dar apenas um console.log para ela também e vamos dar só um texto escrito "curso criado" para testar.

Mas, na verdade, não podemos remover o exibirInfos de admin da forma como está, porque precisamos exibir as informações de admin também, não podemos só criar curso.

Como resolvemos isso, então? Como reaproveitamos algo que já foi feito na const user e passamos para dentro da nossa const admin?

Como funciona a herança de protótipo  
Vamos apagar a função exibirInfos dentro de admin. É aqui que entra a tal da herança de protótipo. Depois da nossa const admin, vamos chamar Object.setPrototypeOf e dentro do setPrototypeOf, vamos passar dois parâmetros.

O primeiro vai ser admin, que é o nome da nossa const, e o segundo vai ser user, que é o nome da outra const, do outro objeto.

Vamos chamar, primeiro, admin.criarCurso(), porque queremos realmente executar essa função, e vamos chamar, também, admin.exibirInfos().

```JavaScript
const admin = {
  nome: "Mariana",
  email: "m@m.com",
  nascimento: "2024-01-01",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log('curso criado');
  },
};

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
```

Vamos testar. Vamos abrir o terminal e escrever node herancaPrototipo.js, vamos ver o que acontece:

```JavaScript
curso criado
Mariana m@m.com
```

Due certo. Então, o que fizemos aqui, com essa linha onde declaramos Object.setPrototypeOf? setPrototypeOf significa, se traduzirmos, estamos definindo que admin vai usar como protótipo, ou seja, como a base ou modelo, com as especificações dele, o objeto user.

Então, o primeiro parâmetro de setPrototypeOf é quem vai pegar as propriedades, e o segundo parâmetro é o objeto que vai fornecer as propriedades, que vai fornecer essa base, vai fornecer essa receita, digamos assim, de como o objeto tem que ser construído.

Por isso, conseguimos chamar tanto o objeto admin quanto o método criar cursos, que é dele, só o admin tem. Mas também podemos chamar admin.exibirInfos.

exibirInfos não está dentro da const admin, porém, esse método faz parte do objeto user, que usamos como protótipo para construir o objeto admin.

Isso que acabamos de fazer foi herança de protótipo, onde o JavaScript utiliza um objeto como protótipo para herdar propriedades de outro.

Na prática, o que acontece quando executamos esse código? O JavaScript, na hora que executa exibirInfos a partir do objeto admin, ou seja, no contexto do objeto admin, ele vai no objeto e procura esse método, exibirInfos. Ele não encontra, porque não existe.

E o JavaScript faz o quê? Ele olha dentro do código para saber se admin tem como protótipo dele algum outro objeto. Nesse caso, ele encontra, porque definimos isso na linha 23, com o Object.setPrototypeOf.

E aí, o JavaScript acessa o objeto user e encontra um método dentro dele e consegue executar. E ele consegue executar tomando o this, o contexto, como objeto a partir de onde ele foi chamado. Ou seja, o contexto de this.nome, this.email, é o objeto admin, não é mais o objeto user, que foi a partir de onde o JavaScript executou a função exibirInfos.

Esse processo do JavaScript, acessar o primeiro objeto e ir procurando o método até encontrar o protótipo original se chama cadeia de protótipo, porque os objetos estão ligados uns aos outros.

Agora, vamos fazer mais exercícios para entender melhor o que é essa cadeia de protótipo e como ela funciona.

### Aula 02 - Cadeia de protótipos - Vídeo 3

Transcrição  
Vamos entender melhor o que é essa tal de cadeia de protótipo. Para isso, não vamos utilizar o console do Node do terminal, mas o navegador. No caso, abrimos o Google Chrome, com uma página about:blank, que é uma página sem nada. Clicamos com o botão direito em Inspect (Inspecionar) e selecionamos o "Console".

Por que vamos usar o console do navegador e não o objeto console do Node? Porque eles funcionam de forma um pouco diferente e, pelo console do Node, não conseguimos ter acesso a algumas propriedades que, no navegador, conseguimos acessar de forma mais prática. É só para entendermos como funciona a cadeia de protótipo.

Estamos no console do navegador. Vamos voltar no código para copiar e colar os dois objetos que criamos anteriormente. Então, vamos copiar a constante user, a Juliana, colar no navegador e dar Enter.

Ficou registrado. Se tiver algum erro no console do Chrome nesse momento, ele vai dar um aviso, porque normalmente o navegador tem uma ferramenta de segurança para as pessoas não inserirem código no console.

Você pode escrever lá allow pasting (Permitir Colar Código), e aí ele vai deixar você fazer isso que estamos fazendo. Se não emitiu erro, é só continuar.

Vamos fazer a mesma coisa com a constante admin. Vamos copiar e colar no código. E, por último, vamos copiar também o object.setPrototypeOf, já com admin e user.

```JavaScript
const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};
const admin = {
  nome: "Mariana",
  email: "m@m.com",
  nascimento: "2024-01-01",
  role: "admin",
  ativo: true,
  criarCurso: function() {
    console.log('curso criado');
  }
}
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
```

Agora, colamos, demos "Enter", ele registrou e já executou nesses códigos.

Como, então, utilizamos o console para entender a cadeia de protótipo? Vamos aumentar um pouco o zoom na tela para conseguirmos acompanhar melhor. Vamos dar um "Ctrl + L" para limpar também esse console, mas as informações continuam aqui.

Vamos testar escrevendo admin.exibirInfos(), ele trouxe os dados da Mariana. Vamos executar também admin.criarCurso(), e veremos a mensagem "curso criado". Está tudo funcionando.

Então, o que acontece quando fazemos essa chamada de exibirInfos a partir de admin? A chamada é feita a partir de admin, ela vai seguir uma cadeia de protótipos que vai de admin para o usuário base de admin, que é user, onde está o nosso método exibirInfos, e, a partir daí, para onde vai essa cadeia?

Agora, no console, vamos fazer o seguinte: vamos escrever admin.__proto__, e dar "Enter". O que o console retornou? Foi um objeto que já conhecemos, o nosso objeto user, Juliana, que é um role estudante.

Vamos dar um "Ctrl + L" para limpar novamente, "Seta para cima" para chamar o último comando, e vamos adicionar nessa linha, admin.__proto__. e vamos chamar a propriedade proto novamente, __proto__, em seguida. Então, agora, temos duas chamadas de proto.

```JavaScript
admin.__proto__.__proto__
```

E, agora, o console retornou uma coisa um pouco diferente: ele trouxe um outro objeto para nós, que tem dentro dele uma propriedade chamada constructor (construtor), que é uma função do tipo objeto.

Vamos guardar essa informação, vamos limpar novamente o console, voltar ao último comando, e vamos adicionar de novo o ponto __proto__ no final.

```JavaScript
admin.__proto__.__proto__.__proto__
```

E, agora, ele trouxe null, não trouxe mais nada. O que significa esse null? Significa que, a partir de admin.exibirInfos, fizemos uma cadeia de protótipo, que começa em admin, passa por user, passa pelo construtor do objeto, que observamos no console, e depois o construtor do objeto não tem mais nada.

Por isso, a nossa última chamada proto retornou null. Isso significa que, depois do objeto, chegamos ao final dessa cadeia de protótipo. Vamos voltar o comando até encontrar novamente o construtor de objetos.

O protótipo básico  
O que isso significa? Todos os objetos criados com JavaScript, eles têm dentro dele o que chamamos de protótipo básico. É um protótipo que traz todos os métodos e todas as propriedades que são comuns, compartilhados entre todos os objetos que criamos em JavaScript.

Se lermos as propriedades, podemos conferir hasOnProperty, isPrototypeOf, ou seja, uma função que utilizamos para verificar se um objeto é protótipo de outro, e a propriedade __proto__ lá embaixo.

Isso significa que todos os objetos têm dentro dele algumas propriedades que são comuns, como essas que acabamos de listar.

Vamos limpar de novo o console. Isso é importante, inclusive, no caso de primitivos. Ou seja, se quisermos, podemos criar uma string utilizando uma constante texto = 'oi'.

Porém, o JavaScript também permite que criemos uma string a partir de um construtor. Por exemplo, String() passando os dados dessa string. Por quê? Porque nos bastidores, tudo o que criamos em JavaScript é um objeto, inclusive tipos primitivos, como string, number, boolean.

Podemos chamar String.prototype, agora sem o underline, é prototype mesmo. Se dermos um "Enter", o console vai exibir um objeto que tem todos os métodos que conseguimos fazer com string que vimos nos cursos de fundamento de string.

Então, charCodeAt, por exemplo, temos a propriedade length, que é o tamanho da string, slice, a mesma coisa com array. Então, se tentarmos Array.prototype, também vamos ver todos os métodos que são comuns em todos os arrays que criamos. Então, filter, find, tudo o que vimos nos cursos anteriores de fundamento.

Ou seja, tanto primitivos quanto outros dados estruturados, por exemplo, arrays e objetos, para o JavaScript, são construídos a partir de um protótipo base.

E essa é, digamos, a forma nativa do JavaScript de trabalhar com herança, a herança de protótipo, onde você tem uma cadeia de objetos que vai se ligando até chegar no protótipo base, um protótipo de objeto, protótipo de array, etc.

Após a implementação da sintaxe de classe, que vamos ver em seguida, a herança de protótipo não é muito comum de ser utilizada no dia a dia de desenvolvimento de JavaScript.

Mas é muito importante que você entenda como os protótipos funcionam e como a cadeia de protótipo funciona, porque as classes são implementadas em cima disso.

Então, tudo isso que vimos continua valendo e você vai ver isso em documentação. Vamos ver só um pouco mais sobre esse assunto de protótipo para afirmar bem o conhecimento antes de passarmos para as classes.

### Aula 02 - Herança de protótipo - Exercício

Você está trabalhando nas funcionalidades referentes a cadastro de funcionários de uma empresa e gostaria de colocar em prática alguns conhecimentos que obteve sobre herança de protótipos. Para um sistema com usuários padrão, atendentes e gerentes, você desenvolveu os seguintes objetos:

```JavaScript
const userDefault = {
 exibirInfos: function () {
   console.log(this.nome, this.email);
 },
 cadastraEmail: function(email) {
   console.log(`email ${email} cadastrado com sucesso`);
 }
};
const atendente = {
 nome: "Rodrigo",
 email: "r@r.com",
 role: "atendente",
}
const gerente = {
 nome: "Juliana",
 email: "j@j.com",
 role: "gerente sênior",
 removeUsuario: function(idUsuario) {
   console.log(`usuário ${idUsuario} removido`);
 }
}
Object.setPrototypeOf(atendente, userDefault)
Object.setPrototypeOf(gerente, userDefault)
```

Hora de analisar o código! Baseado no código acima, assinale as alternativas corretas.

Experimente basear suas respostas na leitura do código, sem executá-lo no terminal!

Resposta:  
Executando o código:

gerente.removeUsuario(123)  
Obtemos o retorno:

usuário 123 removido

> Qualquer pessoa com cargo de gerência pode remover qualquer outro usuário do sistema. Assim, faz sentido que os dados para remoção (por exemplo, id) sejam recebidos via parâmetro.

Resposta:  
Executando o código:

atendente.exibirInfos()
gerente.exibirInfos()
Obtemos o retorno:

Rodrigo r@r.com
Juliana j@j.com

> Apesar de o método exibirInfos não fazer parte de nenhum dos objetos, usamos setPrototypeOf para incluí-los na cadeia de protótipos a partir de userDefault.

Resposta:  
Executando o código:

atendente.cadastraEmail(this.email)
Resultará em undefined.

> O método cadastraEmail perdeu contexto devido ao ponto no código a partir de onde é executada; como está sendo executada a partir do escopo global, no caso do exemplo, this se refere justamente ao objeto Global do Node.js, e não ao objeto atendente. Uma forma de corrigir é fazendo referência direta ao objeto: atendente.cadastraEmail(atendente.email).

### Aula 02 - Para saber mais: __proto__ vs prototype

Durante nossos estudos de JavaScript é normal toparmos com os protótipos de duas formas diferentes, através da propriedade __proto__ ou do objeto prototype que vemos em todos os objetos. Afinal, qual a diferença entre eles e quando se usa cada um?

Para entender melhor essa diferença, vamos testar alguns códigos:

```JavaScript
let user = {
 perfil: 'estudante'
}

let estudante = {
 nome: 'juliana'
}

Object.setPrototypeOf(estudante, user)
```

No trecho acima, definimos dois objetos, com propriedades diferentes, e estabelecemos que o objeto user será usado como protótipo para o objeto estudante. Podemos testar esse código direto no terminal:

```JavaScript
console.log(estudante.nome) // 'juliana'
console.log(estudante.perfil) //'estudante'
```

Ou seja, o objeto estudante, além da propriedade nome, também tem a propriedade perfil, trazida do protótipo user.

É possível acessar __proto__ de estudante, porém, para isso, devemos copiar o código acima e executá-lo no console do navegador, pois o módulo console do Node.js funciona de uma forma um pouco diferente e não vai acessar essa propriedade.

Trecho de tela do console do navegador Chrome, executando o código acima da imagem. Após esse trecho de código, o console executa o comando estudante.__proto__, recebendo como retorno o objeto {perfil: estudante}

Se adicionarmos mais uma propriedade ao objeto user, essa propriedade entrará também como protótipo do objeto estudante:

Trecho de tela do console do navegador Chrome, executando as seguintes linhas de código: ‘user.ativo = true’, retornando ‘true’, e em seguida ‘estudante.__proto__’, retornando o objeto {perfil: ‘estudante’, ativo: true}

Quando usamos objetos e funções para trabalhar com orientação a objetos com JavaScript, os objetos criados não são instâncias diferentes (ou seja, cópias do objeto-base) e sim referências a um mesmo objeto que está sendo delegado aos objetos que o usam como protótipo.

Agora vamos ver outro exemplo, dessa vez utilizando new para criar um novo objeto:

```JavaScript
function User() {}
User.prototype.perfil = 'estudante'
let estudante = new User()
```

Testando no próprio terminal:

```JavaScript
console.log(estudante.perfil) //'estudante'
```

No caso acima, a palavra-chave new vai criar um novo objeto simples e definir, na propriedade prototype desse objeto recém-criado, as propriedades de protótipo que encontrar em User. O prototype é criado automaticamente e existe como propriedade apenas em funções, para quando queremos usar determinada função como construtor usando new.

Vamos fazer um último teste, copiando a função User() criada acima e executando no console do navegador:

Trecho de tela do console do navegador Chrome, executando as linhas de código criadas anteriormente: function User(){}, User.prototype.perfil = ‘estudante’, let estudante = new User() e console.log(estudante.perfil)

Se tentarmos acessar as propriedades prototype e __proto__ de estudante, obtemos os seguintes retornos:

Trecho de tela do console do navegador Chrome, executando as seguintes linhas de código: estudante.__proto__ com retorno {perfil: ‘estudante’, constructor: f}, estudante.prototype com retorno undefined e User.prototype com retorno {perfil: ‘estudante’, constructor: f}

Em resumo:

__proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto.

prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.

Você também pode ter notado que alguns objetos também possuem uma propriedade chamada [[Prototype]]. Esta é uma propriedade interna que cada instância de um objeto possui e que aponta (como um ponteiro) para a propriedade prototype da função que está sendo usada como protótipo. Quando criamos um novo objeto usando new, a propriedade prototype do construtor (como vimos acima) é “linkada” à essa propriedade [[Prototype]] da nova instância criada.

Existem diversos métodos internos do JavaScript para verificar as propriedades de um construtor e também das instâncias criadas através dele. Você pode conferir a lista na [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object).

Faça mais testes criando objetos a partir de funções construtoras e confira o resultado!

### Aula 02 - Para saber mais: um resumo sobre protótipos

Aprendemos vários aspectos da herança de protótipos durante a aula. Vamos resumir alguns deles aqui e colocar alguns pontos extras:

Protótipo vs prototype  
Praticamente todos os dados criados em JavaScript (objetos, arrays etc.) têm um protótipo, porém apenas alguns deles têm a propriedade prototype. São estes objetos que contêm a propriedade prototype que acessamos com Object.prototype, Array.prototype, entre outros, durante o vídeo, que definem os protótipos para todos os outros acima na cadeia.

Ou seja, todos os objetos criados a partir de Object, Array, String etc. têm um protótipo que foi “herdado” destes, mas não necessariamente têm uma propriedade prototype.

Cópia vs referência  
Os métodos e propriedades não são copiados de um objeto para outro na cadeia de protótipos. Eles são acessados pelo interpretador ao percorrer a cadeia e os métodos executados de acordo com o this, ou seja, o contexto em que o método foi executado.

__proto__ será descontinuado  
O uso de __proto__ durante a aula é apenas para dar exemplo e acessar a cadeia de protótipos. Esta é uma propriedade “assessora” que serve para “expor” o protótipo dos objetos e está em processo de ser descontinuada. Você pode ler mais sobre esta propriedade na documentação do MDN.

Não altere o prototype  
Não é recomendável alterar diretamente o prototype, pois alterar diretamente as regras de herança de qualquer objeto afeta a performance do código em qualquer interpretador, tanto no Node.js quanto em navegadores. Vamos ver como criar objetos de acordo com as boas práticas do JavaScript em seguida.

Cuidado com a performance  
Todas as propriedades de uma cadeia de protótipos são enumeradas, e o tempo que o interpretador leva para pesquisar uma propriedade, desde o nível mais alto na cadeia, pode ser longo e impactar o desempenho. Além disso, se o código tentar acessar uma propriedade não existente, vai percorrer toda a cadeia durante a busca. Assim, não é uma boa prática criar longas cadeias de protótipos.

### Aula 02 - Usando o operador new - Vídeo 4

Transcrição  
Para recapitular, já compreendemos como funciona o this, o bind, para vincular um objeto a um contexto, e também entendemos os princípios da herança de protótipo, verificando a cadeia de protótipos.

No entanto, a maneira como fizemos até agora não é a forma usual de criar objetos em JavaScript quando não temos classes. Normalmente, isso é feito usando um operador que você já deve ter visto, o operador new.

Vamos criar um novo arquivo chamado new.js e fazer um teste com o que chamamos de função construtora. Nesse arquivo, vamos criar uma função chamada User. É importante notar que User aqui começa com uma letra maiúscula, não minúscula. Vamos passar apenas dois parâmetros: nome e email.

Dentro dessa função, vamos estabelecer como construir um novo objeto. Portanto, lembre-se dessa palavra: construir. Na primeira linha da função, temos this.nome = nome; e na segunda linha, this.email = email;.

```JavaScript
function User (nome, email) {
  this.nome = nome;
  this.email = email;
}
```

O que estamos construindo dentro dessa função? À esquerda do operador de atribuição, estou passando this.nome, ou seja, estou atribuindo um contexto do this, desse valor de nome, a essa função que estamos construindo.

À direita do operador, nome e email são os valores que estão vindo do parâmetro. Usamos o mesmo identificador para facilitar a identificação.

Agora, vamos criar a função que chamamos de exibirInfos. Será this.exibirInfos = function(). Vamos retornar diretamente uma string usando template string (${}), passando this.nome e this.email.

```JavaScript
function User (nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function() {
    return `${this.nome}, ${this.email}`
  }
}
```

Como executamos essa função? Vamos fazer de uma maneira um pouco diferente de como executamos funções normais. Vamos criar uma constante chamada novoUser igual a new User(), que é essa função construtora que acabamos de criar.

Dentro dos parâmetros de User(), passamos as informações que queremos que nosso novoUser tenha. Portanto, serão duas strings. A primeira string pode ser um nome, "Juliana", e a segunda string, um email, "j@j.com".

Agora podemos chamar um console.log, porque nossa função está com return, ela não tem mais console.log. Portanto, se quisermos exibir no console, precisaremos passar isso. Dentro do console, executamos novoUser.exibirInfos().

```JavaScript
function User (nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function() {
    return `${this.nome}, ${this.email}`
  }
}
const novoUser = new User('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos());
```

Podemos salvar o arquivo, abrir o terminal, já estamos na pasta certa, e executar node new.js e continua funcionando perfeitamente. Ele trouxe no terminal tanto o nome quanto o email que passamos no construtor de User, "Juliana" e "j@j.com".

O operador new é muito conhecido para quem já trabalha em outras linguagens. Ele serve para criar instâncias de um objeto a partir de uma função construtora. E uma função construtora foi isso que acabamos de construir no nosso código.

Lembrando que conversamos anteriormente sobre como no JavaScript tudo é um objeto, mesmo os primitivos. Portanto, também é possível usar esse operador new para criar, por exemplo, novas strings com new String(), passando os parâmetros ou new Number().

Não é a forma usual, a nossa forma usual é como temos feito até agora, criando variáveis e já passando o valor delas. Mas também é possível usar o construtor.

As funções construtoras fazem o papel das classes quando trabalhamos com orientação a objetos em JavaScript antes de existir a tal sintaxe de classe que conversamos anteriormente.

Ou seja, elas servem como modelo para a criação de objetos. E essa era uma das formas mais usuais que o JavaScript tinha para trabalhar com orientação a objetos antes da sintaxe de classe.

O Visual Studio Code, inclusive, embaixo do nome User, está dando um aviso com três pontos embaixo do nome de que essa função construtora pode ser convertida para uma declaração de classe. Então, ele já avisa porque elas são equivalentes, no sentido que elas fazem o mesmo trabalho.

Quando criamos uma nova instância de um objeto com new, o que o JavaScript faz? Ele vai criar um novo objeto e vai verificar o protótipo desse objeto para ver se ele precisa ser encaixado em algum ponto da cadeia de protótipos que vimos anteriormente.

Então, no caso User se encaixa na cadeia de protótipos depois de objeto, porque estamos criando um objeto User. E depois de fazer toda essa verificação na cadeia de protótipos, ele retorna o objeto que foi criado, no caso o nosso usuário, passando esse objeto como contexto para o this.

Então, quando nosso novoUser, "Juliana", retorna, o objeto "Juliana" é o contexto de this para nome, email e exibirInfos.

Embora seja uma maneira considerada "antiga" de criar objetos e trabalhar com orientação a objetos em JavaScript, as funções construtoras não estão descontinuadas. Elas ainda podem ser usadas normalmente, embora hoje em dia realmente utilizemos mais a sintaxe de classe.

Existe outra maneira de trabalhar sem classes no JavaScript, que é usando o Object.create(). Como estamos finalizando essa parte de apresentação da herança de protótipos, não vamos fazer isso agora, mas vamos deixar no material extra para você conferir.

E com isso, finalizamos essa recapitulação e essa apresentação da herança de protótipos e da cadeia de protótipos, muito importante para entender. A sintaxe de classe é apenas construída em cima disso.

Agora, vamos continuar e finalmente apresentar as classes no nosso curso. Vamos lá!

### Aula 02 - Faça como eu fiz: Object.create()

Durante a aula aprendemos como funciona o operador new em conjunto com funções construtoras. Embora as funções construtoras não sejam mais tão utilizadas desde a implementação da sintaxe de classe, ainda é uma forma aceita de se trabalhar com orientação a objetos em JavaScript e não está descontinuada.

Existe também um outro método para a criação de objetos em JavaScript, utilizando o Object.create().

Vamos começar com a mesma função construtora que praticamos em vídeo:

```JavaScript
function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibirInfos = function() {
   return `${this.nome}, ${this.email}`
 }
}
```

Em seguida, usamos o objeto User como protótipo para criar um outro objeto (Admin) através de sua própria função construtora:

```JavaScript
function Admin(role) {
 User.call(this, 'Juliana', 'j@j.com')
 this.role = role || 'estudante'
}
```

Note que usamos o método call() para chamar a função User dentro de Admin. O this aqui vai se referir ao contexto de User que será “aproveitado” dentro de Admin.

Nos parâmetros seguintes passamos de forma “hard coded” os parâmetros que temos que passar para User (nome e email), apenas como exemplo.

Agora podemos usar o Object.create() para passar a propriedade prototype de User como protótipo de Admin. Assim, é possível usar o método exibirInfos() que existe em User mas não existe em Admin:

```JavaScript
Admin.prototype = Object.create(User.prototype)
const juliana = new Admin('admin')
console.log(juliana.exibirInfos())
console.log(juliana.role)
```

Vamos praticar com outro exemplo, a partir de um objeto ao invés de uma função construtora:

```JavaScript
const user = {
 exibirInfos: function(user) {
   return `${user.nome}, ${user.email}`
 }
}
```

O JavaScript sempre tem que criar o protótipo a partir de um objeto, então criamos um objeto.

Agora repetimos o processo, porém em vez de usar .prototype para criar a nova instância, podemos passar o próprio objeto user que acabamos de definir:

```JavaScript
const juliana = Object.create(user)
console.log(juliana.exibirInfos({nome: 'Juliana', email: 'j@j.com'}))
```

Inclusive podemos testar se user entrou mesmo como protótipo usando o método isPrototypeOf, que retorna true ou false:

```JavaScript
console.log(user.isPrototypeOf(juliana)) //true
```

O objeto foi criado a partir do protótipo, porém se tentarmos acessar alguma propriedade, como nome, ou email, não vamos conseguir:

```JavaScript
console.log(juliana.nome, juliana.email) //undefined
```

É possível fazer desta forma:

```JavaScript
juliana.nome = 'Juliana'
juliana.email = 'j@j.com'
console.log(juliana.nome, juliana.email)
```

Mas essa forma não parece muito boa nem prática.

É possível perceber que essa implementação do Object.create() é um pouco estranha. Caso o objeto precise ser iniciado com propriedades próprias, como fizemos na função construtora (e que é chamado justamente de “construtor” em orientação a objetos), como funcionaria?

O Object.create() não tem um construtor. O padrão mais comum é uma função init ou constructor que deve ser criada manualmente:

```JavaScript
const user = {
 init: function(nome, email) {
   this.nome = nome
   this.email = email
 },
 exibirInfos: function() {
   return `${this.nome}, ${this.email}`
 }
}
```

A partir daí é possível usar user como protótipo de um novo objeto:

```JavaScript
const juliana = Object.create(user)
juliana.init('Juliana', 'j@j.com')
console.log(juliana.exibirInfos())
```

Opinião do instrutor

O Object.create() existe porque faz mais sentido para o modelo de protótipo do que o new, que é uma construção que faz mais sentido com classes (vamos ver em seguida).

Na vida real não atribuímos métodos ou propriedades “manualmente” diretamente no prototype. Ao invés disso, o padrão no modelo de protótipo utiliza o Object.create() para criação de objetos a partir de um modelo.

É muito importante conhecer estes básicos, embora desde o ES6 a sintaxe de classe tenha sido mais amplamente adotada, em vez do uso “clássico” dos protótipos.

Os principais motivos são:

- Os protótipos continuam aparecendo em código legado, exemplos, tutoriais, documentações e muitas outras fontes de informação sobre o JavaScript;
- O modelo de classes foi construído em cima dos protótipos;
- Isso explica algumas particularidades das classes em JavaScript que vamos estudar nas próximas aulas.

### Aula 02 - Para saber mais: factory functions

Uma factory function (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto.

Exemplo de factory function:

```JavaScript
function criaUser(nome, email) {
 return {
   nome,
   email,
   exibeInfos() {
     return `${nome}, ${email}`
   }
 }
}
```

Perceba que, um pouco diferente do que foi feito na aula, não se trata de um objeto literal, mas sim de uma função que retorna (através da palavra-chave return) um objeto.

A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (nome e email) e um método interno (exibeInfos()):

```JavaScript
const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibeInfos())
```

O retorno esperado no terminal:

```JavaScript
{
  nome: 'Rodrigo',
  email: 'r@r.com',
  exibeInfos: [Function: exibeInfos]
}
Rodrigo, r@r.com
```

As factory functions são diferentes das funções construtoras. Veja um exemplo de função construtora, como fizemos anteriormente durante a aula:

```JavaScript
function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibeInfos() {
   return `${nome}, ${email}`
 }
}
```

As funções construtoras devem ser chamadas com o operador new para criar instâncias do objeto User:

```JavaScript
const newUser = new User('Mariana', 'm@m.com')
console.log(newUser)
console.log(newUser.exibeInfos())
```

O retorno no console é praticamente o mesmo, com a exceção de que agora exibeInfos() é uma função anônima e o objeto é explicitamente uma instância de User:

```JavaScript
User {
  nome: 'Mariana',
  email: 'm@m.com',
  exibeInfos: [Function (anonymous)]
}
Mariana, m@m.com
```

No caso da factory function não há perda de contexto na execução dos métodos internos.

Quais são as diferenças e qual devo usar?  
Não há consenso, pois ambas têm vantagens e desvantagens. A sintaxe da função construtora é mais confortável para quem está acostumado com o uso de classes; já a factory function é mais flexível a respeito do tipo de objeto que será retornado.

Boa parte dos frameworks e bibliotecas do Node.js atualmente vão trabalhar com classes ou construtores, instanciados com new.

### Aula 02 - O que aprendemos?

Nessa aula, você aprendeu:

- O que é a palavra-chave this e sua importância na manipulação de objetos com JavaScript, uma vez que o this representa o contexto em que determinada função ou método será executada, e como este contexto pode ser identificado e modificado utilizando os métodos bind(), call() e apply().
- Como funciona a criação de objetos em JavaScript com o modelo de protótipo, que é a forma nativa do JavaScript trabalhar com o conceito de orientação a objetos conhecido como “herança”, quando objetos recebem propriedades e métodos de outros.
- Como acessar as propriedades prototype e __proto__ e, através delas, identificar a cadeia de protótipos desde o nível mais baixo, normalmente um objeto do próprio tipo de dado, como Object.
- Como o JavaScript cria objetos a partir de funções construtoras com new, utilizando uma sintaxe mais próxima das classes.

## Aula 03 - Classes e Herança

### Aula 03 -  - Vídeo 1
### Aula 03 -  - Vídeo 2
### Aula 03 -  - Vídeo 3
### Aula 03 -  - Vídeo 4
### Aula 03 -  - Vídeo 5
### Aula 03 -  - Vídeo 6
