// Importa o módulo 'taskRouters.js'
const routerTasks = require("./taskRouters");

// Exporta uma função que recebe os parâmetros 'app' (instância do Express) e 'express' (módulo Express)
module.exports = function (app, express) {
    app.use(express.json());  // Defini um middleware do Express (express.json()) para analisar dados de requisição no formato JSON
    app.use(express.urlencoded({ extended: true }));  // Define um middleware do Express (express.urlencoded()) para analisar dados de requisição de formulário HTML e torná-los acessíveis no objeto req.body do Express
    app.use(routerTasks);  
};