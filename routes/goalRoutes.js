import express from "express";
const router = express.Router();

import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/GoalController.js";

router.route("/todos").get(getTodos);
router.route("/add-todo").post(addTodo);
router.route("/:id").delete(deleteTodo).patch(updateTodo);

export default router;
