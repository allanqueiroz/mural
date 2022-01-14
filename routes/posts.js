const express = require("express");
const router = express.Router();
const allPosts = require("../model/posts");

router.get("/todosPosts", (req, res) => {
  res.send(allPosts.pegarTodosPosts());
});

router.post("/criarPost", (req, res) => {
  if (req.body.titulo && req.body.descricao) {
    allPosts.adicionarNovoPost(req.body.titulo, req.body.descricao);
    res.send({ message: "Post adicionado com sucesso" });
  } else
    res.status(400).send({ message: "Titulo/descrição não devem ser vazios" });
});

router.delete("/deletarPost/", (req, res) => {
  allPosts.deletarItem(req.body.id);
  res.send(`Deletou o item de id ${req.body.id}`);
});

module.exports = router;
