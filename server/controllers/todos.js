const { Todo } = require("../../server/models/todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {$set: {name: req.body.name, completed: req.body.completed}},
      { new: true }
    );
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
