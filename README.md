O exemplo do tutorial usa o Webpack 4 para transpilar o código TypeScript e agrupar os módulos Angular 8, e o servidor webpack dev é usado como o servidor web local .


O tutorial usa um backend falso que armazena os usuários no armazenamento local HTML5, para mudar para um serviço da web real, basta remover os provedores de backend falsos no app.module.tsarquivo abaixo do comentário



O projeto e a estrutura de código do tutorial seguem principalmente as recomendações de melhores práticas no Guia de Estilo Angular oficial , com alguns de meus próprios ajustes aqui e ali.

A estrutura do projeto tem uma pasta por recurso (home, login e registro), enquanto outro código compartilhado/comum (serviços, modelos, conteúdo, componentes e auxiliares) é colocado em pastas prefixadas com um sublinhado "_" para diferenciar facilmente entre código compartilhado e código específico do recurso, o prefixo também agrupa pastas de componentes compartilhados na parte superior da estrutura de pastas.

Os index.tsarquivos em cada pasta são arquivos barris que agrupam os módulos exportados de uma pasta para que possam ser importados usando o caminho da pasta em vez do caminho completo do módulo e para permitir a importação de vários módulos em uma única importação (por exemplo import { AlertService, UserService, AuthenticationService } from '@/_services', ).

Um alias de caminho '@' foi configurado no tsconfig.json e webpack.config.js que mapeia para o diretório '/src/app'. Isso permite que as importações sejam relativas à pasta '/src/app' prefixando o caminho de importação com '@', eliminando a necessidade de usar caminhos relativos longos como import MyComponent from '../../../MyComponent'.
























