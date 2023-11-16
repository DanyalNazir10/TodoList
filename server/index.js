const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("../server/middleware/mongodb/connection");
const todoRoutes = require("./routes/todos");

const app = express();

app.use(bodyParser.json());

connectDB();

app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
