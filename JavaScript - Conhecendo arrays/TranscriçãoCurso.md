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

### Aula 2 - Dividindo com slice() - Vídeo 1

Transcrição  
Partindo para o próximo desafio, temos uma lista de estudantes e precisamos dividir essa lista em duas, com a mesma quantidade de estudantes.

Desafio: dividindo salas  
Divida os alunos da sala abaixo em duas listas com a mesma quantidade de estudantes:

```JavaScript
'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
```

Na tela, está mostrando uma lista com diversos nomes. Podemos copiar do GitHub para evitar digitar ou criar seus próprios nomes.

Criamos no Visual Studio Code um arquivo chamado dividir-array.js, com uma constante chamada listaEstudantes e dentro dessa variável, criamos o array com o nome de cada estudante.

dividir-array.js

```JavaScript
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
```

Lembrando que, por serem strings (cadeias de caracteres), sempre devem estar entre aspas duplas ou simples.

Como dividimos esse array em dois arrays com a mesma quantidade de elementos, sem ter que contar manualmente a quantidade de elementos em cada um? A primeira coisa que faremos é criar uma constante que chamaremos de sala1. O valor dessa constante será nosso array cortado pela metade.

Para isso, temos um método do JavaScript chamado slice(), que fará esse trabalho para nós. Passamos a listaEstudantes.slice().

dividir-array.js

```JavaScript
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice()
```

A função slice(), como qualquer função que utilizamos, seja ela criada por nós ou prontas no JavaScript, requer parâmetros e precisamos entender quais são eles. É importante sempre entender quais são os parâmetros que cada função precisa receber ao programar.

Deixaremos novamente o link da documentação do Array.prototype.slice() .

Na documentação, sempre dirá quais são os parâmetros a serem fornecidos. O MDN, onde estamos procurando a documentação, informará na seção "Sintaxe" que slice precisa de um parâmetro, que é o início do array onde queremos fazer o corte, e o final é opcional.

Exemplo retirado da documentação:

> arr.slice([início[,fim]])

A sintaxe da função slice, diz que ela precisa de parâmetros, um que está sendo chamado de início, que é opcional, e o final também é opcional. O início é onde desejamos que comece o corte. Com base nisso, faremos uns testes com slice e pensar em como pegar o meio de um array.

Sabemos que para termos acesso ao comprimento de um array, usamos uma propriedade chamada length.

Então, listaEstudantes.slice(listaEstudantes.length), retornará a quantidade de elementos. Se queremos metade dessa lista, seria metade dos elementos. O que podemos fazer? ListaEstudantes.length é um número e podemos dividir esse número por dois. Então, listaEstudantes.length/2.

No entanto, o valor desejado para o término da nossa primeira lista é aquele em que ela começa no primeiro estudante e se encerra na metade do array. O slice, nosso primeiro parâmetro, deve ser configurado considerando que os parâmetros são sempre ordenados, sendo o início o primeiro deles. Portanto, o índice inicial é 0, e o índice final é listaEstudantes.length dividido por dois.

dividir-array.js

```JavaScript
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
```

Se voltarmos à documentação, estará exatamente de acordo com o que o método slice() espera receber, um parâmetro de início e um parâmetro de fim. Para fazer o restante da lista criaremos uma constante, sala2, igual, listaEstudantes.slice().

Utilizaremos outra opção do método slice(), passando apenas um parâmetro, o parâmetro de início, indicando o ponto de corte do meio para o final. Se passarmos apenas um parâmetro para o slice, como listaEstudantes.length/2, especificamos somente o ponto inicial do corte.

dividir-array.js

```JavaScript
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);
```

A partir disso, o JavaScript entende que é desse ponto para o final e não precisamos passar o parâmetro do final.

Vamos testar tudo isso para verificar se está funcionando. Para isso, chamaremos o console.log(), o primeiro com sala1 e o segundo console, copiamos e colamos, mostrando o sala2.

dividir-array.js

```JavaScript
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log(sala1);
console.log(sala2);
```

Voltaremos no terminal, pediremos para o Node executar o arquivo dividir-array:

> node dividir-array.js

No terminal, obtemos dois arrays:

```JavaScript
[
'João',
'Ana',
'Juliana',
'Caio',
'Lara',
'Marjorie',
'Guilherme',
'Aline',
'Fabiana',
'André'
]
[
'Carlos',
'Paulo',
'Bia',
'Vivian',
'Isabela',
'Renan',
'Daisy',
'Vinícius',
'Renata',
'Camilo'
```

O primeiro começando em João, que é o primeiro índice do array, e indo até André, que é a metade. Não vamos contar, mas é a metade do array, é um array de 20 elementos, então, teremos 10 em cada um. O segundo array começa em Carlos e vai até Camilo.

Porém, há dois detalhes que gostaríamos de destacar. Se passamos o final, listaEstudantes.length/2, e passamos o começo da outra lista também, .length/2, não teria que ter um valor repetido, que é o valor do meio?

Isso ocorre porque, quando temos um parâmetro de fim, o elemento exato do fim do array não é incluído. No entanto, quando passamos apenas o começo, o índice do começo é incluído.

O índice 10, que é a metade do nosso array, não foi incluído na primeira listagem, paramos no índice 9. Ou seja, isso está inclusive na documentação, que quando criamos um sub-array entre as posições início e fim, o fim não é incluído.

Então, passamos o índice 10 para incluir até o índice 9, do índice 0 ao índice 9. Ao contrário do parâmetro de início, que é a partir do início, então a lista seguinte começa no índice 10. Assim, temos uma lista terminando no índice 9 e outra lista começando no índice 10.

Outro ponto importante, mencionamos anteriormente que alguns métodos de array alteram o próprio array e outros geram um novo array que precisamos, por exemplo, salvar uma variável. Por isso, que salvamos nossos resultados em sala1 com parte do array e sala2 com o restante do array.

Deixaremos o link da documentação, pratique bastante com os exemplos e continuaremos com nossos desafios!

### Aula 2 - Alterando com splice() - Vídeo 2

Transcrição  
Seguindo com nossos desafios, agora temos que atualizar uma lista.

Desafio: atualizando listas  
> 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'

Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Atualize a lista.

Teremos uma lista de chamadas com seis estudantes. No entanto, Ana e Caio, que são duas pessoas estudantes, mudaram de escola e Rodrigo entrou nessa sala no lugar delas. Ou seja, agora temos que manipular uma lista, um array.

Vamos ao Visual Studio Code criar um novo arquivo que chamaremos de atualizar-lista.js. Para isso, clicamos no primeiro ícone do lado superior esquerdo. Criaremos nossa constante listaEstudantes, com os nomes: João, Ana, Caio, Lara, Marjorie e Léo.

atualizar-lista.js

> const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

Temos duas alterações a fazer: retirar itens desse array e adicionar itens nesse array.

Excluindo Ana e Caio da lista
O JavaScript possui um método para fazer esse tipo de alteração: splice().

Array.prototype.splice()

Da mesma forma que conversamos sobre parâmetros de função quando trabalhamos com slice(), o método splice() também vai poder receber uma quantidade de parâmetros. Portanto, índice, se algum elemento será excluído, se algum elemento será adicionado, precisamos passar esses parâmetros em ordem para tudo funcionar.

No caso, escrevemos listaEstudantes.splice(1, 2). O Visual Studio Code já está dando uma dica dos parâmetros que o splice() aceita. O primeiro parâmetro é o start (início), que é um número, e o deleteCount, ou seja, quantos elementos serão excluídos a partir do início.

Os estudantes a serem excluídos são Ana e Caio, localizados nos índices 1 e 2. Estamos transmitindo para o splice o primeiro parâmetro, o ponto inicial do nosso processo. Iniciaremos o processo a partir do índice 1, incluindo. Isso é muito importante, como aprendemos anteriormente: neste caso, incluímos o índice 1.

O segundo parâmetro é a quantidade de itens que serão excluídos: no caso, dois elementos. Portanto, dois elementos excluídos a partir do índice 1 são Ana e Caio, índice 1 e índice 2. Não confunda esse número 2 do listaEstudantes(1, 2). Ele se refere à quantidade de elementos, não a uma posição no array.

Vamos fazer um teste para verificar o que aconteceu.

Digitamos console.log(listaEstudantes). Se estamos pedindo um console.log direto em listaEstudantes, podemos concluir que splice() é um método que altera o próprio array.

atualizar-lista.js

```JavaScript
const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2);

console.log(listaEstudantes);
```

Lembrando dessa diferença quando um método altera o próprio array e quando temos que criar um novo array e salvar em uma variável.

Vamos testar para verificar se está tudo funcionando. No terminal, rodamos:

> node atualizar-lista.js

Obtemos:

> [ 'João', 'Lara', 'Marjorie', 'Leo' ]

A primeira parte do nosso desafio já está resolvida, porque excluiu Ana e Caio. Agora, nossa lista só tem João, Lara, Marjorie e Léo.

Adicionando o Rodrigo à lista  
Agora temos a segunda parte: adicionar Rodrigo, que entrou no lugar de Ana e Caio. Poderíamos utilizar o push, que já usamos anteriormente. Então, poderíamos fazer listaEstudantes.push('Rodrigo').

No entanto, o splice() já junta esses dois métodos. Ele reúne a possibilidade de excluir elementos específicos, não apenas do final, e também adicionar elementos em um lugar específico.

Portanto, comentamos o push() e, voltando ao splice(), temos 1, onde começa a alteração, 2, quantidade de itens a serem removidos, e o terceiro parâmetro que vamos trabalhar, que é o elemento que será incluído nesse local.

atualizar-lista.js

```JavaScript
const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo');
// listaEstudantes.push('Rodrigo');

console.log(listaEstudantes);
```

Se testarmos novamente, agora visualizamos que no lugar de Ana e Caio entrou Rodrigo:

> [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

Observe que o splice, assim como vários métodos de array, tem uma quantidade de opções que podemos usar, de parâmetros, e utilizamos ou não utilizamos esses parâmetros de acordo com a necessidade.

Recomendamos a leitura da documentação, que deixaremos o link, ela está em português, e testar todas as possibilidades do splice().

### Aula 2 - Concatenando arrays - Vídeo 3

Transcrição  
Nosso próximo desafio é unificar salas.

Haverá uma palestra sobre padrões de projetos para as salas de JavaScript e Python

Junte ambas as salas em uma única lista que exiba todas as estudantes.

> Sala JS: 'Evaldo', 'Camis', 'Mari'  
  Sala Python: 'Ju', 'Leo', 'Raquel'

Haverá uma palestra sobre padrões de projeto para salas de JavaScript e Python. Nós precisamos unir ambas as salas em uma única lista que exiba todas as pessoas estudantes.

Neste caso, já criamos um arquivo chamado juntar-salas.js e também criamos dois arrays com as duas salas.

juntar-salas.js

```JavaScript
const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];
```

Temos salaJS com Evaldo, Cubs e Mari no nosso array, três strings, e salaPython com Ju, Léo e Raquel, outro array de strings.

Vamos trabalhar com métodos do JavaScript para resolver os nossos problemas. Nesse caso, podemos usar um método chamado concat. Como seria então?

Criamos uma constante, const salasUnificadas, e nesse caso, vamos concatenar, concat é de concatenar, ou seja, vamos unir duas coisas. Por exemplo, juntar salaJS.concat() e passar como parâmetro do método concat() o que queremos unir com esse array. Então, desejamos unir salaPython.

Podemos testar agora com console.log(salasUnificadas) e verificar se deu tudo certo.

juntar-salas.js

```JavaScript
const salaJS = ['Evaldo', 'Camis', 'Mari'];
const salaPython = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaJS.concat(salaPython);
console.log(salasUnificadas);
```

No terminal, executamos node juntar-salas.js:

> node juntar-salas.js

Obtemos:

> [ 'Evaldo', 'Camis', 'Mari', 'Ju', 'Leo', 'Raquel' ]

Obtemos um array com todas as pessoas, sendo que, primeiro, temos Evaldo, Camis e Mari, que é o array onde solicitamos a concatenação, e, em seguida, os elementos do segundo array, que foi o array que passamos por parâmetro para o concat.

Concatenar é um termo comum em programação, ele é usado em diversos contextos. Aqui, estamos usando, literalmente, para unir coisas.

Vamos passar o [link da documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) sobre o concat. No primeiro parágrafo da documentação, já nos avisa que este método não altera os arrays existentes; mas, em vez disso, retorna um novo array.

Isso reforça a questão de entender qual é o retorno, o que o método vai fazer com o nosso array original, se ele vai alterar ou se precisamos salvar em uma nova variável o resultado do método, como fizemos, salvando em salasUnificadas.

Se quiser testar invertendo, passando salaPython.conca(salaJS), o resultado será o inverso. Primeiro, os elementos da sala de Python e, em seguida, os elementos da sala de JavaScript. Nesse caso, não fez muita diferença.

### Aula 2 - Array de duas dimensões - Vídeo 4

Transcrição  
Para o nosso próximo desafio, precisamos criar uma lista de listas.

Crie uma lista com os seguintes nomes de estudantes:  
> 'João', 'Juliana', 'Caio', 'Ana'

Crie uma lista com as seguintes médias:  
> 10, 8, 7.5, 9

Crie uma lista que contém as duas listas acima.

Teremos uma lista com alguns nomes de estudantes, como João, Juliana, Caio e Ana; e uma lista com as médias desses estudantes, 10, 8, 7.5 e 9. O que precisamos fazer é criar uma lista que contenha dentro dela essas duas listas.

Você pode estar pensando, "agora é só usar o concat()". Na verdade, vai ser um pouco diferente.

No Visual Studio Code, já criamos um arquivo, chamado array-de-arrays, e já criamos os nossos dois arrays, as duas listas com as quais vamos trabalhar. Uma chamada alunos, com os nomes dos estudantes, e outra chamada medias, com as médias de cada pessoa.

array-de-arrays.js

```JavaScript
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
```

Para criar um array e colocar elementos dentro dele, criamos uma nova constante, que chamaremos de lista. Abrimos os colchetes, e dentro desses colchetes, colocamos dois elementos. O primeiro será alunos, e o segundo será medias.

Fazendo isso, estamos criando um array. Abrimos e fechamos colchetes, e dentro deste array, já estamos colocando o valor da variável alunos e o valor da variável medias.

Na prática, isso significa que o valor da variável alunos é um array, logo, ele entra como o primeiro índice. Lembrando que mencionamos anteriormente que podemos colocar um array dentro de um array, da mesma forma que podemos colocar uma string, um número, um objeto, etc.

O Medias também é um array, então, este array inteiro entra como o segundo elemento do array lista que estamos criando neste momento. Para conferir isso, passamos o console.log(lista).

array-de-arrays.js

```JavaScript
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(lista);
```

No terminal, executamos:

> node array-de-arrays.js

Obtemos:

> [['João', 'Juliana', 'Caio', 'Ana' ], [ 10, 8, 7.5, 9 ]]

Agora, o terminal exibe um único array contendo dentro dele dois elementos. No índice zero, todo o array de nomes, e no segundo elemento, todo o array de notas. É muito importante que nos acostumemos a identificar a sintaxe e consigamos observar dentro do array onde os índices começam e terminam, separados por vírgula.

Como acessamos os valores de cada um desses arrays? Suponhamos que desejamos exibir no console a estudante Juliana e a nota dela, que é 8. Lembrando que o array tem posições fixas, então João tem nota 10, Juliana tem nota 8, etc.

Vamos examinar como podemos fazer isso. Dentro do console.log(), criamos, com o template string (modelo de texto), um texto para concatenar algumas informações.

Abriremos dentro do console.log() com crase, passaremos um texto: "A aluna da posição 1 da lista é: ${}", o cifrão e as chaves são para passar um dado variável, e passaremos lista, que é o nosso array de arrays. Como acessamos Juliana e o 8? Primeiro, vamos fazer lista[0][1].

array-de-arrays.js

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(
`a aluna da posição 1 da lista é: ${lista[0][1]}`
);
Copiar código
Vamos testar para ver se está tudo certo. Obtemos:

a aluna da posição 1 da lista é: Juliana

E se quiséssemos, além disso, pegar também a nota da Juliana? Dentro do template string, quebramos a linha. Quando utilizamos template string, conseguimos dar "enter" e quebrar linhas, o que não conseguimos quando utilizamos aspas em strings.

Adicionamos mais um texto, "A nota dessa estudante é:", e como pegamos a nota, então? Para capturar a nota, usamos cifrão e chaves, chamaremos nossa variável lista; e passaremos lista[1][1].

array-de-arrays.js

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(
`a aluna da posição 1 da lista é: ${lista[0][1]}.
a nota dessa aluna é ${lista[1][1]}`
);
Copiar código
Vamos testar e entender o que fizemos. Rodamos novamente o comando node array-de-arrays.js no terminal.

Obtemos como retorno:

a aluna da posição 1 da lista é: Juliana.

a nota dessa aluna é 8

Tudo está funcionando, mas o que está acontecendo aqui? O que são essas sequências de colchetes que inserimos no código? Desejamos pegar, primeiro, o nome da Juliana. O nome da Juliana está dentro da lista alunos.

Se observarmos o array inteiro, ele tem dois elementos. Se são strings, se são números, se são arrays, não importa, o que importa é que um array está na posição 0 e um array está na posição 1.

O array alunos está na posição 0. Então, para o JavaScript acessar esse elemento, é como fizemos anteriormente, acessamos a lista na posição 0. Só que agora desejamos acessar um índice que está dentro do array de alunos.

E podemos passar para o JavaScript: entre no array de posição 0 e dentro dele acesse um elemento específico. Portanto, dentro do array de alunos, que está na posição 0, acessamos o elemento que está na posição 1, Juliana.

Se pedíssemos lista apenas na posição 0 através do console.log()? Vamos colocar isso no código e testar.

array-de-arrays.js

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(
`a aluna da posição 1 da lista é: ${lista[0][1]}.
a nota dessa aluna é ${lista[1][1]}`
);

console.log(lista[0]);
Copiar código
Temos como retorno o array completo conforme estávamos trabalhando anteriormente, mas com números e strings. Mas é a mesma lógica: um array inteiro está no índice 0 e outro no índice 1.

[ 'João', 'Juliana', 'Caio', 'Ana' ]

Para que usamos arrays de arrays em programas? Por exemplo, para fazer operações matemáticas que envolvem matrizes, para também organizar dados de forma lógica em linhas e colunas, podemos acessar a posição 0 na linha 1, posição 2 na linha 4.

Você pode também fazer esses testes com outros arrays de arrays, e também para representar grids (grades), por exemplo, se quiser fazer um jogo da velha, consegue representar grids usando arrays de arrays.

Conseguimos fazer um array de arrays e acessar os dados dentro deles, vamos continuar então com os nossos desafios.

### Aula 2 - Para saber mais: matrizes

Durante a aula vimos as listas com duas dimensões, ou seja, arrays que contêm arrays, podendo ter um único array ou vários dentro do principal. Como no exemplo a seguir:

```JavaScript
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
 
const funcionarios = [nomes, idades, faculdade];
```

O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado, podendo ser:

0 -> nomes
1 -> idades
2 -> faculdade
O segundo colchete será usado para acessar a informação dentro do array escolhido.

Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, em que cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

Uma outra forma comum de trabalharmos com várias informações semelhantes é utilizando objetos.

As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos a ter problemas para fazer a manutenção do código.

### Aula 2 - Faça como eu fiz: concatenando arrays e dados

Durante a aula usamos o método concat() para unir (concatenar) arrays gerando um novo array com o resultado da concatenação. Neste caso, o método funcionou da seguinte forma:

> array1.concat(array2)

Logo, o método foi utilizado com um array (no caso acima, array1) e recebeu como parâmetro outro array (array2). O resultado foi um novo array com todos os elementos de array1 e array2; isso acontece pois, quando o concat() recebe um array como parâmetro, apenas os elementos dentro dele que são concatenados, e não o array em si.

E se tentarmos usar esse método passando como parâmetro outro tipo de dado, que não seja array? Tente fazer isso a partir do que você aprendeu ao longo da aula.

Boa prática!

Ver opinião do instrutor

Abra um arquivo index.js em seu computador e execute o seguinte código:

```JavaScript
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")
 
console.log(arrayConcat)
console.log(arrayOriginal)
```

O resultado deve ser:

```JavaScript
[ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]
[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]
```

Com o exemplo acima, vemos que o JavaScript concatena o array principal e as strings de texto passadas como parâmetro para criar outro array, mantendo o original sem alterações.

Vamos fazer um novo teste, mas passando mais de um array como parâmetro.

```JavaScript
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])
 
console.log(arrayConcat)
console.log(arrayOriginal)
```

O resultado é:

```JavaScript
[ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda', 'Ricardo', 'Ana', 'Marcelo', 'Bia' ]
[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]
```

Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método no caso, arrayOriginal.

Como um último teste, vamos ver o que acontece se um dos parâmetros for um array com dois elementos, um número e um array:

```JavaScript
const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])
 
console.log(arrayConcat)
console.log(arrayOriginal)
```

O resultado no terminal agora é:

```JavaScript
[ 50, 60, 70, 80, [ 90, 100 ] ]
[ 50, 60, 70 ]
```

Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

### Aula 2 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

- Documentação do MDN: [array.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice);
- Documentação do MDN: [array.splice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice);
- Documentação do MDN: [array.concat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

### Aula 2 - Desafio: exercícios

Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!

Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

1. Crie uma função que receba dois arrays e os concatene em um único array.

2. Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

3. Dado o array frutas contendo frutas que desejamos comprar na feira:

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

4. Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

5. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

Dicas:

comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
você pode resolver usando um for dentro de outro for.
6. Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

7. Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião”.

Opinião do instrutor

Disponibilizamos uma possível resolução dos desafios [neste link](https://github.com/alura-cursos/3530-js-arrays/tree/exercicios-aula2) para você construir ou validar suas soluções.

### Aula 2 - O que aprendemos?

Nessa aula, você aprendeu como:

- Separar um array em partes com slice():
  - Utilizamos para obter dois novos arrays a partir de um.
- Remover e incluir novos elementos em um array com splice():
  - Esse método permite remover elementos de qualquer posição do array. Além disso, podemos incluir um novo elemento no local dos removidos.
- Concatenar elementos em um único array com concat():
  - Utilizamos essa estratégia pois é uma forma facilitada de juntar dois arrays.
- Trabalhar com arrays de duas dimensões:
  - Vimos que uma lista também pode guardar outras listas! Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com funcionarios`[0][2]`.

## Aula 3 - Laços de Repetição

### Aula 3 - Procurando na lista - Vídeo 1

Transcrição  
Para o nosso próximo desafio, vamos procurar itens em uma lista. Este desafio será um pouco mais complexo, então vamos ver os pontos dele por partes.

A primeira coisa que temos que fazer é criar uma função que recebe como argumento o nome de um estudante. A função deve ser criada de uma forma que consiga receber qualquer nome de estudante e responder de acordo.

Esta função terá que verificar se a pessoa estudante recebida como argumento faz parte ou não de uma lista de estudantes, que vamos prover.

Se fizer, deve retornar a média correspondente do estudante, que vamos obter na lista de médias. Estamos trabalhando com a lista de estudantes e com a lista de médias que utilizamos anteriormente.

Caso o nome não esteja na lista, temos que retornar uma mensagem indicando que a pessoa estudante não foi encontrada.

Implementando o código  
No VSC, deixamos pronto um arquivo chamado procurar-em-lista.js e do arquivo anterior, *array*-de-*array*s.js, copiamos o array de estudantes, o array de médias e a lista, onde transformamos tudo isso em um array de duas dimensões, uma lista de listas.

Primeiramente, temos que criar a função que vai receber um nome. Para isso, usamos a palavra-chave function. Vamos chamar essa função de exibeNomeENota. E, entre parênteses, passamos o parâmetro aluno, que é o que a função está esperando receber.

As duas coisas que precisamos fazer são:

verificar se a pessoa estudante faz parte da lista;  
se fizer parte da lista, recuperar a média dela.  
Estamos trabalhando com coisas hipotéticas, então podemos prever que precisamos de uma condicional, por exemplo, de um if.

A primeira coisa que a função vai fazer é verificar se a pessoa estudante consta na lista. Para isso, podemos utilizar mais um método do JavaScript, o método .includes(). Este método verifica se determinado dado, informação, string, um array, um número, está contido dentro daquele array.

Implementamos escrevendo: if(lista.includes()), e dentro do parâmetro de includes() passamos o que será recebido dentro da função, ou seja, o nome do estudante (aluno).

No entanto, temos um problema: lista é um array de arrays, e queremos procurar dentro da lista, dentro do array de estudantes. O que podemos fazer é pedir para o includes() fazer essa busca dentro de lista na posição 0, ou seja, lista[0].includes(aluno), e aí vai procurar uma string que contenha o nome de alguém que está nessa lista.

Então, se essa condição retornar true, ou seja, se o nome da pessoa estudante estiver no nosso array de estudantes, temos que pedir para algo acontecer. Esse é o segundo requisito do nosso desafio: buscar a média do estudante correspondente na lista de médias.

A partir daí, passamos para a segunda lista do nosso array de arrays. E como podemos fazer para retornar posições correspondentes? Reforçando a informação, o array é uma lista de posição fixa. Então, se, por exemplo, a Juliana está na posição 1 do array de nomes, a nota da Juliana está na posição 1 do array de notas e eles não saem dessa posição.

Agora, temos que resgatar o número correspondente ao índice onde a Juliana está posicionada, por exemplo. Então, se a Juliana está posicionada como 1 no array, precisamos encontrar uma forma de obter essa informação do código e disponibilizá-la para conseguirmos utilizá-la em médias.

Vamos criar uma const chamada de índice, e passar lista[0].indexOf(aluno). O que o indexOf vai fazer para nós? Ele vai retornar o índice da primeira ocorrência do valor fornecido. Isso está na documentação.

Agora que sabemos que existe esse estudante na nossa lista (se ele não existisse, não precisaríamos achar o número do indíce dele), usamos o método indexOf para que o JavaScript procure a posição dessa string e retorne para nós o número indicado.

Então, se buscarmos por 'Juliana', esperamos que o indexOf retorne 1. Se buscarmos 'João', esperamos que ele retorne 0. Estamos pegando essa informação e guardando dentro da variável indice.

Agora podemos trazer a média. Vamos criar uma nova const, que chamaremos de mediaAluno, e passar lista[1]. Entramos em lista[1], que vai acessar nossa lista de médias. E lembrando como fazemos para acessar um dado que está em um array e dentro de um array: passamos no primeiro colchete, de fora para dentro, 1 para acessar nossa lista de médias, e em segundo lugar passamos o valor da variável indice, que vai retornar onde no array de médias está o índice que precisamos.

A partir daí podemos criar uma mensagem para exibir no console como sempre. Então, console.log(), no caso do if, que é o caso de sucesso, passamos uma template string, abrimos cifrão e chaves, dizemos que aluno tem a média, e abrimos de novo cifrão e chaves, mediaAluno.

Agora só precisamos fazer o else, que é no caso de não encontrar nada. Então, no caso do else, passamos um console.log com 'Estudante não existe na lista'. Por quê? Porque uma vez que o includes não encontra nenhum estudante, ele não entra no if, ele vai direto para o else, e aí está resolvido.

Vamos testar? Vamos chamar essa função com um nome existente. Então, embaixo de tudo, executamos a função exibeNomeNota, passando como valor do parâmetro, 'Juliana'. Então, tem que passar em string com J maiúsculo, exatamente como está no array.

```JavaScript
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log('${aluno} tem a média ${mediaAluno}');
        } else {
        console.log('Estudante não existe na lista');
        }
    }
    
exibeNomeENota('Juliana');
exibeNomeENota('Vini');
```

Vamos testar também o caso de fracasso, quando passamos um nome que não existe. Vamos passar aqui Vini, por exemplo. Abrimos o terminal e executamos node procurar-em-lista.js. Então, "Juliana tem a média 8", está certo, e "Estudante não existe na lista" no caso do Vini.

Deixaremos, como sempre, os links da documentação para você observar os outros exemplos, porém, queremos que você note um detalhe muito importante.

Lembrando que, no nosso curso anterior, reforçamos bastante que o if sempre avalia a condição e retorna true ou false. E no caso de lista.includes(aluno), por que colocamos ele dentro do if? É questão de sempre consultar a documentação e ver o que um método ou uma função retorna.

Na documentação do includes, ela vai dizer que esse método sempre retorna true ou false. Ou seja, alguns métodos não retornam nada, outros métodos retornam um outro array, outros métodos podem retornar true ou false, que é o caso do includes, e é por isso que colocamos ele na condição do if.

Pratique bastante e vamos continuar com nossos próximos desafios.

### Aula 3 - Desestruturando uma lista - Vídeo 2

Transcrição  
Antes de continuarmos, gostaríamos de revisitar o código que acabamos de desenvolver, para mostrar algumas ferramentas úteis do JavaScript. Essas ferramentas são particularmente úteis quando trabalhamos com arrays dentro de arrays, e precisamos acessar e buscar elementos. Portanto, copiamos todo o conteúdo do arquivo procurar-em-lista que utilizamos.

Dentro de if (lista[0].includes(aluno)), por enquanto, nada muda. No entanto, quando entramos no if, começamos a ter que acessar itens dentro da lista. Então, temos que passar que é lista no índice 0, lista no índice 1 etc. Vamos fazer uma pequena modificação.

Dentro do if, logo na primeira linha, vamos acrescentar uma constante, e será const[] e dentro desses colchetes passaremos alunos, medias. Então, fora do colchete, isso será igual a lista. Aqui temos uma sintaxe nova, algo que ainda não vimos.

```JavaScript
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
```

Estamos utilizando uma ferramenta do JavaScript que chamamos de destructuring (desestruturação).

**Desestruturação em JavaScript**  
O que faz a desestruturação? Lembrando que sempre que temos o operador de atribuição, ou seja, igual, sempre olhamos para a direita primeiro e depois para a esquerda. O que o JavaScript vai fazer? Ele vai pegar a lista, que é nosso array de arrays, e vai desestruturar o conteúdo dessa lista. Qual é o conteúdo dessa lista? Dois arrays, um de alunos e um de medias.

Fazendo isso, o JavaScript vai jogar cada um desses conteúdos desestruturados em uma nova variável, que estamos chamando nesse momento de alunos e medias, e isso será feito por ordem. Então, o primeiro elemento do array de listas será desestruturado dentro de uma variável alunos, e o segundo dentro de uma variável medias.

A partir daqui, não precisamos mais, por exemplo, utilizar lista[0].indexOf para buscar um índice dentro da lista de alunos, podemos passar simplesmente alunos.indexOf. E na constante mediaAluno, a mesma coisa: não precisamos mais de lista no índice 1, podemos passar somente medias na posição que estamos chamando de indice, ou seja, medias[indice]. Lembrando que a variável indice guarda um número referente ao índice onde está o aluno que estamos buscando.

O restante permanece igual, agora podemos testar para ver se está tudo funcionando. Então, para testar, invocamos a função, chamamos a função exibeNomeENota, novamente podemos fazer primeiro uma invocação com um nome que consta na nossa lista, em seguida com um nome que não conste na lista.

Então, o primeiro passou exibeNomeENota com a string 'Juliana', e agora estamos chamando novamente a função com, por exemplo, 'Mari', que não consta da nossa lista de alunos.

Salvamos o arquivo, voltando no terminal, node desestruturar.js, receberemos as mensagens Juliana tem a média 8 e Estudante não existe na lista, tudo continua funcionando.

A desestruturação é uma ferramenta muito útil, usamos bastante, vamos deixar material extra com mais exemplos. E agora sim, nos vemos no próximo desafio.

### Aula 3 - Para saber mais: desestruturação

Você aprendeu como utilizar o recurso de desestruturação (ou destructuring, em inglês) do JavaScript em arrays, que também pode ser utilizado em objetos (uma estrutura de dados que você ainda vai conhecer).

Você pode conferir [“Destructuring em JS”](https://cursos.alura.com.br/extra/alura-mais/destructuring-em-js-c308), um Alura+ para se aprofundar nas formas de utilizar esse recurso.

### Aula 3 - Para saber mais: diferença entre i++ e ++i

i++ e ++i são ambos operadores de incremento usados para aumentar o valor de uma variável i em 1. No entanto, a diferença entre eles está na forma como o aumento é aplicado e quando o valor é retornado.

i++  
O operador i++ é conhecido como pós-incremento. Ele primeiro retorna o valor atual de i e depois incrementa i em 1 unidade. Ou seja, o valor atual de i é usado na expressão em que i++ está presente, e após isso, i é aumentado em 1.

Exemplo:

```JavaScript
let i = 5;
console.log(i++); // Saída: 5 (retorna o valor atual de i)
console.log(i);   // Saída: 6 (i foi incrementado após a execução)
```

++i  
O operador ++i é conhecido como pré-incremento. Ele primeiro incrementa i em 1 unidade e depois retorna o novo valor de i. Ou seja, o valor de i é incrementado imediatamente, e então o valor atualizado é usado na expressão em que ++i está presente.

Exemplo:

```JavaScript
let j = 8;
console.log(++j); // Saída: 9 (j foi incrementado antes de ser usado)
console.log(j);   // Saída: 9 (j já foi incrementado)
```

Portanto, a principal diferença entre i++ e ++i é o momento em que ocorre o incremento: i++ retorna o valor atual de i e depois incrementa, enquanto ++i incrementa i primeiro e depois retorna o novo valor. Escolher entre eles depende do contexto em que são usados e da necessidade de uso imediato do valor atualizado da variável.

Importante: para estes exemplos usamos os nomes de variáveis padrão i e j, porém o princípio é o mesmo para qualquer nome de variável que você use, por exemplo minhaVar++ ou ++incremento.

### Aula 3 - Para saber mais: o loop infinito

Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de execução do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, ficando “preso” e entrando em loop infinito.

O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

Abaixo temos um exemplo de for que imprime no terminal números de 0 a 10:

```JavaScript
for (let indice = 0; indice <= 10; indice++) {
  console.log(indice);
}
```

O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna false e isso encerra o loop.

O loop infinito pode acontecer caso alguma das expressões seja passada de forma incorreta ou esteja faltando. Por exemplo a terceira, responsável por alterar indice após o bloco de código dentro do for ter sido executado:

```JavaScript
// não execute este código! 
for (let indice = 0; indice <= 10; ) {
  console.log(indice);
}
```

A mesma coisa acontecerá se o for for executado sem a segunda expressão, que é a condição de execução.

```JavaScript
// não execute este código!
for (let indice = 0; ; indice++) {
  console.log(indice);
}
```

Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática:

```JavaScript
// não execute este código!
for (let indice = 0; indice < 10; indice++) {
  indice--;
  console.log(indice);
}
```

IMPORTANTE: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”.

### Aula 3 - Média com for - Vídeo 3

Transcrição  
Antes de continuarmos explorando outras formas de implementar laços de repetição com JavaScript, vamos praticar novamente o for para reforçar nosso conhecimento. Agora, vamos calcular médias usando for, em vez de somar índice por índice de um array.

Nosso próximo desafio é calcular a média entre as seguintes notas: 10, 6.5, 8, 7.5. Para isso, usaremos for. Já criamos um arquivo no Visual Studio Code, nomeado media-for.js, e nele definimos um array contendo essas quatro notas.

> const notas = [10, 6.5, 8, 7.5];

Primeiro, vamos criar uma variável com let para armazenar a soma dessas notas. Definiremos let somaDasNotas, iniciando em zero, pois ainda não temos nenhuma nota para guardar.

Agora, podemos criar o for para percorrer a nossa lista. Lembrando das três expressões que compõem um laço for, vamos iniciar com a criação de uma variável i, cujo valor inicial será zero.

A condição de execução será enquanto i for menor do que o tamanho do array. Portanto, enquanto i for menor do que notas.length, e a terceira condição é o incremento, i++, que fará com que o JavaScript avance de índice em índice no array.

Dentro do for, a primeira coisa a fazer é somar todas as notas. Para isso, vamos utilizar somaDasNotas += notas[i];. O operador += incrementará o valor de somaDasNotas com o valor de notas[i].

É importante lembrar que, ao trabalhar com laços de repetição, a execução do código fica presa no laço até que ele seja finalizado. Uma falha nesse processo pode gerar um looping infinito.

Após o for, podemos criar uma constante media, que será o resultado de somaDasNotas dividido por notas.length. Esta operação nos dará a média das quatro notas, que é o valor total delas dividido pela quantidade de notas.

Finalmente, com um console.log('a média das notas é ${media}'), exibiremos a média calculada. Para testar, executaremos node media-for.js no terminal. O terminal exibe a média das notas é 8.

```JavaScript
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}
const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);
```

Vamos deixar para você o link da documentação do for no MDN, com mais exemplos e possibilidades de execução.

Agora, é hora de passarmos para outras formas de se fazer laço de repetição com array. No entanto, continue praticando com for, pois ele é muito importante. Vamos lá!

### Aula 3 - Faça como eu fiz: loops em matrizes

Vimos como usar os loops para percorrer um array utilizando ofor:

```JavaScript
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}.`);
```

Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Tente executar isso no código para praticar o que aprendeu ao longo da aula.

Opinião do instrutor

Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.

```JavaScript
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]
 
let media = 0
```

Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.

```JavaScript
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
```

Vamos entender um pouco melhor as partes que compõem esse código.

No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.

O segundo for tem uma nova variável, a let j (não podemos usar uma nova let i porque ela já está definida), e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.

Então ficamos com o seguinte código:

```JavaScript
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
const notasGerais = [notas1,notas2,notas3]
let media = 0
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
console.log(media)
```

No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10? O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 e dividir pela quantidade de arrays em notasGerais.

```JavaScript
const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
const notasGerais = [notas1,notas2,notas3]
let media = 0
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
media = media/notasGerais.length
console.log(media)
```

Com isso usamos o for para passar por todos os elementos da matriz, e nesse caso, calcular a média dos valores deles.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

### Aula 3 - Média com for...of - Vídeo 4

Transcrição  
Nosso próximo desafio é continuar calculando médias, utilizando uma outra ferramenta do JavaScript, o "for… of". Os valores são os mesmos. Já criamos no Visual Studio Code um arquivo novo chamado for-of.js.

Nesse arquivo, declaramos a constante notas, com quatro valores: 10, 6.5, 8, 7.5. Também criamos a variável somaDasNotas para armazenar o resultado final dessa soma.

Vamos então analisar a sintaxe do "for… of". Ela é similar à do for clássico, mas com a diferença de que não temos mais o controle exigido no for clássico com as três expressões.

Para exemplificar, vamos abrir o arquivo for-classico.js. Com o for clássico, tínhamos a opção de refinar como queríamos que o nosso looping acontecesse.

Podíamos, por exemplo, iniciar o looping a partir do primeiro índice, do índice 0, ou iniciar a partir de qualquer outro índice desejado. Também podíamos controlar o incremento, querendo pular de 2 em 2, ou acessar apenas os elementos que estão em índice par etc.

No "for… of", a sintaxe é mais simples, pois ele responde a casos em que queremos simplesmente percorrer do primeiro índice do array até o último.

Criamos uma variável nota que vai armazenar os valores. Agora, não estamos mais guardando o número de índice, estamos armazenando o elemento. Assim, a variável nota vai conter os valores 10, 6.5, 8, 7.5 a cada iteração.

A sintaxe é let nota of notas, sendo notas o nome do nosso array. O nome que escolhemos para a variável let, let nota of notas, é para facilitar a leitura.

Por exemplo, let compra of listaDeCompras vai guardar cada um dos itens. Apenas associamos o nome da variável a algo que faça sentido, mas poderia também ser let i se preferíssemos, para simplificar a leitura.

E como a variável nota agora guarda o elemento, não guarda mais o índice, só precisamos resgatar o valor dessa variável a cada uma das iterações e incrementar a variável somaDasNotas com o operador +=, como fizemos anteriormente.

```JavaScript
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
for (let nota of notas) {
    somaDasNotas += nota;
}
const media = somaDasNotas / notas.length;
console.log("a média das notas é ${media}");
```

Vamos deixar no material extra a documentação do "for… of" com mais exemplos. Pratiquem bastante, pois o for é indispensável no dia a dia de programação e também para resolver exercícios de algoritmos. Vamos continuar trabalhando com laços de repetição em JavaScript.

### Aula 3 - Quando usar for ou for...of

Caroline está praticando com os laços de repetição que aprendemos durante a aula. Para isso, ela criou dois laços diferentes, um usando o for e um usando o for…of, para calcular um desconto de 10% sobre uma lista de preços:

```JavaScript
const precos = [5.5, 6.2, 14, 19.5];
let desconto = 0.90;
for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}
console.log(precos);
```

```JavaScript
const precos = [5.5, 6.2, 14, 19.5];
let desconto = 0.90;

for (let preco of precos) {
 preco = preco * desconto;
}

console.log(precos);
```

Ao executar os códigos, Caroline percebeu que o laço feito com for retorna um array atualizado com os descontos:

> [ 4.95, 5.58, 12.6, 17.55 ]

Porém o laço feito com for…of, apesar de não acusar erro, não atualizou o array com os descontos:

> [ 5.5, 6.2, 14, 19.5 ]

Baseado no que sabemos sobre a sintaxe do for, o funcionamento da variável de controle let i = 0 e o funcionamento da variável let preco, selecione as alternativas que descrevem corretamente o comportamento do código:

Resposta:  

A variável let i = 0 usada no for guarda somente um valor numérico, que associamos aos índices do array.

A variável que por padrão chamamos de i não está necessariamente ligada ao array; ela serve somente para guardar um valor numérico que inicia em 0. A manipulação do array se dá quando associamos o array ao número que está armazenado na variável i, compondo, por exemplo, precos[0] para acessar o primeiro elemento de precos.

Alternativa correta  
A variável let preco armazena o valor de um elemento do array e é alterada a cada iteração (loop) no array para armazenar o valor correspondente no momento da iteração.

A variável recebe o valor de um dos elementos do array por vez, a cada passo da iteração, e é por onde podemos acessar estes valores dentro do bloco {}.

Alternativa correta  
Ao alterarmos a variável let preco, não estamos alterando nenhum dos elementos originais do array precos.

A variável let preco apenas armazena o valor equivalente ao elemento atual do array. Qualquer alteração será feita apenas na variável e não será refletida no elemento correspondente.

Alternativa correta  
O código precos[i] = (precos[i] * desconto) está alterando o valor de cada um dos elementos do array precos no índice correspondente ao valor de i.

O código está evocando diretamente o array precos, e a variável de controle i indica qual o índice que será alterado: precos[0], precos[1] etc.

### Aula 3 - Para saber mais: possibilidades do for

A estrutura for tem uma sintaxe mais complexa que o for of, com mais expressões, mas por causa disso fornece um maior leque de possibilidades de acordo com a nossa necessidade.

Por exemplo, podemos percorrer um array do fim ao início:

```JavaScript
const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}
```

Declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length - 1); realizamos um decremento (i--) ao invés de um operador de incremento e a condição de execução é i >= 0. Ou seja, nesse caso, a variável i começará do valor 5 e irá até 0.

Ao executar o código, no terminal aparecerá:

```JavaScript
600
500
400
300
200
100
```

Outra possibilidade é alterar a quantidade incrementada ou decrementada, utilizando o mesmo código acima, mas alterando o decremento para i -= 2. Então, teremos o seguinte:

```JavaScript
const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}
```

O valor de i será diminuído de 2 em 2 a cada iteração (lembrando que a expressão i -= 2 equivale a i = i - 2). Assim, os valores de i serão 5, 3 e 1, e no terminal aparecerá:

```JavaScript
600
400
200
```

Também temos controle sobre a condição de execução, então se alterarmos esse último código para ter a condição numeros[i] > 300, teremos o seguinte:

```JavaScript
const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}
```

E no terminal aparecerá:

```JavaScript
600
400
```

Por fim, até agora utilizamos a estrutura for apenas para percorrer arrays, mas ela pode ser utilizada para repetir qualquer instrução conforme a necessidade. Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 100:

```JavaScript
const numerosPares = [];
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
console.log(numerosPares);
```

No terminal aparecerá:

```JavaScript
[
   0,  2,  4,  6,  8, 10,  12, 14, 16, 18, 20,
  22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,
  44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,
  66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,
  88, 90, 92, 94, 96, 98, 100
]
```

Na maioria dos casos, você não precisará realizar repetições mais complexas como essas, mas nunca se sabe, certo? Por isso, conhecer os recursos de uma linguagem e suas possibilidades pode ser uma “mão na roda” no futuro.

Como vimos, em casos onde queremos apenas percorrer todos os elementos de um array sem pular nenhum, começando do início ao fim do array, o for of fornece uma sintaxe mais sucinta que o for.

### Aula 3 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

Documentação do MDN: [array.includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes);
Documentação do MDN: [array.indexOf()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf);
Documentação do MDN: [for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for);
Documentação do MDN: [for…of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of).

### Aula 3 - Desafio: exercícios

Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!

Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião”.

Opinião do instrutor

Disponibilizamos uma possível resolução dos desafios [neste link](https://github.com/alura-cursos/3530-js-arrays/tree/exercicios-aula3) para você construir ou validar suas soluções.

### Aula 3 - O que aprendemos?

Nessa aula, você aprendeu como:

- Utilizar os métodos includes() e indexOf():
  - O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.

- Desestruturar um array:
  - Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite “desmontar” um array e atribuir seus valores a variáveis diferentes.

- Utilizar a estrutura for e entender seu funcionamento:
  - O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado e em quais elementos do array.

- Utilizar a estrutura for of e entender a diferença em relação ao for:
  - O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.

## Aula 4 - Funções CallBack

### Aula 4 - Média com forEach - Vídeo 1

Transcrição  
Os laços de repetição são de grande importância, pois durante a rotina, trabalhamos bastante com arrays, tanto percorrendo por eles quanto buscando dados.

O JavaScript possui diversos tipos de laços de repetição que estão prontos para executar tarefas específicas, pois o for clássico é muito geral e necessita de muitos ajustes finos, o que muitas vezes não é necessário.

Esses laços possuem uma sintaxe específica. A partir de agora, começaremos a ver alguns desses laços e o seu uso. O nosso desafio neste vídeo é calcular a média novamente, mas agora utilizaremos um desses laços específicos chamado forEach(), cuja tradução literal seria "para cada". Novamente, calcularemos a média do array de médias que estamos trabalhando.

**Explorando o método forEach()**  
No VS Code, criamos um arquivo chamado forEach().js. Nele, colocamos a constante notas com os mesmos valores 10, 6.5, 8, 7.5 e criamos uma variável somaDasNotas para obter essa soma, como temos feito anteriormente.

```JavaScript
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
```

O forEach(), assim como alguns outros métodos que veremos a partir de agora, tem uma sintaxe um pouco diferente do for e mais específica. Passaremos para o JavaScript qual é o array que trabalharemos, no caso, notas.forEach()(), pois é um método de array. Nos parênteses, ao invés de um parâmetro, como uma string ou um número, passaremos uma outra função. Escrevemos function () e passamos como parâmetro nota.

Depois, abrimos e fechamos o bloco com chaves. Dentro, faremos mesmo que anteriormente, escrevemos somaDasNotas += nota. Na linha abaixo, podemos deixar pronto um console.log() passando a média das notas é ${media}. Também não podemos esquecer de criar a variável media. Na linha 9, escrevemos const media igual à somaDasNotas / notas.length.

```JavaScript
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
notas.forEach()(function (nota) {
    somaDasNotas += nota;
})
const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);
```

Vamos testar. No terminal, passamos o comando node forEach().js seguido de "Enter".

> node forEach().js

Temos o seguinte retorno:

> a média das notas é 8

Está tudo funcionando. Agora, vamos nos aprofundar no método forEach().

O forEach()(), assim como outros métodos, é o que chamamos de callback, ou seja, o parâmetro do forEach() é uma função que é chamada de volta quando executamos a função forEach(). Damos o nome de callback a essas funções que chamam outras funções dentro dela.

Temos que prestar bastante atenção na sintaxe porque existe uma função inteira sendo declarada dentro do forEach(), e essa função é executada para cada elemento dentro do array. Não precisamos especificar nenhuma variável externa para guardar cada um desses elementos e nem dizer onde começa e onde termina o array, porque o forEach() fará automaticamente desde o primeiro elemento até o último.

É importante notar o parâmetro nota que colocamos na função callback. Esse parâmetro é responsável por guardar o dado em cada uma das iterações. Então, na primeira iteração, o parâmetro nota guarda o elemento 10, na segunda guarda 6.5, na terceira 8 e assim por diante.

É dessa forma que conseguimos acessar cada elemento e realizar a operação que queremos fazer. Nesse caso, queremos simplesmente pegar o valor e somar com o valor anterior que já estava em somaDasNotas.

Para entendermos melhor como funciona essa função dentro da função, comentaremos o notas.forEach(), da linha 5 até a 7, e fazer de uma forma um pouco diferente.

Separaremos a função de dentro da função de fora. Primeiro, na linha 9, passamos o notas.forEach() e, ao invés de escrever a função inteira no parâmetro, vamos referenciar uma função que chamaremos de somaNotas.

A função somaNotas ainda não existe, criaremos ela agora. Criamos ela na linha 11 com function somaNotas, e essa função somaNotas() precisa receber um parâmetro que é cada nota que será somada, entçao nota. Abrimos o bloco de chaves e dentro passamos a instrução que estávamos usando anteriormente, que é somaDasNotas += nota.

```JavaScript
//Código omitido
notas.forEach(somaNotas);
function somaNotas (nota) {
    somaDasNotas += nota;
}
const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);
```

Agora, para testarmos e vermos se está funcionando, voltamos ao terminal e passamos node forEach().js. Como retorno temos:

a média das notas é 8

Tudo continua funcionando. Porém, dessa vez, separamos a função callback, que é o somaNotas do forEach(). Você pode estar se perguntando, mas como que fazemos para passar o parâmetro nota, para dentro do forEach()? Porque no método, a função somaDasNotas está sendo apenas referenciada, não estamos executando somaDasNotas() com parênteses, colocando qualquer parâmetro.

Só precisamos referenciar, porque o manejo do parâmetro, ou seja, de cada um dos elementos em cada passo desse loop, está sendo feito internamente pelo forEach(). Então, o forEach() pegará automaticamente cada um dos elementos e passar para dentro da função notas, como sendo o parâmetro nota.

Por último, mas não menos importante, vamos conferir na documentação qual é o retorno do método forEach(). Segundo a documentação do MDN, o valor retornado é undefined.

Isso significa que esse método forEach() executa o código que está dentro do bloco, mas não retorna nada. Então, conseguimos executar o que queremos, mas não conseguimos retornar nada que é feito durante essa execução através do forEach().

Continuaremos conhecendo outros métodos callback e fazendo mais práticas.

### Aula 4 - Parâmetros do forEach

Na aula vimos como podemos usar o forEach para acessar o valor de todos os elementos em um array.

```JavaScript
const notas = [5.5, 6.5, 10, 9.5];
notas.forEach(function (nota) {
 console.log(nota);
})
```

Selecione o único parâmetro obrigatório que temos que fornecer para esse método:

Alternativa correta  
Uma função que recebe um elemento.

Certo! Essa função vai ser executada para cada elemento do array. É o que chamamos de “função callback”, quando uma função é passada como parâmetro de outra função e executada dentro deste contexto.

### Aula 4 - Para saber mais: for...of vs callbacks

Até agora vimos várias formas de fazer o que parece ser a mesma coisa: for, for…of, forEach()... Com tantas opções, como posso escolher qual usar no meu código?

Antes, vamos dar uma olhada em cada um deles:

**for**  
A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras linguagens, o for é muito conveniente pois pode ser utilizado vários tipos de iteráveis e deixa explícita quais são todas as “fases” de cada loop - também chamamos um loop de laço de repetição ou de iteração.

> O que é um “iterável”? Além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados iteráveis. Não vamos falar dos dois últimos tipos neste curso, mas se você tiver interesse em saber mais sobre conjuntos, dicionários e outras estruturas de dados, pode dar uma olhada [neste artigo](https://www.alura.com.br/artigos/estruturas-de-dados-introducao); o que precisamos saber agora é que um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando ferramentas próprias para isso. É importante fazer uma distinção entre array e iterável, pois nem todo método que funciona em um array vai funcionar em outros iteráveis - veremos isso em seguida.

```JavaScript
const lista = [1, 2, 3, 4, 5];
 
