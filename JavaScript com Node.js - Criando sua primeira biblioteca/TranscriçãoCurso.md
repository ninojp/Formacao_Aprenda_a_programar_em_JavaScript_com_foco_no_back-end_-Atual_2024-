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

### Aula 2 - Capturando as palavras - Vídeo 1

Transcrição  
O próximo passo é começar a lógica do contador de palavras.

O que exatamente queremos contar e como faremos isso? A função principal é percorrer o texto e contar as ocorrências de palavras. Portanto, vamos começar criando uma função para isso.

**Verificando palavras duplicadas**  
No index.js, vamos criar uma function chamada verificaPalavrasDuplicadas(). O parâmetro que essa função precisa receber, por enquanto, é apenas o texto que virá do readFile().

Se esse texto virá do readFile, aproveitamos dentro do readFile e substituímos o console.log() pela chamada dessa função verificaPalavrasDuplicadas() recebendo texto.

index.js:

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
  verificaPalavrasDuplicadas(texto);
})
function verificaPalavrasDuplicadas(texto) {

}
```

Dentro do readFile(), o parâmetro texto se refere ao resultado do callback do readFile(). Assim, processamos o arquivo, armazenamos o resultado desse processamento no parâmetro texto e o enviamos para dentro de verificaPalavrasDuplicadas().

Agora, partimos para a lógica da função contadora de palavras. Mas, antes de começar, vamos listar o que precisa ser feito em forma de comentário.

Primeiro, é preciso pegar todas as palavras da string e iterar essas palavras. Por isso, o primeiro passo é criar um array com as palavras. Depois de criá-lo, podemos iterar esse array.

Dentro desse array, é necessário ter um contador que vai verificar se a palavra existe e adicionar no contador mais um se ela existir ou começa a contagem do zero se ainda não tiver nenhuma ocorrência, até o fim do array.

Então, o segundo passo é contar as ocorrências, que é o ponto central da nossa lógica.

No terceiro passo, precisamos pensar em como disponibilizar esse resultado. Isto é, de que forma vamos exibir essa lista de palavras e a quantidade de vezes que elas ocorrem?

Podemos pensar em montar um objeto com o resultado. Por que um objeto? Para exemplificar, vamos montar um modelo de um objeto com a lista de palavras.

Podemos montar um objeto que tenha diversas propriedades, cada propriedade sendo a palavra e o valor, um número correspondente à quantidade de vezes que ela aparece no texto.

Então, teríamos um objeto com a chave "web" e o valor 5, por exemplo. Outra propriedade poderia ser "computador" com 4 ocorrências e assim por diante.

Vamos deixar esse objeto comentado também para lembrarmos dessa estrutura.

// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

// {
//   "web": 5,
//   "computador": 4
// }

A partir dessa lista, conseguimos fazer um passo a passo dentro da função verificaPalavrasDuplicadas() para saber o que ela tem que processar.

Criando um array com as palavras
Para fazer o array, vamos criar uma const listaPalavras que recebe texto.split(), que é um método de array que serve para dividir uma string.

O parâmetro do split() será uma string com um espaço dentro. Note que não é uma string vazia, é uma string com um espaço. Porque o parâmetro do split() é o separador.

```JavaScript
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
}
```

Em outras palavras, o método split() vai pegar toda a string, e a cada ocorrência desse separador (no caso, um espaço), ele vai pegar todo o conteúdo anterior e colocar como um elemento do array.

Em um texto, as palavras normalmente são separadas por espaço. Isso significa que, no final, a variável listaPalavras terá um array composto por todas as palavras do texto - porque o separador é o espaço entre cada uma delas.

Contando as ocorrências e montando o objeto com o resultado
A primeira parte, onde criamos um array com as palavras, está concluída. O segundo passo é contar as ocorrências e depois montar um objeto com resultado.

Podemos já deixar um objeto criado embaixo da listaPalavras. Para isso, criamos um const resultado que recebe um objeto vazio (ou seja, chaves vazias) para guardar as ocorrências de cada palavra.

```JavaScript
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
}
```

Para entender como montar esse objeto, devemos lembrar como adicionamos propriedades (conjuntos de chave e valor) dentro de um objeto.

Primeiro, devemos passar o nome do objeto e depois passamos a propriedade, com ponto ou com colchetes.

```JavaScript
// objeto[propriedade] = valor;
```

Dessa forma, o JavaScript entende que ele vai criar uma propriedade com esse valor dentro do objeto. Ou, se a propriedade já existir, vai atualizar o valor.

Podemos comentar essa linha para nos lembrar de como vamos montar esse objeto.

Agora, é preciso fazer o loop. Vamos puxar listaPalavras e o método do JavaScript que vamos usar para fazer esse loop, será o forEach().

O forEach é um método do JavaScript que não retorna nada. Ele simplesmente executa o que vai dentro da função callback.

Então, forEach vai receber uma palavra do array de palavras. E, a cada palavra, devemos contá-la e acrescentá-la ao objeto.

Dentro das chaves do callback, vamos acrescentar a propriedade palavra no objeto resultado, ou seja, resultado[palavra].

Assim, para cada palavra do array, será criada uma nova propriedade no objeto cujo nome será essa palavra do texto, por exemplo, "web", "computador" ou "JavaScript".

Isso deve receber um valor, onde podemos implementar o nosso contador. Nesse caso, se a propriedade já existir, atualiza o valor. Se não, a propriedade é criada.

Mas, de que forma podemos passar isso? Após um sinal de igual, vamos abrir parênteses para escrever a expressão resultado[palavra] || 0. Afinal, ou vai existir um valor dentro dessa propriedade ou ela será zero.

Fora dos parênteses, digitamos + 1. Dessa forma, incrementamos 1 se a propriedade já existir ou criando se a propriedade não existir ainda.

No final de tudo isso, após fechar o forEach, vamos passar um console.log() em resultado para verificar se deu tudo certo.

```JavaScript
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  // objeto[propriedade] = valor;
  listaPalavras.forEach(palavra => {
    resultado[palavra] = (resultado[palavra] || 0) + 1
  })
  console.log(resultado);
}
```

Testando o código  
Essa é a primeira implementação da lógica. Vamos abrir um novo terminal, chamar node src/index.js, sem esquecer de passar o caminho do arquivo que queremos. Nesse caso, arquivos/texto-web.txt.

> node src/index.js arquivos/texto-web.txt

Retorno parcialmente transcrito:

```JavaScript
{
    'https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/How_the_Web_works\n\nComo': 1,
    a: 3,
    Web: 3,
    'funciona\n\nComo': 1,
    funciona: 1,
    oferece: 1,
    uma: 4,
    'visão': 1,
    …
}
```

O terminal retorna um objeto com todas as palavras do texto. Por enquanto, ainda não está separado em parágrafo, como nos propusemos.

Além disso, apesar de cada palavra ser uma propriedade e a contagem ser um valor, como queríamos, existem algumas ocorrências estranhas nessa lista.

Primeiro, existem algumas palavras muito curtas, por exemplo, "do", "um", "a", etc. Nesse momento, não queremos contar essas preposições e artigos. Devemos tratar isso para contar apenas palavras um pouco mais longas, como "JavaScript", "computador", etc.

Um segundo caso estranho é que apareceu, no meio de algumas propriedades, um ou dois \n, que aparecem onde tem quebra de linha no texto original.

O \n é um caractere de escape que não é renderizado, ou seja, não o visualizamos no texto, mas ele está lá para indicar que acabou uma linha e deve-se quebrar a linha e começar uma linha nova.

Devemos tratar esse caso, porque o JavaScript considerou como uma palavra só tudo o que estava no fim da primeira linha e o que estava no começo da segunda.

Também existem alguns outros problemas, como, por exemplo, a ocorrência de palavras entre parênteses. Como não há um espaço entre os parênteses e a palavra, o JavaScript também interpretou como uma só palavra. É preciso tratar esse caso para tirar os caracteres especiais da contagem.

E, por último, o JavaScript está fazendo diferenciação entre maiúsculas e minúsculas. Então, "Um" maiúsculo ficou separado de "um" minúsculo - cada um com a sua contagem.

Então, note como existe muito a se refinar nessa primeira implementação.

### Aula 2 - Separando em parágrafos - Vídeo 2

Transcrição  
Agora que já temos a funcionalidade principal, podemos voltar e resolver aqueles casos específicos que tínhamos comentado anteriormente.

Acreditamos que faz mais sentido começar pela quebra de parágrafos, porque queremos manter a contagem das palavras repetidas por parágrafo. Portanto, não faz sentido contar tudo e depois separar.

**Separando em parágrafos**  
Para isso, vamos criar outra função para separar a lógica da quebra de parágrafo da contagem de palavras.

Antes da função verificarPalavrasDuplicadas(), vamos criar uma function chamada quebraEmParagrafos().

Essa função tem que receber o texto como parâmetro, porque a partir dela, fazemos a lógica da contagem de palavras.

Dentro dessa função, vamos criar uma constante chamada paragrafos.

Mas, como fazemos para o JavaScript identificar onde começa um parágrafo e onde termina outro? Devemos chamar texto, que vem como parâmetro, seguido do método de array .split() novamente.

Só que agora, ao invés de um espaço na string, vamos pedir para ele fazer a separação por \n. Lembre-se de usar a barra invertida.

index.js:

```JavaScript
function quebraEmParagrafos(texto) {
  const paragrafos = texto.split('\n');
}
```

O \n é um caractere de escape, que não é renderizado, mas ele assinala numa string onde tem uma quebra de linha.

Então, podemos usar esse \n como um separador de parágrafos. Toda vez que o texto tiver esse caractere de escape, JavaScript com o split() vai pegar toda a string que vinha anteriormente e separá-la como um novo elemento do array.

E a partir daí, esperamos que, dentro da constante paragrafos, exista um array composto por parágrafos separados - ao invés de palavras separadas.

Colocando palavras em minúsculo  
Além disso, podemos aproveitar para resolver outro problema que tínhamos também, que é a separação entre maiúsculas e minúsculas.

Letras maiúsculas e letras minúsculas são caracteres diferentes. Por isso, o JavaScript, obviamente, não acha que é a mesma palavra. Só que, para nós, não faz diferença se a palavra está no começo ou final do parágrafo.

Então, podemos usar um método de string para pegar todo o texto e convertê-lo em letra maiúscula ou minúscula. E, a partir daí, o JavaScript faz a comparação e a contagem.

Tanto faz converter as letras em maiúscula ou minúscula. Mas, como tem muito mais letra minúscula no texto, faz mais sentido transformar as poucas maiúsculas que tem.

Por isso, na constante paragrafos, depois do texto e antes do split(), vamos passar .toLowerCase(), mas sem nenhum parâmetro. Por fim, o juntamos com o split. Ou seja, texto.toLowerCase().split.

Dessa maneira, encadeamos os métodos para transformar todo o texto em letra minúscula e segmentá-lo em parágrafos.

Aproveitamos que o JavaScript já vai ter que percorrer o texto todo para fazer esses dois processos. Assim, o código fica mais performático - em vez de fazer primeiro um e só depois o outro.

Para testar, vamos colocar um console.log() em paragrafos.

```JavaScript
function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  console.log(paragrafos);
}
```

Além disso, precisamos chamar a função quebraEmParagrafos(), porque ela não está sendo chamada em lugar nenhum ainda.

Em readFile(), vamos chamar a função quebraEmParagrafos(), passando texto.

Podemos comentar verificarPalavrasDuplicadas que já estavam sendo chamada, porque agora faremos esse processo por parágrafo. Então, não faz muito sentido essa função ficar dentro do readFile().

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
  quebraEmParagrafos(texto);
  // verificaPalavrasDuplicadas(texto);
})
```

