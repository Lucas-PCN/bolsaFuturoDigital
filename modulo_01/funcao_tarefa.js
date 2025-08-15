//Exercício de exemplo: mostrar apenas números pares de um a dez

function exercicio() {
  for (let i = 1; i <=10; i++) {
    if (i % 2 === 0) {
      console.log(i + " é par");
    }
  };
};

exercicio();