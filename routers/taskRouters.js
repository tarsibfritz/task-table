// Importa o módulo Router do framework Express
const Router = require("express").Router;
const router = Router();  // Cria uma intância de um roteador do Express para poder definir as rotas e manipular requisições HTTP

// Importa o controller das tarefas para poder usar nos métodos HTTP
const taskController = require("../controllers/taskController");

// ----------------------------------------------------------------------------------------------------------------------
// Métodos HTTP para fazer requisições (get | post | put | delete)
// Estrutura = router.'método'("/local", nomeController.metodoCrud)

// GET para listar todas as tarefas  (CRUD = readList)
router.get("/task", taskController.readList);

// GET para listar uma tarefa  (CRUD = read)
router.get("/task/:id", taskController.read);

// POST para criar nova tarefa  (CRUD = create)
router.post("/task", taskController.create);

// PUT para atualizar tarefa   (CRUD = update)
router.put("/task/:id", taskController.update);

// DELETE para deletar tarefa  (CRUD = delete)
router.delete("/task/:id", taskController.delete);

// Exportar o módulo do router
module.exports = router;