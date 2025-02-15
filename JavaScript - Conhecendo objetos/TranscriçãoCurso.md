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

### Aula 2 - Tipos de dados e valores - Vídeo 1

Transcrição  
Até agora, praticamos com propriedades que têm valores primitivos. Criamos um arquivo chamado dados-valores.js e colamos nele o objeto estudante.

Por enquanto, nosso objeto estudante só tem propriedades que são strings, como nome, cpf e idade. Poderíamos acrescentar uma propriedade booleana, por exemplo, se o aluno é bolsista ou não. Para isso, acrescentamos a propriedade bolsista recebendo o valor true.

dados-valores.js:

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true
}
```

Esses são dados que chamamos de primitivos em JavaScript. O que acontece quando precisamos detalhar e elaborar ainda mais os dados guardados no objeto estudante?

Tipos de dados e valores  
Por exemplo: no fim do objeto estudante, vamos acrescentar uma propriedade que chamaremos de telefone, que tinha faltado no vídeo anterior. Essa propriedade receberá a string "551199999998".

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefone: '551199999998'
}
```

Agora o estudante tem um dado de telefone. Se a pessoa tiver mais de um telefone, como fazemos? Criamos mais uma propriedade, chamando a primeira propriedade de telefone1 e a segunda de telefone2, esta com o segundo número de telefone da pessoa?

Essa repetição de telefone1, telefone2, e assim por diante, não parece uma boa solução. Porém, já estudamos uma estrutura de dados que existe justamente para juntar dados de um mesmo tipo, que são os arrays (listas). Dito isso, como podemos refatorar este código?

Refatorando o código de dados-valores.js
Teremos apenas uma propriedade de telefone, chamada telefones, e o valor dessa propriedade será um array. Para isso, abrimos colchetes e, entre eles, acrescentamos os dois números de telefone.

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
}
```

Agora a propriedade telefones deixa de ser uma propriedade do tipo string e passa a ser do tipo array, com dois elementos. Feito isso, como acessamos um telefone ou outro? Após a declaração do objeto, usaremos o método console.log(), recebendo entre parênteses estudante.telefones.

```JavaScript
// código omitido
console.log(estudante.telefones);
```

Testando o código  
Após salvar o arquivo, podemos abrir o terminal e executar o seguinte comando:

> node dados-valores.js

Com isso, exibimos no console um array com os dois valores:

> [ '551199999998', '551199999993' ]

Se queremos apenas o primeiro telefone, como acessamos a primeira posição, isto é, o primeiro elemento de um array? Usamos a notação de colchetes após estudante.telefones e passamos o índice 0, que sabemos sempre ser a primeira posição do array.

Resultado do arquivo dados-valores.js:

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
}
console.log(estudante.telefones[0]);
```

De volta ao terminal, se executarmos novamente o comando node dados-valores.js, ele retorna o primeiro número fora do array, apenas um dado string com o número do telefone.

Conclusão  
O que é importante ter em mente? Assim como com a string anteriormente, que a partir do momento que acessamos o nome, conseguimos usar métodos de string para alterá-lo, fizemos o mesmo com o telefone. Acessamos estudante.telefones e, a partir disso, conseguimos fazer com o array telefones qualquer operação que faríamos com qualquer outro array que estivesse guardado em uma variável.

Ou seja, acessamos arrays para usar métodos de arrays, acessamos strings para usar métodos de string, e assim por diante. Porém, e se precisarmos de mais um nível de complexidade nos dados que queremos guardar nesse objeto? Abordaremos isso em seguida!

### Aula 2 - Selecione os tipos adequados

Você precisa criar a estrutura de um novo objeto para representar uma pessoa estudante no sistema de uma universidade com os seguintes campos:

- Nome: um campo de texto com o nome completo;
- Matrícula: um número inteiro;
- Curso: um campo de texto contendo o curso atual;
- Matérias: um conjunto de textos contendo apenas os nomes das matérias que a pessoa estudante está cursando.

Seguindo as práticas vistas até aqui e a lista de campos acima, marque a alternativa contendo a implementação de um objeto que mais se aproxima do objeto de um determinado estudante.

Resposta:

```JavaScript
const estudante = {
  nome: "Adilson Josué de Freitas",
  matricula: 201542290,
  curso: "Engenharia eletrônica",
  materias: [
    "Cálculo 1",
    "Álgebra Linear",
    "Práticas de Laboratório",
    "Metodologia",
  ],
};
```

A alternativa segue fielmente o que foi definido nos requisitos.

### Aula 2 - Objetos em objetos - Vídeo 2

Transcrição  
Vamos continuar estruturando objetos de acordo com a "vida real". Usamos um array para agrupar dados de um mesmo tipo, nesse caso, telefones. Mas o que acontece quando precisamos avançar na complexidade dos dados? Por exemplo: quando um array não dá conta, o que fazemos?

Em que situação uma pessoa estudante poderia se deparar com isso? No caso de um endereço. Como adicionaríamos um endereço a uma pessoa estudante?

Objetos em objetos  
Já criamos um novo arquivo chamado objs-aninhados.js e colamos nele o último objeto que trabalhamos, estudante, inclusive, com a lista de telefones.

objs-aninhados.js:

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
}
```

Adicionando o endereço da pessoa estudante  
A partir disso, vamos adicionar o endereço. Após a declaração do objeto estudante, vamos chamar estudante.endereco, onde poderemos atribuir um novo valor. Vamos abrir e fechar chaves, porque no lugar de uma string com um endereço inteiro, o que fica confuso, vamos criar outro objeto.

Assim, após adicionar estudante.endereco, criamos a propriedade endereco que ainda não existia, e após o sinal de atribuição =, abrimos e fechamos chaves. O que o endereço precisa ter?

Precisamos ter uma rua, então vamos criar a chave rua, cujo valor será a string "Rua Joseph Climber". Um endereço pode ter número também. Passaremos a chave numero, mas vamos inserir o dado como uma string, porque um número pode ter letras, como 45A, por exemplo. Além disso, o endereço pode ter complemento, então a próxima propriedade será complemento, recebendo "apto 43".

Com isso, temos nosso endereco. Posteriormente, podemos adicionar cidade, estado, cep, e assim por diante. Podemos conferir como ficou o resultado com o método console.log() na última linha, recebendo estudante para verificar se entrou a propriedade endereco como gostaríamos.

```JavaScript
// código omitido
estudante.endereco = {
  rua: 'Rua Joseph Climber',
  numero: '45',
  complemento: 'apto 43'
}
console.log(estudante);
```

Testando o código  
Após salvar o arquivo, podemos abrir o terminal e executar o seguinte comando:

> node objs-aninhados.js

Como retorno, ele traz o objeto completo, com a propriedade endereco adicionada com seu respectivo valor, que é um novo objeto ({}).

```JavaScript
{
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: [ '551199999998', '551199999993' ],
  endereco: { rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43' },
}
```

Como podemos pegar apenas o endereço, por exemplo, conforme feito anteriormente? Da mesma forma que acessamos outros tipos: em console.log(), passamos estudante.endereco.

```JavaScript
// código omitido
console.log(estudante.endereco);
```

Se voltarmos ao terminal e pedirmos para executar o arquivo objs-aninhados.js de novo, ele trará apenas o objeto com os dados do endereco que acabamos de criar:

> { rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43' }

O terminal exibe todas as propriedades desse objeto na mesma linha, lembrando que a quebra de linha em um objeto JavaScript é opcional. Usamos isso mais para formatar, mas ele pode exibir das duas formas. Dito isso, se quiséssemos pegar agora apenas a rua de todas essas propriedades, você já deve ter concluído que, no método console.log(), vamos chamar estudante.endereco.rua.

```JavaScript
// código omitido
console.log(estudante.endereco.rua);
```

Ao testar novamente no terminal, ele traz o dado "Rua Joseph Climber", que agora é uma string.

Conclusão  
Concluímos que, pelo fato de a propriedade endereco ser um objeto, da mesma forma que em propriedades string nós usamos métodos de string, e em propriedades que são array nós utilizamos métodos de array, em propriedades que são objetos nós interagimos da mesma forma. Sendo assim, podemos criar novas propriedades em estudante.endereco, manipular essas propriedades, e assim por diante.

Por que estruturamos dessa forma? Não faz muito sentido uma pessoa estudante ter uma propriedade rua. A pessoa estudante tem nome, tem cpf, tem endereco. Na vida real, um endereço tem uma rua, lembrando que, quando pensamos em objetos, tentamos fazer esses paralelos com o mundo real.

Portanto, não faz muito sentido uma pessoa estudante ter uma rua, mas um endereço ter uma rua e uma pessoa estudante ter um endereço, sim. É dessa forma que estruturamos os objetos.

Assim, quando precisamos juntar dados de um mesmo tipo, usamos arrays (ou listas), e quando precisamos juntar dados diferentes, mas que pertencem ao mesmo contexto, objetos. Seguindo a lógica, seria possível juntar listas com objetos? Descobriremos em seguida!

### Aula 2 - Para saber mais: qual o tipo de dado correto?

Até agora percebemos que objetos desempenham um papel crucial ao organizar e armazenar dados de forma mais complexa do que variáveis isoladas. Esses objetos podem conter diferentes tipos de dados, oferecendo flexibilidade na modelagem e representação de informações.

Confira alguns exemplos de como diferentes tipos de dados podem ser aplicados em objetos para representar de maneira eficaz informações específicas.

**String**  
Pode ser utilizado para armazenar o nome de uma pessoa ou o endereço completo.

```JavaScript
const pessoa = {
  nome: "João",
  endereco: "Rua das Flores, 123",
}
```

Também utilizamos string para representar dados como CPF, número de telefone e até mesmo cartão de crédito. Isso acontece porque esses dados possuem formatos específicos com caracteres especiais, como espaços, hifens e pontos. Além disso, esses números podem perder precisão para representar grandes inteiros. Isso pode ser um problema ao lidar com CPFs, que são números de 11 dígitos no Brasil. Representá-los como strings evita esse problema, pois é mais fácil manter o formato original e facilitar a validação.

```JavaScript
const pessoa = {
  telefone: "123456789",
  cpf: "12543652266",
}
```

**Number**  
Pode ser utilizado para armazenar informações numéricas:

```JavaScript
const produto = {
  preco: 29.99, 
  quantidadeEstoque: 50, 
}

const carro = {
  velocidadeMaxima: 200,
  consumoCombustivel: 12.5
};
```

**Boolean**  
O uso de valores booleanos em objetos é comum em situações em que precisamos representar estados de verdadeiro/falso, ativação/desativação, permissões de acesso, entre outros. Essas propriedades booleanas são frequentemente usadas em conjunto com estruturas de controle de fluxo para tomar decisões dinâmicas no código.

```JavaScript
// Objeto representando um usuário com permissões
const usuario = {
  nome: 'Alice',
  idade: 25,
  isAdmin: true // Propriedade booleana indicando se o usuário é um administrador
};
// Exemplo de uso em uma condição
if (usuario.isAdmin) {
  console.log(`${usuario.nome} tem permissões de administrador.`);
} else {
  console.log(`${usuario.nome} não é um administrador.`);
}
```

**Object**  
Permite criar objetos aninhados, úteis para representar estruturas mais complexas. Por exemplo, um objeto endereco dentro de um objeto pessoa.

```JavaScript
const pessoa = {
  nome: "Maria",
  endereco: {
    rua: "Avenida Principal",
    numero: “456”,
  },
}
```

**Números como string**  
Antes de definir o melhor tipo de dado, temos que pensar nos diversos valores que esse dado pode ter. o número de uma casa, por exemplo, é melhor representado como uma string, pois pode conter caracteres além de números (por exemplo, "123A"), ou outras variações dependendo do endereço.

```JavaScript
const endereco = {
  rua: "Rua das Flores",
  numero: "123A",
}
```

**Datas como objetos**  
Para representar datas, pode-se utilizar objetos do tipo Date, que oferecem métodos úteis para manipulação.

```JavaScript
const evento = {
  nome: "Aniversário",
  data: new Date(2000, 5, 15),
}
```

Datas e horas são tipos de informação mais complexos e seus formatos podem variar muito, inclusive dependendo do que está sendo usado pelo banco de dados. Para saber mais sobre [manipulação de datas com JavaScript](https://www.alura.com.br/artigos/trabalhando-com-datas-em-javascript), confira nosso artigo sobre o objeto Date e sobre os [diversos formatos de data](https://www.alura.com.br/artigos/objeto-format-date-e-formato-datas-em-javascript) utilizados no dia a dia.

A escolha do tipo de dado em um objeto depende da natureza dos dados que você está representando. Utilizar o tipo adequado facilita o entendimento do código e a manipulação dos dados de maneira eficaz. A escolha entre número, string, boolean, array, object etc., deve ser guiada pelas necessidades específicas do contexto em que o objeto está sendo utilizado.

### Aula 2 - Listas de objetos - Vídeo 3

Transcrição  
Estruturamos uma nova propriedade chamada endereco, e surge a pergunta: o que acontece se a pessoa tiver mais de um endereço? Um endereço comercial, outro residencial, outro para enviar presentes?

**Listas de objetos**  
Mais de um endereço significa mais de um dado do mesmo tipo, da mesma forma que tivemos com telefones. Porém, agora os dados são mais estruturados, então seriam mais objetos do tipo endereco.

Como das vezes anteriores, já criamos um arquivo chamado listas-objetos.js e transferimos os dois objetos que criamos no vídeo anterior para este: estudante e estudante.endereco.

listas-objetos.js:

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993']
}
estudante.endereco = {
  rua: 'Rua Joseph Climber',
  numero: '45',
  complemento: 'apto 43'
}
```

**Criando um array de objetos**  
Vamos fazer o seguinte: em vez de criarmos estudante.endereco e depois atribuir na constante estudante, passaremos a propriedade endereco diretamente para o objeto original estudante.

Portanto, copiaremos endereco para criar a propriedade em const estudante, que será seguida de dois-pontos, pois agora não fazemos mais uma atribuição. Em seguida, colamos o objeto que contém rua, numero e complemento. Feito isso, podemos deletar o objeto anterior (estudante.endereco).

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  endereco: {
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  }
}
```

Da mesma forma que fizemos com telefones, criando uma lista de array, podemos ter listas de objetos para cobrir esses casos em que a pessoa estudante tem mais de um endereço, ou uma lista de cursos que a pessoa estudante já cursou, e assim por diante.

Sendo assim, o que vamos fazer na propriedade endereco? Vamos envolver o único objeto que ela tem como valor em colchetes, criando um array com somente um elemento, que é todo o objeto dentro dele.

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  endereco: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  }]
}
```

