//Função que verifica se a pessoa pode dirigir

function podeDirigir(idade, temHabilitacao) {
  if (idade >= 18 && temHabilitacao) {
    console.log("Você pode dirigir!");
  } else if (idade >= 18 && !temHabilitacao) {
    console.log("Você tem idade, mas ainda não possui habilitação.");
  } else {
    console.log("Você não pode dirigir.");
  }
}