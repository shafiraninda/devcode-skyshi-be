const models = require('../models');
const Todo = models.todo;
const Activity = models.activity;
const errorHandler = require('../utils/errorHandler');

// GET ALL TODO ITEMS
async function getAllTodo(req, res, next){
    try {
        const todoList = await Todo.findAll()
        res.status(200).json({
            status: "Success",
            message: "Success",
            data: todoList
        })
    } catch (error) {
        next(error)
    }
}

// GET TODO BY ID
async function getTodoById(req, res, next){
    const id = req.params.id
    try {
        const existTodo = await Todo.findByPk(id);
        if(!existTodo){
            throw new errorHandler(404, "To-do Not Found!")
        }
        res.status(200).json({
            status: "Success",
            message: "Success",
            data: existTodo
        })
    } catch (error) {
        next(error)
    }
}

// CREATE NEW TODO
async function createTodo(req, res, next){
    const { activity_group_id, title } = req.body
    try {
        const existActivity = await Activity.findByPk(activity_group_id)
        if(!existActivity){
            throw new errorHandler(404, `Group Activity with ID ${activity_group_id} Not Found`)
        }

        const newTodo = await Todo.create({
            activity_group_id,
            title
        })
        if(!newTodo){
            throw new errorHandler(400, "Failed to Create New To-do")
        }
        res.status(201).json({
            status: "Success",
            message: "Success",
            data: newTodo
        })
    } catch (error) {
        next(error)
    }
}

// EDIT TODO
async function editTodo(req, res, next){
    const id = req.params.id
    const { title } = req.body
    try {
        const existTodo = await Todo.findByPk(id)
        if(!existTodo){
            throw new errorHandler(404, "To-do Not Found!")
        }
        const updateTodo = await existTodo.update({
            title
        })
        if(!updateTodo){
            throw new errorHandler(400, "Failed to update To-do")
        }
        const updatedTodo = await Todo.findByPk(existTodo.id)
        res.status(201).json({
            status: "Success",
            message: "Success",
            data: updatedTodo
        })
    } catch (error) {
        next(error)
    }
}

// DELETE TODO
async function deleteTodo(req, res, next){
    const id = req.params.id
    try {
        await Todo.destroy({
            where: { id: id}
        })
        const deletedTodo = await Todo.findByPk(id)
        if(deletedTodo){
            throw new errorHandler(400, "Failed to Delete To-do")
        }
        res.status(200).json({
            status: "Success",
            message: `Success`,
            data: deletedTodo
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllTodo,
    getTodoById,
    createTodo,
    editTodo,
    deleteTodo
}