Para entendermos melhor o que queremos dizer com um elemento dentro do array, vamos chamar duas vezes o método console.log() ao final do arquivo: um com estudante.endereco e outro com estudante.endereco no índice 0, pois temos somente um elemento na lista de objetos.

```JavaScript
// código omitido
console.log(estudante.endereco);
console.log(estudante.endereco[0]);
```

Testando o código  
Com o terminal aberto, vamos executar o seguinte comando:

> node listas-objetos.js

Como retorno, temos dois resultados: o primeiro é o array completo com o elemento dentro, isto é, o objeto com o endereço; e o segundo é apenas o objeto em si.

```JavaScript
[ { rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43' }
]
{ rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43' }
```

Quando começamos a trabalhar com listas de objetos, temos que prestar bastante atenção em onde começa e onde termina cada um dos elementos do array, porque todo o objeto de endereço que tem rua, numero, complemento, bairro, cidade, e assim por diante, irá ocupar apenas uma posição nesse array. Então, não importa o tamanho do objeto, ele sempre vai ocupar apenas uma.

Uma abertura e um fechamento de chaves correspondem a um elemento.

**Adicionando mais endereços ao array**  
Se agora a propriedade endereco é um array, isso significa que podemos utilizar métodos de array para, por exemplo, adicionar mais um endereço nesse array.

Para isso, ao final do arquivo, chamaremos estudante.endereco.push(), um método de array que já conhecemos anteriormente, responsável por adicionar ao estudante um endereço secundário.

O método push(), em vez de uma string ou de um número, terá um objeto, com abertura e fechamento de chaves entre parênteses. Feito isso, adicionaremos rua, numero e complemento para criar mais um endereço na propriedade. Usaremos as seguintes informações:

```JavaScript
// código omitido
estudante.endereco.push({
  rua: 'Rua Dona Clotilde',
  numero: '71',
  complemento: ''
})
```

Agora, se quisermos mover os métodos console.log() que adicionamos anteriormente para o final do arquivo, podemos selecionar as duas linhas e usar o atalho "Alt + Seta para baixo", para mover as linhas para baixo sem precisar copiar e colar.

```JavaScript
// código omitido
estudante.endereco.push({
  rua: 'Rua Dona Clotilde',
  numero: '71',
  complemento: null
})
console.log(estudante.endereco);
console.log(estudante.endereco[0]);
```

Testando o código  
Feito isso, vamos abrir um terminal novo e executar o comando abaixo:

> node listas-objetos.js

Com isso, ele traz primeiro o array atualizado com os dois objetos de endereço, e continua trazendo abaixo o índice 0, correspondente ao primeiro elemento do array, que é o endereço anterior.

```JavaScript
[
  { rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43' },
  { rua: 'Rua Dona Clotilde', numero: '71', complemento: '' }
]
{ rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43' }
```

A diferença é que agora o objeto de endereços tem dois elementos. Então, se usarmos console.log(estudante.endereco) no índice 1, ele vai trazer apenas o endereço que acabamos de adicionar, da rua Dona Clotilde.

**Criando uma nova constante**  
Falamos anteriormente que podemos utilizar qualquer método de array para fazer alterações em uma propriedade de objeto que seja do tipo array. Vamos fazer mais um teste para fixar essa ideia de que você pode utilizar qualquer método de array para interagir com esse tipo de propriedade?

Criaremos uma nova constante chamada listaEnderecosComComplemento. Nessa const, queremos acessar o objeto estudante e o array de enderecos, pedindo para ele retornar só endereços que tenham complemento. Lembrando que temos um objeto cujo complemento é uma string vazia.

Dito isso, vamos atribuir à constante o método estudante.endereco.filter(), para filtrar o array. O filter() é um método callback que já conhecemos no curso anterior de array, então ele precisa de uma arrow function (função de seta) recebendo endereco. O que queremos filtrar? Todas as ocorrências de objeto em que a propriedade endereco.complemento exista.

```JavaScript
// código omitido
const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)
```

Com isso, simplificamos o código. Falamos anteriormente nos cursos sobre tipos de dado true (verdadeiro) e false (falso). Nesse caso, o que pedimos para o filter() fazer é, para cada ocorrência no array de endereco, retornar só as ocorrências onde endereco.complemento seja true.

Lembrando que strings vazias são consideradas falsas (false), então não deve ser retornado o segundo endereço, apenas o primeiro.

Ao final do código, vamos chamar o resultado com o método console.log(listaEnderecosComComplemento), e além disso, vamos comentar os console.log() anteriores para não sobrecarregar o terminal.

```JavaScript
// código omitido
// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);
const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplemento);
```

Testando o código  
Com o terminal aberto, executamos novamente o comando node listas-objetos.js. Agora ele traz um array com apenas uma ocorrência, conforme esperado. O filter() é um método que sempre retorna um array com os resultados, e se ele não encontrar nada, retorna um array vazio.

Se trocarmos o valor de complemento no segundo endereço que adicionamos, de string vazia para null, por exemplo, que é outra forma de indicar um valor nulo, e executarmos novamente o comando no terminal, ele trará o mesmo resultado, porque null também é um valor falso.

Conclusão  
Sempre devemos pensar no tipo de dado que a propriedade retorna para nós. Como temos um objeto dentro de um objeto, precisamos acessar o primeiro objeto estudante, e depois acessar o objeto endereco. endereco é um array, e dentro desse array, conseguimos usar métodos, como o push() para adicionar o endereco, o filter() para filtrar endereços, entre outros.

O interessante é pensar como acessamos a propriedade (se é com ponto ou com colchetes), se essa propriedade é uma string, se é um array, como pegamos os dados, e como manipulamos esses dados.

Em resumo, já sabemos que um objeto pode ter chave e valor. O valor pode ser um primitivo, por exemplo, string, número, ou booleano; pode ser um array de dados; pode ser um objeto, como da primeira vez que fizemos o endereco; e pode ser um array de objetos. Porém, falta algo que ainda podemos colocar no objeto. Descobriremos em seguida!

### Aula 2 - Funções - Vídeo 4

Transcrição  
Os objetos refletem, de certa forma, o mundo real. Além de propriedades como nome, endereco e telefone, uma pessoa estudante pode ter comportamentos.

A pessoa estudante pode se matricular em um curso, encerrar o curso, abrir uma matrícula, encerrar uma matrícula. Dito isso, como atribuímos um comportamento a um objeto? É agora que entram as funções.

**Funções**  
No projeto, criamos um arquivo chamado funcoes.js, e colamos nele o nosso objeto estudante. Removemos a propriedade endereco para o objeto não ficar muito extenso.

funcoes.js:

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993']
}
```

Adicionando novas propriedades  
Suponha que precisamos obter as médias desse estudante e determinar se está aprovado ou não. Como poderíamos fazer isso? Criando mais uma propriedade dentro desse objeto, chamada media.

A media desse estudante será, por exemplo, 7.5, um número. Em seguida, vamos criar outra propriedade, mas dessa vez, de uma forma um pouco diferente. Ela será chamada de estaAprovado.

Quando se faz uma pergunta, como estaAprovado, normalmente, queremos saber se é verdadeiro ou falso.

Criando uma função  
Após, estaAprovado, chamaremos a palavra-chave function(), e passaremos como parâmetro mediaBase. Feito isso, vamos abrir e fechar chaves, como uma função normal, e retornaremos (return) this.media >= mediaBase ? true : false.

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  media: 7.5,
  estaAprovado: function(mediaBase) {
    return this.media >= mediaBase ? true : false;
  }
}
```

Com isso, basicamente pegamos o objeto e, em vez de atribuir um valor, um dado como um número, uma string, um array, passamos para esse objeto uma função, e essas funções darão comportamento para o nosso objeto, seja uma pessoa usuária, seja uma escola, e assim por diante.

O nome, isto é, a chave por onde pegamos esse valor, chamamos de estaAprovado, que será o nome da função. A estrutura normal de função é function, abertura e fechamento de parênteses, parâmetros, abertura e fechamento de chaves, e entre as chaves, o comportamento da função.

Dentro da função, fazemos uma pergunta, criando uma condicional com o operador ternário. Queremos saber se a média é maior ou igual do que a mediaBase, que passamos como parâmetro de function(). Se for maior ou igual, essa função retorna true, se não for, retorna false.

Lembrando que chamamos a propriedade de estaAprovado, porque queremos saber se algo é ou não.

O que significa this.media? A palavra-chave media é uma propriedade que está dentro do mesmo objeto, a qual criamos anteriormente passando o valor 7.5. Já a palavra-chave this significa literalmente "isso". Vamos testar para conferir se funciona?

Testando o código  
Após o objeto, chamamos o método console.log(), e precisamos executar a função dentro dele. Para acessar a função, chamamos estudante.estaAprovado().

Com isso, entramos no objeto estudante e acessamos a função. Sendo uma função que espera um parâmetro, o qual chamamos de mediaBase, precisamos passá-lo entre parênteses.

Digamos que a mediaBase na nossa escola seja 7. Então, vamos passar o número 7 entre parênteses. Assim, o operador ternário poderá fazer a comparação que está dentro da função.

```JavaScript
// código omitido
console.log(estudante.estaAprovado(7));
```

Após salvar, podemos abrir o terminal e executar o comando abaixo:

> node funcoes.js

Ele retorna "true", porque o valor da propriedade media é 7.5, ou seja, maior que ou igual a 7.

