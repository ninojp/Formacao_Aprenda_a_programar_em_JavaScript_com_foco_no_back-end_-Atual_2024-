# Curso Alura - JavaScript conhecendo arrays

## Aula 1 - O que são Arrays

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá! Boas-vindas ao curso de Fundamentos do JavaScript para Back-end (Arrays). Meu nome é Ju Amoasei e irei te acompanhar ao longo dessa jornada!

Audiodescrição: Ju se descreve como uma mulher branca, de olhos pretos, sobrancelhas castanhas e cabelo curto pintado de azul. Ela usa óculos de armação arredondada vermelha, brincos prateados, piercing no nariz, veste uma camiseta preta com o logo da Alura e está no estúdio da Alura, iluminado em azul e verde ao fundo, com uma estante preta à direita com enfeites e luminárias.

Para quem é este curso?  
Este conteúdo é indicado para quem está iniciando na programação e escolheu o JavaScript como linguagem.

Pré-requisitos  
Para melhor aproveitamento deste conteúdo, recomendamos que você já tenha acompanhado o curso anterior de Fundamentos do JavaScript, onde falamos sobre variáveis, tipos de dados e funções.

O que vamos aprender?  
Este curso não aborda tópicos específicos de front-end. Ao longo dos nossos estudos, você vai aprender o que são arrays e por que os arrays são uma estrutura de dados tão importante.

Também abordaremos o que são laços de repetição, como utilizamos os laços com arrays, como manipular arrays utilizando métodos específicos que o JavaScript disponibiliza, e vamos aplicar todos esses conceitos usando desafios práticos.

Aproveite os recursos da plataforma. Além dos vídeos, temos diversas atividades extra que acompanham o conteúdo audiovisual. Lembre-se de participar do fórum e do Discord; a comunidade te espera para ajudar com as suas dúvidas e também para compartilhar conhecimento.

### Aula 1 - Introdução a arrays - Vídeo 2

Transcrição  
Neste curso, vamos continuar trabalhando no contexto de uma escola. Sendo assim, encontraremos listas de pessoas estudantes, listas de notas, médias, entre outros documentos.

Resolveremos os desafios com JavaScript, então vamos colocar a mão na massa para descobrir como resolver nosso primeiro desafio: calcular uma média.

Desafio: calculando a média  
Precisamos calcular uma média entre as seguintes notas: 10, 6.5, 8 e 7.5. A primeira coisa a fazer é abrir o editor de código. Já estamos com o VS Code aberto, criamos uma pasta para o projeto, e da mesma forma que fizemos anteriormente no curso de fundamentos, criaremos um novo arquivo no botão "New File…". Vamos chamar esse arquivo de calculo-media.js.

Criando as constantes nota  
Se retomarmos o que foi feito no curso anterior, podemos criar quatro const. Primeiro, vamos criar uma const nota1 = 10, depois uma const nota2 = 6.5 (lembrando que usamos ponto para separar o decimal, e não vírgula), uma const nota3 = 8, e a const nota4 = 7.5.

calculo-media.js:

```JavaScript
const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;
```

Criando a constante media  
Até o momento, nenhuma novidade. Agora vamos fazer a média, digitando const media que receberá a operação (nota1 + nota2 + nota3 + nota4) / 4. Por fim, podemos chamar o método console.log() para exibir a media. Por enquanto, apenas retomamos o que já fizemos anteriormente.

```JavaScript
// código omitido
const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);
```

Também como fizemos anteriormente, vamos abrir um terminal no menu "Terminal > New Terminal". Em seguida, conferimos se estamos dentro da pasta certa e chamamos o comando node, passando o nome do arquivo calculo-media.js para o Node.js executá-lo.

> node calculo-media.js

Nesse caso, foi retornada a média 8. No entanto, esse método de atribuir cada valor a uma variável não é muito prático, porque, nesse caso, temos 4 notas. Porém, se pensarmos em qualquer caso, e se precisarmos somar mil números? Seria impraticável criar uma variável para cada número.

Criando a constante notas  
Vamos fazer o seguinte: comentar as const que criamos anteriormente, e em vez disso, criar apenas uma const chamada notas que receberá uma lista com os valores das notas ([10, 6.5, 8, 7.5]).

