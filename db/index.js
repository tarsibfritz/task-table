// Importa o módulo que contém a conexão com o banco de dados (dbConnection.js)
const dbConnection = require("./dbConnection");

// Importa o módulo responsável por criar e inicializar o banco de dados e as tabelas (dbCreate.js)
const db = require("./dbCreate");

// Exporta uma função que será executada para inicializar o banco de dados e as tabelas
module.exports = () => {
    // Inicializa a conexão com o banco de dados utilizando o módulo de conexão importada
    db.initConnection(dbConnection)
};