**Palavra-chave this**  
A palavra-chave this que mencionamos anteriormente significa literalmente "isso". O JavaScript utiliza essa palavra-chave para fazer referência ao contexto da função.

Em uma função que está dentro de um objeto, precisamos dizer qual é o contexto em que ela trabalha. No caso, o contexto da função estaAprovado() é o objeto onde ela está inserida, ou seja, this.

Portanto, this.media é como se fosse a média deste objeto onde queremos que seja executado. Sem a palavra-chave this, se colocássemos apenas return media >= mediaBase ? true : false, o JavaScript ficaria perdido e não saberia a qual media nos referimos.

De onde sai essa media? Onde procurar esse valor variável? Sendo assim, a palavra-chave this dá contexto, prende uma referência ao objeto onde queremos que essa função seja executada.

Há um detalhe muito importante sobre o this e sobre funções. Utilizamos a função com a palavra-chave function, que é uma das formas de se escrever funções em JavaScript. Vamos fazer um teste?

Refatorando a função  
Vamos refatorar estaAprovado: removeremos a palavra-chave function e substituiremos por uma arrow function (função de seta). Assim, teremos estaAprovado: (mediaBase) => this.media >= mediaBase ? true : false. Utilizamos a sintaxe resumida da arrow function, sem a palavra-chave return e as chaves.

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  media: 7.5,
  estaAprovado: (mediaBase) => this.media >= mediaBase ? true : false
}
```

O código acima é apenas um teste. Após realizá-lo, podemos voltar à estrutura anterior.

Se fizéssemos desta forma, o JavaScript não acusaria nenhum erro. Porém, se tentássemos executar no terminal, ele não daria a resposta esperada e retornaria "false". Por quê?

Ao contrário da função normal, a arrow function tem algumas diferenças, sendo uma delas que ela não consegue lidar com essa questão de contexto. Portanto, lembre-se ao criar seus métodos, que não é possível fazer essa troca de function() por arrow function dentro do objeto. Ele perderá essa referência e não conseguirá usar o this.

Analisando o console.log()  
Vamos analisar o console.log()? Para executar a função estaAprovado(), chamamos estudante.estaAprovado() e colocamos o parâmetro entre parênteses.

Isso quer dizer que o próprio console.log() é uma função que existe dentro de um objeto chamado console? Exatamente. Da mesma forma que criamos nossos objetos enquanto codificamos, e dentro deles, criamos as funções, o JavaScript também tem seus objetos prontos com suas funções dentro deles.

Toda vez que utilizamos essa sintaxe, com um nome seguido de ponto (.) e de outra palavra com abertura e fechamento de parênteses ao final, recebendo o parâmetro entre eles, utilizamos objetos prontos. O console, por exemplo, é considerado um objeto global do Node.

Sendo assim, utilizamos objetos prontos do JavaScript que têm funções prontas dentro deles, as quais recebem os seus parâmetros e executam conforme esperado.

Conclusão  
Tudo que trabalhamos no JavaScript é, basicamente, ou a propriedade de um objeto, ou uma função que está dentro de um objeto. Uma função executada dentro do contexto de um objeto é chamada de método. Por isso, arrays têm métodos de array, que são basicamente funções; por isso strings têm métodos de string; e quando criamos nossos objetos, criamos nossos próprios métodos, neste caso, estaAprovado.

O método nada mais é do que uma função executada dentro do contexto de um objeto. Nós criamos os nossos próprios e também usamos os prontos do JavaScript.

Na sequência, vamos continuar manipulando objetos, agora de forma um pouco mais complexa!

### Aula 2 - Para saber mais: entendendo o this

No contexto de um objeto em Node.js, this refere-se ao próprio objeto no qual a função está sendo chamada. Ela é uma referência dinâmica, o que significa que o valor de this pode mudar dependendo do contexto em que a função é chamada.

No caso de métodos de objetos, o this se liga ao objeto que chamou o método. Confira este exemplo:

```JavaScript
const pessoa = {
  nome: "Maria",
  idade: 30,
  apresentar: function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};
pessoa.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
```

Aqui, this dentro da função apresentar faz referência ao objeto pessoa, a partir de onde a função está sendo executada.

**Arrow functions e o this**  
As arrow functions não possuem um this próprio. Em vez disso, elas herdam o valor de this do contexto em que foram definidas. Isso pode causar problemas em métodos de objetos, pois this pode não se referir ao objeto esperado. Por exemplo:

```JavaScript
const pessoa = {
  nome: "João",
  idade: 25,
  apresentar: () => {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};
pessoa.apresentar(); // Saída: Olá, meu nome é undefined e eu tenho undefined anos.
```

Neste exemplo, this dentro da função de seta não se refere ao objeto pessoa, resultando em valores indefinidos para nome e idade.

Conclusão  
Ao trabalhar com objetos em Node.js, é crucial compreender o comportamento de this para garantir referências corretas. Arrow functions podem ser inadequadas em certos contextos, especialmente ao definir métodos de objetos. Em vez disso, opte por funções tradicionais ao criar métodos em objetos para garantir que this seja vinculado ao contexto apropriado, facilitando o acesso e manipulação de dados de forma consistente.

#### Aula 2 - Manipulando objetos

Trabalhar com objetos em JavaScript permite que utilizemos diversos tipos de dados, desde primitivos (string, number, boolean) até tipos mais complexos como arrays ou outros objetos.

Observe o código abaixo:

```JavaScript
const cliente = {
  nome: "Jose",
  idade: 33,
  email: "jose@email.com",
  telefones: ["+550033338888", "+550033334444"]
};
cliente.animalEstimacao = [{
  nome: "Kripto",
  raca: "Cão",
  vacinado: true
}];
cliente.animalEstimacao.push({
  nome: "Lex",
  raca: "Gato",
  vacinado: false
})
```

Na representação do cliente, o objeto é composto por diversas propriedades de diferentes tipos, incluindo arrays e objetos.

Sabendo disso, analise as afirmações abaixo e selecione a alternativa verdadeira:

Resposta:  
O cliente possui uma propriedade chamada animalEstimacao, um array de objetos, o que nos permite usar funções comuns a arrays como filter().

A afirmação está correta. A propriedade animalEstimacao é um array de objetos, permitindo a utilização de funções como filter().

### Aula 2 - Para saber mais: Cópia vs Referência em objetos

Vimos anteriormente como é a estrutura de um objeto, com seus pares de chave e valor:

```JavaScript
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}
```

O exemplo acima, assim como o que estamos criando durante esta aula, é o de um objeto literal.

Um objeto literal é um objeto criado com a notação literal, ou seja, uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.

Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:

```JavaScript
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}
const objPersonagem2 = objPersonagem
```

Se alterarmos apenas o objPersonagem2, o resultado é:

```JavaScript
const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Saruman"
 
console.log(objPersonagem.nome) //Saruman
console.log(objPersonagem2.nome) //Saruman
```

A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):

```JavaScript
let num = 50
let num2 = num
 
num2 = 100
console.log(num) //50
console.log(num2) //100
```

Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():

```JavaScript
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}
 
const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Saruman"
 
console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Saruman
```

O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.

Você pode ver mais exemplos do método [Object.create() na documentação do MDN]().

### Aula 2 - Desafio: lista de exercícios

1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

- nome (string): Nome da pessoa.
- idade (number): Idade da pessoa.
- solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
- hobbies (array): Lista de hobbies da pessoa.

Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

- rua (string): nome da rua.
- cidade (string): nome da cidade.
- estado (string): nome do estado.

Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

- nome (string): nome da pessoa.
- idade (number): idade da pessoa.
- cidade (string): cidade de residência da pessoa.

Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.

4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

- soma: uma função que aceita dois parâmetros e retorna a soma deles.
- subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
- multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
- divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.

a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.

5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

- titular: uma string representando o titular da conta.
- saldo: um número representando o saldo da conta.
- depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
- sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. 

Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.

Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

- nome: uma string representando o nome do cliente.
- conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).

Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.

Opinião do instrutor

Resolução 1

```JavaScript
// infoPessoa.js
const pessoa = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Fotografia"]
};
function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
}
// Chamada da função mostrarInfoPessoa
mostrarInfoPessoa(pessoa);
```

Resolução 2

```JavaScript
// infoPessoa.js
const pessoa = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Fotografia"],
    endereco: {
        rua: "Rua Principal",
        cidade: "Cidade Feliz",
        estado: "Estado Alegre"
    }
};
function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
    console.log("Endereço:");
    console.log(`Rua: ${pessoa.endereco.rua}`);
    console.log(`Cidade: ${pessoa.endereco.cidade}`);
    console.log(`Estado: ${pessoa.endereco.estado}`);
}
// Chamada da função mostrarInfoPessoa
mostrarInfoPessoa(pessoa);
```

Resolução 3

```JavaScript
// listaPessoas.js
const listaPessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
];
function mostrarListaPessoas(pessoas) {
    console.log("Lista de Pessoas:");
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}
function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}
// Chamada da função mostrarListaPessoas
mostrarListaPessoas(listaPessoas);
// Adição de uma nova pessoa à lista
listaPessoas.push({ nome: "Ana", idade: 28, cidade: "Salvador" });
// Chamada da função mostrarListaPessoas após a adição
mostrarListaPessoas(listaPessoas);
// Chamada da função filtrarPorCidade
const pessoasSalvador = filtrarPorCidade(listaPessoas, "Salvador");
console.log("Pessoas em Salvador:");
console.log(pessoasSalvador);
```

Resolução 4

```JavaScript
// funcoesObjeto.js
const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Divisão por zero não é permitida.";
        }
    },
    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};
// Chamadas das funções
console.log("Soma: " + calculadora.soma(5, 3));
console.log("Subtração: " + calculadora.subtracao(8, 4));
console.log("Multiplicação: " + calculadora.multiplicacao(6, 2));
console.log("Divisão: " + calculadora.divisao(10, 2));
console.log("Divisão por zero: " + calculadora.divisao(8, 0));
const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));
```

Resolução 5

```JavaScript
const contaBancaria = {
    titular: "João",
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
};
const cliente = {
    nome: "Carlos",
    conta: contaBancaria
};
function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}
// Realize operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500);
cliente.conta.sacar(200);
// Chame a função mostrarSaldo para exibir as informações atualizadas
mostrarSaldo(cliente)
```

### Aula 2 - O que aprendemos?

Nesta aula, você aprendeu que:

- Para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
- Os valores das propriedades de um objeto podem ser tipos primitivos (strings, números, booleanos e null), arrays ou outros objetos;
- Além das propriedades, um objeto também pode ter métodos. Métodos são funções que atribuem comportamento a um objeto.

## Aula 3 - Percorrendo Objetos

### Aula 3 - for...in - Vídeo 1

Transcrição  
Até agora, trabalhamos com objeto estudante que possui diversas propriedades, como nome, idade, etc. Se quiséssemos iterar (repetir), ou seja, percorrer todas as propriedades do nosso objeto estudante, já aprendemos como fazer isso com arrays. Então, como fazer isso com um objeto?

**Percorrendo objetos**  
Criamos um arquivo chamado for-in.js, onde copiamos nossa constante estudante, já com um array de endereços. Vamos alterar para de endereco para enderecos na linha 15, o nome da nossa propriedade. Ou seja, um array com um objeto.

for-in.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  }]
}
estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
})
```

Anteriormente, tínhamos feito um push() para criar um segundo endereço, mas vamos remover o segundo objeto desse push (endereço).

Trecho removido pela instrutora (ela deixou copiado o objeto dentro do push para usar posteriormente):

```JavaScript
estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
})
```

Assim, ficamos com:

for-in.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  }]
}
```

Na sequência, adicionamos esse segundo endereço dentro do nosso array de endereços. Ao trabalharmos com listas de objetos, precisamos ter cuidado ao copiar e colar trechos de código para garantir que as chaves e colchetes estejam nos lugares corretos.

Entre o colchete de fechamento do array enderecos, a chave de fechamento do nosso objeto de rua "Joseph Climber" e o colchete de fechamento do array, adicionamos uma vírgula, quebramos uma linha e colamos o segundo objeto.

for-in.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
    }]
}
```

