-----

# Atividade Javascript - Funções

Este atividade contém algumas funções em JavaScript.

### 1\. Função verificaParImpar(numero)

Essa função serve para verificar se um número é par ou ímpar.

**Como testar:**
```javascript
console.log(verificaParImpar(10)); // O número 10 é par.
console.log(verificaParImpar(3)); // O número 3 é ímpar.
```

-----

### 2\. Função calculaFatorial(numero)

Essa função calcula o fatorial de um número (n!) usando uma estrutura de repetição (for).

**Como testar:**
```javascript
console.log(calculaFatorial(-3)); // Fatorial não é definido para números negativos, escolha outro número.
console.log(calculaFatorial(0)); // O fatorial de 0 é 1.
console.log(calculaFatorial(5)); // O fatorial de 5 é 120.
```

-----

### 3\. Função encontraMaiorNumero(arrayDeNumeros)

Essa função percorre todos os elementos de um array através de um foreach() e encontra o maior número.

**Como testar:**
```javascript
console.log(encontraMaiorNumero([900, 80, 10, 6])); // O maior número do array é 900.
console.log(encontraMaiorNumero([30, 70, 12, 91, 1])); // O maior número do array é 91.
console.log(encontraMaiorNumero([])); // O array está vazio.
```

