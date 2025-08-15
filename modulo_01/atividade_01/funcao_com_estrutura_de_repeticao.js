//Função para contar quantos números pares existem em um intervalo

function contarPares(inicio, fim) {
  let quantidadePares = 0; //variavel para armazenar a quantidade de números pares

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      quantidadePares++;
      console.log(i + " é par");
    }
  }

  return quantidadePares; //retorna o total de números pares no intervalo
}

//Exemplo de uso
let numeroInicial = 1;
let numeroFinal = 20;

let totalPares = contarPares(numeroInicial, numeroFinal);

console.log("Entre " + numeroInicial + " e " + numeroFinal + " existem " + totalPares + " números pares.");