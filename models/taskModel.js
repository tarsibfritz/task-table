const dbConnection = require("../db/dbConnection");

// Criação da classe taskModel para manipular operações relacionadas as listas no banco de dados
class taskModel{
    // Método para executar consultas SQL no banco de dados
    executeSQL(sql, parametros = ""){
        return new Promise(
            function (resolve, reject){
                // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
                dbConnection.query(sql, parametros, function (error, resposta){ 
                    if (error){
                        return reject(error);  // Se ocorrer um erro durante a execução da consulta, rejeita a Promise com o erro
                    }
                    return resolve(resposta);  // Se a consulta for bem-sucedida, resolve a Promise com a resposta do banco de dados
                });
            }
        );
    }

    // Método para obter lista de tarefas
    readList(){
        const sql = "SELECT * FROM task";  // Consulta SQL para selecionar todas as tarefas existentes
        return this.executeSQL(sql);  // Executa a consulta chamando o método executeSQL
    }
    
    // Método para obter uma tarefa da lista
    read(id){
        const sql = "SELECT * FROM task WHERE id = ?";  // Consulta SQL para selecionar a tarefa por ID
        return this.executeSQL(sql, id);  // Executa a consulta chamando o método executeSQL
    }

    // Método para criar nova tarefa
    create(newTask){
        const sql = "INSERT INTO task SET ?";  // Consulta SQL para inserir nova tarefa
        return this.executeSQL(sql, newTask);  // Executa a consulta chamando o método executeSQL
    }

    // Método para atualizar uma tarefa
    update(updatedTask, id){
        const sql = "UPDATE task SET ? WHERE id = ?";  // Consulta SQL para atualizar uma tarefa
        return this.executeSQL(sql, [updatedTask, id]);  // Executa a consulta chamando o método executeSQL
    }

    // Método para deletar uma tarefa
    delete(id){
        const sql = "DELETE FROM task WHERE id = ?";  // Consulta SQL para deletar uma tarefa
        return this.executeSQL(sql, id);
    }
}

// Exporta uma instância da classe taskModel para ser utilizada em outros arquivos do projeto
module.exports = new taskModel();