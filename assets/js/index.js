if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}

function publicacoes() {
  window.location.href = "./assets/html/publicacoes.html";
}

function publicar() {
  window.location.href = "./assets/html/publicar.html";
}

function inicio() {
  window.location.href = "index.html";
}