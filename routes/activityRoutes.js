const ActivityController = require("../controller/activityController");
const express = require("express");
const ROUTER = express.Router();

ROUTER.get("/", ActivityController.getAllActivity);
ROUTER.post("/", ActivityController.createActivity);
ROUTER.get("/:id", ActivityController.getActivityById);
ROUTER.patch("/:id", ActivityController.editActivity);
ROUTER.delete("/:id", ActivityController.deleteActivity);

module.exports = ROUTER;