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

**Compreendendo o Curso: O Estudo de Objetos**  
Antes de iniciarmos, é importante compreender o que abordaremos neste curso, que é o estudo de objetos. Conforme indicado pelo título, iremos criar um arquivo denominado objeto.js no Visual Studio Code (VSC) e explorar essa estrutura.

Para isso, do lado esquerdo clicamos em "New File", digitamos "objeto.js" e posteriormente teclamos "Enter".

Aprendemos anteriormente, em outros cursos desta formação, uma estrutura de dados que chamamos de array (lista ordenada). Agora, precisamos trabalhar com outro tipo de estrutura de dados e veremos as diferenças entre eles.

Iniciando com Arrays: Estruturas de Dados Básicas
Suponha que queremos armazenar todos os números de CPF das pessoas estudantes da nossa escola. Podemos criar uma constante chamada listaCPFs e, entre colchetes, passar todas essas strings de CPF. O CPF é uma sequência numérica de 11 dígitos.

objeto.js

> const listaCPFs = ['12312312312', '123234435345'];

O array funciona muito bem para este caso, pois não temos apenas um tipo de dado, temos uma descrição de um dado, um CPF, por exemplo.

Transição para Estruturas Mais Complexas  
Entretanto, imagine que precisamos armazenar mais informações sobre uma pessoa estudante além do CPF. Como poderíamos fazer isso utilizando um array? Uma abordagem seria criar uma constante chamada infosPessoa e começar a listar esses dados. O primeiro conjunto de informações seria o nome, precisamos indicar que esse dado é um nome.

Assim, nós iniciamos uma string (aspas simples), escrevemos o nome e, em seguida, passamos o nome da pessoa, como por exemplo, José Silva. Além disso, a pessoa estudante pode ter uma idade associada. Dessa forma, adicionamos outra string, 'idade', e então fornecemos a idade da pessoa estudante, como por exemplo, 32 anos.

objeto.js

```JavaScript
const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
```

Entretanto, já se percebe que o array não é ideal para armazenar este tipo específico de estrutura de dados. Se quisermos, por exemplo, acessar o nome do estudante, teríamos que usar console.log() no índice [1] do array, assumindo que José Silva está nessa posição.

objeto.js

```JavaScript
const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
console.log(infosPessoa[1]);
```

Podemos até realizar testes no terminal para verificar se isso funciona. Para isso, clicamos em "Terminal > New Terminal" na parte superior esquerda. O terminal será exibido na parte inferior do VSCode (garanta que a pasta que está rodando é a correta) e usamos o comando node:

> node objeto.js

Obtemos como retorno:

> José Silva

Contudo, é evidente que o array não é a melhor escolha neste cenário, já que os dados como nome, idade, CPF e descrição são armazenados sequencialmente, sem um indicador lógico de qual é qual.

Introdução a Objetos no JavaScript  
Se pegarmos essas informações e passarmos para uma estrutura que chamamos de objeto, como ficaria? Vamos criar outra constante chamada objPessoa e usar o símbolo de igual para atribuir uma variável e abrir chaves, não colchetes.

objeto.js

```JavaScript
const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
console.log(infosPessoa[1]);

const objPessoa = {

}
```

Dentro destas chaves, vamos fornecer o nome e o CPF da seguinte forma: primeiro, o nome, que pode ser simplesmente uma variável, não necessariamente uma string. Utilizamos dois pontos e, em seguida, uma string para indicar o nome da pessoa, como por exemplo, "José Silva": nome: 'José Silva'.

Após quebrar a linha (não obrigatório, mas utilizado para uma melhor formatação), passaremos a idade, representada por um número, como por exemplo, 32. Além disso, podemos incluir outro dado, o CPF, seguido por uma sequência numérica de 11 dígitos qualquer. Por exemplo, para representar a turma da pessoa, utilizaremos o dado chamado "turma", que será uma string, como "JavaScript", indicando que esta pessoa é estudante do curso de JavaScript.

