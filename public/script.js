function novoPost() {
  console.log("Add o post ao mural");
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
        <div class="card mb-2">
            <div class="card-header">
                <h4 class="card-title">${post.titulo}</h3>
            </div>
            <div class="card-body" id=${post.id}>
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
