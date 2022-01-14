const inputTitulo = document.getElementById("input-titulo");
const txtAreaDescricao = document.getElementById("txtArea-descricao");
const BASEURL = "http://localhost:5000/api";

function novoPost() {
  const optionsFetch = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      titulo: inputTitulo.value,
      descricao: txtAreaDescricao.value,
    }),
  };
  fetch(`${BASEURL}/criarPost`, optionsFetch)
    .then((res) => {
      inputTitulo.value = "";
      txtAreaDescricao.value = "";
      buscarPosts();
      return res.json();
    })
    .then((json) => alert(json.message))
    .catch((err) => console.log("Error:", err));
}

function buscarPosts() {
  fetch(`${BASEURL}/todosPosts`)
    .then((res) => res.json())
    .then((json) => {
      const dados = json;
      let todosPosts = "";
      let elemento = "";

      if (dados.length) {
        dados.forEach((post) => {
          elemento = `
          <div class="card mb-2" id=${post.id}>
              <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="card-title">${post.titulo}</h3>
                <button class="btn btn-outline-dark text-warning" onclick="deletarPost('${post.id}')" title="Excluir post">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
              <div class="card-body">
                  <p class="card-text">${post.descricao}</p>
               </div>
          </div>
         `;
          todosPosts += elemento;
        });
        document.querySelector("#container-mural").innerHTML = todosPosts;
      } else {
        document.querySelector(
          "#container-mural"
        ).innerHTML = `<h3>Não há posts neste mural. Utilize o botão acima para adicionar.</h3>`;
      }
    });
}

function deletarPost(idPost) {
  chamarToast(idPost);
  const optionsFetch = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: idPost,
    }),
  };
  fetch(`${BASEURL}/deletarPost/`, optionsFetch)
    .then((res) => {
      buscarPosts();
    })
    .catch((err) => console.log(err));
}

function chamarToast(id) {
  var toastTrigger = document.getElementById(id);
  var toastLiveExample = document.getElementById("liveToast");
  if (toastTrigger) {
    toastTrigger.addEventListener("click", function () {
      var toast = new bootstrap.Toast(toastLiveExample);

      toast.show();
    });
  }
}

window.onload = buscarPosts;
