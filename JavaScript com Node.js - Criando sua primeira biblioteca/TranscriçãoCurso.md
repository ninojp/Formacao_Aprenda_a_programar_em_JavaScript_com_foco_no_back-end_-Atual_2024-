# Curso Alura - JavaScript com Node.js criando sua primeira biblioteca

## Aula 1 - Acessando e Lendo Arquivos

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Boas-vindas ao curso de Criação de Primeira Biblioteca em Javascript!

Me chamo Juliana Amoasei e serei a sua instrutora neste curso.

> Audiodescrição: Juliana é uma mulher branca. Tem cabelo curto e pintado de azul. Veste uma camiseta preta da Alura e usa óculos de grau de armação vermelha. Está nos estúdios da Alura; ao fundo, há uma iluminação azul e uma estante à direita.

**Para quem é esse curso?**  
Este curso é direcionado a iniciantes em programação que optaram por iniciar com Javascript. Para uma melhor aproveitamento, é altamente recomendado que você já tenha concluído os cursos anteriores desta formação, que incluem Fundamentos de Javascript, Objetos, Arrays, Variáveis, Funções e Tipos de Dados. Este curso não abordará tópicos específicos de front-end.

O que Aprenderemos neste Curso?

- Desenvolver um programa completo
- Lógica de programação, arrays e objetos
- Ferramentas do dia a dia
- Código síncrono e assíncrono
- Importação e exportação de módulos
- Instalação de bibliotecas externas
- Tratamento de erros
- Interação com linha de comando (terminal)

Neste curso, você aprenderá a desenvolver uma programa completo em Javascript, aplicando os conceitos abordados nos cursos anteriores de Fundamentos. O foco será em praticar Lógica de Programação, Manipulação de Arrays e Manipulação de Objetos, além de introduzir conceitos importantes em back-end.

Exploraremos ferramentas essenciais do cotidiano, abordaremos código síncrono e assíncrono, ensinaremos importação e exportação de módulos, demonstraremos como instalar bibliotecas externas para facilitar seu trabalho, discutiremos o tratamento de erros e a interação com a linha de comando através do terminal.

Além disso, aplicaremos todos esses conceitos em um desafio prático em um caso real para que você possa vivenciar na prática o que aprendeu. Não deixe de aproveitar todos os recursos disponíveis na plataforma. Além dos vídeos, oferecemos diversas atividades extras e contamos com o suporte do fórum e do Discord da comunidade para auxiliá-lo durante o curso.

#### Aula 1 - Preparando o ambiente

Se você já fez os cursos que constam como pré-requisito para este, é muito provável que o ambiente já esteja pronto. Ainda assim, organizamos algumas instruções, que estão logo abaixo, para você conferir!

Arquivos iniciais  
Neste curso vamos utilizar alguns arquivos de texto para testes.