Testando o código  
No terminal, usamos a seta para cima para repetir o último comando e apertamos "Enter" para executá-lo.

> node src/index.js arquivos/texto-web.txt

Retorno parcialmente transcrito:

```JavaScript
[
    'https://developer.mozilla.org/pt-br/docs/learn/getting_started_with_the_web/how_the_web_works',
    '',
    'como a web funciona',
    '',
    'como a web funciona oferece uma visão simplificada do que acontece quando você vê uma página em um navegador, no seu computador ou telefone.',
    …
]
```

Deu tudo certo. O que o terminal retornou um array, onde cada elemento, em vez de ser uma palavra sozinha, é um dos parágrafos do nosso texto.

Você deve perceber que, junto com os textos, tem algumas strings vazias, que estão separadas do resto. Essas strings são justamente as quebras de linha extra, quando pulamos uma linha antes de começar outro parágrafo.

Podemos tratar esse caso mais para frente. Primeiro, vamos finalizar essa parte.

Mapeando as palavras de cada parágrafo
Qual é o próximo passo? Já temos os parágrafos e um array, portanto, precisamos iterar esse array de parágrafos e chamar a função de verificar palavras dentro dele.

Na função quebraEmParagrafos(), abaixo do split(), vamos criar outra const chamada contagem. Essa constante vai pegar o array de paragrafos e iterar sobre ele.

Só que agora não vamos iterar com o forEach(), vamos iterar com o map(). O map é parecido com o forEach, só que sempre retorna um array com os elementos que foram processados, ou um array vazio.

Por que queremos retornar um array agora? Porque, como estamos separando por parágrafos, podemos ter um array e cada objeto que montamos com a contagem vai separar um parágrafo.

Em suma, teremos um array de objetos, onde cada objeto conta as palavras de um parágrafo.

Em paragrafos.map(), vamos chamar o parâmetro de paragrafo, porque é o padrão que utilizamos.

Em seguida, vamos criar uma arrow function onde necessitamos retornar algo para o map() conseguir jogar para dentro da variável contagem.

Nesse caso, retornaremos verificaPalavrasDuplicadas(), recebendo, ao invés de texto, um paragrafo por vez.

Desse modo, a cada paragrafo do array de paragrafos, vamos executar a função de contagem e retornar um objeto para dentro da variável contagem.

```JavaScript
function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos.map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  })
  console.log(paragrafos);
}
```

A última modificação que precisamos fazer é na função verificaPalavrasDuplicadas(). Por enquanto, ela não está retornando nada. Apenas visualizávamos o objeto pelo console.log().

Só que agora, ao invés de console.log(resultado), temos que retornar o objeto resultado para fora da função para poder ser utilizado dentro do map().

Agora, em quebraEmParagrafos(), podemos trocar o último console.log() de paragrafos para contagem, que é o nome da variável onde está sendo guardado o array de objetos.

```JavaScript
function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos.map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  })
  console.log(contagem);
}
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  // objeto[propriedade] = valor;
  listaPalavras.forEach(palavra => {
    resultado[palavra] = (resultado[palavra] || 0) + 1
  })
  return resultado;
}
```

Testando o código
Salvamos o arquivo, abrimos o terminal e usamos seta para cima e "Enter" para repetir a execução do comando anterior.

> node src/index.js arquivos/texto-web.txt

Retorno parcialmente transcrito:

```JavaScript
[
    {
        'https://developer.mozilla.org/pt-br/docs/learn/getting_started_with_the_web/how_the_web_works': 1
    },
    { '': 1 },
    { como: 1, a: 1, web: 1, funciona: 1 },
    { '': 1 },
    {
        como: 1,
        a: 1,
        web: 1,
        funciona: 1,
        oferece: 1,
        uma: 2,
        'visão': 1,
        simplificada: 1,
        …
    }
]
```

Foi retornado no terminal um array com diversos objetos. Cada objeto representando a contagem de palavras de um parágrafo.

E o JavaScript também considerou nessa contagem as strings vazias, mas vamos cuidar disso mais adiante.

Próximos passos  
Dois dos problemas que tínhamos, que era a diferenciação entre maiúsculas e minúsculas e a contagem por parágrafo, já foram resolvidos.

Ainda tem mais alguns problemas para atacarmos, por exemplo, a questão dos caracteres especiais, que o JavaScript está considerando como parte das palavras.

E também tirar algumas palavras como "ao", "e", "ou", que no nosso caso achamos que não precisa contar.

### Aula 2 - Para saber mais: caracteres de quebra de linha

Durante esta aula vimos um caractere diferente, o \n. Caracteres precedidos pela barra \ são chamados “caracteres de escape” e deixam de ter significado literal (por exemplo, a letra N) e passam a significar instruções específicas dadas ao interpretador do texto. Por exemplo, inserir uma quebra de linha, inserir caracteres especiais, tabulação e espaços etc.

Alguns exemplos de caracteres de escape:

- \' insere aspas simples
- \" insere aspas duplas
- \\ insere barra invertida
- \n insere nova linha (new line)
- \r insere nova linha (carriage return)
- \t insere tabulação
- \b insere backspace

Para finalizar “fim de linha” ou “quebra de linha”, existem alguns caracteres diferentes e diferentes sistemas operacionais utilizam estes caracteres de formas diferentes ao interpretarem textos.

