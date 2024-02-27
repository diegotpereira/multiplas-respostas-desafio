// # A tarefa do problema "Insertion Sort - Part 1" no HackerRank
// # é implementar a primeira etapa do algoritmo de ordenação por 
// # inserção (insertion sort). Nessa etapa, você deve realizar uma 
// # única iteração do algoritmo para "inserir" um elemento em sua 
// # posição correta dentro de uma lista ordenada.

// # A entrada do problema consiste em duas partes:

// # Um número inteiro, que representa o tamanho da lista de elementos.
// # Uma lista de números inteiros separados por espaços, que representam os 
// # elementos da lista.
// # A saída esperada é a lista após uma iteração do algoritmo de ordenação 
// # por inserção. Durante a iteração, você deve mover um elemento da lista 
// # para sua posição correta de acordo com a ordem crescente. Você deve 
// # imprimir a lista após essa única iteração.

// # A ideia básica do algoritmo de ordenação por inserção é que ele começa
// # com uma lista de um único elemento (o primeiro elemento da entrada) e, 
// # em seguida, insere cada elemento subsequente na posição correta na parte 
// # já ordenada da lista. A cada iteração, um novo elemento é inserido na 
// # posição correta, expandindo a parte ordenada da lista.

export function insertionSort1(n, arr) {

    // Loop para percorrer todos os elementos da matriz
    for (let i = 0; i < n; i++) {
        
        // Armazena o valor atual da matriz em 'key'
        let key = arr[i];

        // Define 'j' como o índice anterior ao valor atual
        let j = i - 1;

        // Move os elementos maiores que 'key' para a frente da matriz
        // para abrir espaço para inserir 'key' na posição correta
        while (j >= 0 && key < arr[j]) {
            
            arr[j + 1] = arr[j];

            j -= 1;
        }
        
        // Insere 'key' na posição correta
        arr[j + 1] = key;
    }
    
    // Retorna a matriz ordenada
    return arr;

}