for (let indice = 0; indice < lista.length; indice++) {
 console.log(lista[indice]); 
}
```

O que queremos dizer com “deixar claro as fases da iteração” pode ser visto no exemplo acima: a expressão entre parênteses () após a palavra-chave for. Dentro da expressão temos:

uma variável contadora, que é criada antes do início do laço (let indice);  
uma expressão de teste (indice < lista.length), que é executada antes de cada iteração e que verifica se o código dentro do bloco {} deve ou não ser executado;

por último, uma expressão que é executada ao final de cada laço, normalmente um incremento (++) ou decremento (--) da variável contadora.
Ou seja: como as fases de cada laço são declaradas de forma explícita, elas também podem ser alteradas conforme a necessidade do código, o que faz com que o for seja muito versátil e possa ser utilizado em casos específicos, quando as outras formas de sintaxe mais reduzida (como os que vamos ver em seguida) não atendem.

Decremental ou incremental?  
O laço pode ser decremental ao invés de incremental (percorrer um array de trás para frente), a variável contadora pode receber outro valor como let indice = 2 ou let indice = outraVariavel + 1 (desde que esse valor seja avaliado como número), a condição de teste pode ser o tamanho do array como no exemplo, ou outro (indice < lista.length - 1) e o incremento ou decremento ao final do laço pode receber qualquer operador aritmético ou ser o resultado de uma operação, como indice = indice + 2 ou indice *= 2.

É possível, inclusive, usar o for para executar algoritmos mais complexos, que também não seriam possíveis com outros métodos, por exemplo:

```JavaScript
const lista = [1, 2, 3, 4, 5];
for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}
//1
//3
//5
//7
//9
```

Ainda há outras formas de se trabalhar com as condições do for, que você pode conferir na [documentação sobre for no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for).

for…of  
Adicionado às funcionalidades do JavaScript na versão ES6, é um tipo de laço de repetição diferente do for tradicional, embora utilize a mesma palavra-chave:

```JavaScript
const lista = [1, 2, 3, 4, 5];
let soma = 0;
for (let elemento of lista) {
 soma += elemento;
}
console.log(soma) //15
```

O for…of pode ser executado utilizando qualquer tipo de iterável, além de arrays.

Inicialmente, o for…of se parece bastante com o for: temos a declaração de uma variável (let elemento) seguida da palavra-chave of e um identificador do iterável que será percorrido (no caso acima é um array mesmo, lista).

A diferença principal e mais visível entre o for e o for…of é que o anterior dá muito mais controle sobre de que forma o laço de repetição ocorre. Por exemplo, vimos que no for é possível manipular de forma mais fina todas as condicionais; já no for…of as condições são mais “fixas”: elemento se refere a cada elemento (ou item) do array e o loop sempre ocorre de forma sequencial, do primeiro elemento até o último.

Em contrapartida, a sintaxe simplificada e mais “legível” para pessoas faz com que o uso do for…of seja mais prático do que o for, pois laços de repetição mais simplificados, que percorrem um iterável do primeiro ao último elemento e executam o código do bloco a cada iteração, são muito mais corriqueiros.

forEach()  
Ao contrário de for e for…of, o forEach() é um método do objeto Array.

> O que é um método? Em programação, chamamos de método uma função que é propriedade de um objeto. A [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Method_definitions) traz alguns exemplos de métodos, mas você vai poder conferir com mais detalhes o que são objetos e suas propriedades no curso voltado para objetos. Por agora, basta saber que quando dizemos que determinada função - por exemplo, forEach() é um método de array, significa que esta função foi desenvolvida para trabalhar apenas com esse tipo de dado - no caso, com arrays.

O forEach(), assim como outros métodos de array que vimos ou ainda vamos ver durante esta aula, também cumprem o papel de iterar arrays, porém com funcionalidades e retornos bem definidos. No caso do forEach(), apesar da sintaxe bem diferente, podemos utilizar este método como o for ou o for…of, pois ele vai executar as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.

O forEach(), assim como alguns outros [métodos de array do JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) que estamos vendo no curso, utiliza a abordagem funcional de funções callback para executar o código necessário a cada elemento iterado no laço:

```JavaScript
const lista = [1, 2, 3, 4, 5];
let soma = 0;
 