- Em sistemas Unix e Unix-like (como o Linux) o caractere usado é \n (new line).  
- \n também é caractere de escape padrão para quebra de linha em todas as linguagens baseadas em C (é o caso do JavaScript).
- Em sistemas Windows, a quebra de linha usa o caractere \r, ou carriage return. O nome vem das antigas máquinas de escrever em que o posicionamento da peça responsável por imprimir as letras (carro ou carriage em inglês) era feito manualmente a cada fim de linha.  
![alt text](image.png)  
- Filmagem em preto e branco mostrando duas mãos datilografando em uma máquina de escrever antiga. A mão esquerda empurra a barra de retorno.
- Em antigos sistemas Mac (anteriores ao macOS X) o padrão era \r\n, nessa ordem.  
- A diferença não é apenas no caractere: \n representa o fim de uma linha, o que para Linux e Mac é o equivalente a começar uma nova linha de texto. Já \r move o cursor para o início de uma nova linha (como a máquina de escrever).

É muito importante entender a forma como os sistemas operacionais e as linguagens “encodam” (ou interpretam) os caracteres em uma string para transformá-los em texto, pois as diferenças podem causar bugs de interpretação de caracteres onde menos se espera.

### Aula 2 - Refinando a contagem - Vídeo 3

Transcrição  
Continuando a ajustar nosso código para os casos que discutimos anteriormente, o próximo problema que podemos atacar é a questão dos caracteres especiais. Por exemplo, uma vírgula ou um parênteses que entrou no meio das palavras.

**Suprimindo caracteres especiais**  
Primeiramente, podemos criar uma função para detectar esses caracteres especiais no texto e suprimi-los. Queremos substituir caracteres especiais por nada, por uma string vazia.

Vamos criar outra função, antes de verificarPalavrasDuplicadas(), para fazer isso. Essa funcion que chamaremos de limpaPalavras() deve receber uma palavra por parâmetro para poder fazer essa limpeza.

Queremos substituir caracteres especiais por nada. Existe um método de string que serve justamente para substituir caracteres. Então, essa função vai apenas retornar a palavra.replace, que é o nome desse método de string do JavaScript.

O primeiro parâmetro do replace() é o carácter que queremos substituir. Por exemplo, se quiséssemos substituir todos os abre-parênteses, bastaria passar uma string com abre-parênteses.

O segundo parâmetro do replace, é pelo que queremos substituir. Não queremos substituir por nada, queremos deixar vazio. Então, vamos substituir por uma string vazia.

index.js:

```JavaScript
function limpaPalavras(palavra) {
  return palavra.replace('(', '');
}
```

Contudo, devemos pensar que sempre trabalharemos com essas funções para qualquer texto que recebamos. E, nesses textos, os abre-parênteses não serão os únicos caracteres especiais. Existirão fecha-parênteses, aspas, E comercial, cerquilha e vários outros.

Como podemos passar para essa função um caso mais abrangente? Queremos que seja substituído qualquer um desses caracteres especiais presentes no texto por nada.

Não conseguimos pegar a string, onde está esse abre-parênteses, e começar a colocar também fecha-parênteses, cerquilha, cifrão, vírgula. Não dá para fazer isso, porque o JavaScript vai achar que isso é uma string com exatamente esse conteúdo.

Para esses casos, um recurso muito usado em programação é a expressão regular - também conhecida como RegEx ou RegExp.

