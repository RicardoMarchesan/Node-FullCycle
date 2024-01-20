# Node-FullCycle
Este repositório contém o código-fonte do segundo desafio do módulo Docker do curso Full Cycle

## O Desafio

1. Criar uma aplicação node.js para cadastrar um nome em um banco de dados mysql.
1. Criar um nginex com proxy reverso para a aplicação node
1. Criar uma imagem para o node.js
1. Criar uma imagem para o mysql
1. Criar uma imagem para o nginx
1. Criar uma network que fará a conexão entre eles
1. O retorno da apicação node.js deve ser
    - <h1>Full Cycle Rocks!</h1>
    - Lista de nomes cadastrada no banco de dados.
1. Criar um docker-compose
1. A aplição deve estar disponível na porta 8080.
1. Criar um repositório git para a entrega

### Resolução

1. **Pré requisitos:**
   - Possuir o Docker instalado

1. **Executar o container:**

   ```bash
     docker-compose up -d
   ```