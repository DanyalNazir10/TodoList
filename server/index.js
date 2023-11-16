const express = require("express");
const todoRoutes = require('./routes/todos');

const app = express();

app.use('/api/todos', todoRoutes);

app.listen(5000, ()=> {
    console.log("Listening to port 5000");
})