> Não vamos entrar em detalhes sobre como RegEx funciona, porque temos um curso dedicado às [Expressões regulares](https://cursos.alura.com.br/course/expressoes-regulares-buscas-validacoes-substituicoes-textos) na Alura.

Deixamos uma expressão regular pronta comentada no código que você pode copiar do repositório do curso. Iremos apenas copiar essa expressão e colá-la como o primeiro parâmetro do replace().

```JavaScript
function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
```

É uma expressão bem comprida, com muitos caracteres. Vamos explicar como ela funciona.

Começamos com um barra normal e colchetes. Dentro dos colchetes, listamos todos os casos de caracteres especiais que imaginamos que possa ocorrer no texto. Por exemplo, ponto final, vírgula, barra invertida, barra normal, cerquilha, exclamação, abre e fecha-parênteses fechando, tio, chaves, igual, etc.

No final, colocamos /g para ser global, ou seja, para pesquisar em todas as linhas do texto.

O que fizemos foi usar uma expressão regular que é um tipo de linguagem que utilizamos para identificar padrões em texto.

Ou seja, toda vez que o replace() encontrar uma correspondência de algum dos caracteres listados, ele será suprimido.

Agora podemos passar a função limpaPalavras() para dentro do resto do código.

Em que momento queremos que essas palavras sejam limpas? No momento em que elas estão sendo verificadas. Então, a colaremos em verificaPalavrasDuplicadas(). Afinal, não faz muito sentido fazer isso na parte da separação por parágrafos.

Em verificaPalavrasDuplicadas(), depois de fazer o split(), dentro do forEach(), quando o código estiver verificando palavra por palavra, aí, sim, podemos criar uma const palavraLimpa que não conterá caracteres especiais. Nessa constante, vamos executar a função limpaPalavras() recebendo palavra.

Agora, o objeto resultado não vai ter mais como propriedade palavra, e, sim, palavraLimpa. Então, palavraLimpa.

Isso será igual ao contador, que, ao invés de resultado[palavra], será resultado[palavraLimpa]. E aí, retorna o resultado, como já fazíamos antes.

```JavaScript
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  // objeto[propriedade] = valor;
  listaPalavras.forEach(palavra => {
    const palavraLimpa = limpaPalavras(palavra);
    resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
  })
  return resultado;
}
```

Retirando palavras curtas  
Podemos aproveitar esse momento que estamos dentro do forEach(), verificando palavra por palavra, para resolver aquele outro problema de palavras muito curtas.

Dentro do forEach(), podemos fazer uma condicional, um if. Queremos conferir se o comprimento da palavra, ou seja, se palavra.length é maior ou igual a 3. Assim, cortaremos "ou", "e", "um", etc.

Se for verdadeiro, faremos a limpeza da palavra e jogamos ela dentro do objeto resultado. Por isso, a const palavraLimpa e o objeto resultado vão para dentro desse if.

```JavaScript
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  // objeto[propriedade] = valor;
  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
    }
  })
  return resultado;
}
```

Qualquer palavra que seja menor que isso será simplesmente ignorada.

Testando o código  
Após salvar, podemos abrir o terminal para testar. Executamos o último comando com seta para cima e "Enter".

> node src/index.js arquivos/texto-web.txt

Retorno parcialmente transcrito:

```JavaScript
[
    {
        httpsdevelopermozillaorgptbrdocslearngettingstartedwiththewebhowthewebworks: 1
    },
    {},
    { como: 1, web: 1, funciona: 1 },
    {},
    {
        como: 1,
        web: 1,
        funciona: 1,
        oferece: 1,
        uma: 2,
        'visão': 1,
        simplificada: 1,
        …
    }
]
```

Não encontramos mais nenhum caractere especial nesse array de objetos. Além disso, não temos ocorrências duplicadas, pois as palavras estão todas em letra minúscula.

O único que sobrou foram alguns objetos vazios correspondentes às quebras de linha, mas já sabemos que temos que resolver isso.

Próximos passos  
Note que utilizamos, basicamente, apenas lógica de programação, métodos de array e sintaxe de objetos para construir a lógica de verificação com a ajuda das expressões regulares.

E, por enquanto, essa parte está finalizada. Na sequência, lidaremos com os objetos vazios e aí podemos continuar com os detalhes de implementação da biblioteca.

### Aula 2 - Organizando a saída dos dados - Vídeo 4

Transcrição  
Vamos lidar com o último problema, que é o dos parágrafos vazios.

**Retirando parágrafos vazios**  
Onde podemos implementar essa verificação se um parágrafo é vazio ou não? Acreditamos que seja na função quebraEmParagrafos(), pois é onde fazemos o split() e obtemos um array.

Dentro do map(), onde está sendo feita a contagem e a verificação das palavras, no momento em que o map() percorre o array de parágrafos, podemos verificar antes de executar a função verificaPalavrasDuplicadas(), se o parágrafo tem conteúdo ou não, se é uma string vazia ou não.

Poderíamos fazer essa verificação dentro do map() com if. Por exemplo, se o parágrafo é uma string vazia, não retorna nada. Contudo, o map() sempre retorna algo para cada elemento, ele não pula um elemento. Então, mesmo que ele retorne algo, pode ser undefined.

Uma solução que poderia funcionar é, antes de fazer o map(), ir em const contagem = paragrafos e filtrar os elementos do array procurando strings vazias.

Vamos fazer esse teste. Em const contagem, vamos chamar o método de array filter() para paragrafos, ou seja, paragrafos.filter().map().

O filter() é um método callback, portanto, vamos chamar um parâmetro, que também chamaremos de paragrafo, e abrir uma arrow function.

Lembrando que o filter() trabalha sempre com uma comparação dentro da função. Se a comparação resultar em True, ele retorna o elemento para dentro de um array de resultados. Se retornar False, ele ignora o elemento.

Podemos escrever isso de uma forma bem resumida no filter(). Então, (paragrafo) => paragrafo. Isso porque, como aprendemos quando trabalhamos com tipos de dados e variáveis, valores Truthy e Falsy, uma string vazia é avaliada pelo JavaScript como um valor Falsy.

Ou seja, se o JavaScript tiver que converter o valor de parágrafo para booleano, ele vai retornar Falsy, se o parágrafo for uma string vazia, e Truthy se for uma string que contenha qualquer outro tipo de caractere.

Dessa forma, podemos escrever de forma resumida, porque se paragrafo uma string vazia, vai retornar Falsy e, consequentemente, ele não vai filtrar esse elemento.

index.js:

```JavaScript
function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos
    .filter((paragrafo) => {paragrafo})
    .map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  })
  console.log(contagem);
}
```

Em resumo, paragrafos.filter() vai ter um retorno de um array de quantidade X de elementos. E também concatenamos o filter() com o map() que já tínhamos feito anteriormente.

Assim, primeiro, fazemos a filtragem e tiramos as strings vazias, e depois fazemos o map verificando as palavras duplicadas no restante.

Testando o código
Abrindo o terminal, chamando o último comando novamente com seta para cima.

> node src/index.js arquivos/texto-web.txt

Retorno parcialmente transcrito:

```JavaScript
[
        {
                httpsdevelopermozillaorgptbrdocslearngettingstartedwiththewebhowthewebworks: 1
        },
        { como: 1, web: 1, funciona: 1 },
        {
                como: 1,
                web: 1,
                funciona: 1,
                oferece: 1,
                uma: 2,
                'visão': 1,
                simplificada: 1,
                …
        }
]
```

Aparentemente deu certo, porque continua retornando um array de objetos, mas todos os objetos vazios sumiram.

No entanto, essa solução tem uma questão que não está aparente. Para conseguir fazer primeiro a filtragem e depois o map() contando as palavras, fizemos dois loops.

Ou seja, primeiro percorremos o array de paragrafos inteiro para fazer o filter, porque filter e map sempre vão até o fim do array. Depois fizemos esse processo de novo para fazer a contagem das palavras.

Quando estamos trabalhando com um texto pequeno, com massas pequenas de dados, isso não tem muita importância, porque normalmente os computadores hoje em dia têm capacidade para processar.

Contudo, quando escrevemos o código, procuramos pensar em todos os casos. E se o seu texto for muito grande, com muitas palavras? Ou se você estiver trabalhando com massa de dados de dois milhões de pessoas usuárias?

Fazer um loop inteiro, depois fazer outro loop inteiro, não é muito performático para o programa. O programa vai ficar com uma performance um pouco mais baixa, porque ele vai consumir bastante recurso para fazer os dois processos.

Conhecendo o flatMap  
Como transformamos esse filter e map em um único loop? Vamos usar outro método de array que ainda não conhecemos, o flatMap(), que também é um método callback.

Assim, const contagem será igual a paragrafos.flatMap(), que vai receber por parâmetro paragrafo seguido de arrow function.

Dentro das chaves, podemos fazer uma verificação if (!paragrafo), ou seja, se paragrafo for avaliado como falso, podemos retornar um array vazio. Isto é, return [].

Se não for um parágrafo vazio, se tiver conteúdo, vamos pegar o return verificaPalavrasDuplicadas(paragrafo) e colocá-lo dentro do flatMap().

Podemos deletar o filter e o map dessa função e deixar no final apenas o console.log(contagem).

```JavaScript
function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  })
  console.log(contagem);
}
```

Salvamos o arquivo, abrimos o terminal e verificamos que o código está tudo funcionando como esperado. Nossos objetos vazios foram embora.

O que o flatMap() fez? O flat(), sozinho, é um método que pega um array, que tem arrays dentro dele, e o "achata".

Qual seria o processo? Suponha que temos um array que tem os valores 1, 2, e o terceiro valor fosse, por exemplo, outro array com 3 e 4 dentro.

[1, 2, [3, 4]]

O flat() pega o array de dentro e faz uma espécie de concatenação. Aplana com os valores do array externo. Então, o resultado final do flat() seria somente um array com 1, 2, 3 e 4.

[1, 2, 3, 4]

O flatMap() combina as funcionalidades do flat() e do map(). Portanto, ele é um pouco mais performático do que fazer duas funções separadas: primeiro para filtrar e depois para fazer o mapeamento. O flatMap() retorna um array de resultados de forma mais eficiente.

Próximos passos  
A funcionalidade básica já está finalizada. Porém, se observarmos o objeto no terminal, nós estamos exibindo todos os resultados para cada parágrafo.

Será que queremos realmente exibir os casos onde a palavra só é citada uma vez? Acho que não é exatamente a funcionalidade que queríamos. Queremos saber as palavras que estão repetidas. Então, devemos lidar com esse caso.

Mas, antes disso, vamos parar para pensar um pouco no que fazemos quando as coisas não ocorrem como deveriam no nosso programa. Na sequência, discutiremos sobre o tratamento de erros.

### Aula 2 - Mão na massa: usando o reduce

Durante a aula praticamos a manipulação de arrays e objetos usando duas abordagens:

- filter e map
- flatMap

Porém, ainda há uma terceira abordagem para a resolução desse problema muito comum em programação: como suprimir objetos vazios de um array de objetos. Para isso, vamos usar o método de array reduce.

**Opinião do instrutor**  

O funcionamento básico do reduce é percorrer todos os índices de um array e “reduzir” seus valores a um único valor de retorno. Por exemplo:

```JavaScript
const numeros = [1, 2, 3, 4, 5];

const result = numeros.reduce((acum, atual) => acum + atual, 0);

console.log(result); //15
```

No exemplo acima, usamos reduce para reduzir um array de números até a soma de todos eles, começando a contagem em 0 e somando os parâmetros da função callback a cada iteração (valor acumulado + valor atual).

Porém, o reduce também tem muitos usos mais complexos para arrays de objetos e pode nos ajudar a resolver o problema dos objetos vazios.

Observe abaixo uma versão mais curta da solução feita com filter e map:

```JavaScript
const paragrafos = ["código", "js", "", "web", "", "array"];
const result = paragrafos
 .filter((paragrafo) => paragrafo)
 .map((paragrafo) => {
   if (paragrafo) return paragrafo;
 });
console.log(result);
```

Agora, vamos analisar uma abordagem utilizando reduce:

```JavaScript
const paragrafos = ["código", "js", "", "web", "", "array"];
const result = paragrafos.reduce((acum, paragrafo) => {
 if (paragrafo) {
   return [...acum, paragrafo];
 }
 return acum;
}, []);
console.log(result);
```

Acompanhe os passos de desenvolvimento do código acima:

- Queremos “reduzir” o array atual a um outro array, então iniciamos reduce com um valor atual de [] (um array vazio).
- Os parâmetros da função callback são acum (em que são armazenados os valores já processados) e paragrafo, que se refere ao parágrafo sendo processado a cada iteração.
- A condicional if (paragrafo) avalia a string paragrafo em termos booleanos (lembrando de valores truthy e falsy) e apenas entra no if caso paragrafo não seja uma string vazia.
- Caso não seja uma string vazia, o código dentro do bloco if utiliza o spread operator (operador de espalhamento) para retornar um array composto dos valores anteriores (acum) “espalhados” em um novo array com o conteúdo do parágrafo atual.
- Caso seja uma string vazia, o código do bloco if não será executado, e o loop do reduce irá passar direto para o próximo elemento do array, ignorando a string vazia e a deixando de fora do array final.
- Após percorrer todos os elementos, o resultado final de acum será um array composto apenas de strings “não vazias” (avaliadas como truthy na condicional if).
- Qual método utilizar? Apesar de o método reduce construir um novo array a cada iteração, a não ser que se trate de textos e arrays muito grandes, não deve haver muita diferença de performance entre os métodos.

É comum existir mais de uma forma de resolver problemas de lógica de programação! Faça os testes em seu projeto!

### Aula 2 - Relembrando objetos

Objetos são estruturas importantes em praticamente todas as linguagens de programação mais utilizadas. São estruturalmente formados por pares de chave: valor que podem representar alguma abstração do mundo real, como uma conta bancária ou um livro. Os objetos também são parte fundamental do JavaScript e há diversas formas de se criar e trabalhar com eles.

Sabendo disso e relembrando o uso de objetos durante esta aula, marque as opções corretas:

Resposta:  
Para iterar sobre as propriedades de um objeto, podemos utilizar a função for...in .

> Utilizamos for…in para iterar sobre as propriedades enumeráveis de um objeto, como em: for (let info in cliente) { //código }. Você pode conferir mais exemplos no na documentação do MDN sobre for…in.

Alternativa correta:  
A expressão abaixo irá criar uma nova propriedade prop no objeto obj, com o valor de valor. Caso a propriedade prop já exista no objeto, seu valor anterior será substituído por novoValor.

obj.prop = novoValor;

> Em JavaScript, podemos usar a notação de ponto para acessar uma propriedade já existente em um objeto e alterar seu valor, ou para criar uma nova propriedade.

### Aula 2 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

[Curso: Expressões regulares](https://cursos.alura.com.br/course/expressoes-regulares-buscas-validacoes-substituicoes-textos) para buscas, validação e substituição de textos.
Documentação do MDN: [flatMap](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap).

### Aula 2 - O que aprendemos?

Nessa aula, você aprendeu:  

- Como utilizar métodos de array e objeto do JavaScript para resolver problemas comuns de lógica de programação, como manipulação de arrays, strings e objetos;
- Como organizar as funcionalidades do projeto em funções separadas, utilizando a importação e exportação de módulos para comunicar as funções entre si e utilizá-las onde necessário.

## Aula 3 - Tratamento de Erros

### Aula 3 - Identificando tipos de erros - Vídeo 1

Transcrição  
Antes de prosseguirmos com as funcionalidades, vamos fazer uma refatoração para organizar melhor o nosso arquivo index.js e também identificar alguns pontos de falha que podem ocorrer no nosso programa.

Por exemplo, um ponto de falha que pode ocorrer, e talvez tenha ocorrido enquanto você estava praticando, é quando nos distraímos e, ao passar o endereço do arquivo que queremos converter ou processar, não passamos um pedaço do endereço e ocorre um erro genérico, um TypeError dizendo que não consegue ler propriedades de undefined. Esse é um exemplo de um erro que pode acontecer.

```JavaScript
TypeError: Cannot read properties of undefined (reading 'toLowerCase')
    at quebraEmParagrafos (/home/juliana/Documents/nodejs-lib/src/index.js:23:28)
    at ReadFileContext.callback (/home/juliana/Documents/nodejs-lib/src/index.js:7:3)
    at FSReqCallback.readFileAfterOpen [as oncomplete] (node:fs:306:13)
```

Normalmente, o que fazemos? Começamos a mapear pontos onde pode ocorrer algum tipo de erro e conseguimos capturar esses erros, — vamos abordar mais adiante o que significa capturar —, e tratá-los para indicar o que queremos fazer. Queremos enviar uma mensagem, queremos fazer outra coisa no lugar etc.

O primeiro ponto onde queremos colocar um aviso de erros para o código, é o próprio readFile. Mas, antes disso, vamos aproveitar para refatorar toda essa parte. Vamos remover alguns comentários que deixamos anteriormente, porque são coisas que já vimos.

Dentro do readFile, vamos criar uma função que vamos chamar de function contaPalavras, recebendo texto, e essa função será o ponto de entrada da aplicação.

Essa será a única função que vamos deixar dentro do readFile. Quebrar parágrafo, contar quantas palavras tem, ver como vamos dar a saída do arquivo, tudo isso virá a partir de contaPalavras, que é o ponto inicial.

```JavaScript
function contaPalavras(texto) {

}
```

Então, quais são as duas coisas que estamos fazendo separadamente? A primeira é fazer o nosso contador de palavras, que já está usando algumas outras funções separadas como o limpaPalavras.A segunda é a de quebrar em parágrafos.

Vamos separar a parte de quebrar em parágrafos em uma outra função. Então, vamos criar uma outra function, que vamos chamar de extraiParagrafos, que também vai receber texto como parâmetro, que é o texto onde vamos gerar o nosso primeiro array.

```JavaScript
function extraiParagrafos(texto) {

}
```

Dentro de extraiParagrafos, vamos colocar o nosso split('\n'). Vamos mover o código que estava anteriormente em quebraEmParagrafos para dentro de extraiParagrafos. E agora, como não precisamos mais salvar isso numa variável para depois utilizar, podemos dar só um return nesse valor.

Agora, todo o restante da nossa função quebraEmParagrafos, vamos passar para dentro de contaPalavras, que é o nosso ponto de entrada. Então, vamos mover todo o código que sobrou dentro de quebraEmParagrafos para dentro de contaPalavras, que, por enquanto, ainda não está sendo executada em nenhum lugar. Podemos excluir a função quebraEmParagrafos

Podemos voltar em readFile, deletar o último comentário, que era uma função que não vai mais ser chamada, e passar a única chamada dentro de readFile para contaPalavras. Agora, contaPalavras recebe texto. Temos que também corrigir dentro da função contaPalavras para agora ela executar primeiro extraiParagrafos.

Então, aqui criamos uma const. Vamos chamar essa const de paragrafos mesmo, que é como estava antes. Igual o resultado da função extraiParagrafos recebendo texto. E, dessa forma, podemos manter o restante do código como estava, porque já estávamos usando esse nome de variável, paragrafos.

Então, agora separamos um pouco mais. E, a partir de agora, podemos fazer algumas marcações de erro para ver o que acontece no console.

Então, como já tínhamos comentado, o primeiro ponto de erro que dá para identificar é justamente dentro do readFile, que, por sinal, o callback do readFile já vem por si com um parâmetro de função do callback erro, só esperando para ser chamado, porque justamente esse é um ponto crítico de falha.

O que conseguimos fazer se passarmos dentro de readFile um console.log apenas para exibir erro? Vamos passar um texto antes, Qual é o erro?, erro. E aí, deixamos o contaPalavras como estava funcionando antes.

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log('qual é o erro?', erro);
    contaPalavras(texto);
})
function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}
function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}
```

Vamos fazer um teste? Já salvamos o arquivo, vamos abrir o terminal. Vamos carregar novamente o normal, o normal está funcionando, vamos limpar o terminal. E vamos tentar tirar a extensão do nosso arquivo e ver o que acontece.

Além do erro, ele também trouxe a frase que colocamos no console.log, qual é o erro?, que é uma frase em português, então, obviamente, é a nossa.

Então, ao lado do qual é o erro?, vem um objeto, erro, ENOENT. ENOENT é um código de erro que é no entity, ele não conseguiu encontrar a entidade que ele precisava. Não existe esse arquivo ou diretório quando tentou abrir aqui arquivos/texto-web, seguido de um objeto com algumas informações.

Por exemplo, a chamada que foi feita, uma chamada do tipo open para abrir o arquivo, o caminho que foi feito, o código do erro, o número do erro e onde o erro aconteceu. Ele só acusou esse erro lá em index.js:21, na linha 21, quando ele tentou realmente fazer alguma coisa com esse arquivo.

```JavaScript
juliana@juliana:~/Documents/nodejs-lib$ node src/index.js arquivos/texto-web
qual é o erro? [Error: ENOENT: no such file or directory, open 'arquivos/texto-web'] {
    errno: -2,
    code: 'ENOENT',
    syscall: 'open',
    path: 'arquivos/texto-web'
}
/home/juliana/Documents/nodejs-lib/src/index.js:21
    return texto.toLowerCase().split('\n');
           ^