> const notas = [10, 6.5, 8, 7.5];

Agora, o que temos é algo parecido com uma lista de notas, e elas estão todas englobadas dentro de apenas uma variável. A partir disso, como calculamos a média?

Em vez de somar nota1, nota2, nota3 e nota4, podemos substituir isso pela lista. Mas como acessamos cada um dos valores desta lista? De uma forma um pouco diferente.

Agora, a nossa soma será da variável notas no índice onde está o primeiro valor, isto é, o valor 10. Então, será notas[0]. Em seguida, vamos somar a isso as variáveis notas[1] + notas[2] + notas[3].

Por último, em vez de dividir por 4, vamos usar um recurso do JavaScript para passar o tamanho da nossa lista de forma automática. Dessa forma, o JavaScript consegue acessar a lista, saber quantos valores há nela, e trazer esse número para nós sem a necessidade de contar manualmente.

Portanto, vamos dividir por notas.length. Tenha cuidado com a grafia da palavra "length" (comprimento), porque ela é muito fácil de errar. Isso é fonte de muitos bugs.

```JavaScript
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
```

Antes de continuar, vamos testar para conferir se tudo continua no lugar. De volta ao terminal, retornamos ao último comando com "Seta para cima", node calculo-media.js, e continua funcionando normalmente.

Conclusão  
Agora que tudo funciona, é hora de revisar o que foi feito e entender o que são os índices [0], [1], [2], [3]. Você já pode ter até uma ideia do que está acontecendo, mas vamos analisar com detalhes logo em seguida!

### Aula 1 - Como funcionam os arrays - Vídeo 3

Transcrição  
Agora que tivemos nosso primeiro contato com um array, vamos examinar essa estrutura e entender o que acontece de fato!

Funcionamento do array  
O que é um array e como ele funciona? Um array é uma sequência, ele é uma lista de elementos. Na nossa variável notas, temos 4 elementos, nesse caso, 4 dados do tipo número: 10, 6.5, 8 e 7.5. Esses são chamados de elementos ou itens do array.

Além disso, temos outro dado com que precisamos lidar: os índices do array. Se voltarmos ao código, vamos notar que para acessar cada um dos itens da lista, utilizamos uma anotação que foi colchete, número e colchete (exemplo: [0]), logo depois do nome da variável. Isso significa que estamos acessando o índice do array, ou seja, a posição onde o elemento está nessa lista.

O primeiro elemento sempre estará no índice número 0; depois temos o segundo elemento no índice número 1, o terceiro elemento no índice número 2, e o quarto elemento no índice número 3.

Ou seja, podemos concluir que todo array é uma lista numerada que começa sempre no índice 0 até infinito, porque não limitamos, no JavaScript, a quantidade de posições que podem existir dentro de um array.

Porém, é importante notar que ele sempre começa no índice 0 e os elementos que estão no array, exceto se manipularmos para fazer essa troca, eles sempre vão aparecer na mesma ordem.

Sendo assim, no nosso caso, o elemento de valor 10 sempre estará no índice 0, ou seja, ele sempre será o primeiro elemento desse array, seguido do 6.5, seguido do 8, e do 7.5 por último.

Ao contrário das variáveis que lidamos até agora, que guardam apenas um valor, uma string, um número, para conseguirmos acessar um valor de um array, precisamos acessar o número do índice onde ele está posicionado. Por isso, para acessar o primeiro valor, temos que usar a notação "variável + colchete + número do índice + colchete".

Para acessar o primeiro valor, utilizamos colchetes com 0. Assim, acessaremos o valor 10, que é o primeiro elemento do array. Para acessar, por exemplo, o número 8, que é o terceiro elemento desse array, temos que acessar o índice número 2. Então, é sempre um número a menos. Se quisermos acessar o terceiro elemento, é o índice 2; se quisermos acessar o quarto, é o índice 3; e assim por diante.

Se passarmos para o método console.log() a constante notas[2], vamos acessar o valor 8, que é o elemento de número 3 na lista.

Além disso, os arrays em JavaScript têm algumas outras particularidades diferentes de outras linguagens. Por exemplo: no JavaScript, podemos criar um array com diversos tipos de dados.

