const models = require('../models')
const Activity = models.activity;
const errorHandler = require('../utils/errorHandler')

// GET ALL ACTIVITY
async function getAllActivity(req, res, next){
    try {
        const allActivity = await Activity.findAll()
        res.status(200).json({
            status: "Success",
            message: "Success",
            data: allActivity
        })
    } catch (error) {
        next(error)
    }
}

// GET ACTIVITY BY ID
async function getActivityById(req, res, next){
    const id = req.params.id
    try {
        const existActivity = await Activity.findByPk(id);
        if(!existActivity){
            throw new errorHandler(404, "Activity Not Found!")
        }
        res.status(200).json({
            status: "Success",
            message: "Success",
            data: existActivity
        })
    } catch (error) {
        next(error)
    }
}

// CREATE NEW ACTIVITY
async function createActivity(req, res, next){
    const { email, title } = req.body
    try {
        const newActivity = await Activity.create({
            email,
            title
        })
        if(!newActivity){
            throw new errorHandler(400, "Failed to Create New Activity")
        }
        res.status(201).json({
            status: "Success",
            message: "Success",
            data: newActivity
        })
    } catch (error) {
        next(error)
    }
}

// EDIT ACTIVITY
async function editActivity(req, res, next){
    const id = req.params.id
    const { title } = req.body
    try {
        const existActivity = await Activity.findByPk(id)
        if(!existActivity){
            throw new errorHandler(404, "Activity Not Found!")
        }
        const updateActivity = await existActivity.update({
            title
        })
        if(!updateActivity){
            throw new errorHandler(400, "Failed to update activity")
        }
        const updatedActivity = await Activity.findByPk(existActivity.id)
        res.status(201).json({
            status: "Success",
            message: "Success",
            data: updatedActivity
        })
    } catch (error) {
        next(error)
    }
}

// DELETE ACTIVITY
async function deleteActivity(req, res, next){
    const id = req.params.id
    try {
        await Activity.destroy({
            where: { id: id}
        })
        const deletedActivity = await Activity.findByPk(id)
        if(deletedActivity){
            throw new errorHandler(400, "Failed to delete activity")
        }
        res.status(200).json({
            status: "Not Found",
            message: `Activity with ID ${id} Not Found`,
            data: deletedActivity
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllActivity,
    getActivityById,
    createActivity,
    editActivity,
    deleteActivity
}