```

O que fazemos com essa informação? Vamos fechar o terminal e fazer mais uma alteração depois do console.log, de qual é o erro?. Então, ao invés de simplesmente jogar o console ali, vamos dizer que if (erro), ou seja, se tiver alguma coisa dentro desse parâmetro erro, ele vai entrar nesse if, e aí sim, damos o console.log em qual é o erro, e vamos dar também um return para ele retornar.

Lembrando que, quando damos um return, retornamos alguma coisa para fora da função, a função deixa de executar ali. Ela encerra a execução dela e vai para outro ponto do código.

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
   if (erro) {
    console.log('qual é o erro?', erro);
    return
   }
   contaPalavras(texto);
})
```

Vamos tentar ver o que acontece abrindo o terminal e o que mudou. Vamos executar novamente no modo normal para ver se continua funcionando. Continua, então vamos limpar o terminal.

Tentaremos novamente forçar aquele erro tirando o .txt. Agora mudou um pouco o que aparece no console, a mensagem está mais limpa. Ele não está mais exibindo toda aquela mensagem anterior.

```JavaScript
juliana@juliana:~/Documents/nodejs-lib$ node src/index.js arquivos/texto-web
qual é o erro? [Error: ENOENT: no such file or directory, open 'arquivos/texto-web'] {
    errno: -2,
    code: 'ENOENT',
    syscall: 'open',
    path: 'arquivos/texto-web'
}
```

O que ele trouxe para nós foi só o objeto com o erro. E conseguimos fazer o que a partir daí? Conseguimos acessar uma propriedade desse objeto erro.

Vamos tentar novamente. Vamos fechar o terminal. E em vez de console.log apenas em erro, vamos dar em erro.code, por exemplo. Se rodarmos novamente o código sem o .txt, agora ele vai trazer para nós só o código do erro ENOENT, que é o no entity.

