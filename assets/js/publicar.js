  if (localStorage.getItem("token") == null) {
      alert("Você precisa estar logado para acessar essa página");
      window.location.href = "../html/signin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./signin.html";
  }

  
  function publicacoes() {
    window.location.href = "publicacoes.html";
  }
  
  function publicar() {
    window.location.href = "publicar.html";
  }
  
function inicio(){
  window.location.href = "/index.html"
}

  function enviar(){
    alert("Documento Enviado")
    window.location.href = "publicacoes.html";
  }