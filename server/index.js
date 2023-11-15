const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({"todos": [{name: "todo1", completed: "false"}, {name: "todo2", completed:false}]});
})

app.listen(5000, ()=> {
    console.log("Listening to port 5000");
})