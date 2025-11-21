const senha = document.getElementById("senha");

function handleSubmit() {
  // pequena interação: apenas feedback visual — não envia nada
  const val = senha.value.trim();
  const card = document.querySelector(".card");

  if (!val) {
    senha.focus();
    return;
  } else if (val == "aindanãoévalido") {
    card.style.transform = "scale(0.995)";
    setTimeout(() => {
      card.style.transform = "";
      alert("Senha correta");
    }, 220);
  } else if (val != "aindanãoévalido") {
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