objeto.js

```JavaScript
const listaCPFs = ['12312312312', '123234435345'];

const infosPessoa = ['nome', 'José Silva', 'idade', 32];
console.log(infosPessoa[1]);

const objPessoa = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
```

Agora, podemos observar tanto o array quanto o objeto, e perceber que a estrutura de objeto funciona muito melhor quando precisamos armazenar grupos mais complexos de informações.

O array funciona muito bem quando desejamos armazenar grupos de um único tipo de informação, seja string, seja número, por exemplo, listas de CPFs, ou mesmo listas de nomes. Vamos aprender como trabalhar com casos um pouco mais complexos de array ainda neste curso.

Objetos Como Representação da Realidade
No entanto, ao tentarmos representar a realidade, como por exemplo, descrever uma pessoa, um usuário ou um computador, os quais consistem em diversos conjuntos de informações como nome, idade, CPF, endereço, celular, entre outros, utilizamos uma estrutura de dados chamada objeto. O principal conceito por trás de um objeto é justamente tentar refletir, de maneira abstrata, as entidades da vida real.

Próximos Passos  
Vamos agora praticar e entender como interagimos com essas propriedades.

### Aula 1 - Acessando objetos - Vídeo 3

Transcrição  
No vídeo anterior, criamos nosso primeiro objeto chamado de objPessoa, contendo os dados de uma pessoa estudante em nossa escola.

Entendendo a estrutura do objeto
Para entender melhor a estrutura de um objeto e como interagir com ele, vamos criar um novo arquivo, chamado estrutura_objeto.js.

Copiamos a variável objPessoa para o novo arquivo e a renomearemos para estudante, que é mais adequado ao contexto em que estamos trabalhando.

estrutura-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
```

O objeto estudante contém nome, idade, CPF e turma.

Quando trabalhamos com arrays, praticamos várias formas de acessá-los, seja acessando diretamente o índice desejado ou fazendo um loop (laço de repetição) para buscar o que queríamos dentro do array.

Acessando partes do objeto  
Como, então, acessamos cada parte de um objeto? Por exemplo, como acessamos apenas o nome ou apenas a idade?

Se executarmos um console.log() em estudante, o console retornará todo o objeto, com todas as propriedades.

estrutura-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

console.log(estudante);
```

Para rodar o código acima use o comando node estrutura-objeto.js conforme aprendido em cursos anteriores

> node estrutura-objeto.js

Obtemos como retorno:

```JavaScript
{
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
```

**Usando a notação de ponto em objetos**  
E se desejarmos apenas o nome da pessoa? No caso de objetos, utilizamos a chamada notação de ponto para acessar um objeto e cada uma das suas propriedades. Por exemplo, para acessar o nome, fazemos console.log(estudante.nome).

estrutura-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

console.log(estudante.nome);
```

Através da notação de ponto, acessamos a variável que guarda nosso objeto (estudante) e, em seguida, a propriedade desse objeto (nome). Podemos observar isso acessando o terminal e rodando o comando node estrutura-objeto.js.

Obtemos como retorno:

> José Silva

Um objeto é composto por propriedades que são pares de chave e valor. A chave nome tem o valor José Silva, a chave idade tem o valor 32, a chave CPF tem o valor 12312312312, e assim por diante.

O objeto é sempre composto de conjuntos de chave e valor

Essa informação é importante de entender: a estrutura de um objeto. Através das chaves acessamos o valor de cada uma dessas propriedades (string, número, etc).

**Manipulando as informações do objeto**  
Com esses dados, como o nome, podemos manipular essas informações. Por exemplo, vamos executar outro console.log(), passando a string dentro de uma template string. Podemos dizer que "o nome de estudante é ${estudante.nome}".

estrutura-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`o nome de estudante é ${estudante.nome}`);
```

Executamos o código com o comando node e obtemos:

```JavaScript
José Silva

O nome de estudante é José Silva
```

Com isso, acessamos a propriedade (string) e conseguimos juntar essas informações em um template string e exibir a frase no console.

O José Silva é uma string, então, o que mais conseguimos fazer com strings a partir do momento que acessamos a propriedade?

Utilizando substring  
Vamos executar um terceiro console.log() e passar, por exemplo, "os três primeiros números do CPF são ${estudante.cpf.substring()}".

Pelo fato do CPF ser uma string, podemos usar métodos de string que aprendemos nos cursos anteriores. Um deles é o substring(). Por isso, inserimos ${estudante.cpf} (acessamos o dado de cpf), inserimos um ponto e na sequência colocamos substring() para receber os três primeiros dígitos.

estrutura-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`o nome de estudante é ${estudante.nome}`);
console.log(`os três primeiros números do CPF são ${estudante.cpf.substring()}`);
```

O método substring nos permite capturar apenas uma parte da string, passando um índice de início e um índice de final. Lembrando que string pode ser um array de caracteres. No caso, desejamos os três primeiros números do CPF. Para tal, passamos 0, 3, sendo o índice de início e o índice final.

estrutura-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`o nome de estudante é ${estudante.nome}`);
console.log(`os três primeiros números do CPF são ${estudante.cpf.substring(0,3)}`);
```

Testamos rodando o comando node e obtemos:

```JavaScript
José Silva

O nome de estudante é José Silva

Os três primeiros números do CPF são 123
```

Este método funciona porque estamos acessando uma string. Se, por exemplo, removemos as aspas do CPF, transformando-o em um número (cpf: 12312312312), receberemos um erro no console, porque substring é um método do JavaScript que só consegue ser utilizado para strings.

Ao executarmos sem aspas simples, obtemos:

TypeError: estudante.cpf.substring is not a function

Isso mostra que, a partir do momento que acessamos o valor de um objeto através da notação de ponto, conseguimos fazer qualquer operação com esse dado. Para strings, temos operações de strings; para números, temos operações de números.

Neste momento do vídeo, a instrutora insere novamente as aspas simples: cpf: '12312312312'.

Conclusão  
Vamos continuar trabalhando com objetos e entendendo como acessamos e manipulamos os dados.

### Aula 1 - Criando um objeto

Você está desenvolvendo uma aplicação para armazenar informações de estudantes em uma escola. Cada estudante deve ser representado por um objeto contendo detalhes como nome, escola, idade e notas. Um novo aluno, João, acabou de se matricular na escola, e você precisa criar corretamente um objeto para representar João na sua aplicação.

Como você criaria corretamente um objeto para representar o novo aluno João?

Selecione uma alternativa

```JavaScript
Resposta: const estudante = {
  nome: "João",
  idade: 15,
  notas: [80, 90, 75],
  escola: "Escola ABC"
}
```

O código utiliza a notação de objeto literal para criar um objeto diretamente, atribuindo valores às propriedades. Todas as informações necessárias sobre o aluno João, como nome, idade, notas e escola, estão presentes no objeto.

### Aula 1 - Acessando objetos com colchetes - Vídeo 4

Transcrição  
Continuaremos praticando como acessar e manipular dados de um objeto.

Acessando e manipulando dados de um objeto
No VS Code, criamos um arquivo chamado de acessando-objeto.js e colamos a constante estudante que havíamos trabalhado anteriormente, o nosso estudante José Silva.

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
```

Anteriormente, conseguimos acessar, por exemplo, nome e CPF usando anotação de ponto. Então, digitamos após o fechamento das chaves estudante.nome, que devolve uma string com o nome José Silva. O Estudante.idade devolve o número 32.

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

estudante.nome //josé
```

No entanto, isso só funciona porque já sabemos, de antemão, quais são as propriedades desse objeto e quais são os nomes das chaves. Sabemos que tem nome, sabemos que tem idade, e assim por diante.

