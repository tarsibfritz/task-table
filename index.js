// Importa o módulo Express
const express = require("express");

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor será executado
const port = 3000;

// Importa o arquivo 'index.js' da pasta 'db
const database = require("./db/index")
database();

// Importa o módulo 'index.js' da pasta 'routers'
const router = require("./routers/index");

// Chama a função exportada pelo módulo da pasta 'routers' para configurar o roteamento do aplicativo Express
router(app, express)

// A função .listen() é uma função do Express que inicia o servidor
app.listen(
    port,  // Primeiro argumento = porta do servidor
    function (error){  // Segundo argumento = função de callback
        if (error){
            console.log("Ocorreu um erro ao rodar o servidor!");  // Se ocorrer um erro, exibe uma mensagem de erro
            return;
        } else{
            console.log("Servidor rodando com sucesso!");  // Se não ocorrer erro, exibe uma mensagem de sucesso
        }
    }
);