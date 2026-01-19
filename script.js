const senha = document.getElementById("senha");

function handleSubmit() {
  // pequena interação: apenas feedback visual — não envia nada
  const val = senha.value.trim();
  const card = document.querySelector(".card");

  if (!val) {
    senha.focus();
    return;
  } else if (val == "TeAmoS2") {
    card.style.transform = "scale(0.995)";
    setTimeout(() => {
      card.style.transform = "";
      redirecionarPedido();
    }, 220);
  } else if (val != "TeAmoS2") {
    card.style.transform = "scale(0.995)";
    setTimeout(() => {
      card.style.transform = "";
      alert("Senha incorreta");
    }, 220);
  }
}

function handleHint() {
  alert("Eu nunca irei esquecer o dia do nosso primeiro beijo.");
}

function redirecionar() {
  window.location = "dica.html";
}

function redirecionarPedido() {
  window.location = "declaracao.html";
}
