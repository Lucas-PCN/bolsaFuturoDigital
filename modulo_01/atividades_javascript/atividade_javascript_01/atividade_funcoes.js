// Função que recebe um número e verifica se ele é par ou ímpar
function verificaParImpar(numero) {
  if (numero % 2 === 0) {
    return `O  número ${numero} é par.`;
  } else {
    return `O número ${numero} é ímpar.`;
  }
};

console.log(verificaParImpar(10));
console.log(verificaParImpar(3));