lista.forEach(numero => soma += numero);
console.log(soma) //15
```

Como visto acima, o método forEach() recebe uma função como parâmetro, e esta função por sua vez utiliza como parâmetro cada um dos elementos do array. A lógica interna do forEach() vai manejar a iteração do primeiro ao último item do array e fazer com que o código definido dentro da função callback (no caso, apenas um incremento soma += numero) seja executado a cada iteração.

O mesmo código também poderia ser escrito da seguinte forma, um pouco mais extensa porém mais legível:

```JavaScript
lista.forEach(numero => {
 soma += numero
});
```

Ou ainda, utilizando a palavra-chave function ao invés de arrow functions; essa forma de escrita não é usual, pois quando usamos funções callback o padrão adotado é o de arrow functions, mas serve para o propósito de legibilidade:

```JavaScript
lista.forEach(function (numero) {
 soma += numero
});
```

Assim, vemos que o forEach() não retorna nenhum tipo de valor, apenas executa o que está dentro do bloco da função callback, assim como for e for…of. Porém também não é possível modificar a forma que a iteração será feita (é sempre do primeiro elemento do array ao último) e não há forma de interromper o laço dada alguma condição, como o break funcionaria para um for normal.

O forEach() também não pode ser utilizado com qualquer iterável, apenas com arrays e também não pode ser utilizado de forma assíncrona - um tema um pouco mais avançado e que não trabalharemos nesse curso, mas que você pode [conferir neste artigo](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar) se tiver curiosidade pra começar a aprender.

**E quando devo utilizar um ou outro?**  
A resposta, como em muitas coisas na programação, é depende!

Atualmente, em termos de performance - ou seja, qual código é executado de forma mais rápida pelo computador e consumindo menos recursos de memória - tanto os laços com for como o forEach() não tem diferenças significativas, embora ainda possam ocorrer exceções, como no caso de versões muito antigas de navegadores e/ou manipulação de arrays muito longos.

No momento em que desenvolvemos este curso, a questão de performance não é tão definidora na maior parte dos casos, pois os interpretadores do JavaScript já evoluíram para trabalhar tão bem com funções callbacks quanto com iteradores.

O forEach() utiliza callbacks assim como map(), filter() e alguns outros métodos de array, o que facilita a utilização desses métodos em conjunto ou a troca de um para outro dependendo da necessidade do código ou de uma refatoração. Alguns guias de estilo de código desenvolvidos pela comunidade, como o [famoso guia do AirBNB](https://github.com/airbnb/javascript#iterators-and-generators), indica preferencialmente o uso do forEach() no lugar do for…of para manter a consistência no estilo do código.

O for…of, mais recente que o forEach(), não é um método de array e sim um iterador, assim como o for. Ou seja, vai trabalhar com outros tipos de dados iteráveis além de arrays, com uma sintaxe mais simplificada que a do for.

Como em ambos os casos não há retorno, somente a execução do código que está dentro do bloco - os colchetes {} do for…of ou a função callback do forEach(), você pode utilizar as ferramentas da seguinte forma:

forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;
for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);
for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).

### Aula 4 - Revisando callbacks - Vídeo 2

Transcrição  
Continuando com nossos desafios, agora precisamos adicionar um ponto extra em cada uma das notas de uma lista. As pessoas estudantes receberam um ponto extra nas notas e precisamos somá-la às notas da lista.

No VS Code, abrimos um arquivo que criamos anteriormente e chamamos de map.js. Dentro passamos um array de notas com os valores 10, 9.5, 8, 7 e 6.

> const notas = [10, 9.5, 8, 7, 6];

Conhecendo e aplicando o método map()  
Começaremos criando uma constante chamada notasAtualizadas igual à notas.map(). O map, assim como o forEach, é um método callback, ou seja, colocaremos uma função chamando outra função.

Nos parênteses, passamos funcion (nota) e abrimos o bloco de chaves. Dentro dele, ao invés de console.log, queremos realmente modificar o que está no array original. Então, diremos que para cada nota, faremos nota + 1, ou nota++.

Agora, ao contrário do forEach() que não retorna nada, precisamos extrair essa informação de dentro docallback, ou seja, tirar essa informação de dentro dessa função. Faremos isso passando no início desse linha o return.

```JavaScript
const notas = [10, 9.5, 8, 7, 6];
const notasAtualizadas = notas.map(function (nota) { 
    return nota + 1;
})
```

Dentro do map temos uma função que está recebendo, a cada iteração, uma nota, somando o número 1 e retornando esse valor. Na linha 7 podemos chamar o console.log(), passando como parâmetro notasAtualizadas.

```JavaScript
const notas = [10, 9.5, 8, 7, 6];
const notasAtualizadas = notas.map(function (nota) { 
    return nota + 1;
})
contole.log(notasAtualizadas);
```

No terminal, executa,ps node map.js e temos o retorno abaixo, um array.

> [ 11, 10.5, 9, 8, 7 ]

Repare que a nota 10 virou 11, a 9.5 virou 10.5 e a nota máxima é 10. Então, precisamos fazer uma pequena correção.

Mas antes disso, aproveitaremos para fazer uma pequena refatoração. É muito comum utilizarmos em funções callback a sintaxe da arrow function. Lembrando do curso anterior de fundamentos, a arrow function tem uma sintaxe um pouco mais concisa do que a função.

Copiaremos a nossa constante notasAtualizadas e colar logo abaixo. Feito isso, comentamos a que fizemos anteriormente. Agora faremos essa refatoração para a arrow function. Primeiro, em notas.map() deletamos a palavra-chave function, manter os parênteses e o parâmetro, e após os parâmetros adicionaremos o => para fazer a seta.

```JavaScript
const notasAtualizadas = notas.map((nota) => {
    return nota + 1;
})
console.log(notasAtualizadas);
```

Se mantivermos dessa forma e executarmos novamente, tudo continua funcionando. Porém, no caso de arrow functions, se temos uma instrução, uma linha só, podemos suprimir tanto as chaves quanto o return. Nesse caso também não podemos ter o ponto e vírgula.

```JavaScript
const notasAtualizadas = notas.map((nota) => nota + 1)

