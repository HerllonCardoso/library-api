<h1 align="center">
 Library-API
</h1>


<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executando-a-api">Executando a API</a>
  
  <p align="center">
  <img alt="Insomnia" src="https://i.imgur.com/Qnd42q2.png" width="100%">
</p>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [uuid](https://www.npmjs.com/package/uuid)


## 💻 Sobre

A aplicação é capaz de criar, listar, atualizar e deletar livros, cada livro pode receber likes, foi criada com o objetivo de praticar o desenvolvimento de 
APIs com NodeJS

---
## 📓 Como utilizar
  Para utilizar a api você deve simular com o [Insomnia](https://insomnia.rest/).
  
 - Para cadastrar um livro, utilizar a url: http://localhost:3333/books
 - Para listar todos os livros cadastrados, utilizar a url: http://localhost:3333/books
 - Para alterar os dados de um livro, utilizar a url: http://localhost:3333/books/book-id
 - Para deletar um livro, utilizar a url: http://localhost:3333/books/book-id
 - Para o livro receber um like, deve utilizar a url: http://localhost:3333/books/book-id/like
 
## 📦 Executando a API
```bash
    #Clonar o repositório
    $ git clone https://github.com/HerllonCardoso/library-api.git

    #Entrar no diretório
    $ cd library-api

    #Instalar as dependencias
    $ yarn 
    or
    $ npm install

    #Iniciar o projeto
    $ yarn dev
```

