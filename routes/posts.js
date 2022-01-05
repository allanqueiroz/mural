const express = require("express");
const router = express.Router();
const posts = require("../model/posts");

router.get("/todosPosts", (req, res) => {
  res.send(posts.pegarTodosPosts());
});

module.exports = router;