A partir daí, conseguimos, já que sabemos que conseguimos acessar uma propriedade desse objeto, e que, na verdade, esse erro que vem para o parâmetro, ele é um objeto JavaScript com algumas informações.

A partir daí, começamos a definir os erros que esperamos receber e o que vamos fazer com eles. Para nos ajudar a gerenciar, a encontrar esses erros e capturá-los de certa forma, vamos ver algumas ferramentas no próximo vídeo.

### Aula 3 - Para saber mais: entendendo a stack trace

Uma das primeiras coisas que percebemos ao começarmos a programar é que praticamente qualquer aviso de erro será acompanhado de uma longa sequência de texto difícil de compreender.

Por exemplo, se tentarmos usar console.log() em alguma variável que não existe em nosso código:

node teste.js

```JavaScript
file:///home/juliana/Documents/nodejs-lib/teste.js:3
console.log(nome);
            ^
ReferenceError: nome is not defined
    at file:///home/juliana/Documents/nodejs-lib/teste.js:3:13
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)

Node.js v20.11.0
```

Boa parte de todo esse texto é representado pela stack trace, ou seja, pelo “rastro” de comandos executados pelo interpretador ao enviarmos o comando node teste.js.

No caso, para que o Node.js execute corretamente o código dentro de um arquivo .js de nosso projeto, ele utiliza por sua vez diversos códigos (funções) que estão dentro de seu próprio código-fonte. Cada parte do código necessário para que o Node.js interprete corretamente o nosso próprio código pode se encontrar em arquivos ou módulos diferentes, e cada comando executado “guarda” este caminho desde o ponto inicial até o último.

Podemos analisar qualquer linha do erro acima e acompanhar este processo:

> at file:///home/juliana/Documents/nodejs-lib/teste.js:3:13

O ponto inicial de chamada do código problemático: arquivo teste.js que está dentro da nossa pasta de projeto, na linha 3 e coluna 13.

> at ModuleJob.run (node:internal/modules/esm/module_job:218:25)

Este erro se “propagou” para o método ModuleJob.run interno do Node.js. Podemos saber que já não estamos mais na pasta do nosso projeto pois a stack trace fornece exatamente o módulo, linha e coluna para onde o erro se propagou.

Assim continua até o último ponto, a função interna do Node.js handleMainPromise.

Quando um erro ocorre, todo esse caminho percorrido pelo comando é passado para dentro de um objeto Error para que possa ser acessado e consultado de alguma forma, por exemplo, exibido no terminal. Dessa forma, podemos usar esse “mapa” para entender o caminho que o processamento percorreu.

Nem todos os avisos de erro são gerados da mesma forma: dependendo da origem, alguns erros são devolvidos pelo sistema operacional, outros pelo Node.js, outros podem ser gerados a partir de alguma biblioteca que estamos usando em nosso projeto. Porém, quase sempre eles seguem o mesmo padrão, apresentando o nome do erro, a descrição do erro e a stack trace.

O Node.js tem uma lista de erros próprios. Confira como Error se comporta no Node.js, uma descrição de cada erro e motivos comuns para acontecerem neste [artigo da Alura sobre erros do Node.js](https://www.alura.com.br/artigos/lidando-com-erros-node-js).

### Aula 3 - Throw, catch e try - Vídeo 2

Transcrição  
Continuando com o nosso tratamento de erros, o que fazemos quando um erro ocorre dentro de uma função? Lembrando que os erros são inevitáveis, eles vão ocorrer de alguma forma dentro de alguma função do seu código. E o que fazemos nesse caso?

Sabemos que existe um tipo de erro que já identificamos, que é o ENOENT. E agora, como fazer com que o programa identifique os tipos de erros e aja de acordo, enviando uma mensagem ou executando alguma outra coisa?

Implementando um bloco try-catch
Existem dois termos importantes que vamos ver agora sobre erros, um deles é o que chamamos de bloco try-catch. Vamos implementar no nosso readFile.

Antes de tudo, vamos escrever try, apenas try(), sem parâmetro, e abrir um bloco com chaves. Dentro do try, vamos colocar somente a linha onde executamos a função contarPalavras. Vamos usar o Alt + seta para cima para movê-la para dentro desse bloco, e apenas isso.

Fora do try, vamos acrescentar outra palavra-chave que é catch. O catch leva parâmetros, e o parâmetro que vamos colocar no catch será erro. Apenas erro, e vamos abrir chaves também porque o catch é outro bloco.

Vamos apagar o if (erro) que tínhamos feito anteriormente, e dentro do catch vamos deixar apenas um comentário. // O que fazer com o erro?. Por enquanto, é só isso.

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        contaPalavras(texto);
    } catch (erro) {
        // o que fazer com o erro?
    }
})
```

Vamos testar no terminal para ver se o nosso código continua funcionando. Vamos chamar o caminho com o .txt no terminal, continua funcionando. Vamos limpar o terminal com Ctrl + L, e tentar o caminho apagando o .txt.

O terminal não acusou o erro, que é diferente de não dar erro, mas em compensação também não trouxe o nosso array de objetos. Então, vamos voltar no nosso código e ver o que aconteceu.

Esse bloco try-catch funciona da seguinte forma: Dentro do try, colocamos todo o código onde é possível que ocorra um erro. Teoricamente, é o código que queremos que dê certo, só que se acontecer alguma coisa que não está certa, se ocorrer qualquer tipo de erro, queremos monitorar o código que está dentro desse bloco, para que, caso algum erro ocorra durante a execução, por exemplo, de contarPalavras, esse erro seja capturado pelo bloco catch. Try significa "tentar" em inglês e Catch, pegar.

Por que não aconteceu nada no terminal? Porque causamos um erro de propósito, esse erro foi capturado, porque ele estava dentro do bloco try, então ele foi interceptado. O try pegou esse erro, que é esse conjunto de dados que, no momento, não sabemos muito bem o que tem dentro, e jogou para ser capturado pelo catch.

Só que o nosso catch não tem nada dentro dele, o nosso catch só tem um comentário. E aí, deu erro, o erro não foi mandado para frente, ninguém fez nada com ele, e ficou por isso mesmo.

Vamos usar o Alt + seta para cima para tirar o contarPalavras de dentro do try, se o deixarmos vazio e tentarmos executar novamente o código, lá no terminal, no caminho triste, voltou a dar erro, mas um erro genérico que não temos muita informação, não foi um erro que tratamos. Então, tirou do bloco try, o erro voltou a ser livre, sem ninguém para tomar conta dele.

Vamos voltar o contarPalavras para dentro do try, onde ele estava antes. E agora, vamos fazer algumas alterações, para irmos refinando essa parte e tentando pegar os erros.

Fora do try, vamos fazer mais um teste, lá dentro de readFile só. Vamos criar um if (erro). Vamos passar só uma instrução dentro desse if, então não precisa das chaves também. Vamos passar somente throw erro. Somente isso. Vamos deixar fora do try mesmo.

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) throw erro;
    try {
        contaPalavras(texto);
    } catch (erro) {
        // o que fazer com o erro?
    }
})
```

Vamos testar novamente, ver o que acontece. Vamos apagar o .txt do caminho no terminal. Ele voltou a dar o erro ENOENT, só o erro sem nenhuma instrução nossa, também sem nenhum aviso.

O que aconteceu? Criamos uma linha de verificação de erro, fora do try. E o que é esse erro que colocamos no throw? Esse erro se refere a um dos parâmetros do readFile.

Então, o erro que está aparecendo para nós na linha do throw, não é o mesmo erro que será capturado no catch. São dois objetos diferentes.

Isso é muito importante identificar. Porque o readFile, por si só, é uma função que já identifica para nós alguns tipos de erro, já faz um pré-tratamento. Então, conseguimos pegar isso a partir do parâmetro, esse objeto, e lançar esse erro para algum lugar. Só que, de novo, estamos lançando para nenhum lugar ser pego. Ele está só sendo lançado e não está sendo capturado (catch).

O que vamos fazer agora? Vamos passar esse if (erro) para dentro do try, de novo com a seta, Alt + seta para baixo, e aí já podemos ir lá no nosso catch, tirar o comentário e começar a lidar com esse erro de verdade.

Então, dentro do catch, vamos passar duas instruções. A primeira vai ser uma condicional, um if, dizendo if (erro.code) === 'ENOENT', lembrando que tem que ser tudo em letra maiúscula, como está lá no objeto, vamos só passar uma instrução, console.log(), vamos passar aqui no console 'erro que esperava'. É o erro que estamos esperando receber, o ENOENT. Else, só um outro console.log, que vamos passar dentro de uma string, 'outro erro'.