No entanto, o que podemos fazer quando não temos acesso a essas informações, como os nomes das chaves de um objeto, ou quando não sabemos previamente quais chaves utilizar?

Por exemplo, vamos fazer um teste aqui, criando uma função que chamaremos de exibeInfoEstudante(). Uma função que exibe informações das pessoas estudantes precisa fornecer para nós as informações que solicitamos.

Portanto, ela não pode apenas exibir nome, por exemplo. Ela precisa receber nos parâmetros o objeto estudante. Para a função funcionar, ela precisa receber esses dados da pessoa estudante através de um objeto. Então, digitamos objEstudante como primeiro parâmetro.

O segundo parâmetro que passaremos será infoEstudante. O que é infoEstudante? Vamos passar para dentro dessa função qualquer informação de estudante que desejamos exibir.

Não desejamos sempre o nome nem sempre o CPF. Neste cenário específico, não podemos simplesmente optar por, por exemplo, exibir console.log() de objEstudante.nome, pois não temos certeza se devemos exibir o nome, o CPF ou qualquer outro dado.

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

estudante.nome //josé

function exibeInfoEstudante(objEstudante, infoEstudante) {
    console.log(objEstudante.nome);
}
```

É aqui que entra uma outra notação que usamos, que é a notação de colchete.

**Utilizando a notação de colchetes**  
Então, neste caso, em vez de usar console.log(), queremos fazer algo diferente. Vamos solicitar que nossa função retorne um dado para nós. Assim, ela irá retornar o objEstudante, e dentro dele colocaremos chaves, os mesmos colchetes do array, e passaremos infoEstudante.

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

estudante.nome //josé

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}
```

Realizaremos um teste agora. Executaremos essa função duas vezes. Na primeira execução, chamamos console.log(exibeInfoEstudante()), passando como parâmetro em exibeInfoEstudante() o objeto estudante declarado na linha 1, e como segundo parâmetro passamos, por exemplo, uma string com o 'nome'.

Copiamos essa linha e chamamos a função novamente. O primeiro parâmetro é o mesmo objeto, e no segundo parâmetro passamos uma outra propriedade, por exemplo, 'cpf'.

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.nome //josé
function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}
console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
```

Salvamos, abrimos o terminal. Executamos no console com node:

> node acessando-objeto.js

Obtemos como retorno:

```JavaScript
José Silva

12312312312
```

O console retornou para nós José Silva, em seguida, o número do cpf do José Silva.

Então, qual é a particularidade da notação de colchetes? É a capacidade de transmitir uma propriedade como um dado variável. Esses dados podem ser provenientes de uma variável, ou, no contexto da nossa função, de um parâmetro. Assim, infoEstudante pode representar um nome, um CPF, ou qualquer outro dado fornecido quando a função é executada.

Usar a notação de colchetes como estamos fazendo é similar a adicionar outro console.log(), onde especificamos "estudante[]" dentro de parênteses e nos colchete fornecemos o nome como uma string. Em seguida, criamos outro console.log() com "Ctrl + C", passando o CPF também entre colchetes e como uma string.

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.nome //josé
function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}
console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
```

Testamos de novo no terminal.

> node acessando-objeto.js

Obtemos como retorno:

```JavaScript
José Silva

12312312312
```

Observe que é exatamente a mesma informação. Ou seja, o que acontece é que a informação que estamos passando de uma forma variável, digamos assim, entre colchetes, ela é internamente substituída por um string com o valor da chave.

Então, ela pode tanto ser usada dessa forma (['nome']), com colchete como uma string passando o valor da chave, como para receber um dado que não sabemos qual é ([infoEstudante]), que vamos receber de alguma forma de uma outra parte do sistema.

A única ação que não terá êxito é passar o valor da chave sem aspas dentro de colchetes ([nome]), pois o JavaScript interpretará isso como o nome de uma variável ou parâmetro inexistente. Isso resultará em erro, como podemos confirmar através de testes.

