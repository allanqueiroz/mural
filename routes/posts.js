const express = require("express");
const router = express.Router();
const posts = require("../model/posts");

router.get("/todosPosts", (req, res) => {
  res.send(posts.pegarTodosPosts());
});

router.post("/criarPost", (req, res) => {
  if (req.body.titulo && req.body.descricao) {
    posts.adicionarNovoPost(req.body.titulo, req.body.descricao);
    res.send("Post adicionado com sucesso");
  } else res.status(406).send("Verificar se chaves não são nulas");
});

router.delete("/deletarPost/:id", (req, res) => {
  posts.deletarItem(req.params.id);
  res.send(`Deletou o item de id ${req.params.id}`);
});

module.exports = router;
