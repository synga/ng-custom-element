# WebComponents com Angular e @angular/elements

Um simples projeto para a criação de um `customElement` utilizando o `@angular/elements` para criar um elemento que pode ser
exportado e utilizado em qualquer aplicação, mesmo fora de um ambiente Angular.

O componente é um simples card, que recebe o nome de um pokemon e exibe imagem, nome e os atributos dele. Não foi
feito tratamento de erro, com nome errado o card simplesmente não renderiza.

PAra a construção do componente e para testar as possibilidades, o componente tem a dependencia de um subcomponente (que exibe a
lista dos atributos) e um serviço, que é injetado diretamente no `providers` do modulo desse componente.

### Construindo o componente.

Para o build do componente, basta utilizar o comando `npm run build:pokemon-card`. Ele irá _buildar_ o projeto especifico para o
card dentro da pasta `dist`. Além disso, transforma os 3 arquivos de `main`, `polyfills` e `runtime` em um só com o nome do componente.
(também sempre bom lembrar, é necessário rodar o `npm i` para instalar as dependências do projeto).

### Utilizando o componente.

Após o build, basta copiar o arquivo `pokemon-card.js` que está na pasta do projeto dentro de `dist`. Colar o arquivo no projeto que
você deseja utilizar, adicionar a tag `script` para ele e feito.

Você podera utilizar o elemento dessa forma:
`<pokemon-card pokemon="nome_do_pokemon"><pokemon-card>`.

### Limitações e suporte.

Apenas o IE não tem suporte para customElements, todos os outros browsers conseguem trabalhar com WebComponents.