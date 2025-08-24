// Função que recebe um número e verifica se ele é par ou ímpar
function verificaParImpar(numero) {
  if (numero % 2 === 0) {
    return `O  número ${numero} é par.`;
  } else {
    return `O número ${numero} é ímpar.`;
  }
};

// Exemplos de uso da função
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

// Exemplos de uso da função
console.log(calculaFatorial(-3));
console.log(calculaFatorial(0));
console.log(calculaFatorial(5));

// Função que encontre o maior número em um array de números.
function encontraMaiorNumero(arrayDeNumeros) {
  if (arrayDeNumeros.length === 0) {
    return "O array está vazio.";
  }

  let maiorNumero = arrayDeNumeros[0];

  arrayDeNumeros.forEach(element => {
    if (element > maiorNumero) {
        maiorNumero = element;
      }
  });

  return `O maior número do array é ${maiorNumero}.`;
};

// Exemplos de uso da função
console.log(encontraMaiorNumero([900, 80, 10, 6]));
console.log(encontraMaiorNumero([30, 70, 12, 91, 1]));
console.log(encontraMaiorNumero([]));