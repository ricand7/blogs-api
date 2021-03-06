

# Blogs Api Project

# Contexto
Back-end usando ORM com o pacote sequelize do npm em que são criadas tabelas usando models do sequelize.
   API de posts de blog (com o Sequelize) com alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados.


## Tecnologias usadas

Back-end:
>  Node Js e Sequelize com banco de dados Mysql usando também o recurso de geração de token(JWT) para autenticacao e permissão de acesso aos endpoints 


## Instalando Dependências

> Backend

```bash
cd api/ 
npm install
``` 

## Conexão com o Banco

*  Crie a variavel de acesso ao banco<br>
    Abra o arquivo dot.env na raiz do projeto e preencha as seguintes informações:<br>
    
    MYSQL_USER=seuusuario<br>
    MYSQL_PASSWORD=suasenha<br>
    HOSTNAME=127.0.0.1<br>
    JWT_SECRET=suasenhasecreta<br>
    DATABASE=blogs_api<br>
    
    
## Executando aplicação

* Para rodar o back-end:

  ```
  cd blogs-api && node index
  ```

## Testando as requisições

>  Requisição para Criar usuario , tipo Post http://localhost:3000/user
      Exemplo de Json enviado no Body:
      
  ``` 
     {
        "displayName": "Bretth",
        "email": "bretts@email.com",
        "password": "123456",
        "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ```
> Requisição para login do usuario , tipo Post http://localhost:3000/login
      Exemplo de Json enviado no Body:
     
  ```  
      {
        "email": "bretts@email.com",
        "password": "123456"
      }     

  ``` 
   
  
> Requisição para acessar a  lista de usuarios, tipo Get http://localhost:3000/user
      O token deve ser enviado no Header no campo Authorization(recebido no login)  


> Requisição para acessar um usuario, tipo Get http://localhost:3000/user/iddousuario
      O token deve ser enviado no Header no campo Authorization(recebido no login)
      

> Requisição para acessar as categorias tipo Get http://localhost:3000/categories
      O token deve ser enviado no Header no campo Authorization(recebido no login) 

     

> Requisição para criar uma Postagem  tipo Post http://localhost:3000/post
       O token deve ser enviado no Header no campo Authorization(recebido no login)        
       Exemplo de Json que deve ser enviado no Body:
       
   ```      
       {
        "title": "Latest updates, August 1st",
        "content": "The whole text for the blog post goes here in this key",
        "categoryIds": [1, 2]
       }
   ``` 
     
> Requisição para criar uma categoria tipo Post http://localhost:3000/categories
      O token deve ser enviado no Header no campo Authorization(recebido no login)
      Exemplo de Json que deve ser enviado no Body:
   ```   
      {
        "name": "escola"
      }
   ```     
     
> Requisição para acessar as Postagems tipo Get http://localhost:3000/post
       O token deve ser enviado no Header no campo Authorization(recebido no login)
   ```      
       {
        "title": "Latest updates, August 1st",
        "content": "The whole text for the blog post goes here in this key",
        "categoryIds": [1, 2]
       }
   ```   
     