Assim, podemos ter uma variável lista, que tem, por exemplo, o número 10, seguido da string "oi", seguido do boolean (verdadeiro ou falso) true, seguido de outro array ([1, 2]), seguido de um objeto ({ a: b }), que abordaremos posteriormente durante essa formação e vai funcionar da mesma forma, com índice 0, 1, 2 e 3.

No exemplo acima, se quisermos acessar, por exemplo, o valor true, temos que acessar a lista no índice 2, ou seja, lista[2]. Não é uma prática comum em linguagens de programação essa possibilidade de agruparmos em uma mesma lista diversos tipos de dados. O normal é sempre termos listas de dados do mesmo tipo: ou listas só de números, ou listas só de strings, ou listas só de objetos.

Parece um pouco contraproducente não aceitarmos mais de um tipo de dado em uma lista, porém, com a prática de programação, criando aplicações e programas, você vai perceber que é muito mais comum do que se imagina ter apenas listas de um mesmo dado. Isso virá com a prática.

Como você deve ter notado, as listas podem conter qualquer tipo de dado, inclusive, um array dentro de outro array, um array de objetos, entre outras variantes. Vamos praticar mais durante o curso!

Conclusão  
Agora que entendemos de forma um pouco mais específica o que são arrays e a questão de como acessamos os elementos desse array, podemos passar para os próximos desafios. Vamos lá!

### Aula 1 - Para saber mais: o que são arrays

Nesta aula, vamos trabalhar com array, que é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores. Pode ser usado, por exemplo, para agrupar diferentes dados que têm relação entre si.

Conforme o exemplo:

```JavaScript
const numero1 = 50;
const numero2 = 43;
const numero3 = 12;
// utilizando array
const numeros = [50, 43, 12];
```

Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, ou item, e cada elemento se localiza numa posição fixa na lista chamada de índice.

Vamos destrinchar essa explicação!

Uma lista ordenada de valores enumerados  
Quando falamos de valores, estamos nos referindo a dados de algum tipo: string (texto), number (número), booleano (true ou false) ou outros dados reconhecidos pelo JavaScript. Por exemplo:

```JavaScript
const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];
```

Como uma lista ordenada, entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. Eles estão enumerados, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista (mais sobre isso abaixo!). Caso não seja feita nenhuma alteração no array, seus valores sempre aparecerão na mesma ordem, por exemplo, [50, 43, 12].

Cada valor é chamado de elemento ou item
Em programação é importante sempre sabermos os nomes dos itens, para facilitar na hora de tirar dúvidas, procurar soluções e ler documentação. Quando trabalhamos com arrays, chamamos de elemento ou item cada um dos valores da lista, como no exemplo a seguir:

```JavaScript
// array com 1 elemento
const numero = [5];
// array com 3 elementos
const nums = [50, 43, 12];
```

Lembrando que cada elemento corresponde a um dado, separados por vírgula. O espaço é opcional, mas facilita a leitura.

Cada elemento está localizado em uma posição na lista, chamada de índice
Se um array é uma lista ordenada, então é possível acessar cada um dos dados (ou valores) nele se soubermos a posição dele na lista. Por exemplo:

```JavaScript
const nums = [50, 43, 12];
// o número 43 está na posição de índice 1 (segunda posição) nessa lista de três números.
```

Em programação, chamamos de índice (em inglês, index) o número que identifica a posição de um valor em um array.

Porém, um detalhe muito importante para trabalharmos bem com arrays é que, em JavaScript (e na maior parte das linguagens de programação), a contagem dos índices não começa no número 1, e, sim, no número 0. Então, se quisermos acessar determinado valor pelo número do índice temos que levar isso em consideração:

```JavaScript
// índice     0   1   2   3
const nums = [50, 43, 12, 98];
```

Sendo assim, o elemento de valor 43 está localizado no índice de número 1.

A imagem abaixo mostra um diagrama da representação de um array, nomeando seus recursos:

Diagrama representando um array. Há um texto “notas” e ao lado direito do texto há 4 retângulos enfileirados lado a lado com um número em cada um: 10, 6.5, 8 e 7.5, da esquerda para direita. Cada retângulo contém um número dentro, que representa uma nota. Ao lado direito da fileira de retângulos há uma seta apontando para eles com o texto “elementos/itens”. Abaixo de cada retângulo, há um número, que começa à esquerda, do zero no primeiro retângulo e vai até o número três, mais à direita, no último retângulo. Ao lado dessa fileira de números, há uma seta apontando para eles, com o texto “índices/posições”.

A propriedade length  
Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array. Por exemplo:

```JavaScript
// índice     0   1   2   3
const nums = [50, 43, 12, 98];
console.log(nums.length) //4
```

Considerando que o array acima tem 4 elementos, podemos dizer que o valor retornado por length sempre será 1 número a mais do que o valor de índice mais alto. Neste caso, o array nums é um array de 4 elementos e seus índices vão de 0 a 3.

A propriedade length é muito útil para trabalharmos com arrays, pois não é preciso saber o número de elementos de antemão e nem tentar contá-los, o que seria impraticável em um programa de computador real.

Esta é só uma pequena introdução! Ainda há muito o que estudar e aprender sobre arrays e como utilizar esta estrutura.

### Aula 1 - Para saber mais: índices de array e memória

Os arrays são estruturas de dados que armazenam coleções de elementos. Cada elemento em um array é acessado por meio de um índice, que é um número inteiro usado para identificar a posição desse elemento no array.

Quando se trata de como os índices são armazenados na memória em JavaScript, é importante entender que os arrays em JavaScript são implementados como objetos. Internamente, os índices são tratados como chaves (ou propriedades) de um objeto, onde cada chave é associada ao seu valor correspondente (o elemento do array).

A memória em JavaScript é gerenciada automaticamente pelo mecanismo do navegador ou do ambiente de execução. Quando você cria um array e adiciona elementos a ele, o mecanismo aloca espaço na memória para armazenar esses elementos sequencialmente, de acordo com seus índices.

Por exemplo, ao criar um array, a memória poderia ser representada de forma simplificada como:

![alt text](image.png)

alt text: Diagrama que representa a memória ao criar uma array. Na parte superior está a declaração do array “const lista = [34, 21, 2, 66, 567];” abaixo há uma figura em cor escura que representa a memória, dentro dessa figura há 15 quadrados menores organizados em 3 linhas de 5 quadrados. De cima para baixo, a primeira linha tem cor rosa e os seguintes números em cada um dos quadrados: 34, 21, 2, 66 e 567 e uma seta indica que essa linha representa os valores do array. A segunda linha tem cor azul ciano e os seguintes números: 0, 1, 2, 3 e 4 e uma seta indica que os índices do array começam em 0. A terceira linha tem cor amarela e os seguintes números: 1000, 1004, 1008, 1012 e 1016 e uma seta indica que são os endereços na memória.

Cada elemento está localizado em um espaço de memória sequencial, e o acesso aos elementos do array é feito diretamente por meio dos índices correspondentes.

Resumindo, os índices de um array em JavaScript são números inteiros que representam a posição de cada elemento no array. Internamente, esses índices são tratados como chaves de um objeto, e os elementos são armazenados sequencialmente na memória conforme são adicionados ao array. Isso permite acessar rapidamente os elementos usando seus índices correspondentes.

### Aula 1 - Adicionando elementos - Vídeo 4

Transcrição  
Avançando para o nosso próximo desafio, em uma situação hipotética, uma pessoa docente inseriu apenas 3 das 4 notas de uma pessoa estudante no sistema, sendo elas 10, 6 e 8. Precisamos corrigir isso adicionando a nota 7 à lista de notas e calcular a média corretamente.

Desafio: adicionando elementos
Para isso, vamos ao Visual Studio Code e criar um novo arquivo que será nomeado adicionar-nota.js. O primeiro passo é criar a constante notas. Para isso, escrevemos const notas = [10, 6, 8]. Os espaços entre as vírgulas não são estritamente necessários, mas ajudam na leitura do código.

adicionar-nota.js:

```JavaScript
const notas = [10, 6, 8];
```

Usando o método push()
Com a constante notas criada, precisamos adicionar um valor ao array. Nesse caso, será um pouco diferente do processo quando temos um valor dentro de uma variável let e queremos apenas substituir.