console.log(notasAtualizadas);
```

Agora a nossa função ficou bem mais curta, com apenas uma linha, recebendo o parâmetro e retornando direto a única instrução da função. Ao executar novamente no terminal, tudo continua funcionando.

Então agora podemos utilizar uma arrow function que é muito mais comum quando usamos callbacks, usamos essa sintaxe. Quando temos apenas um parâmetro também, os parênteses em volta do parâmetro são opcionais, preferimos manter, mas nesse caso eles não são necessários.

Vamos então fazer a correção das notas. Precisamos que se a nota for maior ou igual a 10 não haja nenhuma alteração, se for menor, podemos adicionar a nota a mais.

Como incluímos isso no map, na arrow function? Poderíamos fazer um if, porque isso é literalmente uma condição, ou é maior ou igual a 10, ou não é.

Porém, nesse caso, usaremos a sintaxe do operador ternário. Após a arrow function, na linha 7, passamos nota + 1 é o retorno, se for maior ou igual a 10, então >=10, retornamos 10, ? 10, afinal, 10 é a nota máxima. Se não for, ou seja, se nota + 1 for menor que 10, então, na mesma linha adicionamos : seguido de nota + 1.

```JavaScript
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10: nota + 1);

console.log(notasAtualizadas);
```

Para testar, no terminal passamos novamente node map.js e temos o retorno abaixo:

> [ 10, 10, 9, 8, 7 ]

Deu certo! Relembrando que o operador ternário trabalha com uma verificação, uma comparação, portanto sempre vai retornar true ou false. Verificamos se nota + 1 é maior ou igual a 10 ou não. Após a interrogação é o caso de true, se for verdadeiro retorna 10. Depois dos dois pontos é o caso de false, se for falso retorna nota + 1.

Está tudo funcionando. A última coisa é que, novamente, precisamos prestar atenção no retorno do método map(). Ao contrário do forEach(), que sempre retorna undefined, o map sempre retornará um array com os resultados, ou seja, um array com cada retorno de função.

Por isso que a nossa variável notasAtualizadas é um array com cada um dos resultados, porque cada resultado está sendo retornado para fora da função callback e está sendo capturado dentro de um outro array que chamamos de notasAtualizadas.

O forEach() não retorna nada, portanto, é para quando não precisamos de retorno. Caso contrário, quando precisamos que o resultado do processamento seja capturado e guardado em outro array, precisamos usar o map(). Essa é uma das principais diferenças entre o forEach() e o map().

O map é super útil também, faremos mais testes com ele futuramente. A seguir, voltaremos a lista de desafios. Até lá!

### Aula 4 - Alterando strings com map() - Vídeo 3

Transcrição  
Continuando com os desafios, precisamos agora padronizar uma lista de pessoas estudantes para que todos os elementos estejam em letras maiúsculas.

Criamos um array chamado nomes, com três exemplos de strings: "ana Julia", "Caio vinicius", "BIA silva", ou seja, com letra minúscula e maiúscula, precisamos padronizar isso. Uma das formas de padronizar é mantendo tudo em caixa alta, eliminando esse problema.

Padronizando nomes com o método map()  
Para fazer essas alterações, usaremos o método map(), pois primeiro, precisamos percorrer este array, transformando tudo em caixa alta, e depois salvar essas alterações em um array corrigido.

A primeira coisa a fazer é criar uma constante, que chamaremos de nomesPadronizados igual à nomes.map(). Como parâmetro, podemos colocar a nossa função callback. Passamos nome, fora dos parênteses, criamos a arrow function =>.

Agora podemos usar um método de string que vimos no curso anterior de fundamentos, por exemplo, o toUpperCase. Então, para cada nome, executaremos nome.toUpperCase(). Para testar se deu tudo certo passamos console.log(nomesPadronizados).

```JavaScript
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomes Padronizados nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados)
```

Retornamos ao terminal e passamos o comando node map.string.js.

> node map.string.js

Temos o seguinte retorno:

> [ 'ANA JULIA', 'CAIO VINICIUS', 'BIA SILVA' ]

Todos os nomes em caixa alta, portanto, o método funcionou perfeitamente.

Fizemos esse exercício porque utilizamos o map(), por exemplo, para fazer cálculos, mas podemos utilizá-lo para fazer qualquer tipo de alteração em qualquer tipo de dado que faça parte do array, inclusive em arrays de arrays ou em objetos que veremos nos cursos futuros.

Independente disso, cada um dos itens do array é capturado dentro do parâmetro que estamos chamando de nome porque é um array de nomes. Se fosse um array de notas, chamaríamos de notas, e assim por diante. Assim, conseguimos acessar esse valor e fazer as alterações necessárias e elas serão retornadas para fora e capturadas em um novo array.

Praticamos o map(), em sequência continuaremos conhecendo utras funções callback que o JavaScript disponibiliza.

### Aula 4 - Para saber mais: Strings são arrays?

Durante essa aula, utilizamos um método específico para strings, o toUpperCase(), para alterar todos os caracteres de cada string do array para letras maiúsculas. Mas e se quisermos acessar somente uma letra? Poderíamos usar um loop para percorrer todas as letras de um string?

“String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!

“Lista ordenada” (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, strings são armazenadas em memória da seguinte forma:

```JavaScript
const nome = "Alura";
// ["A", "l", "u", "r", "a"]
```

Ou seja, é possível utilizar alguns métodos de array e laços de repetição para acessar e alterar strings:

```JavaScript
const nome = "Alura";
let nomeMaiusculas = "";
 