Você pode [baixar estes arquivos em zip](https://github.com/alura-cursos/3709-nodejs-lib/archive/refs/heads/arquivos-iniciais.zip) ou manualmente acessando o [repositório do projeto no GitHub](https://github.com/alura-cursos/3709-nodejs-lib/tree/arquivos-iniciais/arquivos). Não esqueça de salvá-los na mesma pasta que vai utilizar para o projeto deste curso.

Para começarmos, são necessárias duas ferramentas: o Node.js, necessário para executar código JavaScript sem precisar do navegador, e o Visual Studio Code ou VSC, editor que usamos para escrever código.

Node.js
Caso já tenha feito algum curso anterior de JavaScript para back-end, o Node.js pode já estar instalado na sua máquina.

> Recomendamos fortemente que tenha feito os cursos anteriores da formação para acompanhar melhor o conteúdo! Se não tiver certeza, é possível conferir com os seguintes passos:

1. - Abra uma janela do terminal em seu computador. Isso pode ser feito da seguinte forma:

Windows: você pode acessar a busca no menu iniciar e procurar por Prompt de Comando, ou acessar via Menu Iniciar > Sistema do Windows > Prompt de Comando.
MacOs: o Terminal está disponível no menu de Aplicações, dentro da pasta de Utilitários.
Linux (Ubuntu): o Terminal está disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.
2. - No terminal, digite node --version ou node -v. Se retornar um número de versão, como v20.11.0, o Node.js já está instalado.

Caso precise instalar, siga as instruções para cada sistema operacional que estão na [página inicial do Node.js](https://nodejs.org/). Este curso foi desenvolvido usando a versão 20.11.0.

> Caso você esteja utilizando uma versão anterior do Node.js, como a v18, também pode acompanhar o curso sem precisar de atualização para a v20.

O [site do Node.js](https://nodejs.org/en) (no momento em que produzimos este curso) oferece na página inicial o download da versão LTS (long term support, ou suporte a longo prazo). Clique no botão correspondente para baixar e instalar normalmente como qualquer outro programa.

alt: Site oficial do Node.js. O botão para download da versão LTS se encontra à esquerda, abaixo do texto “Run JavaScript Everywhere. Node.js is a free, open-source, cross-plataform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.”. À direita, há um exemplo de código para criar um servidor HTTP. O site tem tons escuros e a cor de destaque é verde.

Confira abaixo um tutorial em vídeo de instalação do Node.js. O site estará diferente no vídeo porém as instruções e passo a passo da instalação são os mesmos.

**Visual Studio Code**  
O Visual Studio Code é o editor que escolhemos utilizar para escrever nossos códigos durante este curso. Os links para baixar e instalar de acordo com o seu sistema operacional estão na [página inicial do VSC](https://code.visualstudio.com/).

Existem vários outros editores, como o Atom, o Sublime e o Notepad++. Caso já tenha algum destes instalado ou preferência por outro, fique à vontade! Note que alguns recursos e ferramentas variam de editor para editor e podem não estar disponíveis ou funcionar de forma diferente.

Agora podemos começar!

### Aula 1 - Iniciando um projeto Node.js - Vídeo 2

Transcrição  
Vamos analisar o problema que nossa aplicação resolverá, começando agora.

**Entendendo o problema**  
Estou exibindo a página de artigos da Alura na tela. Se pensarmos em artigos, como um artigo de programação ou qualquer outro artigo acadêmico, podemos abrir um sobre "Padrões arquiteturais: arquitetura de software descomplicada" que está aparecendo no site. Durante a escrita, é comum termos certos cacoetes, tanto quanto temos na fala.

Ao escrever um texto sobre front-end (desenvolvimento de interface), por exemplo, é comum começar a repetir a palavra front-end em um parágrafo, o que pode tornar a leitura um tanto estranha ao longo do tempo.

Normalmente, o procedimento é ler o texto manualmente e fazer correções conforme necessário. Recentemente, uma amiga me trouxe uma demanda real relacionada a isso.

Ela perguntou se não seria viável criar um programa para realizar essa tarefa automaticamente. Em outras palavras, o programa analisaria um arquivo de texto, independentemente do seu tamanho, identificaria onde palavras específicas se repetem (por exemplo, a palavra front-end aparecendo cinco vezes em um parágrafo) e me forneceria essas informações.

Isso facilitaria bastante a revisão dos artigos científicos, a tese de mestrado, entre outros textos. Portanto, essa é uma demanda real que pretendemos resolver.

Antes de iniciarmos a solução, vale a pena recapitular um pouco sobre a principal ferramenta que será abordada neste curso durante o desenvolvimento, que é o Node.js.

**O que é Node.js?**  
O que exatamente é o Node e por que ele é tão importante? Para entender isso, é necessário recordar que todo programa precisa de um ambiente de execução para funcionar, independentemente da linguagem utilizada. No caso do JavaScript, existem dois ambientes principais: os navegadores e o runtime, como é conhecido, que inclui o Node, bem como seus concorrentes, como o Dyno e o BAN.

Optamos pelo Node.js entre BAN e Dyno porque é a opção mais antiga, amplamente usada, adotada e testada. Ele se tornou quase sinônimo de JavaScript para o back-end, embora seja apenas uma das opções disponíveis.

Contudo, é a escolha mais significativa e utilizada como ambiente de execução (runtime) do JavaScript fora do navegador. Esse ambiente já inclui diversas funções prontas para uso, como o console.log, que são familiares desde os primeiros passos na programação.

A biblioteca que contém a palavra console e o método log já vem implementada por padrão tanto nos navegadores quanto no Node.js. Essa implementação padrão é tão comum e amplamente utilizada que podemos acessá-la facilmente nos navegadores ou no Node.js através do terminal.

Esse fato nos permite utilizar várias funções sem a necessidade de instalar nada, pois elas estão disponíveis por padrão, tanto nos navegadores quanto no Node.js. Em resumo, um ambiente de execução inclui não apenas o código base, mas também as bibliotecas necessárias para seu funcionamento.

O que são bibliotecas?  
Uma biblioteca consiste em conjuntos de códigos reutilizáveis que solucionam problemas específicos ou atendem necessidades particulares.

Em outras palavras, na programação, existem diversos problemas e demandas comuns, como exibir texto no console, para os quais não precisamos escrever código do zero.

Optamos por utilizar código pronto para evitar o retrabalho. O termo "reinventar a roda" é empregado na programação quando, ao invés de utilizar uma solução já existente, testada e implementada, tentamos criar algo totalmente novo.

- Por que utilizamos a biblioteca?
- Diversos usos e funcionalidades
- Reaproveitamento e eficiência
- Empresas e comunidades
- Qualquer pessoa pode criar uma lib e publicá-la

Existem várias razões pelas quais utilizamos bibliotecas na programação. Primeiramente, elas abrangem uma vasta gama de funcionalidades, o que é importante dado que os problemas enfrentados na programação atualmente tendem a ser complexos.

Em outras palavras, existem bibliotecas prontas para realizar validações, autenticações, testes, conexões com bancos de dados, bem como conexões com uma variedade de outros serviços que uma aplicação pode requerer.

No front-end, enfrentamos desafios comuns como animação e conversão de arquivos. Esses problemas são encontrados em praticamente todas as aplicações e, para evitarmos reinventar a roda, utilizamos bibliotecas pré-desenvolvidas, conhecidas como pacotes de código. Durante o curso, também desenvolveremos isso.

Essas bibliotecas não só nos poupam tempo, mas também nos permitem programar de forma mais eficiente ao reutilizar o código desenvolvido e testado por outras pessoas em diversos cenários.

Quando desenvolvemos algo do zero, é necessário realizar extensos testes para garantir seu funcionamento. No entanto, bibliotecas, especialmente as populares, já passaram por testes abrangentes, identificaram e corrigiram bugs, eliminando a necessidade de reinventar soluções já existentes.

Algumas bibliotecas comuns são nativas nos ambientes de execução, como o console.log. Nos navegadores, há bibliotecas específicas para lidar com elementos de tela, enquanto o Node.js possui suas próprias bibliotecas para diferentes funcionalidades.

Muitas bibliotecas importantes, como as de autenticação, validação e conexão com bancos de dados, são desenvolvidas por empresas ou comunidades externas. Frequentemente, as empresas criam essas bibliotecas e as disponibilizam para uso geral.

Algumas dessas bibliotecas são originalmente desenvolvidas para uso interno, mas, ao perceberem sua utilidade geral, são liberadas para uso externo. Isso ocorre porque resolveram problemas específicos dentro da empresa, mas viram potencial em compartilhar essas soluções com outras pessoas desenvolvedoras.

As comunidades também desenvolvem bastante, inclusive, se você quer contribuir para resolver um bug em determinada biblioteca ou para ajudar em alguma coisa, as comunidades costumam ajudar nos códigos das bibliotecas que são públicas.

Qualquer pessoa tem a capacidade de criar e publicar uma biblioteca em qualquer linguagem de programação, especialmente em JavaScript, desde que atenda a certos requisitos. A disponibilidade da publicação da biblioteca dependerá da plataforma escolhida para isso.

No curso, haverá material adicional sobre como distribuir uma biblioteca, um tópico que não será abordado diretamente aqui.

Conclusão e Próximos Passos  
Agora que entendemos o problema a ser resolvido e o que será desenvolvido, estamos prontos para criar uma biblioteca para solucionar esse problema específico.

### Aula 1 - Usando a linha de comando - Vídeo 3

Transcrição  
Identificamos o problema e agora estamos prontos para iniciar a codificação. Durante a etapa de preparação do ambiente, disponibilizamos um link para o download de três arquivos de texto essenciais para testar nossa aplicação.

Esses arquivos já foram baixados e estão armazenados na pasta de trabalho designada para a codificação. Para garantir que você tenha esses arquivos, criamos uma pasta específica chamada arquivos e os colocamos lá.

Caso ainda não tenha feito isso, é importante fazer uma pausa aqui para baixar os arquivos antes de continuar com o processo.

Criando os arquivos  
Para começar, criaremos o nosso primeiro arquivo. Primeiramente, fora da pasta arquivos, na raiz da pasta do nosso projeto, vamos utilizar o Visual Studio Code para criar uma nova pasta chamada src, que representa o diretório de source (código fonte) onde estarão todos os nossos arquivos.

Para criar, clicamos no segundo ícone de pasta na parte superior esquerda, que representa "New Folder". Dentro dessa pasta src, vamos criar o arquivo index.js, que será o ponto de entrada padrão da nossa aplicação. Para isso, clicamos no primeiro ícone de arquivo na parte superior esquerda ("New File").

src
index.js

Vamos revisar o problema e dividir em três etapas principais. Primeiramente, precisamos implementar a funcionalidade para receber o conteúdo de um arquivo de texto. Em segundo lugar, devemos processar esse conteúdo como uma string, já que se trata de texto.

Por fim, precisamos determinar como disponibilizar as informações resultantes desse processamento. Independentemente do que desejamos realizar - como contar palavras, identificar a quantidade de parágrafos ou encontrar palavras repetidas - o processo geral é o mesmo. O importante é garantir que o resultado do processamento seja disponibilizado de alguma maneira.

Resolveremos o primeiro problema, que é receber o texto do arquivo.

Recebendo o texto  
Criando a variável caminhoArquivo  
Dentro do nosso arquivo index.js, criamos uma variável chamada de caminhoArquivo, pois nosso objetivo inicial é importar esse arquivo para dentro do nosso programa. Em cursos anteriores de fundamentos, aprendemos sobre a função require(), que é nativa do Node.js e nos permite importar módulos externos utilizando uma string como referência para o arquivo desejado.

Foi o que fizemos anteriormente. Vamos testar? Utilizaremos o require() para criar uma string contendo ./arquivos como argumento. Nessa string, inseriremos o nome de um dos arquivos de teste presente na pasta, como por exemplo, texto-web.txt.

Assim, ao passarmos o caminho /texto-web.txt e finalizarmos com ponto e vírgula, poderemos então chamar a função console.log() para verificar o conteúdo da variável caminhoArquivo.

index.js

```JavaScript
const caminhoArquivo = required('./arquivos/texto-web.txt');

console.log(caminhoArquivo);
```

Abrimos o terminal clicando em "Terminal > New terminal" na parte superior esquerda e em seguida executamos o comando que já conhecemos, que é node seguido do caminho para o nosso arquivo index.js que está localizado dentro da pasta src.

> node src/index.js

Contudo, deparamo-nos imediatamente com um erro. Parece que já começamos com uma anomalia desde o início.

O erro abaixo foi parcialmente transcrito.

> Error: Cannot find module './arquivos/texto-web.txt'

O erro diz, em inglês, que o Node não consegue encontrar o módulo que está dentro do caminho que passamos. Isso acontece por quê? Vamos fechar o terminal clicando no ícone de xis no canto superior direito.

Isso ocorre devido ao método require() que tenta obter o conteúdo de um arquivo e executá-lo de alguma maneira. Portanto, ele só pode ser usado com módulos.

Ao executar o comando no terminal, notamos a menção da palavra módulos. Isso significa que o require() só funciona com arquivos JavaScript ou similares, como arquivos JSON. Portanto, para resolver esse problema, precisaremos adotar uma abordagem diferente.

Para resolver essa questão, precisamos instruir o JavaScript a entender que o caminho de arquivo que estamos passando se refere a um texto, e então capturar essa string do texto.

Além disso, há outra questão a considerar. Em segundo, seria conveniente se pudéssemos especificar o caminho do arquivo com o qual desejamos trabalhar, seja "texto-web", "texto-kanban" ou qualquer outro arquivo .txt, sem ter que abrir diretamente o arquivo index.js.

Caso contrário, toda vez que quisermos executar o código, teríamos que acessar manualmente o arquivo index.js e modificar a string do caminho do arquivo. Isso não seria prático.

Vamos começar abordando o segundo problema para tornar nossa vida mais fácil, permitindo que possamos receber qualquer arquivo. Para isso, faremos o seguinte: removeremos o require() do caminhoArquivo, já que não está funcionando como esperado, e substituiremos por outra instrução, que será process.argv.

E deixamos o console.log() para exibir o conteúdo da variável caminhoArquivo.

index.js

```JavaScript
const caminhoArquivo = process.argv;

console.log(caminhoArquivo);
```

Assim, poderemos abrir o terminal e testar o resultado obtido por essa variável. Digitamos o comando node src/index.js no terminal e verificar se ainda há erros.

> node src/index.js

Neste momento, o terminal não está mais apresentando erros; em vez disso, está exibindo um array contendo duas strings.

O retorno abaixo está de acordo com a estrutura de pastas da instrutora:

```JavaScript
[
'/home/juliana/.nvm/versions/node/v20.11.0/bin/node', 

'/home/juliana/Documents/nodejs-lib/src/index.js'
]
```

Ao analisarmos esse array, notamos que a primeira string é um caminho de arquivo localizado no meu computador. Isso é evidente pela presença de /home/juliana, que corresponde ao meu diretório, bin de binário, seguido de outros detalhes como /.nvm/versions/node/v20.11.0/bin/node.

O segundo elemento do array é um caminho, notavelmente mais simples de identificar, pois refere-se diretamente ao arquivo que enviamos para ser lido pelo node, src/index.js. Portanto, o objetivo de process.argv, derivado de argument vector (vetor de argumentos), é simplesmente capturar os valores passados pelo terminal e organizá-los em um array.

Os argumentos são inseridos no array na ordem em que são executados. Assim, o primeiro argumento se refere ao endereço em que estão armazenados os arquivos binários do node, ou seja, os arquivos que o node utiliza para interpretar nosso código. Já o segundo argumento indica o local onde está o código a ser interpretado.

Para ilustrar, podemos fazer um teste prático no terminal. Basta pressionar a seta para cima para recuperar o comando anterior e adicionar alura após node src/index.js.

> node src/index.js alura

Em seguida, pressionamos "Enter" para executar o comando novamente.

O que foi exibido no console desta vez?

```JavaScript
[
'/home/juliana/.nvm/versions/node/v20.11.0/bin/node', 

'/home/juliana/Documents/nodejs-lib/src/index.js', 'alura'
]
```

Mais uma vez, uma string, porém, o último valor agora é uma string contendo a informação "alura". A partir disso, já podemos compreender o que estamos prestes a fazer. O process.argv possibilita que enviemos comandos para o terminal, os quais são inseridos em um array. Dessa forma, ao estarem dentro de um array, podemos utilizá-los em nosso código.

Ou seja, ao executar console.log(caminhoArquivo) e fornecer apenas o índice 2, o comando mostrará apenas alura no terminal.

```JavaScript
const caminhoArquivo = process.argv;

console.log(caminhoArquivo[2]);
```

alura

Isso indica que conseguimos passar o caminho do texto para dentro do programa, seja esse texto proveniente de texto-web, texto-Kanban ou qualquer outro local no computador.

Agora, vamos prosseguir.

Criando a constante link  
No código, criaremos uma nova constante chamada link, que será definida como o resultado de caminhoArquivo no índice 2. Podemos então utilizar console.log() para visualizar o conteúdo de link.

```JavaScript
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

console.log(link);
```

Em seguida, podemos retornar ao terminal para realizar o último teste. Para limpar o terminal, utilizamos "Ctrl + L" e executamos o comando Node com node src/index.js.

Segundo, src/index.js, que será o arquivo executado. Terceiro, a informação extra, a instrução extra que queremos passar, que é o caminho do nosso arquivo de texto, que está dentro de arquivos/texto-web.txt, por exemplo, .txt.

> node src/index.js arquivos/texto-web.txt

Ao teclarmos "Enter", obtemos:

arquivos/texto-web.txt

E agora ele vai para dentro do nosso programa e pode ser utilizado.

Conclusão e Próximos Passos  
A resolução do segundo problema, que consistia em inserir o caminho dentro do programa, já foi concluída. Agora, enfrentamos o problema principal: transformar esse texto em uma string para que possamos manipulá-lo dentro do código.

### Aula 1 - Lendo arquivos com fs - Vídeo 4

Transcrição  
Já sabemos que o próximo passo é fazer o JavaScript extrair o texto de dentro do arquivo.

**Extraindo texto de um arquivo**  
Como fazer isso? Existe uma biblioteca que faça isso para mim? A resposta é sim, existe. Interagir com arquivos é uma das tarefas mais importantes e básicas que qualquer programa precisa saber fazer.

**Biblioteca File system**  
Essa biblioteca é nativa do Node. Não precisa instalar, ela não é externa. Só precisamos referenciá-la no nosso código. No topo do arquivo, na primeira linha do index.js, criamos uma constante chamada de fs.

Podemos utilizar o require() nesta situação, pois estamos lidando com módulos e arquivos JavaScript. Dentro do require(), passaremos uma string contendo apenas as letras fs. Por fim, finalizamos essa linha de código com um ponto e vírgula.

```JavaScript
const fs = required('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

console.log(link);
```

[Documentação da biblioteca File system](https://nodejs.org/api/fs.html#file-system)

O fs (file system, ou sistema de arquivos) é uma biblioteca fundamental que permite interagir com o sistema de arquivos de um computador. Essa funcionalidade é essencial em praticamente todas as linguagens de programação, pois possibilita acessar, criar e modificar arquivos.

A documentação do Node é extensa e complexa, especialmente para uma biblioteca tão essencial quanto o fs. No entanto, vamos incluir o link específico para o método que utilizaremos para ler um arquivo, chamado readFile.

[Método readFile](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback)

Este método é projetado especificamente para essa tarefa. Além disso, a documentação do Node geralmente inclui exemplos de uso para nos auxiliar na implementação inicial.

**Implementando o método readFile**  
Voltamos ao código do arquivo index.js para entender o que a biblioteca faz e o método que vamos usar. Importamos a biblioteca com const fs = require(). Já temos a variável link preparada para receber o caminho do arquivo que desejamos ler.

Agora, podemos implementar o nosso método. Usamos fs.readFile, conforme a documentação sugere. É importante lembrar que ao usar métodos e funções, sejam eles nativos do interpretador ou de terceiros, precisamos saber exatamente quais parâmetros eles requerem para funcionar corretamente.

```JavaScript
const fs = required('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

fs.readFile

console.log(link);
```

Ao revisarmos a documentação do readFile, notamos que o exemplo passa dois parâmetros para a função.

Exemplo retirado da documentação:

```JavaScript
import { readFile } from 'node:fs';

readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 
```

O primeiro é uma string que contém o caminho do arquivo que desejamos ler. O segundo parâmetro é uma função callback, um conceito que já vimos em cursos anteriores de fundamentos.

Essa função callback deve receber dois parâmetros. O primeiro é denominado err, e o segundo é chamado de data, o qual representa o conteúdo do arquivo em si.

Vamos começar a implementação no VSC. Utilizando fs.readFile, abrimos parênteses. O primeiro parâmetro é uma string contendo o caminho do arquivo, e como já temos isso na variável link, não precisamos envolver isso novamente em aspas, apenas passamos o nome da variável.

No entanto, há um detalhe importante que não está presente na documentação básica.

Como estamos lidando com arquivos de texto, é necessário especificar o encoding, ou seja, o sistema de codificação desse texto.

Para isso, envolvemos o tipo de encoding entre aspas, como por exemplo utf-8.

```JavaScript
const fs = required('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

fs.readFile(link, 'utf-8')

console.log(link);
```

O sistema de encoding UTF-8 é utilizado para codificar caracteres no nosso idioma e em muitos outros idiomas que utilizam a escrita latina.

É essencial passar esse sistema para o readFile, para que ele saiba como deve codificar a string em relação a caracteres especiais, símbolos e outros elementos.

Agora, vamos lidar com o terceiro parâmetro, que é o callback com os dois parâmetros mencionados na documentação. Nomeamos o primeiro como erro, mantendo o nome em português conforme a documentação, e o segundo chamamos de texto, representando o conteúdo que esperamos receber. Em seguida, chamamos esses dois parâmetros, abrindo uma arrow function e as chaves para testarmos se está tudo correto.

Sempre inserimos um console.log() para verificar. Nele, retornamos o valor de texto, pois se tudo estiver correto, o fs lerá o arquivo passado por link, converterá tudo em uma string usando o UTF-8 como sistema de codificação de caracteres e passará esse valor para dentro do callback, dentro da função, por meio do parâmetro texto.

Vamos começar removendo o último console.log, que era um link desnecessário.

```JavaScript
const fs = required('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

fs.readFile(link, 'utf-8', (erro, texto) => {
  console.log(texto);
})
```

Dessa forma, tudo deve fazer sentido.

Em seguida, salvamos o arquivo e abrimos um novo terminal para testarmos o código. Para isso, basta executar o comando node src/index.js e lembrar de incluir o terceiro parâmetro, já que a variável link espera o caminho do arquivo de texto como entrada.

Então, fornecemos o caminho arquivos/texto-web; o arquivo texto-web.txt, que é um pouco menor.

> node src/index.js arquivos/texto-web.txt

Pressionamos "Enter" para iniciar o teste. O resultado aparece no terminal com o console.log, exibindo o texto do arquivo.

O retorno abaixo foi parcialmente transcrito:

Como a Web funciona

Como a web funciona oferece uma visão simplificada do que acontece quando você vê uma página em seu navegador…

Se abrirmos o arquivo texto-web.txt no editor do lado esquerdo, veremos o conteúdo "como a web funciona, oferece uma visão simplificada, etc.".

Conclusão e Próximos Passos  
Tudo está funcionando conforme o esperado, confirmando que o sistema de arquivos está operando corretamente. Agora podemos prosseguir com o processamento do texto no programa!

### Aula 1 - Para saber mais: Caminho absoluto vs Relativo

Quando começamos a programar é essencial conhecer a estrutura de pastas e arquivos e saber como “navegar” por esta estrutura. Muitas vezes descobrimos que aquele bug estranho aconteceu porque cometemos algum erro no caminho (ou path) de algum arquivo, apesar de editores de texto como o Visual Studio Code ajudarem com o recurso de autocompletar.

Um caminho é onde se localiza um arquivo ou diretório (que também chamamos de pasta) no sistema de arquivos de um sistema operacional. é importante diferenciar caminho relativo de caminho absoluto, além de como acessá-los.

Caminho absoluto
Chamamos de caminho absoluto quando a localização de um arquivo ou pasta é especificado a partir do diretório-raiz do sistema operacional. Por exemplo:

```JavaScript
//caminho para um diretório (a última `/` é opcional)
/home/juliana/Documents/alura/projeto-js

//caminho para um arquivo dentro do diretório
/home/juliana/Documents/alura/projeto-js/index.js
```

Caminho relativo  
Um caminho relativo para um diretório ou arquivo é definido a partir de sua relação com o pwd, ou seja, o present working directory (diretório de trabalho atual). Na linha de comando, pwd também é o comando print working directory (imprimir o diretório de trabalho), que usamos justamente para saber onde na estrutura do sistema operacional se encontra o diretório em que estamos.

Veja no exemplo abaixo uma representação em árvore de um diretório, como o do curso em que estamos trabalhando (o diretório node_modules foi excluído para facilitar a leitura, pois é muito extenso):

```JavaScript
/home/juliana/Documents/nodejs-lib
.
├── arquivos
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
├── lib
│   ├── index.js
```

Na representação acima, consideramos como pwd o diretório nodejs-lib. Então, o caminho relativo do arquivo texto-web.txt, por exemplo, seria ./arquivos/texto-web.txt, e o caminho absoluto seria /home/juliana/Documents/texto-web.txt.

Na estrutura de diretórios, o . representa “aqui”. Quando queremos sair do diretório atual e “voltar” um nível, utilizamos ... Por exemplo:

```JavaScript
/home/juliana/Documents/nodejs-lib
.
├── arquivos
│   ├── texto-aprendizado.txt
│   ├── texto-kanban.txt
│   └── texto-web.txt
├── lib
│   ├── index.js
```

Se quisermos referenciar algum dos arquivos de texto no arquivo ./src/index.js, devemos fazer da seguinte forma:

```JavaScript
// arquivo ./lib/index.js

const stringCaminhoTexto = ‘../arquivos/texto-web.txt’;
```

Usamos o .. para “subir um nível” na hierarquia de diretórios para só então “entrar” no diretório que queremos. Dessa forma, não precisamos referenciar o caminho absoluto de todos os arquivos quando fizermos importações de módulos; o que também funcionaria, mas não é tão prático.

Outra diferença importante entre caminho absoluto e relativo é com relação à execução de programas a partir da linha de comando. Por exemplo, usando a árvore de diretórios acima, o comando node index.js só funcionaria caso o diretório atual (pwd) no terminal já fosse /home/juliana/Documents/nodejs-lib/lib. Por outro lado, o comando node /home/juliana/Documents/nodejs-lib/lib/index.js funcionaria independentemente do diretório atual no terminal, pois o Node.js vai acessar o arquivo index.js a partir de seu caminho absoluto.

O terminal é uma ferramenta poderosa. Além de executar comandos e rodar programas, com ele podemos fazer tudo que fazemos com as janelas e ícones do sistema operacional como navegar entre diretórios (ou pastas), criar arquivos, mudá-los de lugar e renomeá-los, entre outras tarefas.

Pratique os comandos para ir ganhando agilidade e para ficar confortável com o sistema de arquivos e diretórios. Além disso, temos um [curso focado no uso do terminal para Linux](https://cursos.alura.com.br/course/terminal-comandos-executar-tarefas), porém os comandos podem ser utilizados no Windows com a ferramenta GitBash que pode ser instalada automaticamente junto com o [Git](https://git-scm.com/) e também no terminal nativo do MacOs.

### Aula 1 - Lendo arquivos com fs

Conforme praticamos na aula, fs é uma biblioteca importante do Node.js, que permite diversos tipos de interação de uma aplicação com o sistema de arquivos do computador.

Relembrando o que foi construído anteriormente, observe o código abaixo e assinale a alternativa correta sobre os parâmetros utilizados no método fs.readFile:

```JavaScript
const fs = require('fs');
const arquivo = './meuTexto.txt';

fs.readFile(arquivo, 'utf-8', (erro, dados) => {
  console.log(dados);
});
```

Resposta:  
O parâmetro ’utf-8’ define a codificação de caracteres do arquivo a ser lido.

O parâmetro 'utf-8' é usado para informar ao método readFile que o arquivo deve ser lido usando a codificação UTF-8, permitindo a correta interpretação dos caracteres.

### Aula 1 - Faça como eu fiz: utilizando linha de comando e fs

Nesta aula, aprendemos a criar um arquivo JavaScript que recebe um argumento da linha de comando e exibe esse argumento no console. Também vimos como utilizar o módulo fs do Node.js para ler o conteúdo de um arquivo.

Ver opinião do instrutor

Utilizando linha de comando  
Para isso, utilizamos a propriedade process.argv para acessar os argumentos passados na linha de comando. No arquivo "src/index.js", o código foi escrito para armazenar o argumento passado em uma variável e em seguida exibi-lo no console.

Utilizando o módulo fs  
Primeiramente, importamos o módulo fs no nosso arquivo. Em seguida, capturamos o caminho do arquivo a ser lido a partir dos argumentos passados na linha de comando. Por fim, utilizamos o método fs.readFile para ler o conteúdo do arquivo e exibi-lo no console.

### Aula 1 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

- Artigo: [Começando com o terminal](https://www.alura.com.br/artigos/comecando-com-o-terminal-manipulando-arquivos-e-diretorios) para manipular arquivos e diretórios.
- Artigo: [O que é CLI e como utilizar](https://www.alura.com.br/artigos/cli-interface-linha-comandos) a interface de linha de comando.
- Curso: Terminal: aprenda comandos para executar tarefas.
- Documentação do Node.js: [process.argv](https://nodejs.org/api/process.html#processargv).
- Documentação do Node.js: [fs.readFile](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback).

### Aula 1 - O que aprendemos?

Nessa aula, você aprendeu:

- O que são bibliotecas e seu uso no dia-a-dia de qualquer projeto em programação;
- Como funciona a execução de um programa em JavaScript através da linha de comando e do Node.js;
- A acessar informações enviadas através da linha de comando e utilizar estas informações em seu programa;
- O que é a bilioteca fs nativa do Node.js e como importá-la em seu projeto;
- Como utilizar a fs para acessar um arquivo em seu computador e processar seu conteúdo.

## Aula 2 - Criando a Lógica do Projeto

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