O que estamos fazendo aqui? Perceba que o erro é propagado entre as funções. Então, ele começa num ponto, vai sendo lançado até que algum lugar pega esse erro. É isso que normalmente fazemos quando trabalhamos com bloco try-catch. Então, esse erro está sendo pego dentro do nosso if (erro), que está dentro do try, e essa palavra throw está lançando esse erro para frente.

Uma vez que temos um bloco try-catch, esse catch vai pegar esse erro que foi lançado e, dentro dele, tem ali uma verificação. É o erro que estamos esperando? É um erro que é um objeto que tem a propriedade code e o valor dela é um string ENOENT? Se for, erro que esperávamos. Se não for, aí é outro erro, aí precisamos ver o que aconteceu.

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        contaPalavras(texto);
    } catch (erro) {
        if (erro.code === 'ENOENT') console.log('erro que esperava');
        else console.log('outro erro');
    }
})
```

Vamos voltar no terminal, novamente testar o caminho com .txt no fim, está tudo certo, vamos limpar o terminal, retirar o .txt e obtivemos o erro que esperávamos.

Aparentemente, começamos a cercar esse erro. Poderíamos depois mudar essa mensagem para uma mensagem que faz mais sentido? Sim, mas o que interessa agora para nós é ver como a propagação de erros que aconteceu lá no readFile, ela seguiu um caminho, o erro foi sendo lançado, pegamos onde precisava e vimos o que tem nele.

Só que tem muitos lugares para os erros acontecerem e muitos tipos de erros diferentes. Então, vamos continuar testando um pouco esses casos.

### Aula 3 - Praticando com try/catch - Vídeo 3

Transcrição  
Agora, com tudo que já praticamos sobre throw, try e catch, pode surgir a pergunta: se todo o código que está dentro do bloco try der erro, ele é automaticamente capturado pelo catch? Precisamos mesmo do throw? Precisamos pegar o nosso código, capturar esse erro e lançá-lo para a frente? Vamos fazer um teste.

Vamos comentar a linha onde fizemos aquele if (erro), pegando o erro que vem do parâmetro do readFile. Vamos testar novamente no terminal.

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        // if (erro) throw erro;
        contaPalavras(texto);
    } catch (erro) {
        if (erro.code === 'ENOENT') console.log('erro que esperava');
        else console.log('outro erro');
    }
})
```

Agora ele voltou a dar um erro, mas os erros sempre devem ser lidos com calma. Veja onde o erro está ocorrendo. Ao invés de ocorrer no readFile, porque tem um problema no arquivo, o erro está ocorrendo dentro da função de parágrafo, onde ele faz o toLowerCase().split.

```JavaScript
TypeError: Cannot read properties of undefined (reading 'toLowerCase')
    at extraiParagrafos (/home/juliana/Documents/nodejs-lib/src/index.js:26:16)
    at contaPalavras (/home/juliana/Documents/nodejs-lib/src/index.js:17:22)
    at ReadFileContext.callback (/home/juliana/Documents/nodejs-lib/src/index.js:7:3)
    at FSReqCallback.readFileAfterOpen [as oncomplete] (node:fs:306:13)
```

Ou seja, agora o erro ocorreu mais à frente, não onde queríamos, que é no começo, onde ele já identificou que não tinha o arquivo que ele precisava, o .txt.

O que isso significa? Que o erro não está aparecendo onde esperávamos, ele está ocorrendo em outra parte do código. Isso significa que temos coisas erradas no nosso código que não estão sendo detectadas, e os erros só estão sendo lançados mais à frente, por outras partes do código.

Ou seja, o comportamento do código fica meio errático, porque teoricamente o erro não é um erro de lowercase, não é um erro na string, o erro está acontecendo bem antes, nem tem o arquivo para fazer lowercase. Mas ficamos confusos, porque o erro não está sendo capturado, ele está sendo lançado em partes erráticas, por outras funções que não são as nossas.

Vamos fechar o terminal, voltar o nosso código para o que ele era antes, colocar o contaPalavras dentro do try e o nosso if, pegando o erro que está sendo fornecido do readFile.

Vamos voltar ao terminal só para executar de novo e garantir que está tudo certo. Está tudo certo no erro, é o erro que esperávamos agora, e o código voltou a funcionar.

Você até poderia mudar o texto da mensagem de erro, dizer o erro é que não tem arquivo etc, mas o importante é que esse é o erro que esperado, e ele está sendo capturado da forma que o nosso código espera e tratado da forma que o nosso código espera.

Se quisermos pedir para executar outra coisa, para corrigir o arquivo, aí é com quem está fazendo o desenvolvimento. Mas o importante é manter em mente que temos que capturar os erros. Por exemplo, o readFile, que é um ponto crítico, o meu arquivo tem que ser recebido com sucesso, e se não for, o que eu faço?

Não conseguimos prever todos os erros, sempre tem alguma coisa que não previmos, porque usamos muitas bibliotecas e nos conectamos com muitos serviços, mas começamos implementando esse tipo de estratégia nos mais críticos.

Uma coisa que você pode ter notado é que, dentro do bloco try, se tiver erro, o nosso if dá um throw no erro, e tanto o return quanto o throw fazem com que o código saia da função.

Podemos dizer que o retorno esperado, quando a função executa como ela deve executar e retorna o dado que esperamos que retorne. O throw também interrompe o fluxo, mas, normalmente, ele é usado justamente em caso de coisas não esperadas.

Não precisamos dar throw somente em objetos do tipo erro, mas qualquer tipo de dado pode ser lançado, mas não é muito comum fazermos isso.

O throw, normalmente, é usado para finalizar uma função, jogando para fora dela alguma informação sobre algo que deu errado na execução dessa função, ou que propagou de outras partes do código até ser lançado e capturado nessa parte do código.

E para que um erro lançado não simplesmente interrompa uma função, interrompa o funcionamento do nosso programa, usamos o try-catch, para que o erro possa ser capturado e tratado de forma correta, sem que ele interrompa necessariamente o funcionamento da nossa aplicação.

Isso porque, normalmente, exceções que não são capturadas por nenhum catch, elas vão se propagando pela stack, elas vão indo de função em função, de módulo em módulo, até que acabam interrompendo o funcionamento do programa de uma forma não esperada, com um erro que pode ser que não seja o erro que esperamos receber.

Então, vamos continuar lidando com erros, vendo um pouco mais sobre esse grande universo, finalizando com o objeto erro.

### Aula 3 - O objeto Error - Vídeo 4

Transcrição  
Continuando a nossa incursão pelo mundo do tratamento de erros e exceções, vamos observar dentro do catch, o if que está fazendo a verificação se o erro é do tipo NoEntity.

Se observarmos, a mensagem do console está codificada diretamente no meio do nosso código, ela está fixa, e o tipo de erro também está fixo dentro do catch. Como podemos melhorar esse código, deixando as responsabilidades separadas?

Vamos voltar ao nosso código. Dentro da pasta src, vamos criar outra pasta chamada erros. E dentro da pasta erros, vamos criar um arquivo chamado funcoesErro.js. Dentro dele, podemos começar a escrever algumas funções para separar o tratamento de erros do restante do código.

Separando o tratamento de erros
Vamos escrever uma função chamada trataErros e vai receber por parâmetro apenas erro. Por enquanto, não sabemos muito bem o que vai chegar neste parâmetro erro, mas vamos descobrir.