for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA
//===============================================

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"
 
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura
```

Você pode conferir a lista completa de métodos de [string na documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#methods). Confira na lista de links na seção à esquerda da tela e veja se consegue identificar alguns que já utilizamos nas aulas para trabalhar com arrays.

### Aula 4 - forEach e map

Para praticar mais com métodos de array, Vinicius está fazendo vários testes de código para resolver um problema de ajustes de texto em uma lista de produtos de sua loja online. Ele precisa adicionar o texto “ - unidade” em todos os produtos da loja.

Primeiro ele testou com o método forEach:

```JavaScript
const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];
const listaAtualizada = listaProdutos.forEach((produto) => {
 return `${produto} - unidade`;
})
console.log(listaAtualizada);
```

Porém, não obteve o resultado desejado e mudou o método para map():

```JavaScript
const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];
const listaAtualizada = listaProdutos.map((produto) => {
 return `${produto} - unidade`;
})
console.log(listaAtualizada);
```

Aí, sim, conseguindo as alterações necessárias.

Analisando a situação acima, marque a alternativa que explica corretamente o que aconteceu nos códigos.

O retorno esperado de cada um dos métodos.

Certo! Enquanto o método forEach não retorna nenhum tipo de dados, o método map() sempre retorna um array. Caso a função callback não tenha nenhum dado de retorno, ainda assim o resultado de map() será um array vazio. Por isso qualquer tentativa de retornar resultados de forEach e armazená-los em variáveis vai resultar em undefined.

### Aula 4 - Somando com forEach

Considere o seguinte código:

```JavaScript
const numeros = [2, 4, 6, 8];
let soma = 0;
numeros.forEach(numero => {
    soma += numero;
});
console.log("A soma dos números é:", soma);
```

Descreva o que esse código faz.

Calcula a soma dos números presentes no array numeros.

O código utiliza o método forEach para iterar sobre os elementos do array numeros e acumular a soma dos valores desses números na variável soma. No final, exibe a soma total dos números no console.

### Aula 4 - Faça como eu fiz: métodos callback

Nesta aula introduzimos um novo conceito, o de funções callback.

O termo callback se refere à função que é “chamada de volta” dentro de outra função. Após o lançamento do ES6 (também conhecido como EcmaScript 2015) o uso desse tipo de método foi se consolidando, então é importante entender como utilizá-lo.

O JavaScript moderno traz vários métodos e funções callback diversos, não apenas para uso com arrays. Porém a estrutura da função se mantém similar.

Crie um novo arquivo index.js e crie uma array de números:

> const arrayNums = [1, 2, 3, 4]

Utilize o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Para isso lembre de usar uma função callback.

Opinião do instrutor

Antes de escrevermos o map(), vamos criar a função callback; ou seja, a função que vamos chamar (call) de volta quando executarmos o método map():

```JavaScript
function multiplicaPorDez(num) {
 return num * 10
}
```

Agora podemos chamar o map() para fazer a operação:

```JavaScript
const arraySomada = arrayNums.map(multiplicaPorDez)
console.log(arraySomada)
```

O resultado no terminal deve ser [ 10, 20, 30, 40 ].

IMPORTANTE: Observe a função multiplicaPorDez. Quando criamos esta função, especificamos que ela precisa receber o parâmetro (num) para ser executada corretamente. No entanto, quando ela está sendo chamada dentro de arrayNums.map(), não passamos nenhum parâmetro e mesmo assim funcionou. O que aconteceu aqui?

Para entender melhor, vamos reescrever o código, passando a função multiplicaPorDez(num) direto como parâmetro do map():

```JavaScript
const arraySomada = arrayNums.map(num => num * 10)
console.log(arraySomada)
```

No código acima, substituímos uma função externa e nomeada (a função multiplicaPorDez), por uma arrow function anônima que existe somente dentro do map(). Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos do array que será iterado pelo map().

Por isso, quando utilizamos uma função externa como callback de um map(), não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.

Ambos os casos de uso são válidos; as funções externas permitem reaproveitamento de código, mas há vários momentos em que isso não será necessário.

> Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos. Você pode ver [outros exemplos no MDN](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function).

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

### Aula 4 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

Documentação do MDN: [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach);
Documentação do MDN: [map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

### Aula 4 - Desafio: exercícios

Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!

Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

1. Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

2. Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

3. Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

4. Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

```JavaScript
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];
const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];
```

Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

5. Considere um array de números inteiros.

> const numeros = [6, 9, 12, 15, 18, 21];

Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião”.

Opinião do instrutor

Disponibilizamos uma possível resolução dos desafios [neste link](https://github.com/alura-cursos/3530-js-arrays/tree/exercicios-aula4) para você construir ou validar suas soluções.

## Aula 5 - Avançando em Arrays

### Aula 5 - Filtrando elementos - Vídeo 1

Transcrição  
Vamos continuar praticando com alguns métodos mais específicos do JavaScript para manipular arrays. O desafio deste vídeo é filtrar por nota.

Desafio: filtrando por nota  
Após calcular a média das pessoas estudantes, precisamos mostrar quem está reprovado entre os seguintes nomes: Ana, Marcos, Maria e Mauro. Temos as notas 7, 4.5, 8 e 7.5. Vamos partir da afirmação de que a média será 7, como já trabalhamos anteriormente.

No Visual Studio Code, criamos um arquivo chamado filtrar.js e já criamos os dois arrays necessários: o array de alunos com os nomes dos estudantes (['Ana', 'Marcos', 'Maria', 'Mauro']) e o array de medias com os valores das médias ([7, 4.5, 8, 7.5]).

filtrar.js:

```JavaScript
const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];
```

Se precisamos separar alguns elementos, avaliar uma certa condição e filtrar ou não, nós precisamos de um filtro, como já antecipamos. Há um método no JavaScript justamente para fazer filtros.

Usando o método filter()  
Vamos fazer um teste com esse método de filtro para entender como ele funciona. Primeiro, criaremos uma const chamada tamanhoNome para fazermos um teste, e depois pegamos as médias dos alunos.

A constante tamanhoNome irá receber alunos.filter(). Como queremos filtrar o nome dos alunos, então é este array que precisamos referenciar em .filter().

O filter() também é um método callback, ou seja, vamos passar dentro dele outra função que vai executar o que precisamos. Então, filter() vai receber por parâmetro aluno, vamos criar uma arrow function e abrir chaves para quebrar a linha e visualizar com mais facilidade o que acontece.

```JavaScript
// código omitido
const tamanhoNome = alunos.filter((aluno) => {

});
```

O objetivo, nesse caso, é que o filtro nos retorne apenas os nomes com menos de quatro letras. Vamos fazer o seguinte: passaremos para o escopo de filter() um return para retornar, ou seja, jogar o dado para fora da função, seguido de aluno.length.

Lembrando que length é uma propriedade que funciona tanto para arrays quanto para strings, então ela também vai calcular a quantidade de caracteres existentes em uma string.

Se o comprimento da string para cada um dos nomes for menor do que quatro, isto é, return aluno.length < 4, será filtrado esse elemento.

```JavaScript
const tamanhoNome = alunos.filter((aluno) => {
  return aluno.length < 4;
});
```

O que acontece em return aluno.length < 4? Se você relembrar o que conversamos bastante nos últimos vídeos, esse tipo de comparação, quando fazemos menor que, maior que, maior igual que, menor igual que, sempre vai avaliar e retornar true (verdadeiro) ou false (falso).

Ou a comparação é igual, ou é diferente. Isso significa que o filter() vai filtrar um elemento ou não baseado sempre em verdadeiro ou falso. Portanto, o filter() não retorna, por exemplo, a string, o número, o dado; ele retorna o resultado da avaliação. A partir disso, a função filter() sabe se precisa puxar a string correspondente para fora dela ou não.

Testando o código  
Vamos testar e verificar se deu tudo certo no console. Para isso, usamos console.log().

> console.log(tamanhoNome);

Nós só temos na lista um nome com menos de quatro letras, então imaginamos que o terminal irá mostrar apenas um array com o valor "Ana". No terminal, vamos executar o seguinte comando:

> node filtrar.js

Como retorno, temos um array com um único valor: [ 'Ana' ]. Agora percebemos também qual é o tipo de retorno do filter(): assim como o map(), ele sempre vai retornar um array com os resultados que passaram como true no filter(), ou vazio se nenhum desses resultados passar.

Analisando o array medias  
A partir desse momento, já temos os elementos necessários para resolver nosso desafio. Para isso, precisamos analisar também o array medias. Como associamos anteriormente alunos e medias?

Associamos através do número do índice. O valor 'Ana' é o índice zero, assim como a media 7 é o índice zero, e fizemos essa correlação entre os dois arrays. Como fazemos isso na função callback?

Tanto filter() quanto map(), forEach(), e alguns outros métodos que abordaremos, além do primeiro parâmetro do callback, onde pegamos o dado que está sendo iterado, podemos também adicionar um segundo parâmetro: o índice que está sendo analisado naquele momento, que está sendo iterado nesse laço.

Então, vamos chamar o segundo parâmetro do método filter() de indice, que até agora não tínhamos utilizado. Poderíamos chamar de i também, que é como se usa normalmente.

Agora, a partir do indice, para cada iteração teremos disponível Ana e 0, Marcos e 1, Maria e 2, Mauro e 3. Com isso, na linha do return, conseguimos analisar o array alunos e trazer a média correspondente. Portanto, ficará da seguinte forma: return medias no índice indice.

Feito isso, nós analisamos, lembrando que filter() tem que ser true ou false. Então, precisamos comparar: medias[indice] é menor do que 7? Será retornado true ou false.

Em seguida, vamos trocar o nome da constante tamanhoNome para reprovados. Faremos essa alteração também no console.log(), agora recebendo reprovados.

```JavaScript
const reprovados = alunos.filter((aluno, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);
```

Agora podemos testar. De volta ao terminal, executamos o comando:

> node filtrar.js

Como retorno, temos o nome "Marcos". Está correto, porque Marcos é o único aluno que tem no array de notas correspondentes o valor 4.5.

Perceba que agora o callback não utiliza mais o primeiro parâmetro aluno. Porém, lembre-se que as funções chamam os parâmetros por ordem, então, não podemos simplesmente retirar da função um parâmetro que não é usado. Precisamos mantê-lo para preservar a ordem do parâmetro.

Nesse caso, uma boa prática é substituir o nome por um underscore (_). Isso significa que estamos marcando o lugar do parâmetro não utilizado, mas assinalamos que não o usamos e ele deve ser pulado para utilizar o correspondente.

> const reprovados = alunos.filter((_, indice) => {

Se voltarmos ao terminal, continua funcionando da mesma forma.

Conclusão  
Como sempre, pratique bastante com o filter(). Conheceremos mais alguns métodos em seguida!

### Aula 5 - Retorno do filter

Vimos como utilizar o método filter para retornar um array com apenas alguns elementos do array principal através de uma função callback.

```JavaScript
const notas = [10, 5, 7, 4, 8, 3];

const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);
```

Selecione a alternativa que representa o que deve ser retornado da função callback para que o método filter funcione:

Resposta: Um booleano.

Certo! Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no novo array, e quando ela retorna falso, ou false, o elemento é descartado.

### Aula 5 - Somando com reduce - Vídeo 2

Transcrição  
Continuando com os desafios, dessa vez precisamos somar algumas médias.

Desafio: somando médias das salas  
Não se trata da média de uma turma apenas. Dada a média de todas as pessoas estudantes de três salas, é necessário calcular a média geral de cada sala. Temos a sala de JavaScript, com uma sequência de notas dos estudantes, uma sala de Python, e uma sala de Java.

No Visual Studio Code, já criamos um arquivo chamado reduce.js, o que indica a ferramenta que vamos usar. Dentro do arquivo, criamos as três const recebendo os três arrays que vamos precisar: salaJS, salaJava e salaPython.

reduce.js:

```JavaScript
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
```

Criando a função calculaMedia()  
Se precisamos calcular a média geral de cada um desses arrays, o ideal é criar uma função para isso, que possa receber cada um desses arrays como parâmetro. Criaremos uma função chamada calculaMedia(), para a qual passaremos como parâmetro listaDeNotas.

```JavaScript
// código omitido
function calculaMedia(listaDeNotas) {

}
```

Feito isso, vamos utilizar um laço de repetição especial do JavaScript que executa tarefas específicas. Esse laço se chama reduce().

Vamos criar uma const dentro dessa função, a qual chamaremos de somaDasNotas. Ela receberá listaDeNotas, array que será recebido por parâmetro, seguido de reduce(). O reduce() é uma função callback, ou seja, vamos executar outra função dentro do reduce().

```JavaScript
function calculaMedia(listaDeNotas) {
  const somaDasNotas = listaDeNotas.reduce();
}
```

Primeiro, vamos criar uma arrow function. A sintaxe do reduce() é um pouco diferente, então vamos por partes. O primeiro parâmetro que o reduce() precisa é chamado de acumulador, então é esse nome que daremos para o parâmetro (acumulador).

O segundo parâmetro é o elemento que está sendo iterado no momento. Como cada um dos elementos do array é uma nota, vamos chamar esse parâmetro de nota. Em seguida, vamos chamar a seta com igual e maior que, e depois abrir chaves.

O que o reduce() faz? Ele reduz todos os elementos de um array a um elemento só. Para a nossa necessidade, que é somar todos os elementos, vai funcionar. Quando trabalharmos com objetos, abordaremos mais usos do reduce().

O que deve ser retornado dentro dessa função callback? Chamaremos return acumulador + nota.

Agora vem um detalhe da sintaxe do reduce(). Até agora, trabalhamos com funções callback cujo único parâmetro dentro da função era uma outra função. O reduce(), depois que passamos a função interna, precisa receber um segundo parâmetro: o valor inicial para ser acumulado.

Nesses casos, precisamos prestar bastante atenção onde o parâmetro começa e termina, ou seja, onde a função começa e termina. Ela começa nos parâmetros e termina na fechamento de chaves.

Vamos abrir um novo parâmetro com vírgula e passar o número 0, porque vamos trabalhar com valores de soma e queremos que esse valor comece com 0 e some cada um dos elementos.

```JavaScript
function calculaMedia(listaDeNotas) {
  const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);
}
```

Extraindo as médias  
A partir disso, conseguimos extrair as médias. Dentro da função, criaremos uma const chamada media que receberá a divisão de somaDasNotas por listaDeNotas.length.

Por fim, retornamos dentro da função ainda a media, agora já calculada. Assim, tanto o reduce() quanto o cálculo da média e o retorno da média estão dentro da mesma função.

```JavaScript
function calculaMedia(listaDeNotas) {
  const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);
  
  const media = somaDasNotas / listaDeNotas.length;
  return media;
}
```

Agora podemos testar, chamando cada um dos arrays que criamos. Vamos executar a função calculaMedia() dentro de um console.log() três vezes, uma para cada array.

Primeiro, console.log() executa calculaMedia() recebendo salaJS. Para agilizar, podemos copiar a primeira linha e colar abaixo. Logo após, console.log(calculaMedia(salaJava)), e por último, console.log(calculaMedia(salaPython)).

```JavaScript
// código omitido
console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));
```

Testando o código
Agora, vamos ao terminal chamar o comando node seguido de reduce.js.

> node reduce.js

O terminal retornará para nós os valores reduzidos. Como o nosso reduce() só tem uma linha, vamos comentar a const somaDasNotas que fizemos anteriormente e refazer essa função de uma forma reduzida para que ela fique inteira em uma linha, que é o que costumamos fazer em JavaScript quando temos apenas uma instrução dentro da função.

Dentro de const somaDasNotas, vamos remover as chaves da função e também o return, passando tudo para a mesma linha, da seguinte forma:

> const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

Dessa forma, a função fica mais sucinta e conseguimos identificar melhor onde estão os parâmetros: o primeiro é a função callback; e o segundo é o valor inicial que será reduzido.

Conclusão  
Como já mencionamos anteriormente, na parte de objetos vamos aprender mais usos do reduce(), apenas lembrando que ele reduz os elementos de um array a um elemento só.

Como sempre, pratique bastante e vamos prosseguir para o próximo desafio!

### Aula 5 - Mão na massa: estrutura do reduce

Não deixe de executar e testar os códigos dessa atividade em seu projeto!

Durante a aula trabalhamos com o método reduce() para “reduzir” uma lista de números para um único valor. Este método trabalha com parâmetros um pouco diferentes dos outros que vimos durante o curso.

Em seu editor, crie um arquivo index.js e execute o seguinte código:

```JavaScript
const numeros = [43, 50, 65, 12]
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
console.log(soma) //170
```

O código acima é muito parecido com o que foi feito durante a aula. É importante notar que:

O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado (acum) e o valor atual.
A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return.
Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.

Tente encontrar outras formas de escrever o método reduce() levando em consideração o código apresentado!

Opinião do instrutor

Vamos reescrever o reduce() de uma forma um pouco mais extensa para separar melhor as partes do código:

```JavaScript
const soma = numeros.reduce(function (acc, atual) {
 return atual + acc
}, 0)
```

Vendo o código acima, percebe-se melhor onde começam e terminam cada um dos parâmetros do reduce(): o primeiro parâmetro, uma função e o segundo, um número.

Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():

```JavaScript
function operacaoNumerica(acc, atual) {
 return atual + acc
}
const soma = numeros.reduce(operacaoNumerica, 0)
```

O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.

No dia a dia, a forma que utilizamos no vídeo é a mais usual. Porém, durante seus estudos, você pode praticar da forma que achar mais clara.

É importante lembrar que cada método pode aceitar receber parâmetros diferentes! Alguns são obrigatórios, outros opcionais. Consulte sempre a documentação da linguagem.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

### Aula 5 - Clonando arrays - Vídeo 3

Transcrição  
Neste próximo desafio, iremos criar a cópia de uma lista.

**Desafio: criando cópias**  
Vamos considerar uma lista de notas com quatro valores: 7, 7, 8 e 9. Precisamos criar uma nova lista adicionando a nota 10, sem alterar a lista original.

Se pensarmos em tipos primitivos de dados, como String, Number, Boolean, Undefined, Null, o processo para copiá-los é mais sucinto. Por exemplo: em um arquivo chamado clonar.js no Visual Studio Code, criamos uma const chamada notas com os valores mencionados anteriormente.

clonar.js:

> const notas = [7, 7, 8, 9];

Se tivermos uma constante chamada nota, com um valor numérico qualquer, como 9.75, e quisermos criar uma nova variável a partir dessa, podemos criar uma const chamada novaNota, igual a nota.

Desse modo, teremos uma cópia idêntica. Podemos até pedir para o console exibir essas duas variáveis.

```JavaScript
// código omitido
const nota = 9.75;
const novaNota = nota;