Podemos remover as aspas tanto do nome quanto do CPF e testar novamente no terminal.

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.nome //josé
function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}
console.log(estudante[nome]);
console.log(estudante[cpf]);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
```

Ao fazer isso, obtemos um erro de referência, indicando que "nome" não está definido.

> ReferenceError: nome is not defined

Isso é correto, uma vez que não há nenhuma variável ou parâmetro com esse nome, nem mesmo "CPF".

Inserimos novamente as aspas:

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.nome //josé
function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}
console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
```

Então, essa é a notação de colchetes.

**Notação de colchetes e Notação de ponto**  
Um ponto importante a respeito tanto da notação de colchetes quanto da notação de ponto, e isso é de extrema importância, é realizar outro teste com console.log(), desta vez utilizando o exemplo de um estudante com .pet: console.log(estudante.pet);.

Imaginemos que essa pessoa estudante tenha um gato e um cachorro. Faremos isso de duas maneiras: uma utilizando a notação de ponto e outra utilizando a notação de colchetes, passando "pet" entre aspas como o nome da chave.

```JavaScript
console.log(estudante.pet);
console.log(estudante['pet']);
```

No código completo, ficamos com:

acessando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.nome //josé
function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}
console.log(estudante.pet);
console.log(estudante['pet']);

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
```

Se executarmos este código no terminal para testar, é de extrema importância, especialmente porque se trata de JavaScript. Quando tentamos acessar uma propriedade em um objeto que não existe, é importante notar que não estamos criando essa propriedade, apenas tentando acessá-la. Geralmente, esperaríamos um erro indicando que a propriedade não existe.

> undefined  
  undefined

No entanto, o JavaScript não funciona assim; em vez disso, retorna 'undefined', indicando que a propriedade não está definida. Isso é fundamental, pois pode haver casos em que tentamos acessar propriedades inexistentes em um objeto, mas não recebemos erros, apenas "undefined".

Portanto, é vital lembrar que, ao tentar acessar propriedades que não existem, o JavaScript retorna undefined, em vez de gerar um erro.

Conclusão  
Agora, vamos continuar testando e vendo como colocamos uma informação dentro de um objeto. Vamos lá!

#### Aula 1 - Acesse os dados

No JavaScript, vimos que objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real ou um conjunto de informações que faz sentido quando agrupado. Observe a representação abaixo:

```JavaScript
const pet = {
  nome: "Rex",
  dataDeNascimento: "12/03/2017",
  brinquedoFavorito: "bolinha",
  cor: "cinza",
};
```

Usando a representação desse objeto armazenado na variável pet, assinale as alternativas que retornam com sucesso o valor de alguma de suas propriedades:

Selecione 2 alternativas

Respostas:

1. Ao tentar acessar pet.dataDeNascimento iremos obter a string ”12/03/2017”.  
Podemos usar o operador . para acessar as propriedades que já conhecemos de um objeto.

2. Ao tentar acessar pet[“brinquedoFavorito”] iremos obter a string ”bolinha”.  
Podemos utilizar o nome da propriedade como string dentro de colchetes [“propriedade”] para acessar as propriedades de um objeto de forma mais dinâmica.

### Aula 1 - Adicionando e alterando - Vídeo 5

Transcrição  
Já sabemos como acessar propriedades de um objeto, e agora, como nós incluímos ou modificamos uma propriedade.

Modificando uma propriedade
Criamos um arquivo chamado alterando-objeto.js e copiamos o nosso objeto estudante do arquivo anterior.

alterando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
```

Já sabemos que se tentarmos acessar uma propriedade que não existe, por exemplo, console.log(estudante.telefone);, se executarmos no console, ele retornará undefined.