Assim, nosso array agora tem dois elementos: um objeto com três linhas, separados por vírgula, e o segundo objeto.

No array separamos os elementos utilizando vírgula

Interagindo com o objeto com for in
Para interagir com este objeto, vamos utilizar um método chamado for in. Lembrando que os objetos não têm ordem, então, como funciona o for in se não conseguimos acessar um índice de um objeto?

Após o nosso objeto estudante, escrevemos for (let chave in estudante) { console.log(chave); }. Chamamos a let de chave pelo fato de usarmos chave e valor em uma propriedade. O console é para visualizarmos o que temos dentro dessa chave.

for-in.js

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
    }]
}

for (let chave in estudante) {
    console.log(chave);
}
```

Portanto, a sintaxe será for (let chave in estudante). Lembrem-se que, quando aprendemos arrays trabalhamos com o for of. Seguindo no for() passamos estudante, que é o nome da variável que está guardando o nosso objeto (linha 1). Salvamos o arquivo e abrimos o terminal para rodar o seguinte comando:

> node for-in.js

Obtemos como retorno:

```JavaScript
nome
idade
cpf
turma
bolsista
telefones
enderecos
```

Ao executar o código, percebemos que a cada iteração do nosso for(), a variável chave guarda os nomes das propriedades do nosso objeto (nome, idade, CPF, turma, bolsistas, telefones, endereços), ou seja, as chaves do nosso objeto.

Com isso, identificamos o que essa variável chave armazena (podemos inserir outro nome, dado que é apenas uma variável de controle).

Percorrendo o valor de cada propriedade do objeto
Para acessar o valor dessa chave, aprendemos lá atrás que precisamos chamar o objeto para acessar essa propriedade. Por exemplo, estudante.nome acessa o valor do nome. Ou estudante.cpf acessa o valor do CPF.

Isso tanto faz se usarmos a notação de ponto (estudante.nome, pois sabemos que existe a propriedade de nome) ou notação de colchetes (estudante['nome']).

Podemos usar a notação de colchetes no nosso for(), para conseguirmos percorrer e acessar os valores de cada propriedade do nosso objeto. Dentro do nosso for, ao invés de fazer um console.log(chave), vamos fazer um console.log(estudante[chave]).

for-in.js

```JavaScript
// código omitido
for (let chave in estudante) {
    console.log(estudante[chave]);
}
```

Da mesma forma que aplicamos anteriormente, ele vai acessar o objeto estudante, vai ver qual é a chave correspondente e vai trazer o valor.

Quando executamos o código rodando o comando node for-in.js no terminal, ele traz exatamente da forma que queríamos: apenas os valores.

```JavaScript
José Silva
32
12312312312
Javascript
true
['551199999998', '551199999993']
{ rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43'} { rua: 'Rua Dona Clotilde', numero: '71', complemento: null }
```

Temos o nome José Silva, 32, o CPF. Os valores do array completo. Então, o array de telefones, o array de endereços e assim por diante.

Refatorando o for()
Vamos refatorar esse for() para visualizar um pouco melhor o que está acontecendo.

Dentro do for(), antes do console.log(), criamos uma constante texto cujo valor será um template string: a chave ${chave} tem o valor ${estudante[chave]}.

Com isso, montamos um texto com essa informação para ficar um pouco mais visualizável no console. Na sequência, solicitamos um console.log() da variável texto.

for-in.js

```JavaScript
// código omitido
for (let chave in estudante) {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
}
```

Pode ser uma constante em const texto? Sim, porque como estamos iterando o objeto, cada vez que passar pelo for(), essa const será criada novamente. Portanto, não precisamos usar let.

Ao executar o código com o comando node for-in.js, notamos algo interessante no retorno:

```JavaScript
a chave nome tem o valor José Silva
a chave idade tem o valor 32
a chave cpf tem o valor 12312312312
a chave turma tem o valor JavaScript
a chave bolsista tem o valor true
a chave telefones tem o valor 5511999999998,5511999999993
a chave enderecos tem o valor [object Object],[object Object]
```

Para os valores primitivos, por exemplo, string, number, etc., ele traz corretamente. A chave nome possui o valor José, a idade tem valor 32, etc. Porém, a chave enderecos não mostra os endereços para nós. Ele indica que a chave enderecos tem o valor [object Object].

Talvez você já tenha se deparado com esse [object Object] em sites que ocorre algum erro inesperado.

O que é o [object Object]? Ele é o resultado do JavaScript tentando converter um objeto para string, que foi o que pedimos para fazer quando colocamos essa propriedade dentro de um template string: a chave ${chave} tem o valor ${estudante[chave]}.

O template string captura o valor e quando coloca isso dentro da string, ele vai converter isso também. Então, o número deixa de ser número, passa a ser string.

Um objeto deveria deixar de ser um objeto e passar a ser uma string. No entanto, um objeto é uma estrutura de dados complexa e o JavaScript não consegue converter isso num monte de texto de uma forma plana. Então, quando isso acontece, o JavaScript avisa com [object Object].

Observe que novamente o JavaScript não retorna um erro, apenas informa com [object Object].

Como contornamos isso dentro do nosso for()? A primeira coisa que vamos fazer é criar, dentro do for(), uma constante tipo que será igual a typeof estudante[chave];.

for-in.js

```JavaScript
// código omitido
for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
}
```

Essa variável irá armazenar o tipo (typeof) de dado a cada iteração. Portanto, para o caso do nome, a variável tipo irá conter uma string. Para o caso da idade, irá conter number, e assim por diante. Com JavaScript, qualquer coisa que não seja string, number, boolean ou function é considerado um objeto, inclusive o null, conforme discutido nas atividades do curso anterior.

Ou seja, quando o JavaScript detectar qualquer coisa que não seja nem objeto nem função, ele pode transformar em string e exibir normalmente. Então, depois de verificar o tipo, podemos fazer uma condição para dizer se ele exibe o texto ou não.

Adicionando uma condição  
Dentro do for(), depois de termos a nossa variável tipo, criamos um if(): if (tipo !== 'object' && tipo !== 'function') { console.log(texto); }. Ou seja, se tipo for diferente de object e diferente de function desejamos exibir o texto. Assim, ele converte os valores primitivos em texto.

Posteriormente, passamos o console.log(texto) e o texto para dentro do if().

for-in.js

```JavaScript
// código omitido
for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function')
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
}
```

Isso vai fazer com que os valores que são primitivos, as strings, os números, os booleans, sejam exibidos. Porém, o nosso objeto enderecos, que é complexo, e, por exemplo, se tivéssemos uma função dentro do objeto, que não colocamos, mas tínhamos uma função lá atrás, não queremos que o JavaScript tente exibir isso, porque ele vai resultar em [object Object].

Agora, exibimos apenas o que é, digamos, "exibível". Ao executar o código com o comando node novamente, não aparece mais [object Object], ele exibe apenas as propriedades que têm valores mesmo.

```JavaScript
a chave nome tem o valor José Silva
a chave idade tem o valor 32
a chave cpf tem o valor 12312312312
a chave turma tem o valor JavaScript
a chave bolsista tem o valor true
```

Então, um valor de string, um valor de um número de telefone, uma cidade, etc. Qualquer outra coisa que não seja isso, ou seja, dados mais complexos ou funções, ele passa direto.

É importante lembrar que em JavaScript, o typeof para array também retorna "object". Não há um "typeof array", específico para array. Essa é uma consideração fundamental que não deve ser esquecida ao realizar esse tipo de verificação.

Próximos Passos  
Agora já sabemos o que é o tal do [object Object]. Conseguimos refinar mais essa iteração, mas agora entendemos como usar o for in para iterar propriedades de objetos sem depender da ordem, pois o objeto não tem ordem e fazemos isso pelo valor da chave.

Vamos continuar fazendo mais alguns exercícios para percorrer objetos. Vamos lá!

### Aula 3 - Percorrendo objetos

Nas aulas anteriores, aprendemos que o JavaScript traz uma série de métodos próprios que nos ajudam a trabalhar com objetos. Um exemplo disso é o método for … in que permite a iteração sobre as propriedades de um objeto, de forma similar ao método for … of para arrays.

Sabendo disso, observe o código que define um objeto do tipo paciente:

const paciente = {
 nome: "James T.",
 idade: 30,
 email: "jt@email.com",
 identicacao: "Alpha01259859",
 funcao:"comandante",
 peso: 80.1,
 altura: 1.80,
 calcularIMC:function(){
       return (this.peso/(Math.pow(this.altura,2)))
 },
 nomeCompleto:function(){
   console.log(this.nome)
 }
}
Copiar código
Agora analise as opções abaixo e marque as verdadeiras:

Respostas:

1. Para a execução do código:

```JavaScript
for (let info in paciente) {
 console.log(info)
};
```

A saída esperada é a listagem do nome das propriedades do objeto paciente.

O loop definido no for … in irá retornar para a variável info que é o nome da chave do objeto, ou seja, o nome da propriedade do objeto.

2. Posso utilizar o método for … in como loop e exibir somente as propriedades do objeto que não são classificadas como objetos ou funções, como no código abaixo:

```JavaScript
for (let info in paciente) {
  if (!(typeof paciente[info] === "object" || typeof paciente[info] === "function")) {
    console.log(`${info} ==> ${paciente[info]}`);
  }
}
```

O for...in permite iterar sobre as propriedades de um objeto. No caso desse loop, temos a flexibilidade de percorrer o objeto e executar uma série de comparações, uma delas é usar o typeof e verificar o tipo da propriedade.

### Aula 3 - Métodos de objeto - Vídeo 2

Transcrição  
Vamos continuar manipulando objetos. Já criamos, na pasta do projeto, um novo arquivo chamado metodos-objeto.js e colamos nele o nosso objeto estudante com o array (lista) de dois endereços que estávamos utilizando.

Aprendemos como iterar um objeto, percorrendo e fazendo operações com cada uma de suas propriedades. Mas, e se quiséssemos pesquisar uma propriedade? Um objeto pode se tornar muito grande, ter várias propriedades. Como descobrimos se essa propriedade existe ou não, ou se queremos verificar seu valor? Para isso, vamos utilizar um método de objeto chamado Object.keys().

Encontrado chaves com Object.keys()  
Então, no nosso arquivo metodos-objeto.js, depois do nosso objeto estudante, vamos criar uma constante chamada chavesObjeto, que será igual a Object.keys(estudante). Note que Object deve iniciar com letra maiúscula. Em seguida, vamos usar console.log(chavesObjeto) para ver o que está acontecendo dentro dessa variável chavesObjeto.

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
   enderecos: [{
     rua: 'Rua Joseph Climber',
     numero: '45',
     complemento: 'apto 43'
   },
   {
     rua: 'Rua Dona Clotilde',
     numero: '71',
     complemento: null
  }]
}
const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);
```

Após salvarmos o arquivo e abrirmos o terminal, escrevemos o comando node metodos-objeto.js. Ao executarmos, o console nos retorna um array com uma lista de chaves. Agora nós sabemos que essas chaves são do nosso objeto estudante.

> node metodos-objeto.js

```JavaScript
[
    'nome',
    'idade',
    'cpf',
    'turma',
    'bolsista',
    'telefones',
    'enderecos'
]
```

Lembrete: Essas chaves entram no array como strings, portanto, temos uma lista de strings, cada uma referente à chave do objeto.

O que podemos fazer com essa informação? O que fazer com o array de chaves? Podemos fazer uma série de verificações, por exemplo, se existe uma propriedade no objeto ou não. Após criarmos nossa constante chavesObjeto, vamos fazer uma condicional (if()). Por exemplo, é importante que a pessoa estudante tenha a propriedade de endereço preenchida. Então, vamos dizer nesse if() que, se essa propriedade não existir, vamos emitir um aviso:

```JavaScript
//código omitido
const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
  console.error('é necessário ter um endereço cadastrado')
```