Podemos passar, nesse primeiro momento, toda a lógica de verificação: se o erro é do tipo NoEntity ou não. Então, vamos passar if (erro.code === 'ENOENT', vamos abrir chaves. Aqui vamos dar um throw.

Em vez de dar um throw no erro, como estávamos fazendo anteriormente, vamos dar um throw em new Error, com E maiúsculo. E vamos passar como parâmetro desse erro uma mensagem.

Agora, podemos melhorar um pouco a mensagem, dizendo, por exemplo, 'arquivo não encontrado'. No nosso else, passamos um return só com uma outra mensagem, por exemplo, 'erro na aplicação'. Porque, nesse momento, não temos muita ideia, não mapeamos ainda quais são os erros que são os mais comuns que podem ocorrer.

Para conseguirmos usar essa função tratarErros no restante da nossa aplicação, precisamos exportá-la, jogá-la para fora desse arquivo funcaoErros. Então, vamos no final do arquivo, na última linha, chamar module.exports = trataErros.

```JavaScript
function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        throw new Error('Arquivo não encontrado');
    } else {
        return 'Erro na aplicação';
    }
}
module.exports = trataErros
```

Voltamos ao index.js. Se exportamos uma função, temos que importá-la no arquivo onde queremos usar. Então, no topo, embaixo de const fs, vamos criar uma nova constante, chamada trataErros, igual require, e dentro do require passamos uma string com o caminho onde está a nossa função trataErros, que é em ./erros/funcoesErro.

```JavaScript
const trataErros = require('./erros/funcoesErro');
```

E onde usamos a função trataErros? No lugar de toda a verificação que estávamos fazendo dentro do catch. Então, no lugar do if else, executamos trataErros, recebendo erro por parâmetro, que é o erro que vai vir ali do catch.

O catch pegou esse erro, mandou para dentro de trataErros, e trataErros vai fazer a lógica da forma como colocamos dentro da função.

```JavaScript
fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        contaPalavras(texto);
    } catch (erro) {
        trataErros(erro);
    }
})
function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
}
```

Vamos testar para ver se está tudo certo. Chamamos aqui o caminho sem o .txt no fim. Agora voltou a dar erro, porque não está mais aparecendo aquela mensagem que estava aparecendo no console.

Porém, agora o erro está identificado. Ele dá uma mensagem, ele diz no topo do erro onde esse erro foi identificado. Dentro de funcoesErros foi de onde ele foi lançado. Erro, arquivo não encontrado". E aí ele foi bater lá dentro de trataErro.

Mas, não seria melhor quando estava mostrando só a mensagem, mais nada? Existem casos onde realmente vamos querer só dar uma mensagem. Porém, em alguns casos, quando esperamos erros, queremos receber o objeto de erro mais completo para entender com mais detalhes onde ocorreu esse erro.

Por quê? Porque todo objeto de erro traz junto com ele esse conjunto de informações que chamamos de stack trace (rastreamento de pilha), que é um registro de todas as partes do código que são invocadas, por onde passa o nosso código para ser executado.

Se não temos esse stack trace, sabemos que o erro ocorreu, mas ele não nos diz onde esse erro ocorreu. E com o stack trace, ele vai dizer por ordem, por onde o erro passou.

Então, o primeiro ponto é em tratarErros, porque foi a função que foi chamada quando o erro bateu lá no fs.readFile. Porém, embaixo, ele já mostra para nós o arquivo anterior, por onde esse erro passou antes, e é o index.js na linha 12.

Isso quer dizer que o arquivo index.js na linha 12 tem alguma coisa e foi dali que se originou o erro. Então, a partir do stack trace, ele mostra o caminho completo, inclusive os arquivos lá no Node, nas bibliotecas onde vão ser chamadas, mas ele mostra também o caminho dentro da nossa aplicação por onde o erro passou. Isso pode ser importante.

Digamos que, nesse caso, achamos que não é legal para a pessoa usuária, afinal de contas, a pessoa usuária pode não ter tanta intimidade com as mensagens de erro, e não queremos que ela receba o objeto de erro completo.

Então, voltamos lá em funcoesErro, e em vez de dar um throw em newError no nosso objeto de erro gerado inteiro, só damos um return em 'Arquivo não encontrado'.

Rodamos de novo no terminal sem o .txt no fim, e ele não exibiu nada. Ele não exibiu nada, mas também porque tem uma outra parte do código que temos que mexer lá no index.js, porque se trataErros só retorna, não vai mostrar nada no terminal.

Então, podemos englobar o nosso trataErros por um console.log. Englobamos o retorno da nossa função trataErros nesse console, e tudo agora deve voltar a funcionar, ou não funcionar, digamos que é um erro. Ao abrir o terminal e inserir o caminho sem o .txt, obtemos "Arquivo não encontrado". Quem queria executar já recebeu a mensagem e está tudo certo.

Vamos voltar da forma como estava antes, sem o console.log em trataErros e nossa função erro retornando, dando um throw num objeto de erro, para conversarmos sobre o que é esse new Error.

new Error em JavaScript  
Esse new Error é um tipo de objeto JavaScript de erro, e ele existe justamente para encapsular, digamos assim, para juntar todas as informações que possam ser pertinentes a um erro em um objeto só e lançar esse objeto onde ele tem que ser capturado.

Então, o objeto error traz com ele muitas informações que podemos utilizar para debugar, e por isso que ele é importante. E, muitas vezes, em vez de só retornar uma mensagem, vamos querer lançar um new Error, um novo objeto error, pegando todas as informações de erro que foram capturadas e anexando a elas uma mensagem que achamos pertinente.

O objeto error tem vários outros parâmetros, várias outras formas de utilizar. Dá para tratar erro, dá para ficarmos debugando erro aqui e adicionando pontos de falha à vontade, mas, por enquanto, vamos parar por aqui.

Vamos deixar como desafio algumas coisas que você pode fazer, por exemplo, adicionar mais casos de erro, identificar outros pontos. E, também, temos uma coisa que você pode ter pensado, que é onde temos que capturar erros.

Onde colocamos o try-catch? Porque não colocamos em tudo. Pense que não precisamos capturar todos os erros em todos os lugares. Por exemplo, partes do código que são apenas lógicas de programação com métodos de array são pontos de falha que podem não ser tão críticos.

E você não vai querer colocar try-catch em todo o seu código. Você vai colocar nesses pontos onde mapeamos que podem ocorrer erros. Por exemplo, onde precisamos pegar um arquivo externo. E se é um ponto crítico de falha, vamos colocar um try-catch aqui. Mas isso vai se aprimorando com a prática.

Agora que já vimos uma introdução e fizemos os nossos primeiros testes com tratamento de erro, captura e tratamento, podemos voltar para finalizar as funcionalidades da nossa biblioteca.

### Aula 3 - Tratamento de erros (Exercício)

Durante o funcionamento de um sistema, algumas execuções podem não sair como o esperado. Por exemplo, quando trabalhamos com uma aplicação web, podemos tentar acessar um link que esteja inválido ou tentar salvar um arquivo em um diretório sem ter permissão para isso. Sendo assim, podemos preparar o código para esperar possíveis erros e tratá-los, o que pode ser feito no JavaScript usando a estrutura try/catch.

Sabendo disso, analise as alternativas abaixo e marque as corretas:

Alternativas corretas:

1. No JavaScript o try...catch possibilita lidar com um erro identificando o trecho em que ele pode ocorrer (try) e capturando o erro (catch) para tratá-lo.

> O JavaScript, assim como outras linguagens, utiliza o bloco try para envolver o trecho de código que pode gerar algum tipo de exceção, e o bloco catch é responsável por capturar a exceção (caso ocorra) e permitir que seja “tratada”, retornando alguma mensagem informativa, executando alguma função específica etc.

2. Erros não tratados podem interromper o funcionamento de um programa e “explodir” em pontos não previstos da execução, fazendo com que o programa se comporte de forma errática e dificultando a identificação dos pontos de falha.

> O uso do try/catch auxilia no controle dos pontos de falha, direcionando os erros para onde possam ser devidamente capturados e tratados.

### Aula 3 - Faça como eu fiz: identificando e tratando erros

Nesta aula, foi feita uma alteração no arquivo index.js para adicionar um bloco try/catch que trata erros ao ler um arquivo e exibe mensagens personalizadas dependendo do tipo de erro. Além disso, foi criada uma função trataErros para lidar com erros específicos, como ENOENT (no entity).

Opinião do instrutor

- Adicionando bloco try…catch
- Abra o arquivo index.js.
- Adicione um bloco try...catch logo após a chamada da função fs.readFile.
- Dentro do bloco try, verifique se há erro e lance uma exceção (throw erro) caso exista.
- Chame a função contaPalavras passando o texto lido como parâmetro.
- No bloco catch, verifique se o erro possui o código ENOENT e exiba a mensagem 'erro que esperava' caso positivo.
- Caso contrário, exiba a mensagem 'outro erro'.
- Salve o arquivo.

Criando a função trataErros  
Crie a função trataErros no arquivo funcoesErro.js. No arquivo index.js, importe a função trataErros e utilize para tratar os erros ao ler um arquivo, substituindo a lógica anterior de tratamento de erros.

arquivo: funcoesErro.js

- Crie uma função chamada trataErros.
- Verifique se o erro possui o código ENOENT.
- Se o código for ENOENT, lance um novo erro com a mensagem 'Arquivo não encontrado'.
- Caso contrário, retorne a mensagem 'Erro na aplicação'.
- Exporte a função trataErros.

arquivo: index.js

- Importe a função trataErros do arquivo funcoesErro.js.
- Substitua a lógica de tratamento de erros dentro do bloco try...catch.
- Chame a função trataErros passando o erro como argumento.
- Remova a verificação do código de erro dentro do bloco catch.
- Remova a impressão das mensagens de erro específicas.

### Aula 3 - Para saber mais: links da aula

Confira abaixo a lista de links utilizados durante a aula e/ou links complementares ao conteúdo:

Documentação do MDN: [objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

### Aula 3 -  - Vídeo 5
### Aula 3 -  - Vídeo 6