alterando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
console.log(estudante.telefone);
```

No terminal, rodamos:

> node alterando-objeto.js

Obtemos:

> undefined

Estamos tentando acessar uma propriedade que não existe.

Porém, como criamos uma propriedade que não existe? A sintaxe é bem sucinta. Precisamos apenas passar o nome do objeto, estudante, ponto, o nome dessa nova propriedade que desejamos criar, telefone.

Então, estudante.telefone = e na sequência passamos uma string (cadeia de caracteres) com o número de telefone, 551199999999, por exemplo.

alterando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.telefone = '551199999999';
console.log(estudante.telefone);
```

Executaremos no console para verificar o que acontece. Rodamos o comando node alterando-objeto.js e obtemos:

> 551199999999

Agora sim, o JavaScript conseguiu acessar. Por quê? Porque passamos pela linha 8, ele acessou estudante.telefone =.

O JavaScript foi no objeto, percebeu que não existe a propriedade telefone dentro de estudante. E o que ele fez? Quando colocamos um sinal de atribuição, o igual e um valor, ele atribuiu essa nova propriedade ao objeto. E a partir disso, telefone passa a fazer parte do objeto estudante e conseguimos acessá-lo normalmente.

Vamos criar um outro console embaixo e chamar apenas estudante para verificar o que acontece:

alterando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.telefone = '551199999999';
console.log(estudante.telefone);
console.log(estudante);
```

Executamos node alterando-objeto.js e obtemos:

```JavaScript
{
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
  telefone = '551199999999'
}
```

Agora a propriedade telefone faz parte do objeto.

Uma coisa muito importante sobre objetos também, que ao contrário de array, o objeto não é ordenado. Parece ser ordenado pelo fato das informações serem exibidas em uma mesma sequência, no entanto, o objeto não garante essa ação. Nós fazemos as manipulações do objeto através da sua chave, nome, idade, telefone, etc.

Podemos considerar que, ao usar o operador de atribuição neste contexto, para criar uma propriedade inexistente, surge a questão do que ocorre se repetirmos esse procedimento com uma propriedade já existente.

Se adicionarmos uma linha ao final no arquivo, como estudante.nome = 'José Souza'; em vez de "José Silva", e solicitarmos ao console.log() para exibir novamente nosso objeto estudante, o que acontecerá?

alterando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.telefone = '551199999999';
console.log(estudante.telefone);
console.log(estudante);

estudante.nome = 'José Souza';
console.log(estudante);
```

Rodamos o comando node alterando-objeto.js e temos como retorno:

```JavaScript
{
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
  telefone = '551199999999'
}
{
  nome: 'José Souza',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
  telefone = '551199999999'
}
```

Primeiramente, ele exibirá o objeto original com o nome "José Silva". Em seguida, ao encontrar a linha onde estudante.nome é redefinido como "José Souza", o segundo console.log() exibirá o objeto já atualizado, refletindo o nome como "José Souza".

É só isso que precisamos fazer quando queremos alterar uma propriedade que já existe. Temos que tomar cuidado com isso, justamente porque, se a propriedade existe, ela é alterada, se ela não existe, ela é criada.

Temos que tomar cuidado para não duplicar informações. Por exemplo, estudante.telefone, estudante.telefones, esse é o tipo de coisa que temos que tomar cuidado, porque o objeto não avisará nada, ou ele atualizará, ou ele criará uma nova propriedade.

Manipulação de Objetos com const e Atribuição de Propriedades
Para finalizar, você já deve ter percebido que, assim como arrays, os objetos também podem ser criados com const, e serem alterados depois. Só não podemos reatribuir um outro valor que não seja uma alteração desse objeto.

Então, é possível criar uma const estudante2 = {};. É possível fazer isso, e depois reatribuir. Podemos então criar uma const estudante2 = {}, e depois ir atribuindo propriedades a ela. Então, estudante2.nome = 'Ana Maria'.

Isso pode ser feito, exibirmos no console a nossa estudante2.

alterando-objeto.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
estudante.telefone = '551199999999';
console.log(estudante.telefone);
console.log(estudante);

