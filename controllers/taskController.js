const taskModel = require("../models/taskModel")

// CRUD
class taskController{
    // Método para ler todas as tarefas  [read]
    readList(req, res){
        const tasksList = taskModel.readList();  // Chamada da função do taskModel para ler todas as tarefas
        return tasksList
            .then((result) => result.length == 0 ? res.status(404).send("Nenhuma tarefa foi encontrada.") : res.status(200).json(result))
            .catch((error) => res.status(400).json(error.message));
    }

    // Método para ler uma tarefa específica  [read]
    read(req, res){
        // Se pede um item específico precisamos do ID. Se precisamos do ID, também precisamos do parâmetro ID da requisição
        const { id } = req.params;
        const task = taskModel.read(id);  // Chamada da função do taskModel para ler uma tarefa
        return task
            .then((result) => result.length == 0 ? res.status(404).send("Tarefa não encontrada.") : res.status(200).json(result))
            .catch((error) => res.status(400).json(error.message));
    }

    // Método para criar uma tarefa  [create]
    create(req, res){
        // Obtém os dados da nova tarefa do corpo da requisição
        const newTask = req.body;
        const task = taskModel.create(newTask);  // Chamada da função do TaskModel para criar uma tarefa
        return task
            .then((result) => res.status(201).send("Tarefa criada com sucesso!"))
            .catch((error) => res.status(400).json(error.message));
    }

    // Método para atualizar uma tarefa  [update]
    update(req, res){
        // Se pede um item específico precisamos do ID. Se precisamos do ID, também precisamos do parâmetro ID da requisição
        const { id } = req.params;
        const updatedTask = req.body;  // Se vamos atualizar uma tarefa, precisamos da estrutura(body) da tarefa
        const task = taskModel.update(updatedTask, id);  // Chama a função do TaskModel para atualizar a tarefa com o ID fornecido
        return task
            .then((result) => res.status(200).send("Tarefa atualizada com sucesso!"))
            .catch((error) => res.status(400).json(error.message));
    }

    // Método para excluir uma tarefa  [delete]
    delete(req, res){
        // Se pede um item específico precisamos do ID. Se precisamos do ID, também precisamos do parâmetro ID da requisição
        const { id } = req.params;
        const task = taskModel.delete(id);  // Chama a função do TaskModel para deletar a tarefa com o ID fornecido
        return task
            .then((result) => res.status(200).send("Tarefa deletada com sucesso!"))
            .catch((error) => res.status(400).json(error.message));
    }
};

// Exporta uma instância da classe TaskController para ser utilizada em outros arquivos do projeto
module.exports = new taskController();