// O problema "Sherlock and Squares" no HackerRank 
// pede para você encontrar o número de quadrados 
// perfeitos (inteiros) dentro de um intervalo dado. 
// Aqui está um resumo da tarefa:

// Dado um intervalo fechado [a, b], sua tarefa 
// é contar quantos números inteiros dentro desse 
// intervalo são quadrados perfeitos. Um quadrado 
// perfeito é um número inteiro que pode ser expresso 
// como o quadrado de outro número inteiro.

// A entrada consiste em vários casos de teste, 
// onde cada caso de teste é composto por dois 
// números inteiros, a e b (representando o intervalo fechado [a, b]).

// A saída deve conter um número inteiro para cada 
// caso de teste, representando o número de quadrados perfeitos no intervalo [a, b].

// Declaração do método 'squares' que recebe dois parâmetros inteiros, a e b, e retorna um inteiro.

export function squares(a, b) {
    
    // Inicialização de um contador para contar o número de quadrados perfeitos no intervalo [a, b].
    let contador = 0;

    // Cálculo do valor inicial de x, que é a raiz quadrada de 'a' arredondada para cima.
    let x = Math.ceil(Math.sqrt(a));

    // Loop while que continua até que o quadrado de x seja maior que 'b'.
    while (Math.pow(x, 2) <= b) {
        
        // Incrementa o contador a cada iteração do loop.
        contador = contador += 1;

        // Incrementa o valor de x para verificar o próximo número.
        x = x + 1;
    }

    // Retorna o contador, que representa o número de quadrados perfeitos no intervalo [a, b].
    return contador;
}