console.log(nota);
console.log(novaNota);
```

Ao executar o arquivo clonar.js no terminal, os dois valores 9.75 são exibidos.

> node clonar.js

Se quisermos alterar o valor de qualquer uma dessas variáveis, precisamos transformar ambas em variáveis do tipo let. Para alterar o valor de uma variável let, basta chamar novamente o nome da variável e trocar o valor dela. Por exemplo: vamos alterar o valor de nota para 10.

```JavaScript
let nota = 9.75;
let novaNota = nota;

nota = 10;

console.log(nota);
console.log(novaNota);
```

Ao rodar novamente o arquivo, podemos observar no terminal que apenas o valor da variável nota mudou: agora nota é 10 e novaNota continua sendo 9.75.

Vamos tentar fazer a mesma coisa com arrays. Já temos a const notas; agora vamos criar uma nova const chamada novaListaNotas e atribuir o valor de notas a essa variável.

Podemos comentar as variáveis numéricas que havíamos criado, e no console, vamos pedir para exibir notas e novaListaNotas para verificar o que acontece.

```JavaScript
const notas = [7, 7, 8, 9];
const novaListaNotas = notas;
// let nota = 9.75;
// let novaNota = nota;
// nota = 10;
console.log(notas);
console.log(novaListaNotas);
```

No terminal, dois arrays exatamente iguais são exibidos.

Porém, vamos agora testar alterar apenas uma dessas variáveis. Para isso, chamaremos o método push() na variável novaListaNotas para inserir um valor no final do array. Feito isso, vamos inserir entre parênteses o número 10, conforme pedido no desafio.

```JavaScript
const notas = [7, 7, 8, 9];
const novaListaNotas = notas;
novaListaNotas.push(10);
// código omitido
```

Rodamos novamente o console e observamos que os dois arrays foram alterados: o array notas e o array novaListaNotas agora incluem o número 10, mesmo solicitando a adição apenas em novaListaNotas.

Por que isso acontece? Os arrays se comportam de forma diferente dos dados primitivos. Existem duas formas de atribuir valores a uma variável: atribuição por valor e atribuição por referência.

No caso do array, o que aconteceu foi uma atribuição por referência. Não clonamos o valor em si, não temos o valor literalmente duplicado. Quando atribuímos o valor de notas a const novaListaNotas, criamos uma referência da variável notas para dentro de novaListaNotas.

Isso significa que, quando fazemos uma alteração em novaListaNotas, essa alteração reflete no array que está sendo referenciado, ou seja, o array original notas.

Como clonar literalmente um array?  
Como copiar os valores e atribuir a uma nova variável? Vamos utilizar um operador que ainda não conhecemos, chamado spread operator (operador de espalhamento).

Na nossa constante novaListaNotas, em vez de apenas repetir o valor de notas, vamos englobar notas por colchetes e colocar três pontos antes dela (...), que é a sintaxe do spread operator.

> const novaListaNotas = [...notas];

Agora podemos fazer o push() em novaListaNotas e conferir se tudo está funcionando. De volta ao terminal, vamos executar novamente node clonar.js. Agora, a variável notas se manteve inalterada e novaListaNotas foi alterada com o push() no valor 10, que é o que o desafio nos pediu para fazer.

Porém, ainda podemos melhorar o código. Na verdade, quando usamos o operador de espalhamento, nem precisamos do push(). Então, vamos comentar o push() e adicionar o 10 dentro do operador de espalhamento, logo após a variável notas. Portanto, [...notas, 10].

```JavaScript
const novaListaNotas = [...notas, 10];

