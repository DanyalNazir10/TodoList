const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../../server/controllers/todos");

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

module.exports = router;
