const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([]);
});

router.get("/tarefas/:id", (req, res) => {
    res.json([]);
  });//???? 4.i)
module.exports = router;