Então temos if (!chavesObjeto.includes('enderecos')) {...}. Lembrando, que a exclamação (!) é um operador de negação e o includes() é um método de array. Passamos dentro desse includes() o que queremos verificar se esse array tem ou não, no caso, a string 'enderecos', que é o nome da nossa chave endereço.

Então, se o objeto chavesObjeto, nossa lista de chaves, incluir a chave 'enderecos', podemos concluir que essa propriedade existe no objeto. Se não existir, por isso usamos a exclamação, vamos enviar um console.error, para mudar um pouco. Podemos usar ser um texto simples, como "'é necessário ter um endereço cadastrado'.

```JavaScript
const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
  console.error('é necessário ter um endereço cadastrado')
```

Dica: O console tem vários métodos além do .log(), como o .error() e o .table(), então vou deixar um material extra para você aprender mais.

Agora, podemos salvar o arquivo, ir ao terminal para executarmos esse arquivo, com node metodos-objeto.js. No entanto, não vai exibir nada porque o único objeto que temos tem uma chave 'enderecos'. Isso é bom, significa que funcionou. Agora, vamos comentar toda a parte de enderecos no nosso objeto e testar novamente para ver se a nossa verificação está funcionando.

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  // enderecos: [{
  //   rua: 'Rua Joseph Climber',
  //   numero: '45',
  //   complemento: 'apto 43'
  // },
  // {
  //   rua: 'Rua Dona Clotilde',
  //   numero: '71',
  //   complemento: null
  // }]
}
```

Dessa vez, quando executamos o comando node metodos-objeto.js no terminal, temos o retorno esperado da mensagem. O console.log() do VSC não é diferente do console.error(), mas se estivéssemos no navegador, seria diferente.

Comparativamente, os objetos têm menos métodos "prontos", entre aspas, do que os arrays. Mas, além do Object.keys(), que gera um array com todas as chaves, também existem outros dois métodos: Object.values() e Object.entries().

Outros métodos do Object  
Esses três fazem, basicamente, o mesmo processo, porém o Object.keys() retorna uma chave, o Object.values() retorna um array com os valores, por exemplo, o valor da idade, o número do telefone, o nome da pessoa, e os demais dados. Já Object.entries() cria um array com arrays contendo as duas informações: a chave e o valor.

Informação: Nas atividades vocês encontram mais material, incluindo o link do MDN com a documentação do Object.keys(), a documentação para o Object.values() e para a documentação do Object.entries(). Assim você poderá fazer mais testes para descobrir o que o console exibe ou o que fazer com cada um desses métodos.

Existe um detalhe na documentação desses três métodos que fala de propriedades enumeráveis. Tanto propriedades enumeráveis quanto protótipos, que são outras características de objetos com JavaScript, não vamos abordar neste curso. Vou deixar mais material extra sobre as propriedades enumeráveis e teremos um curso que irá falar sobre os protótipos na orientação a objetos com JavaScript.

### Aula 3 - Para saber mais: outros métodos de objeto

Para aprofundar seus conhecimentos, que tal conhecer o funcionamento dos objetos em JavaScript? Melhorar nosso entendimento a respeito da manipulação de objetos em JavaScript envolve explorar métodos disponibilizados tanto pelo Node.js quanto pelos navegadores.

Um método é uma função que é executada no contexto de um objeto e está associada a ele. Em um objeto literal, métodos são definidos da mesma forma que as funções normais são definidas, tendo parâmetros, retorno e um bloco definido, com exceção do caso das arrow functions e do uso do this.

Vamos revisitar e expandir nossas noções sobre alguns métodos de objeto do JavaScript, para uma compreensão mais abrangente:

Object.keys() e Object.values(): são usados para extrair informações específicas de um objeto. Esses métodos fornecem, respectivamente, as chaves e os valores presentes em um objeto. São úteis para iterar ou fazer operações específicas em conjuntos de dados de um objeto.

```JavaScript
const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]
```

Object.entries(): este método retorna um array de arrays que representam pares chave-valor. É útil em situações que demandam iterações mais complexas ou manipulação mais minuciosa dos dados.

```JavaScript
const meuObjeto = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]
```

Object.assign(): usado para fusão e cópia de objetos. Este método permite combinar propriedades de diferentes objetos em um único objeto.

```JavaScript
const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }
```

Explorar estes métodos adicionais expandirá ainda mais sua proficiência na manipulação de objetos em JavaScript.

Sabemos que o ecossistema JavaScript é muito vasto e sofre diversas mudanças em função do tempo, então vale a pena dedicarmos um tempo para olhar a documentação e testar alguns exemplos.

Acesse a [documentação do MDN sobre objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects), que é uma ótima referência aos nossos estudos e amplie os conhecimentos dos métodos e práticas que realizamos até agora.

### Aula 3 - Para saber mais: propriedade enumeráveis

Em JavaScript, objetos são estruturas que armazenam dados em pares chave-valor. Cada propriedade em um objeto possui atributos que determinam seu comportamento e acessibilidade. Uma característica importante dessas propriedades é a enumeração, que define se uma propriedade será incluída em operações como iteração.

Propriedades enumeráveis
Propriedades enumeráveis são aquelas que são consideradas durante operações de iteração, como for … in e métodos como Object.keys(). Por padrão, todas as propriedades criadas diretamente em um objeto são enumeráveis, o que significa que elas são visíveis durante a iteração.

```JavaScript
const meuObjeto = {
  nome: "ChatGPT",
  linguagem: "JavaScript",
  versao: "3.5"
};

for (let chave in meuObjeto) {
  console.log(chave); // Saída: nome, linguagem, versao
}
```

**Propriedades não enumeráveis**  
Propriedades não enumeráveis não são consideradas durante operações de iteração. Essas propriedades são geralmente associadas a métodos internos de objetos ou configurações específicas que não precisam ser expostas durante iterações comuns.

```JavaScript
const meuObjeto = {};
Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});
for (let chave in meuObjeto) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}
```

**Manipulando enumerabilidade**  
Para controlar a enumerabilidade de uma propriedade, a função Object.defineProperty() pode ser utilizada. O segundo argumento desta função permite a configuração de diversas propriedades, incluindo a enumerabilidade.

```JavaScript
const meuObjeto = {};
Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});
console.log(Object.keys(meuObjeto)); // Saída: []
```

```JavaScript
const meuObjeto = {};
// Criando uma propriedade não enumerável
Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true // Definindo a enumerabilidade como true
});

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto)); // Saída: ['propriedadeNaoEnumeravel']

// Exibindo o valor da propriedade
console.log(meuObjeto.propriedadeNaoEnumeravel); // Saída: 42
```

Neste exemplo, a propriedade propriedadeNaoEnumeravel é configurada com enumerable: true, o que significa que a propriedade será listada quando utilizamos Object.keys(). Mesmo sendo enumerável, o valor da propriedade ainda pode ser acessado normalmente.

A enumerabilidade é uma das diversas propriedades de objetos em JavaScript e está relacionada à forma como eles são construídos na linguagem. Você pode consultar a [documentação do MDN sobre enumerabilidade](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) e posse de propriedades para conferir mais dados e exemplos.

### Aula 3 - Operador de espalhamento - Vídeo 3

Transcrição  
Continuando a manipulação de objetos com JavaScript, faremos mais um teste. Suponhamos que precisamos de uma função que obtenha os números de telefone disponíveis para exibir em algum lugar ou solicitar uma chamada.

Exibindo dados através de uma função
Já temos um arquivo em nosso projeto, que nomeamos spread.js, que também sugere o que vamos utilizar. Colamos o nosso objeto estudante com nosso array de telefones, nosso array de endereços, e as demais.

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
  }]
}
```

Implementando a função exibirTelefones()
Para criar essa função, vamos ao final do arquivo, após o objeto, e criamos uma função com o function exibirTelefones(). E o que vamos passar como parâmetro? Vamos dizer que desejamos exibir dois telefones. A pessoa pode ter vários, mas nós só queremos os dois primeiros, que são os mais prováveis de serem atendidos.