estudante.nome = 'José Souza';
console.log(estudante);

const estudante2 = {};
estudante2.nome = 'Ana Maria'
console.log(estudante2);
```

Obtemos como retorno:

```JavaScript
{
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
  telefone = '551199999999'
}
{
  nome: 'José Souza',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
  telefone = '551199999999'
}
{
  nome: 'Ana Maria'
}
```

Observe que estudante2 só tem uma propriedade no objeto, que é o nome "Ana Maria".

Conclusão  
Há mais formas de manipular objetos que aprenderemos em seguida.

### Aula 1 - Para saber mais: como deletar uma propriedade?

Já vimos como acessar, alterar e adicionar valores em um objeto. Mas ainda falta falarmos de um caso: e quando queremos deletar um conjunto de chave e valor?

Vamos considerar o objeto abaixo:

```JavaScript
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}
```

Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:

```JavaScript
delete objPersonagem.aliado 
console.log(objPersonagem.aliado) //undefined
```

Também é possível utilizar a notação de colchetes:

```JavaScript
delete objPersonagem.aliado
delete objPersonagem["status"]
 
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
```

Importante! Note que o delete remove do objeto o valor da propriedade, assim como a chave.

Após remover as duas propriedades acima, o objeto agora está desta forma:

```JavaScript
{
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
}
```

O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:

```JavaScript
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]
 
console.log(delProp) //true
console.log(delPropInexistente) //true
```

### Aula 1 - Novos campos

Considere o seguinte código:

```JavaScript
const pessoa = {
   nome: "Bruce Banner",
   dataNascimento: "25/01/1980",
   carteiraIdentidade: "997776-X",
   email: "profbanner@email.com",
   telefone: "+552877776666",
   cidade: "Cachoeiro de Itapemirim",
   estado: "ES"
}
```

Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos seguro social e cpf no formato string. Além disso, quando forem exibidas as informações da pessoa em um relatório, deverão aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade.

Sabendo disso, analise as afirmações abaixo e selecione as verdadeiras:

Selecione 3 alternativas

Respostas:  

1. Para exibir os 4 primeiros dígitos da identidade e CPF, podemos chamar uma função de string chamada substring() e passar início e o fim que queremos como pessoa.cpf.substring(0,4).  
Como os campos identidade e CPF são do tipo string, podemos invocar o método substring() passando para a função a faixa da string que queremos retornar.

2. Para adicionar as novas propriedades, precisamos somente informar o novo campo e o seu valor, ou seja,pessoa.cpf = "15346626522-65" e pessoa.seguroSocial = "854321985-9".  
É isso mesmo! Podemos usar a notação de ponto para adicionar novos campos a objetos já criados, lembrando de iniciar o campo adicionado.

3. Para adicionar os campos de seguro social e CPF, deve-se utilizar a notação de ponto como pessoa.cpf e pessoa.seguroSocial.  
Apesar de exibir as informações do objeto pessoa.cpf e pessoa.seguroSocial vazios no console, desta maneira ele também não irá acusar nenhum erro.

### Aula 1 - Mão na massa: criando objetos

Nesta aula, começamos a aprender sobre a estrutura de dados chamada de objetos, muito importante em linguagens de programação modernas. Estudamos como criar um objeto, adicionar propriedades e alterar seus valores.

Agora é a sua vez! Crie o seu objeto, adicione propriedades a ele e altere seus valores. Caso fique com dúvidas, você pode clicar em "Ver opinião" para conferir como o código pode ser desenvolvido.

Opinião do instrutor

Vimos um pouco da motivação por trás da estrutura de dados conhecida como objetos. Por exemplo:

```JavaScript
const listaCPFs = [1111111, 22222, 3333];
const objetoPessoa = {
  idade: 32,
  nome: "Jose",
};
```

Conhecemos a primeira forma de acessar os campos (propriedades) de um objeto passando a chave e recebendo o valor armazenado. Por exemplo:

```JavaScript
const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};
console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
```

Vimos também outra forma de acessar propriedades, passando uma string ou uma variável entre colchetes [ ]. Por exemplo:

```JavaScript
const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};
console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);
const chaves = ["nome", "idade", "cpf", "email", "altura"];
chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
```

E também vimos a possibilidade de criar novas propriedades ou alterar os valores guardados em uma determinada chave:

```JavaScript
const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};
console.log(pessoa.nome);
console.log(pessoa.telefone);
pessoa.telefone = "11 2223333444";
console.log(pessoa.telefone);
pessoa.nome = "Luma Silva";
console.log(pessoa);
const novaPessoa = {
  nome: "Pedro",
};
pessoa = novaPessoa;
```

### Aula 1 - Desafio: lista de exercícios

Criamos uma lista de exercícios para você colocar em prática tudo que aprendemos durante essa aula.

1. Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.

No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

2. Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

3. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

4. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

No final do arquivo livro.js, adicione uma avaliação ao objeto.

Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

5. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

6. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

Opinião do instrutor

Resolução 1

```JavaScript
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
    Gênero: ${livro.genero}`)
```