Se tivéssemos let nota = 9, por exemplo, e quiséssemos trocar, seria necessário apenas chamar novamente nota e trocar o valor para, digamos, 5.6.

No entanto, ao trabalhar com listas, o processo é diferente. Precisamos utilizar funções do JavaScript para fazer essa alteração. A função que utilizaremos é push(). Então, chamamos a variável notas e, após ela, a palavra push(), que o JavaScript deixa pronta para ser utilizada.

O valor que passamos como parâmetro do push() é o valor que queremos inserir no array. Portanto, para resolver nosso desafio, escrevemos notas.push(7).

```JavaScript
// código omitido
notas.push(7);
```

Criando a constante media  
Em seguida, criaremos a constante media. Podemos copiar a linha de código onde a constante media foi criada anteriormente no arquivo calculo-media.js, para economizar tempo.

A constante media continua funcionando da mesma forma: vamos acessar notas[0], notas[1], notas[2] e notas[3] e dividir pelo comprimento do array (notas.length).

Por fim, exibimos a média com console.log(media).

```JavaScript
// código omitido
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);
```

No terminal, vamos executar o comando node seguido do nome do arquivo adicionar-nota.js.

> node adicionar-nota.js

Como retorno, recebemos a média 7.75.

Observações  
Um detalhe importante é que o método push(), nativo do JavaScript, sempre adiciona o valor no final do array. Conforme discutido anteriormente, o array é uma lista de posição fixa, então o valor 10 sempre estará no índice 0, exceto se manipularmos esse array. Portanto, é crucial entender que o push() sempre colocará o valor no final do array como o último elemento.

Em relação ao que discutimos anteriormente sobre const e let, uma const é uma variável cujo valor não pode ser modificado. Teoricamente, se quiséssemos modificar o array notas, deveríamos usar let notas. No entanto, atribuímos arrays a algumas const e conseguimos manipular esse array.

Uma const significa que um valor não pode ser reatribuído, mas um array que é atribuído a uma const ainda é um array e pode ter seus índices alterados. Sendo assim, não podemos, por exemplo, chamar notas e, em vez de um array, tentarmos atribuir um número. Isso resultará em erro.

Note também que usamos o termo "método" para nos referirmos ao push(). Um método é uma função do JavaScript associada a um tipo de dado específico. O push() só funciona se estiver associado a um array, razão pela qual usamos a sintaxe notas.push().

Conclusão  
Vamos continuar com nossos desafios, onde exploraremos outros métodos específicos de array!

### Aula 1 - Faça como eu fiz: array esparso

Não deixe de praticar em seu projeto com os exemplos abaixo!

Até agora trabalhamos com arrays que representam listas de dados (notas de alunos em uma escola). Mas o que acontece se declaramos um array sem nenhum valor na lista?

Crie um arquivo script.js em seu computador e escreva o seguinte código:

```JavaScript
const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)
```

Executando este código com node script.js (não esqueça de conferir se está executando o comando dentro da pasta/diretório certo), o resultado é:

> []  
  0

No exemplo acima, podemos notar que o JavaScript criou o array e a guardou na variável arrayVazia, mas seu length é 0.

Vamos então ver o que acontece se usarmos a notação de colchetes para tentar acessar o índice 0 do array (lembrando que o índice zero se refere à primeira posição):

```JavaScript
const arrayVazia = [];
console.log(arrayVazia[0])
```

Desta vez, o resultado é:

> undefined

Parece um pouco confuso? Vamos executar mais um teste e ver o que acontece:

```JavaScript
const arrayVazia = [,,,];
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])
```

Confira os resultados no terminal:

```JavaScript
3
undefined
undefined
undefined
```

O que fizemos aqui, afinal?

Criamos um array com 3 posições, porém, em nenhuma dessas posições existe um valor. De certa forma, podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.

Para finalizar, faça um último teste. Vamos usar o método push() visto anteriormente para adicionar um valor - lembrando que este método sempre vai adicionar o valor no final do array!

```JavaScript
const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)
```

Conferindo os resultados:

```JavaScript
3
[ <3 empty items>, 50 ]
4
```

O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50).

### Aula 1 - Excluindo elementos - Vídeo 5

