const inputTitulo = document.getElementById("input-titulo");
const txtAreaDescricao = document.getElementById("txtArea-descricao");

function novoPost() {
  const options = {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      titulo: inputTitulo.value,
      descricao: txtAreaDescricao.value,
    }),
  };
  fetch("http://localhost:5000/api/criarPost", options)
    .then((res) => {
      console.log(res);
      buscarPosts();
    })
    .catch((err) => console.log(err));
}

function buscarPosts() {
  fetch("http://localhost:5000/api/todosPosts")
    .then((res) => res.json())
    .then((json) => {
      const dados = json;
      let todosPosts = "";
      let elemento = "";

      dados.forEach((post) => {
        elemento = `
        <div class="card mb-2" id=${post.id}>
            <div class="card-header">
                <h4 class="card-title">${post.titulo}</h3>
            </div>
            <div class="card-body">
                <p class="card-text">${post.descricao}</p>
             </div>
        </div>
       `;
        todosPosts += elemento;
      });
      document.querySelector("#container-mural").innerHTML = todosPosts;
    });
}

function deletarPost() {}
window.onload = buscarPosts;
