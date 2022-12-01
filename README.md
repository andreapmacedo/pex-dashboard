### pex-webapp - v1

Link para acessar online: https://pex-webapp.up.railway.app/

Este projeto é um modelo de demonstração de dashboard construído com dados em hardcode. 
Embora os dados estejam estáticos, a implementação permite receber dados dinâmicos.

:rocket:  Tecnologias

- React
- css-modules
- vite

> A opção pelo vite como bundler foi devido a sua simplicidade e velocidade de desenvolvimento enquanto o css-modules por sua precisão de aplicação do estilo ao componente específico, pois ele cria um hash exclusivo para cada classe de estilo.


:pushpin: Habilidades

- Reproduzir com a maior fidelidade possível o layout proposto.
- Utilizar o React para desenvolver a interface.

 ‍💻 Softwares necessários

- NPM
- Node
- vite

 :arrow_down: Instalando dependências

```bash
npm install
```

 :zap: Executando o projeto localmente

```bash
 $ npm run dev
 ```
  - Acesse o link que será fornecedido pelo vite no terminal.
  - Caso queira alterar a porta, basta alterar o arquivo `vite.config.js` na raiz do projeto.
  Para tal, o seguinte trecho de código deve ser adicionado:
  ```js
  server: {
    port: 3000,
  },
  ```