Transcrição  
Continuando com nossos desafios, o próximo é excluir elementos!

Desafio: excluindo elementos  
Suponha que um professor tenha acidentalmente lançado 5 notas de uma pessoa estudante no sistema, sendo elas: 10, 6, 8, 5.5 e 10. Para corrigir, precisamos remover a última nota e fazer o cálculo da média correta. Portanto, a nota que está por último, o último índice do array, é a nota que foi incluída sem querer e precisa ser removida.

Criando o arquivo excluir-elementos.js  
No Visual Studio Code, vamos criar um arquivo novo chamado excluir-elementos.js. Primeiro, precisamos criar a constante notas, que receberá um array contendo as notas 10, 6, 8, 5.5 e 10.

excluir-elementos.js:

> const notas = [10, 6, 8, 5.5, 10];

Usando o método pop()  
Utilizamos anteriormente o método push() do JavaScript para adicionar um elemento ao final do array. Agora podemos pensar o seguinte: existe algum método pronto para remover elementos do final?

A resposta é sim, existe. Usaremos o método pop(), que vamos chamar da seguinte forma: notas.pop(). É importante notar que, diferente do push(), com o método pop(), sempre retiramos o último elemento do array, então não é necessário passar nenhum parâmetro para ele.

> // código omitido  
  notas.pop();

Refazendo o cálculo da média  
Para refazer o cálculo da média, podemos voltar ao arquivo anterior (adicionar-nota.js) e copiar novamente a variável media e o console.log(). Continua sendo o mesmo cálculo com quatro elementos e já temos a constante media entre os parênteses de console.log().

```JavaScript
// código omitido
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
```

Vamos fazer um teste executando no terminal o comando abaixo:

> node excluir-elementos.js

Foi retornada a nota 7.375. Se quisermos reduzir a quantidade de casas decimais, podemos utilizar o método toFixed(), que já conhecemos, e passar entre parênteses a quantidade de casas desejadas.

> console.log(media.toFixed(2));

Nesse caso, selecionamos duas casas, então foi retornado 7.38.

Agora que já conversamos sobre métodos, podemos observar o media.toFixed(). Assim como o JavaScript tem funções prontas que funcionam para arrays, como é o caso do pop(), também temos funções prontas que funcionam para números. media é um valor numérico, o valor 7.375, e podemos associá-la a uma função pronta do JavaScript chamada toFixed().

Deixaremos o link da documentação do toFixed() e do Array.prototype.pop() para você conferir mais exemplos e testar o método em funcionamento.

Um último detalhe importante é que o método pop() modifica o array notas. Porém, alguns métodos não modificam o array original, criando outro array. Portanto, ao trabalhar com arrays, preste sempre atenção se a modificação é feita no próprio array, pois isso pode ser relevante no seu programa.

### Aula 1 - Para saber mais: arrays truthy ou falsy

Em JavaScript, os termos "truthy" e "falsy" referem-se à avaliação de valores de acordo com seu contexto booleano. Um valor "falsy" é aquele que é considerado falso quando avaliado como um booleano, enquanto um valor "truthy" é considerado verdadeiro nesse mesmo contexto.

Valores "falsy" em JavaScript são aqueles que, ao serem convertidos para booleanos, são interpretados como falso. Isso inclui:

- Zero: O valor numérico zero (0);
- String vazia (''): Uma string sem nenhum caractere;
- NaN: Representa "Not-A-Number", frequentemente resultante de operações matemáticas inválidas;
- null: Indica a ausência intencional de um valor ou referência nula;
- undefined: Indica uma variável que foi declarada, mas ainda não teve um valor atribuído.

Valores "truthy", por outro lado, são valores que, quando convertidos para booleanos, são interpretados como verdadeiros. Estes incluem:

- Strings não vazias: Qualquer string que contenha pelo menos um caractere;
- Números diferentes de zero: Qualquer número que não seja zero, incluindo números negativos e decimais;
- Arrays: Mesmo um array vazio é considerado "truthy";
- Objetos: Objetos em JavaScript são "truthy", mesmo se estiverem vazios;

Aqui está um exemplo mais detalhado, demonstrando como os arrays podem ser avaliados como "truthy":

```JavaScript
const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"
```

