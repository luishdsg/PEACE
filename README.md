## PEACE Banking

<img align="left" alt="Visual Studio Code" style="margin-bottom: 30px;" src="https://i.ibb.co/j9KJjS1/image-processing20220103-23137-qi6bzk.jpg" />


<br>
 O PEACE Banking é um exemplo de sistema simples de registro e login de usuário usando Angular 8, TypeScript e webpack 4.
</br>


# Tecnologias utilizadas
![Javascript red](https://img.shields.io/badge/-JavaScript-6633cc?style=flat-square&logo=JavaScript&logoColor=white) ![Typescript Badge](https://img.shields.io/badge/-Typescript-6633cc?style=flat-square&logo=Typescript&logoColor=white) ![AngularJs Badge](https://img.shields.io/badge/-AngularJS-6633cc?style=flat-square&logo=Angular&logoColor=white) ![Node Badge](https://img.shields.io/badge/-NodeJS-6633cc?style=flat-square&logo=Node.js&logoColor=white)  ![HTML Badge](https://img.shields.io/badge/-HTML-6633cc?style=flat-square&logo=HTML5&logoColor=white) ![CSS Badge](https://img.shields.io/badge/-CSS-6633cc?style=flat-square&logo=CSS3&logoColor=white) ![Webpack Badge](https://img.shields.io/badge/-Webpack-6633cc?style=flat-square&logo=Webpack&logoColor=white) ![Less Badge](https://img.shields.io/badge/-Less-6633cc?style=flat-square&logo=Less&logoColor=white)
![ZoneJs Badge](https://img.shields.io/badge/-ZoneJs-6633cc?style=flat-square&logo=Zone&logoColor=white)

> Resumo

   O modelo criado usa o Webpack 4 para transpilar o código TypeScript e agrupar os módulos do Angular 8, e o servidor webpack-dev é usado como um backend falso que armazena os usuários no armazenamento local, O projeto e a estrutura de código seguem principalmente as recomendações de melhores práticas no Guia de Estilos do "Angular oficial"
    
> especializações
    
   A estrutura do projeto tem uma pasta por recurso, (home, login e registro), enquanto outro código compartilhado/comum tem os (serviços, modelos, conteúdo, componentes e auxiliares) e coloquei-os em pastas prefixadas com um sublinhado "_" para diferenciar facilmente entre código compartilhado e código específico do recurso, o prefixo também agrupa pastas de componentes compartilhados na parte superior da estrutura de pastas, Pois Os arquivos <kbd>index.ts</kbd> em cada pasta são arquivos "Barriel files" que agrupam os módulos exportados de uma pasta para que podem ser importados usando o caminho da pasta em vez do caminho completo do módulo, e para permitir a importação de vários módulos em uma única importação, (por exemplo <kdd>import { AlertService, UserService, AuthenticationService } from '@/_services', )</kdd> .
   
   
   
### Como iniciar o projeto


> necessario
> NodeJS 10.8.1   [NodeJs]

Instale as dependências globais:

```
npm install  /  

```

Inicie a alicação:

```
npm start  /

```

Acesse na url de seu browser:

```
http://localhost:8080/login

```





Um alias de caminho '@' foi configurado no tsconfig.json e webpack.config.js que mapeia para o diretório '/src/app'. Isso permite que as importações sejam relativas à pasta '/src/app' prefixando o caminho de importação com '@', eliminando a necessidade de usar caminhos relativos longos como import MyComponent from '../../../MyComponent'.
