Resolução 2

```JavaScript
// livro.js
const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoDePublicacao: 1954,
    genero: "Fantasia",
};
// Adicionando a propriedade idadePublicacao diretamente ao objeto livro
livro.idadePublicacao = anoAtual - livro.anoDePublicacao;
// Criando uma string com os detalhes do livro, incluindo a idade de publicação
livro.mostrarDetalhes = "Detalhes do Livro:\n" +
                        "Título: " + livro.titulo + "\n" +
                        "Autor: " + livro.autor + "\n" +
                        "Ano de Publicação: " + livro.anoDePublicacao + "\n" +
                        "Gênero: " + livro.genero + "\n" +
                        "Idade de Publicação: " + livro.idadePublicacao + " anos";
// Exibindo os detalhes do livro no console
console.log(livro.mostrarDetalhes);
```

Resolução 3

```JavaScript
// livro.js
const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
};
// Exemplos de acesso direto às propriedades do objeto livro
console.log("Detalhes do Livro:");
console.log("Título: " + livro['titulo']);
console.log("Autor: " + livro['autor']);
console.log("Ano de Publicação: " + livro['anoPublicacao']);
console.log("Gênero: " + livro['genero']);
console.log("Idade de Publicação: " + livro['idadePublicacao'] + " anos");
```

Resolução 4

```JavaScript
// livro.js
const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: null, // Nova propriedade para armazenar a avaliação
};
// Adicionando uma avaliação fictícia ao objeto livro
const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro.avaliacao === null) {
    livro.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
}
// Exibindo detalhes do livro, incluindo a avaliação
console.log("Detalhes do Livro:");
console.log("Título: " + livro.titulo);
console.log("Autor: " + livro.autor);
console.log("Ano de Publicação: " + livro.anoPublicacao);
console.log("Gênero: " + livro.genero);
console.log("Idade de Publicação: " + livro.idadePublicacao + " anos");
console.log("Avaliação: " + (livro.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro.avaliacao.nota + ", Comentário: \"" + livro.avaliacao.comentario + "\""));
```

Resolução 5

```JavaScript
// livro.js
const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: null
};
// Alteração direta do gênero do livro
livro.genero = "Aventura";
// Exibição dos detalhes do livro no console
console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    Idade de Publicação: ${livro.idadePublicacao} anos
    Avaliação: ${livro.avaliacao === null ? "Nenhuma avaliação disponível." : `Nota: ${livro.avaliacao.nota}, Comentário: "${livro.avaliacao.comentario}"`}`)
```

Resolução 6

```JavaScript
// livro.js
const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
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
    Avaliação: Nenhuma avaliação disponível.`)
```

## Aula 2 - Manipulando Objetos

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