// novaListaNotas.push(10);
```

Ao testar novamente no terminal, continua funcionando da mesma forma, porque o operador de espalhamento pega todos os valores e, literalmente, abre o array e espalha o seu conteúdo.

O que acontece é que temos a criação de um array, espalhamos os valores da variável notas dentro desse array e, em seguida, adicionamos mais um valor. Por isso, sem usar o push(), conseguimos adicionar o 10 dentro do array novaListaNotas.

Conclusão  
Sempre que precisar clonar arrays, lembre da questão da atribuição por valor e da atribuição por referência. Além disso, o operador de espalhamento é super útil. Abordaremos ele em outros contextos; quando voltarmos a trabalhar com objetos, provavelmente vamos utilizar.

Por enquanto, vamos continuar nos desafios de array!

### Aula 5 - Para saber mais: valor ou referência?

No vídeo anterior, você viu como clonar um array de forma apropriada no JavaScript. Atribuir diretamente um array para outro com o sinal = faz com o que o JavaScript entenda o novo array como uma referência ao anterior.

Para evitar esse comportamento, devemos criar um array totalmente novo, com a ajuda do spread operator ... (ou operador de espalhamento).

Porém, esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript.

Considere o seguinte código:

```JavaScript
let num1 = 10;
let num2 = num1;
num2 += 5;
num1 += 1;
console.log(`Num1 é ${num1}. Num2 é ${num2}`);
```

Ao executar o código, teremos a frase “Num1 é 11. Num2 é 15”. Ou seja, com o código let num2 = num1, o JavaScript entende que queremos criar uma cópia de num1, e cria uma nova variável, com seu próprio espaço na memória guardando seu valor. Então, ao modificar uma das variáveis, a outra não é alterada.

Esse comportamento de copiar um valor primitivo, o atribuindo a uma nova variável, é chamado de atribuição por valor.

O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o seguinte exemplo:

```JavaScript
let numeroOriginal = 10;
function alteraNumero(numero) {
  numero = 50;
  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}
alteraNumero(numeroOriginal);
```

Executando o código, teremos a frase “numero do parâmetro é 50. numeroOriginal é 10”. Ao chamar a função passando numeroOriginal como parâmetro, foi feita uma cópia de seu valor para ser utilizada como o parâmetro numero dentro da função. Dessa forma, mesmo alterando numero dentro da função, numeroOriginal permanece inalterado.

Mas como você viu, com arrays não funciona bem dessa forma, afinal, eles não são um tipo primitivo. Considere o exemplo utilizado no vídeo passado:

```JavaScript
const notas = [7, 7, 8, 9];
const novasNotas = notas;
novasNotas.push(10);
console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
```

A partir do código const novasNotas = notas, o JavaScript entende que novasNotas e notas passam a ser o mesmo array, e agora eles apontam para o mesmo espaço na memória. Como estamos lidando com dados mais complexos, o JavaScript faz isso por padrão para otimizar memória e performance, em vez de realizar uma cópia do array em toda nova atribuição.

Uma atribuição de um array é chamada de atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor.

O mesmo comportamento ocorre quando arrays são passados como parâmetro de funções. Veja o código abaixo:

```JavaScript
const arrayOriginal = [7, 7, 8, 9];
function alteraArray(array) {
  array.push(10);
  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}
alteraArray(arrayOriginal);
```

Executando o código, teremos essa saída:

```JavaScript
array do parâmetro é 7,7,8,9,10
arrayOriginal é 7,7,8,9,10
```

Após passar arrayOriginal como parâmetro de alteraArray, o utilizamos como o parâmetro array. O código array.push(10) alterou ambos os arrays, assim como o que houve no exemplo que fizemos a atribuição. Ou seja, novamente, foi passada a referência do array em si, e não uma cópia dele.

De forma análoga à solução do vídeo, caso queiramos passar uma cópia do array e não sua referência, trocamos o código alteraArray(arrayOriginal) por alteraArray([...arrayOriginal]). Assim, a saída será:

```JavaScript
array do parâmetro é 7,7,8,9,10
arrayOriginal é 7,7,8,9
```

### Aula 5 - Removendo elementos com Set - Vídeo 4

Transcrição  
O último desafio é remover duplicatas de uma lista. Um professor adicionou acidentalmente nomes repetidos na lista de chamada: Ana, Clara, Maria, Maria, João, João, João. Nossa tarefa é remover os nomes repetidos dessa lista, deixando apenas um de cada.

Vamos pensar, por exemplo, como resolver isso com um loop for. Em cada interação, nós comparamos se esse nome já existe no array (conjunto), se não existe, o adicionamos, se não, ignoramos. No entanto, conseguimos utilizar ferramentas do JavaScript prontas para resolver isso.

Nossa lista de nomes já está criada num arquivo que nomeei de set.js, e é exatamente este recurso que vamos utilizar. Criaremos uma constante chamada nomesAtualizados a qual será atribuída o código new Set(), com "S" maiúsculo. É muito importante lembrar que o JavaScript é case sensitive, então precisamos escrever "Set" com "S" maiúsculo.

Dentro dos parênteses de Set(), passaremos nosso array nomes, que criamos anteriormente. Então, Set(nomes). E, na linha abaixo, escreveremos console.log(), como sempre, para exibir no terminal os nomesAtualizados.

```JavaScript
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const nomesAtualizados = new Set(nomes);
console.log(nomesAtualizados);
```

Vamos ver se deu tudo certo. Abriremos o terminal do VS Code e escreveremos node set.js. O resultado é Set (4) { 'Ana', 'Clara', 'Maria', 'João' }, ou seja, um Set com quatro elementos: Ana, Clara, Maria e João. Portanto, todos os elementos repetidos foram deletados. Agora, precisamos entender o que é Set.

O Set é um conjunto, e um conjunto é um tipo de dado que armazena valores únicos, ao contrário do array, que pode ter elementos repetidos à vontade. Costumamos dizer que o Set é um tipo de dado que é array-like (parecido com um array), mas ele não é um array.

Se tentarmos utilizar métodos de array com o Set, ele não vai funcionar. Por exemplo, vamos tentar usar nomesAtualizados.push('Juliana'), antes do console.log(), para adicionar o nome "Juliana" no final desse Set.

```JavaScript
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const nomesAtualizados = new Set(nomes);
nomesAtualizados.push('Juliana');
console.log(nomesAtualizados);
```

Vamos testar no terminal, enviando novamente node set.js. Temos o retorno de um erro, porque o Set parece um array, mas ele não tem acesso aos métodos de array. Portanto, as funções que usamos, como reduce(), push() e pop(), não vão funcionar com essa lista. Portanto, podemos deletar a linha nomesAtualizados.push('Juliana');, porque ela não funciona.

Se quisermos pegar essa nova lista, essa lista atualizada, só com valores únicos, e utilizá-la da forma que temos utilizado com array, precisaremos transformar esse conjunto Set em um array. Para isso, criamos outra constante, que chamaremos de listaNomesAtualizados.

A listaNomesAtualizados recebe colchetes ([]) contendo o operador de espalhamento, ou seja, as reticências (...), seguido de nomesAtualizados. Agora podemos chamar no console.log() das duas variáveis, tanto nomesAtualizados, que é o conjunto, quanto listaNomesAtualizados, que é o array que estamos criando a partir deste conjunto. No terminal, enviamos o comando node set.js.

```JavaScript
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const nomesAtualizados = new Set(nomes);
const listaNomesAtualizados = [...nomesAtualizados];
console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
```

node set.js

```JavaScript
Set (4) { 'Ana', 'Clara', 'Maria', 'João' }

[ 'Ana', 'Clara', 'Maria', 'João' ]
```

Agora recebemos um conjunto de quatro elementos e um array também de quatro elementos, criado a partir deste conjunto. E com este array listaNomesAtualizados, conseguimos utilizar normalmente, utilizar todos os métodos, utilizar o laço for, etc.

Também podemos refatorar um pouco e diminuir a quantidade de linhas nesse código, passando todo esse processo para uma variável só. Então, na constante listaNomesAtualizados, passaremos o código [... new Set(nomes)].

Agora podemos comentar a linha nomesAtualizados = new Set(), porque fizemos um único processo que cria um novo conjunto, com new Set(nomes), e já espalhamos os valores desse conjunto em uma array, envolvendo-o com colchetes. Sendo assim, podemos comentar também a linha console.log(nomesAtualizados);.

Comentamos a constante nomesAtualizados, então ela não "existe mais". Podemos abrir o terminal e rodar novamente o node set.js. Dessa vez recebemos nosso array com quatro elementos pronto para ser utilizado.

```JavaScript
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// const nomesAtualizados = new Set(nomes);
const listaNomesAtualizados = [...new Set(nomes)];
// console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
```

> node set.js

```JavaScript
[ 'Ana', 'Clara', 'Maria', 'João' ]
```

Como sempre, vou deixar um link na documentação sobre o Set() para que você possa conferir quais são os métodos possíveis de se utilizar com esses conjuntos (sets). Esses métodos são diferentes dos utilizados com arrays.

Por enquanto, encerramos nossos desafios.

### Aula 5 - Para saber mais: estrutura Set

Aprendemos que a estrutura Set (ou conjunto) é muito semelhante aos arrays, mas possui diferentes métodos e a regra de que seus elementos não podem se repetir. Utilizamos essa regra ao nosso favor para eliminar as duplicatas de um array, convertendo-o para um Set e de volta para um array.

Você pode explorar mais conhecimentos sobre o [Set na documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)!

#### Aula 5 - Método reduce

Considere o seguinte código:

```JavaScript
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);
console.log("A soma dos números é:", soma);
```

Identifique a alternativa que descreve corretamente o que o código faz:

Alternativa correta
Resposta: Calcula a soma dos números presentes no array numeros.

O método reduce é usado para iterar sobre os elementos do array numeros e acumular a soma dos valores desses números no parâmetro acumulador. No final, a variável soma contém a soma total dos números.

### Aula 5 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

- Documentação do MDN: [filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter);
- Documentação do MDN: [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce);
- Documentação do MDN: [Set](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set);
- Documentação do MDN: [spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

### Aula 5 - Desafio: exercícios

Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!

Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

1. Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

> Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

2. Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

3. Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

4. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

5. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

6. Crie uma função que receba um array de números e retorne a soma de todos os elementos.

Opinião do instrutor

DIsponibilizamos uma possível resolução dos desafios [neste link](https://github.com/alura-cursos/3530-js-arrays/tree/exercicios-aula5) para você construir ou validar suas soluções.

Boa sorte nos estudos!

### Aula 5 - Referências

Techguide: [Node.js](https://techguide.sh/pt-BR/path/nodejs/)
Guia com referência de temas e ferramentas para auxiliar na sua trilha de estudos

Guia de JavaScript: [o que é e como aprender a linguagem mais popular do mundo?](https://www.alura.com.br/artigos/javascript)
Artigo detalhado sobre a linguagem, do básico a paradigmas de programação.

Livro: [Primeiros passos com Node.js](https://www.casadocodigo.com.br/products/livro-primeiros-passos-node) (pago)
Pratique JavaScript com foco em Node.js do básico até as primeiras aplicações.

Livro: [JavaScript, the definitive guide](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/) (pago, disponível em português)
Principal guia de referência técnica em JavaScript, aborda as especificações da linguagem em sua totalidade.

### Aula 5 - O que aprendemos?

Nesta aula vimos:

- Como utilizar o filter e o reduce:
  - Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o filter para criar um array filtrado a partir de um existente e o reduce para reduzir valores de um array a um só.
- Como clonar arrays com o spread operator ...:
  - Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o spread operator para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.
- Como utilizar a estrutura Set:
  - Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o spread operator para converter o Set de volta em uma lista.

### Aula 5 - Conclusão - Vídeo 5

Transcrição  
Parabéns por concluir o curso de Fundamentos do JavaScript para Back-end, com foco em arrays.

O que aprendemos?  
Neste curso, aprendemos o que são arrays, o que são laços de repetição e como utilizamos esses laços com arrays. Também aprendemos a manipular arrays usando métodos específicos do JavaScript, cada um para seu uso principal.

Próximos passos  
Lembre-se de avaliar o curso. Conte-nos o que você mais gostou e onde podemos melhorar, se for o caso.

Se ainda não conferiu os exercícios e todo o material extra que preparamos para o curso, faça uma pausa e volte para conferir, porque temos muitos conteúdos extra preparados com carinho para você.

O fórum e o Discord estão aguardando para te ajudar onde você precisar.
