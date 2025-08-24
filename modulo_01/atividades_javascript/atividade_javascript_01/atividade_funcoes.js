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

// Função que calcula o fatorial de um número
function calculaFatorial(numero) {
  if (numero < 0) {
    return "Fatorial não é definido para números negativos, escolha outro número.";
  } else if (numero === 0) {
    return `o fatorial de ${numero} é 1.`;
  } else {
    let fatorial = 1;
    
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    
    return `o fatorial de ${numero} é ${fatorial}.`;
  }
};

console.log(calculaFatorial(-3));
console.log(calculaFatorial(0));
console.log(calculaFatorial(5));