No exemplo acima, tanto o arrayVazio (um array sem elementos) quanto o arrayNaoVazio (um array com elementos) são avaliados como "truthy" quando usados em um contexto booleano.

Entender os conceitos de "truthy" e "falsy" em JavaScript é extremamente importante ao lidarmos com lógica condicional em estruturas como if, while e operadores lógicos, para garantir que o código funcione conforme esperado.

### Aula 1 - Para saber mais: métodos de array

Já utilizamos alguns métodos de arrays nessa aula, e ainda vamos praticar com outros. Porém, pode ainda ter ficado a dúvida: o que são os métodos?

Um método é uma função chamada (executada) no contexto de um objeto (array, number, string, etc).

Métodos realizam tarefas pré-definidas usando o valor que está no contexto (por exemplo, um array) e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.

Vamos entender com mais detalhes o que são propriedades de objetos durante o curso de fundamentos do JavaScript: objetos.

Os interpretadores de JavaScript implementam vários métodos “prontos” que podemos usar para manipular e fazer operações com números, strings, arrays, objetos, etc. Com algumas exceções, os métodos são próprios de cada tipo: por exemplo, não conseguimos usar métodos de arrays para manipular números e vice-versa.

Exemplos de métodos:

```JavaScript
(9.999).toFixed(2); // toFixed é um método de Number
'string'.toUpperCase(); // toUpperCase é um método de String
[1, 2, 3].push(4); // push é um método de Array
```

Existem muitos métodos para conseguir lembrar de todos, mas vamos trabalhar com vários outros durante o curso!

### Aula 1 - Criando nosso primeiro array

Após os primeiros passos com arrays, Ana decidiu praticar para colocar o conhecimento em prática. Ela escreveu o seguinte código:

```JavaScript
const lista = [7, 13, 'JavaScript', 'Alura', true];
lista.push(false);
console.log(lista.length); // 6
```

Analise o primeiro array de Ana e marque as alternativas corretas:

Alternativa correta  
Todo array do JavaScript possui a propriedade length, além de determinados métodos.

Todo array criado no JavaScript vem com automaticamente com a propriedade length, que indica sua quantidade de elementos, e métodos como push e pop, que servem para realizar operações com o array, como modificá-lo.

### Aula 1 - Jantar de hoje

O push e pop são usados para adicionar/remover elementos de uma lista, como mostra o seguinte código:

```JavaScript
const jantarDeHoje = [‘burguer’, ‘hot dog’, ‘pizza’];
jantarDeHoje.pop()
jantarDeHoje.pop()
jantarDeHoje.push('ovo frito')
jantarDeHoje.push('salada')
jantarDeHoje.push('maçã')
console.log(jantarDeHoje)
```

Analisando o código, selecione a alternativa que corresponde ao que teremos como saída do console do jantarDeHoje .

> [ 'burguer', 'ovo frito', 'salada', 'maçã' ]

Certo! No jantar de hoje, a pizza e o hot dog não estão presentes por conta do código jantarDeHoje.pop(), que remove o último elemento da lista e o ovo, a salada e a maçã verde entraram na lista com comando push.

#### Aula 1 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

Documentação do MDN: [array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push);
Documentação do MDN: [array.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop).

### Aula 1 - Desafio: exercícios

Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!

Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião”.

Disponibilizamos uma possível resolução dos [desafios neste link](https://github.com/alura-cursos/3530-js-arrays/tree/exercicios-aula1) para você construir ou validar suas soluções.

### Aula 1 - O que aprendemos?

Nessa aula, você aprendeu:

- As características principais de arrays:
  - Um array é uma lista ordenada de dados. Você aprendeu a sintaxe de um array e como acessar seus valores.
- Os conceitos de elemento e índice:
  - Elementos são os valores que um array guarda, e índice é o identificador único e numérico de cada elemento do array.
- Como utilizar a propriedade .length:
  - Todos os arrays do JavaScript possuem essa propriedade, que indica a quantidade de elementos do array.
- Como utilizar os métodos .push() e .pop():
  - Fizemos as primeiras alterações em um array, adicionando um novo item ao final ou removendo o último item.

## Aula 2 - Alterando Arrays

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
### Aula 2 -  - Vídeo 7
