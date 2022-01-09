module.exports = {
  posts: [
    { id: "1a2", titulo: "PrimeiroPost", descricao: "Este é o primeiro post." },
    {
      id: "69s",
      titulo: "Segundo Post",
      descricao: "Criado de forma estática, este é o segundo post no mural.",
    },
  ],
  pegarTodosPosts() {
    return this.posts;
  },
  adicionarNovoPost(titulo, descricao) {
    this.posts.push({
      id: gerarID(),
      titulo,
      descricao,
    });
  },
  deletarItem(idPost) {
    const novoArr = this.posts.filter((item) => {
      if (item.id != idPost) return item;
    });
    this.posts = [...novoArr];
  },
};

function gerarID() {
  return Math.random().toString(36).substring(2, 9);
}
