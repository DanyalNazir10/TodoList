const express = require ("express");
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({"todos": [{name: "todo1", completed: "false"}, {name: "todo2", completed:false}, {name: "myTodo", completed:false}]});
  });
  
  router.post('/ ', async (req, res) => {
   console.log("In add todos post")
  });
  
  module.exports = router;