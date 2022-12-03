const TodoController = require("../controller/todoController");
const express = require("express");
const ROUTER = express.Router();

ROUTER.get("/", TodoController.getAllTodo);
ROUTER.post("/", TodoController.createTodo);
ROUTER.get("/:id", TodoController.getTodoById);
ROUTER.patch("/:id", TodoController.editTodo);
ROUTER.delete("/:id", TodoController.deleteTodo);

module.exports = ROUTER;