Então, na função exibirTelefones(), passaremos dois parâmetros. Vamos nomeá-los telefone1 e telefone2. Abrimos chaves {} e, dentro delas, passaremos dois console.log*(, como sempre. Dentro de cada um deles, abriremos um template string, com crase, passando `ligar para ${telefone1}`. Copiamos e colamos abaixo e mudamos apenas para ${telefone2}.

```JavaScript
const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
  }]
}
function exibirTelefones(telefone1, telefone2) {
  console.log(`ligar para ${telefone1}`);
  console.log(`ligar para ${telefone2}`);
}
```

Até aqui, tudo certo. Mas como fazemos, então, para obter o telefone1 e o telefone2 de dentro do objeto na chamada da função? Vamos chamar a função exibirTelefones(). Primeiro, chamaremos essa função da seguinte forma: exibirTelefones(). Passaremos o primeiro parâmetro, estudante.telefones[0], e o segundo parâmetro, estudante.telefones[1].

Vai funcionar? Sim, vai funcionar. No entanto, há uma maneira melhor de fazer isso, que evita a fixação de uma posição de um array no código. A menos que em casos muito específicos, não precisamos ficar passando índice 0, índice 1, normalmente não é uma boa prática.

Melhorando a chamada da função com spread operator
Como faremos isso, então? Chamaremos a função exibirTelefones(), e passaremos como parâmetro ..., que é o nosso Spread Operator (Operador de Espalhamento). E o que queremos espalhar aqui dentro desse parâmetro? Queremos espalhar o conteúdo de estudante.telefones.

```JavaScript
//código omitido
function exibirTelefones(telefone1, telefone2) {
  console.log(`ligar para ${telefone1}`);
  console.log(`ligar para ${telefone2}`);
}
exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);
```

Agora, em que momento utilizamos bastante essa opção de pegar um objeto ou pegar um array e espalhar o conteúdo deles? Faremos mais um teste. Vamos criar uma constante, que chamaremos dadosEnvio.

Preparando dados para envio com spread operator
Suponhamos que precisamos preparar os dados de um estudante para enviar uma correspondência. Ao enviar uma correspondência, há várias coisas no objeto estudante que não precisamos, como CPF e telefone. Então, o que precisamos dos dados? Precisamos do nome e do endereço, apenas.

Vamos preparar agora esse objeto. Então, const dadosEnvio = {}, e podemos fazer da seguinte forma. Podemos criar esse objeto dadosEnvio com duas propriedades. A primeira, que chamaremos de destinatario: estudante.nome, e, em seguida, endereco: estudante.enderecos[0]. Ao fazermos um console.log(dadosEnvio), precusamos receber apenas os dados que quueremos.

```JavaScript
const dadosEnvio = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0]
}

console.log(dadosEnvio);

//========================================================================================
{
    destinatario: 'José Silva',
    endereco: {rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43'}
}
```

Não deu muito certo, porque recebemos um objeto dentro de um objeto. Também podemos criar o objeto dadosEnvio da seguinte forma:

```JavaScript
dadosEnvio = {
    destinatario: estudante.nome,
    rua: estudante.enderecos[0].rua,
    numero: estudante.enderecos[0].numero}
```

Esse também não é um cenário muito prático. Como faremos, então, para melhorar esse exemplo? const dadosEnvio = {destinatario: estudante.nome, ...estudante.enderecos[0]}. Assim espalhamos o objeto endereço com o Spread Operator e sempre vamos querer buscar o primeiro endereço.

```JavaScript
function exibirTelefones(telefone1, telefone2) {
  console.log(`ligar para ${telefone1}`);
  console.log(`ligar para ${telefone2}`);
}
exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);
const dadosEnvio = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0]
}
console.log(dadosEnvio);
//==================================================================================
{
    destinatario: 'José Silva',
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
}
```

Agora temos um único objeto com quatro propriedades e nosso objeto faz sentido para conseguirmos fazer o envio de uma correspondência. E o que o Spread Operator fez neste caso? Ele montou um objeto a partir de outro. Ele pegou o objeto de endereço e espalhou o conteúdo dele dentro do nosso objeto dadosEnvio. Dessa forma, conseguimos montar novos objetos com partes de outro.

Conclusão  
Então, criamos uma propriedade destinatario com estudante.nome, que era apenas uma string, e espalhamos o restante para termos um objeto com várias propriedades. Portanto, usamos o Spread Operator para extrair dados de um objeto e montar outros objetos a partir disso.

Essa é uma estrutura que trabalhamos bastante no nosso dia a dia. Então, se quiser praticar mais, deixaremos mais exemplos e mais exercícios para fixarmos bem o operador de espalhamento. Vamos continuar praticando com objetos.

### Aula 3 - Para saber mais: operador de espalhamento

No vídeo anterior, abordamos um exemplo de uso do spread operator, também conhecido como sintaxe de espalhamento ou operador de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Para entender melhor, vamos ver mais alguns exemplos:

```JavaScript
const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}
 
const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}
```

Ainda usando o exemplo acima, agora vamos tentar juntar esses dois objetos em apenas um, que vamos chamar de personagens. Em um primeiro teste, vamos criar um novo objeto literal com chaves { } e passar para este objeto as variáveis de cada personagem:

```JavaScript
const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)
```

O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados. Porém, agora o nome de cada variável é uma chave e o valor da chave é cada um dos objetos:

```JavaScript
{
  fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
  equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
}
```

Aqui é onde vamos utilizar o spread operator, adicionando a sintaxe de três pontos (reticências) ... antes do nome de cada objeto literal, separando-os com uma vírgula:

```JavaScript
const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)
```

Após usar o spread operator, o console vai mostrar o resultado esperado, que é:

```JavaScript
{
 nome: 'Aragorn',
 classe: 'guerreiro',
 espada: 'Andúril',
 capa: 'capa élfica +2'
}
```

Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:

```JavaScript
const mago = {
 nome: "Gandalf",
 classe: "mago"
}
 const guerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}
 
const ranger = {
 nome: "Legolas",
 classe: "ranger"
}
```

Os três objetos acima têm as mesmas propriedades. Mas o que acontece se tentarmos “espalhar” os dados em um único objeto com o spread operator?

```JavaScript
const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)
```

Fazendo isso o resultado não será exatamente o que esperamos:

```JavaScript
{ nome: 'Legolas', classe: 'ranger' }
```

Perceba que o JavaScript sobrescreve as chaves com o mesmo nome a cada ocorrência, fazendo com que o resultado final seja somente o último objeto declarado dentro do objeto personagens.

Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.

Caso queira, temos outra explicação deste processo no artigo ES6 - [Desestruturando objetos](https://www.alura.com.br/artigos/es6-desestruturando-objetos) presente na nossa plataforma.

### Aula 3 - Links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

Documentação do MDN: [Object.keys](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys);
Documentação do MDN: [Object.values](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values);
Documentação do MDN: [Object.entries](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).

### Aula 3 - Desafio: lista de exercícios

1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

- Desempenho excelente: média >= 9
- Bom desempenho: 7.5 <= média entre 7.6 e 8.9
- Desempenho regular: 6 <= média entre 6 e 7.5
- Desempenho insuficiente: média < 6

Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.

2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

- marca (string): marca do carro.
- modelo (string): modelo do carro.
- ano (number): ano de fabricação do carro.
- cor (string): cor do carro.

Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.

3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

- ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
- ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
- desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
- obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).

Em seguida, faça o seguinte:

- Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
- Chame o método obterDetalhes e imprima no console a string retornada.

4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

- marca (string): marca do novo carro.
- modelo (string): modelo do novo carro.
- ano (number): ano de fabricação do novo carro.
- cor (string): cor do novo carro.

Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.

**Opinião do instrutor**  

Resolução 1

```JavaScript
const pessoa = {
  nome: 'Maria',
  notas: [8, 7, 9, 10], // lista de notas
  calcularMediaNotas: function () {
    const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
    const media = somaNotas / this.notas.length;
    return media.toFixed(2); // Arredondando para duas casas decimais
  },
  classificarDesempenho: function () {
    const media = this.calcularMediaNotas();
    if (media >= 9) {
      return 'Desempenho excelente';
    } else if (media >= 7.5 && media < 9) {
      return 'Bom desempenho';
    } else if (media >= 6 && media < 7.5) {
      return 'Desempenho regular';
    } else {
      return 'Desempenho insuficiente';
    }
  }
};
// Calculando e exibindo a média de notas
const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);
// Classificando o desempenho e exibindo a categoria
const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);
```

Resolução 2

```JavaScript
// forInObjetos.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};
// Utilize o loop for...in para percorrer as propriedades do objeto carro
console.log("Propriedades iniciais do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
// Adicione mais propriedades ao objeto carro
carro.cambio = "Automático";
carro.kmRodados = 5000;
// Utilize novamente o loop for...in para percorrer as propriedades atualizadas do objeto carro
console.log("\nPropriedades atualizadas do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
```

Resolução 3

```JavaScript
// Definindo o objeto carro com as propriedades iniciais
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  cor: 'Prata',
  ligado: true, // Propriedade para indicar se o carro está ligado ou desligado
// Método para ligar o carro
  ligar: function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log('O carro está ligado.');
    } else {
      console.log('O carro já está ligado.');
    }
  },
// Método para desligar o carro
  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      console.log('O carro está desligado.');
    } else {
      console.log('O carro já está desligado.');
    }
  },
// Método para obter detalhes do carro
  obterDetalhes: function () {
    const estado = this.ligado ? 'ligado' : 'desligado';
    return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
  }
};
// Testando os métodos
carro.ligar(); // Tentar ligar o carro quando já está ligado
carro.desligar(); // Desligar o carro
carro.desligar(); // Tentar desligar o carro quando já está desligado
carro.ligar(); // Ligar o carro
console.log(carro.obterDetalhes()); // Obter detalhes do carro e imprimir no console
```

Resolução 4

```JavaScript
// enumeraveisObjeto.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false, // Nova propriedade indicando o estado do carro (ligado/desligado)
    placa: "ABC1234" // Nova propriedade representando a placa do veículo
};
// Defina a propriedade placa como não enumerável
Object.defineProperty(carro, "placa", { enumerable: false });
// Utilize um loop for...in para percorrer as propriedades enumeráveis do objeto carro
console.log("Propriedades Enumeráveis do Carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
// Utilize Object.keys() para obter um array com as chaves enumeráveis do objeto carro
const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);
// Tente acessar a propriedade placa diretamente e imprima o resultado obtido
console.log("\nAcesso direto à propriedade placa:");
console.log(carro.placa);
```

Resolução 5

```JavaScript
// spreadObjeto.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false // Nova propriedade indicando o estado do carro (ligado/desligado)
};
const carroNovo = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    cor: "Azul"
};
// Utilize o operador spread para criar um novo objeto com as propriedades de carro e carroNovo
const carroComNovosDetalhes = { ...carro, ...carroNovo };
// Imprima no console o objeto carroComNovosDetalhes
console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);
// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes
carroComNovosDetalhes.modelo = "Accord";
// Imprima novamente no console o objeto carroComNovosDetalhes
console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);
```

### Aula 3 - O que aprendemos?

Nesta aula, você aprendeu:

- Como percorrer objetos a partir das chaves com for...in, iterando sobre as propriedades de um objeto;
- Como extrair chaves e valores de objetos é usando métodos de Object;
- A utilizar o spread operator (ou operador de espalhamento) para decompor objetos e juntar objetos.

## Aula 4 - Conhecendo o JSON

### Aula 4 - O formato JSON - Vídeo 1

### Aula 4 - O formato JSON - Vídeo 2

Transcrição  
Até o momento, entendemos a estrutura de um objeto e aprendemos a manipulá-lo, inserir dados entre outras coisas.

O que faremos agora é um uso muito comum em programação, não apenas em JavaScript, mas que usa o objeto JavaScript como base.

**Explorando o JSON em JavaScript**  
Para entendermos esse uso, estamos exibindo a plataforma da Alura, mais especificamente a formação A partir do zero: iniciante em programação*.

Já discutimos em outros cursos como as informações que aparecem nos sites e nos aplicativos não estão hardcoded, ou seja, chumbadas na página. Elas vêm de bases de dados, são processadas, solicitadas e retornadas.

No caso da Alura, é possível consultar a base de onde saem essas informações, que é uma API. Disponibilizamos nessa aula mais informações sobre o que são APIs e o link.

O que está sendo exibido agora na tela é uma versão desses dados que foram retirados de um banco de dados e convertidos em um formato que o front-end consegue utilizar para montar páginas. Esse formato é um objeto, muito parecido com o que usamos para praticar objetos em JavaScript.

Conseguimos identificar as chaves, o conjunto de chave e valor. Por exemplo, temos o título com a informação do título como uma string, com aspas duplas. Temos arrays de dados, uma das partes do JSON mostra um array com alguns objetos dentro.

Esse formato de array de objetos é muito comum quando montamos essa estrutura de dados baseada em objeto JavaScript. É usado para fazer justamente esse intermédio entre informações em bancos de dados, como o título da formação, o subtítulo, e conseguimos ver tudo isso refletido na aplicação onde a pessoa usuária interage.

Chamamos essa estrutura de dado de JSON, JavaScript Object Notation, no português Notação de Objeto JavaScript. O JSON tem uma estrutura muito parecida, como já aprendemos, com o objeto JavaScript que temos trabalhado até agora. O que queremos dizer com uma Notação de Objeto JavaScript é que ele usa o objeto JavaScript como base, mas eles têm algumas diferenças de estrutura.

Abaixo, temos um exemplo de estudante, um objeto JavaScript literal.

```JavaScript
const estudante = {
    nome: 'Ana',
    idade: 32,
    cpf: 23423423423,
    email: 'ana@email.com',
    telefones: ['551198745632', '551198745633'],
    endereco: {
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43',
    },
};
```

Já um exemplo de JSON com os mesmos dados, como nome, de idade, de CPF, como temos utilizado durante o curso, é o abaixo.

```JavaScript
{
    "nome": "Ana",
    "idade": 32,
    "cpf": "23423423423",
    "email"; "ana@email.com",
    "telefones": ["551198745632",
    "551198745633"],
    "endereco": {
        "rua": "Rua Joseph Climber",
        "numero": "45",
        "complemento": "apto 43"
    }
}
```

E quais são essas diferenças? A primeira coisa que podemos notar é que o JSON não é atribuído a uma variável. Ele não é um tipo de dado do JavaScript, ele é uma estrutura de dados que utiliza a Notação de Objeto JavaScript e é muito usado não apenas em JavaScript, como na maior parte das linguagens comerciais. Você vai encontrá-lo sendo utilizado com Java, Python, C Sharp, vamos aprender mais sobre isso em breve.

Outro ponto importante é que até o momento, quando trabalhamos com objetos, as chaves, os nomes das propriedades, não tinham aspas. Porém, no JSON é obrigatório usarmos aspas também no nome da chave, como nome, idade, CPF, tudo entre aspas duplas.

Além disso, o JSON não trabalha com aspas simples, todas as strings precisam ter aspas duplas. Então, aspas simples não são aceitas no JSON em nenhum caso, nem para cercar os nomes das chaves, nem para serem utilizadas como strings.

A última característica importante é que, ao contrário do objeto JavaScript, onde podemos deixar sempre uma vírgula no final da última propriedade, o JSON não aceita vírgulas sobrando. Chamamos essas vírgulas, colocadas depois da última propriedade, de trailing comma, vírgula sobrando. Parece um detalhe, mas é muito comum em JavaScript marcarmos o fim de um objeto com uma vírgula, já preparando caso tenha outra propriedade depois, mas o JSON não aceita.

Mas, mesmo com essas diferenças, notamos serem muito parecidos, assim como a forma de lidar com ambos. Então, qual é a sintaxe do JSON?

Não são permitidas funções, apenas dados como string, número, booleano, array e objeto;

Não são permitidos comentários. Você deve se lembrar que anteriormente comentamos a parte de um objeto, nesse caso não podemos;

JSON suporta apenas os tipos primitivos: string, número, booleano, null, arrays e objetos. Não conseguimos utilizar funções.

Mas, por que o JSON é tão utilizado? Ele veio para substituir um formato anterior de dados, que era o XML. O XML também se baseia em uma linguagem de marcação, assim como o HTML, se você já teve a oportunidade de ver um pouco de front-end.

O XML é um pouco verboso, ou seja, a leitura dele é um pouco mais complexa, especialmente para as pessoas que precisam interagir com esses dados, porque ao invés de conjuntos de chave e valor, ele utiliza tags de abertura e fechamento com a informação no meio. Comparando o JSON com o XML, o JSON tem uma leitura mais fácil, dinâmica, ele é mais sucinto.

Agora que já entendemos o que é o JSON, praticaremos um pouco com esse formato de dados. Faremos isso no vídeo seguinte, até lá!

### Aula 4 - Para saber mais: API? Requisição? HTTP?

No vídeo anterior, aprendemos o que é o formato JSON e que ele é comumente usado para construir estruturas de dados, que possam ser lidas e manipuladas pelo back-end e também pelo front-end, por exemplo, montar páginas e aplicações.

O termo que usamos aqui é API, ou application programming interface (interface de programação de aplicações, em tradução livre). Mas o que é uma API e qual a relação de APIs com JSON e objetos?

Vamos revisitar o [link da API aberta da Alura](https://www.alura.com.br/api/formacao-programacao), com as informações da página de [formação de iniciante em programação](https://cursos.alura.com.br/formacao-programacao). Como fizemos no vídeo, você pode conferir que alguns dados presentes na API com o que é exibido na tela da plataforma.

> O navegador Firefox (que usamos no curso) usa um recurso próprio para formatar os dados da API e exibir o JSON com quebras de linha e indentação. Caso você utilize Chrome, pode instalar a [extensão JSON Formatter](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) para visualizar os dados de forma similar à do vídeo.

**O que são APIs?**  
APIs são interfaces entre aplicações. Podemos pensar em APIs como pontos de contato ou comunicação entre partes de um sistema ou entre sistemas diferentes, por exemplo:

O back-end de uma aplicação disponibiliza uma API para que o front-end possa buscar dados para popular uma página (no caso da API da Alura).
Uma aplicação quer utilizar um sistema de busca de CEPs disponibilizado por terceiros. O serviço de busca disponibiliza uma API para ser usada pela aplicação (um exemplo famoso é o [ViaCEP](https://viacep.com.br/)).

Grande parte dos serviços em nuvem, como a AWS e o Google Cloud, disponibilizam APIs para que clientes possam utilizar seus serviços.
Parece muita coisa? Não se preocupe! Nas próximas formações de Node.js vamos abordar a fundo os usos e os tipos de API, além de criarmos nossas próprias APIs.

**APIs e JSON**  
O formato JSON é o padrão atual para envio de recebimento de dados entre aplicações. Na prática, isso significa que usamos JSON para, por exemplo:

Um front-end pegar dados de um formulário em uma página e enviar para o back-end criar um cadastro de cliente, como em {“nome”: “José”, “email”: “jose@email.com”, “telefone”: “551199999999”};  
Um back-end consultar dados armazenados em tabelas de um banco de dados e formatá-los em JSON para enviá-los ao front (como a API da Alura).
E como é feito esse envio e recebimento de JSON?

**JSON e requisições**  
Quando queremos “transitar” um objeto JSON entre computadores na web através do [protocolo HTTP](https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1) é necessário transformar toda a estrutura em strings, pois nessa comunicação trafegam apenas dados em texto.

Por esse motivo, é bastante comum a operação de transformar um JSON em string e também reconverter um texto em JSON para que o objeto possa ser utilizado pelo programa.

Você vai ter oportunidade de praticar mais com APIs e com o envio e recebimento de JSON nas próximas formações e cursos de Node.js.

### Aula 4 - Preparando o ambiente

Para esta aula, vamos utilizar um arquivo JSON. Você vai precisar [baixar o arquivo estudante.json](https://github.com/alura-cursos/3561-js-objetos/blob/aula-4/estudante.json) no GitHub.

Você pode clicar no botão “download raw file” no canto direito acima do código para baixar o arquivo. Salve este arquivo na pasta do projeto, junto com o restante dos arquivos que criamos durante o curso.

Caso prefira copiar e colar, crie um novo arquivo estudante.json na pasta do projeto e cole o conteúdo a seguir:

```JSON
{
  "nome": "Ana",
  "idade": 32,
  "cpf": "23423423423",
  "email": "ana@email.com",
  "telefones": ["551198745632", "551198745633"],
  "endereco": {
    "rua": "Rua Joseph Climber",
    "numero": "45",
    "complemento": "apto 43"
  }
}
```

### Aula 4 - Lendo um arquivo JSON - Vídeo 3

Transcrição  
Já sabemos o que é um JSON. Agora, vamos entender como trabalhar com ele.

Se não podemos salvar um JSON em uma variável, como importamos esse tipo de estrutura de dados no projeto? Na atividade anterior, disponibilizamos um link para você baixar dois arquivos, um chamado estudante.json e outro chamado estudantes.json. Nós já baixamos esses arquivos e colocamos na pasta do projeto, faça o mesmo para darmos continuidade.

Importando e Manipulando JSON
Começaremos criando um arquivo chamado importa-json.js. Descobriremos como trabalhar com JSON. Criamos uma const chamada estudante = require() passando como parâmetro, uma string com o caminho do arquivo que queremos importar.

No nosso caso, colocamos todos os arquivos na mesma pasta. Então, para importar estudante.json para o nosso projeto, só precisamos passar ./estudante.json, finalizado com ponto e vírgula. Para conferimos o que foi feito, na linha abaixo escrevemos console.log(estudante).

```JavaScript
const estudante = require('./estudante.json');

console.log(estudante);
```

Feito isso, abrimos o terminal e passamos o comando node importa-json.js.

> node importa-json.js

Feito isso, é exibido os dados da pessoa estudante em um formato muito parecido com o que estamos trabalhando, porém, agora um JSON. Ele não tem nenhuma variável atribuída, não tem as chamadas "trailing comas", ou seja, a vírgula após última propriedade. Além disso, todas as chaves e strings estão envolvidas por aspas duplas.

Podemos inclusive abrir o arquivo estudante.json para analisá-lo.

Conseguimos importar o arquivo, agora podemos usá-lo no nosso projeto. Para eliminarmos uma última dúvida, criaremos outro console console.log() e pediremos para o JavaScript dizer qual é o typeof, o tipo desse dado estudante que importamos nessa constante estudante. Dessa forma:

```JavaScript
const estudante = require('./estudante.json');

console.log(estudante);
console.log(typeof estudante)
```

Novamente abrimos o terminal e passamos o comando node importa-json.js. Repare que o tipo de dado é object, então, o que o require está fazendo é importando o JSON, executando, entre aspas, e convertendo o resultado para a variável estudante no formato de um objeto JavaScript que conseguimos utilizar.

Por exemplo, agora que já importamos esses dados e passamos para dentro da variável estudante convertidos através do require, conseguimos utilizar alguns métodos de objeto, como o object.keys. Então, na linha 6, podemos criar const chaves = Objects.keys(estudante). Abaixo, passamos console.log(chaves).

Feito isso, comentamos os consoles anteriores passando // no início de cada linha.

```JavaScript
const estudante = require('./estudante.json');
// console.log(estudante);
// console.log(typeof estudante);
const chaves = Object.keys(estudante);
console.log(chaves);
```

Limpamos o terminal e executamos novamente node importa-json.js. Como retorno temos o resultado que esperávamos, um array com todas as chaves no formato de string. Então, se abrirmos o nosso estudante.json, encontramos todas as chaves. Sabendo disso, fechamos esse arquivo.

O importante é entender que JSON não é um objeto JavaScript. Para utilizá-lo como objeto, precisamos convertê-lo, assim conseguimos utilizar métodos de objeto, percorre-lo, entre outras coisas.

Sobre o require, é possível que, durante seus estudos, você já tenha visto as importações em JavaScript sendo feitas de outra forma, por exemplo, usando import estudante from e o caminho.

A forma import from, ela pode ser considerada mais moderna, vem sendo mais utilizada. Nesse caso, não a estamos utilizando, pois precisa de algumas configurações a mais para funcionar, enquanto o require é nativo do Node. Então, podemos usar ele diretamente.

No caso aqui do nosso projeto, não fará diferença, podemos usar o require tranquilamente. Disponibilizamos mais informações sobre as diferenças entre o require e o import nas atividades.

Agora que sabemos como importar um arquivo JSON para o nosso projeto, continuaremos manipulando esse tipo de estrutura de dado.

Te esperamos no vídeo seguinte!

### Aula 4 - Para saber mais: importação de módulos e require

Neste curso utilizamos uma função, chamada require(), nativa do Node.js. Esta função nos permitiu passar o caminho de um arquivo terminado em .json para obter o conteúdo do arquivo já convertido para objeto JavaScript. Em cursos posteriores, veremos que essa função também pode ser utilizada para importação de códigos que estão em outros arquivos, também chamados de módulos.

> A conversão automática de um objeto JSON em um objeto JavaScript é uma das propriedades específicas da função require(), conforme estabelecido na [documentação do Node.js](https://nodejs.org/api/modules.html#modules_all_together).

A modularidade é uma característica que permite que devs dividam seus programas em partes mais gerenciáveis e reutilizáveis. A importação de módulos é uma prática fundamental nesse contexto, e a função require desempenha um papel vital nesse processo.

Utilizando o require para importar módulos  
Ao utilizar require, é possível incluir funcionalidades de outros arquivos, promovendo a reutilização de código e a manutenção eficiente.

> // Exemplo de importação de um módulo em Node.js  
const moduloExemplo = require('./meuModulo.js');

> // Agora, podemos utilizar as funcionalidades do 'meuModulo'  
moduloExemplo.minhaFuncao();

**Importação de módulos JSON**  
Além da importação de módulos JavaScript, o require também é usado para carregar arquivos JSON, que são amplamente utilizados para armazenar configurações e dados estruturados. Ao importar um arquivo JSON, o Node.js automaticamente o converte para um objeto JavaScript.

> // Importando um arquivo JSON em Node.js  
const configuracoes = require('./configuracoes.json');

> // Agora, 'configuracoes' contém o conteúdo do arquivo JSON  
console.log(configuracoes);

Caminhos relativos e módulos nativos  
Ao utilizar require, é possível especificar caminhos relativos para módulos próprios ou caminhos absolutos para módulos de terceiros. Além disso, Node.js fornece uma variedade de módulos nativos que podem ser importados sem a necessidade de instalação adicional.

> // Importação de um módulo nativo em Node.js
const fs = require('fs');

> // Agora, 'fs' contém as funcionalidades do módulo File System

Exportação de módulos  
Para que um módulo seja importável, é necessário exportá-lo corretamente. A exportação pode ser feita atribuindo o que se deseja exportar à propriedade module.exports.

```JavaScript
// Exemplo de exportação de um módulo em Node.js
function minhaFuncao() {
  console.log('Executando minha função...');
}

module.exports = minhaFuncao;
```

Caso tenha interesse de aprofundar seus conhecimentos, o MDN tem um artigo explicando os [módulos em JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules) e a [documentação do Node.js](https://nodejs.org/api/modules.html#modules_modules) sobre módulos também elabora mais a respeito do tema e do uso específico que fizemos durante a aula.

Você também pode ler mais sobre [importação e exportação de módulos nesse artigo](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript).

### Aula 4 - Lendo a partir de um JSON

Temos um arquivo do tipo JSON e queremos resgatar o conteúdo salvo em uma determinada propriedade a partir do arquivo lutador.json:

```JavaScript
{
  "nome": "Leandro Macedo",
  "esporte": "Jiu Jitsu",
  "altura": 1.65,
  "lutas": 12,
  "vitorias": 7,
  "categoria": "Peso pena"
}
```

Após analisar o arquivo acima, marque a alternativa correta que contêm um código que adquira as informações deste arquivo e quando executado mostre no terminal o valor da propriedade altura. Para isso, considere que o seu código e o arquivo JSON estão no mesmo diretório.

Resposta:  
Podemos escrever no arquivo lerLutador.js o seguinte código:

> const lutador = require("./lutador.json");  
console.log(lutador.altura);

Isso mesmo! Utilizamos require() para ler os dados, salvamos na variável dados e em seguida mostramos na tela com um console.log().

### Aula 4 - Operações com JSON - Vídeo 4

Transcrição  
Compreendemos que o JSON é um formato usado para transportar dados. Pegamos os dados do banco, convertemos para um formato de arquivo com o qual conseguimos trabalhar, que é o JSON.

Portanto, se trabalhamos muito com o JSON, enviamos para o front-end, recebemos de volta, ele precisa ser convertido e reconvertido de uma maneira simples.

**Convertendo e manipulando JSON**  
Para praticarmos esse processo de conversão, criamos um novo arquivo chamado converte-json.js. A primeira coisa que faremos é importar novamente o JSON de estudante. Então na primeira linha escrevemos const estudante = require('./estudante.json').

> const estudante = require('./estudante.json')

Ao manipularmos dados, por exemplo, o front-end envia para o back-end, e o back-end envia para o front-end, temos que fazer esse processo utilizando strings. Então, ao fazermos a comunicação cliente-servidor, não podemos mandar um arquivo .json ou .js, temos que mandar um arquivo em string.

Então, como convertemos esse JSON em uma string que possa ser, por exemplo, enviada em uma requisição e devolvida? Para isso, criaremos outra const chamada stringEstudante = JSON.stringify(). Nos parênteses, passamos como método a estudante, a const na qual importamos o JSON.

JSON.stringify, JSON.parse e outros que vamos trabalhar, fazem parte de uma biblioteca que o Node tem para facilitar esse trabalho comum de manipulação de JSON em aplicações back-end.

Para conferir o resultado, na linha 4, passamos console.log(stringEstudante) e abaixo o console.log(typeof stringEstudante) para podermos conferir também o formato do arquivo.

```JavaScript
const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante)
console.log(typeof stringEstudante)
```

Salvamos o arquivo e abrimos o terminal. Passamos o comando node converte-json.js.

> node converte-json.js

Feito isso, temos como retorno duas referências, a primeira é todo o objeto em uma só linha e sem a notação de cores, se transformou em uma string. Mas, a confirmação vem no segundo log em que é string.

Agora, que convertemos esse JSON para string, podemos em nossa aplicação back-end, por exemplo, enviar isso numa requisição HTTP para o front-end, para ser utilizado e montar a página da formação de iniciantes da Alura.

Mas o que acontece se chamarmos outro console.log() e pedir para ele exibir stringEstudante.nome. Se abrirmos o arquivo estudante.json, notamos ser uma propriedade. Usamos object.keys, então, teoricamente, poderíamos, pois é um objeto.

Para verificar o que acontece, abrimos o terminal e passamos node converte-json.js. Como retorno temos "undefined". Lembrando que o JavaScript não dará erro, ele não dirá que não conseguiu encontrar a propriedade nome nessa string, porque agora a string não é mais um objeto, não tem mais propriedades. Ela é um grande conjunto de caracteres. Então, não conseguimos mais utilizar.

```JavaScript
//Código omitido
console.log(stringEstudante.nome)
```

Mas, por que isso é importante? Porque, todo o processo de enviar dados via JSON e trazer esses dados, precisamos sempre lembrar de convertê-los para o formato que queremos utilizar.

Queremos transportar esses dados, transformamos eles em string. Mas, agora que temos uma grande string com vários dados de estudante, não conseguimos mais manipular esse objeto, não conseguimos mais pegar .nome ou .idade. Como fazemos para reverter isso para um formato que possamos utilizar?

Para fazermos o processo contrário, na linha 9 criamos a const objEstudante = JSON.parse(stringEstudante). Na linha abaixo, passamos os dois console.log() que utilizamos anteriormente, substituindo para objEstudante, dessa forma:

```JavaScript
console.log(stringEstudante.nome);

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);
```

Salvamos, abrimos o terminal e executamos o mesmo comando node converte-json.js. Temos como retorno "undefined", pois esquecemos de apagar o console anterior. Mas, repare que toda a string voltou a ser um objeto, inclusive com a notação de cores do terminal. Além disso, o typeoftambém volta a ser um objeto.

Então, a biblioteca JSON interna do Node, tem uma série de métodos que conseguimos manipular os JSON, transformando-os em string quando precisamos enviar esses arquivos e transformando novamente em objetos.

Agora, se passarmos o console.log da stringEstudante.nome e trocar para objEstudante.nome, dessa forma:

```JavaScript
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);
```

Ao passar o comando no terminal, aparece a informação sem problemas, pois agora conseguimos acessar a propriedade nome.

Um objeto JavaScript é feito para rodar dentro de uma aplicação JavaScript. As strings, então, usamos para transmitir esses dados entre conexões, por exemplo, uma conexão HTTP, e o JSON empresta esse padrão de formato do objeto JavaScript, porque é de leitura simples, muito mais simples do que o XML.

Agora, podemos começar a trabalhar com estruturas de dados maiores, como o estudantes.json, que pedimos para você importar em seu projeto. Vamos descobrir isso na próxima aula.

### Aula 4 - Para saber mais: copiando objetos

É importante entender a forma como os objetos são armazenados e seus valores são copiados com JavaScript. Você pode se deparar com alguns problemas caso não leve esses fatores em consideração.

Para abordar essa questão, é crucial compreender as diferentes abordagens de cópia de objetos. Em JavaScript, a simples atribuição de um objeto a uma nova variável cria uma "referência", não uma cópia independente. Isso significa que alterações em uma variável afetarão diretamente a outra.

Exemplo de referência:

```JavaScript
const objetoOriginal = { chave: 'valor' };
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: novoValor
```

Uma abordagem comum para realizar cópias de objetos é através da técnica conhecida como "clonagem profunda". Essa técnica assegura que a cópia seja independente do objeto original, evitando referências compartilhadas e garantindo a integridade dos dados.

Exemplo de clonagem profunda com JSON.stringify e JSON.parse:

```JavaScript
const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor
```

Explorar essas práticas de cópia de objetos proporciona uma base sólida para lidar com estruturas de dados no JavaScript, mitigando possíveis armadilhas relacionadas a referências e garantindo um código mais robusto e previsível.

Pensando nisso, separamos para você um [artigo sobre clonagem profunda com imutabilidade](https://www.alura.com.br/artigos/implementar-funcao-clonagem-profunda-imutabilidade-js). Ele está presente na nossa plataforma e é uma leitura interessante agora que você já teve um bom contato com os objetos em JavaScript.

#### Aula 4 - Operações com JSON

Você está aprimorando uma aplicação Node.js responsável por gerenciar uma biblioteca digital. Cada livro é representado por um objeto JSON contendo informações essenciais, como título, autor, gênero e ano de publicação. Ao realizar operações com JSON, é necessário converter esses objetos em strings para facilitar o armazenamento, transmissão ou outras operações comuns envolvendo strings.

Você possui um arquivo chamado biblioteca.json com o seguinte conteúdo:

```JavaScript
[
  {
    "titulo": "Aventuras de Node.js",
    "autor": "Jane Developer",
    "genero": "Tecnologia",
    "ano_publicacao": 2020
  },
  {
    "titulo": "Histórias de JavaScript",
    "autor": "John Coder",
    "genero": "Programação",
    "ano_publicacao": 2018
  }
]
```

Agora, você precisa implementar uma funcionalidade que adiciona um novo livro à biblioteca. Além disso, é necessário converter esse objeto JSON em uma string antes de salvá-lo, transmiti-lo ou realizar qualquer operação que envolva strings. Após isso, será necessário transformar essa string de volta em um objeto para realizar alterações nas propriedades utilizando operações comuns do JavaScript.

Qual alternativa abaixo representa a forma correta de realizar essas operações?

Resposta:

```JavaScript
 const novoLivro = {
    "titulo": "Node.js: Guia Prático",
    "autor": "Alice Coder",
    "genero": "Tecnologia",
    "ano_publicacao": 2022
  };
const biblioteca = require("./biblioteca.json");
biblioteca.push(novoLivro);

const bibliotecaString = JSON.parse(JSON.stringify(biblioteca));

console.log(typeof(bibliotecaString)) 
console.log(bibliotecaString) 
```

Esta alternativa está correta, pois realiza a adição do novo livro ao array da biblioteca e converte a biblioteca para uma string, salvando o resultado em uma variável. Importante: o exemplo de código acima não altera o JSON original.

### Aula 4 - Desafio: lista de exercícios

1. Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.

Exemplo:

```JSON
{
    "produtos": [
        {
            "id": 1,
            "nome": "Camiseta",
            "preco": 25.99
        },
        {
            "id": 2,
            "nome": "Calça Jeans",
            "preco": 49.99
        }
    ],
    "usuarios": [
        {
            "id": 101,
            "nome": "João",
            "email": "joao@example.com"
        },
        {
            "id": 102,
            "nome": "Maria",
            "email": "maria@example.com"
        }
    ]
}
```

- Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.

- Imprima no console o conteúdo importado utilizando a função console.log().

- Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.

2. - Crie um arquivo chamado dados.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.

Mesmo Exemplo Acima.

Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados.json.

Imprima no console o objeto JavaScript resultante da leitura do arquivo.

3. - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do produto.
nome (string): nome do produto.
preco (number): preço do produto.
Exemplo

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}
Copiar código
Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.

4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

Exemplo de animais.json:

{
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        }
    ]
}
Copiar código
Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações.

5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

id (number): identificador da pessoa.
nome (string): nome da pessoa.
idade (number): idade da pessoa
Exemplo

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}
Copiar código
Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.

Opinião do instrutor

Resolução 1

// utilizarRequire.js
const dados = require('./dados.json');

// Imprime no console o conteúdo importado
console.log("Conteúdo importado de dados.json:");
console.log(dados);

// Acessa diferentes propriedades do objeto importado e imprime no console
console.log("\nAcesso aos dados:");
console.log("Produtos:", dados.produtos);
console.log("Usuários:", dados.usuarios);
Copiar código
Resolução 2

// lerArquivoJson.js
const dados = require('./dados.json');
// Exibe o conteúdo lido
console.log(dados);
Copiar código
Resolução 3

// operacoesJson.js
const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
};

// Converte o objeto produto para uma string
const stringJsonProduto = JSON.stringify(produto);

// Imprime no console a string do objeto produto
console.log("String do Produto:");
console.log(stringJsonProduto);
Copiar código
Resolução 4

// manipulacaoJson.js
const objetoAnimais = {
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        }
    ]
};

// Adiciona um novo animal ao array de animais
const novoAnimal = {
    "id": 4,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};
objetoAnimais.animais.push(novoAnimal);

// Modifica o habitat de um animal existente no array de animais
const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}

// Remove um animal do array de animais
const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);

// Imprime no console o objeto JavaScript resultante das operações
console.log("Objeto JavaScript Resultante das Operações:");
console.log(objetoAnimais);
Copiar código
Execute o arquivo operacoesJson.js, utilizando o seguinte comando no terminal:

node manipulacaoJson.js
Copiar código
Resolução 5

// copiarObjetoJson.js

// Função para copiar objetos JSON
function copiarObjetoJson(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

// Criação do objeto original (pessoa)
const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};

// Utiliza a função para criar uma cópia do objeto original
const pessoaModificada = copiarObjetoJson(pessoaOriginal);

// Modifica a cópia do objeto (pessoa modificada)
pessoaModificada.idade = 31;

// Imprime no console ambos os objetos
console.log("Objeto Original (Pessoa):");
console.log(pessoaOriginal);

console.log("Objeto Modificado (Pessoa):");
console.log(pessoaModificada)

### Aula 4 -  - Vídeo 7
