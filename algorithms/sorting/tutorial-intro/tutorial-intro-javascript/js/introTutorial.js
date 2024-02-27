// # A tarefa do problema "Tutorial Intro" 
// # no HackerRank é criar um algoritmo que 
// # localize o índice de um determinado 
// # elemento em um array ordenado. Mais 
// # especificamente, o problema solicita 
// # que você escreva um programa que receba 
// # como entrada um valor, um número inteiro V, 
// # e um array ordenado de inteiros. O programa 
// # deve determinar e imprimir o índice de V neste array.

// # A entrada fornecida inclui o valor a ser 
// # procurado (V), o tamanho do array (n), 
// # seguido pelos elementos do array, que 
// # estão em ordem crescente. A saída 
// # esperada é o índice de V no array fornecido.

// # # Esta função recebe dois parâmetros: V (o valor a ser encontrado) e arr (o array onde procurar).

export function introTutorial(V, arr) {
    
    // Percorre o array arr usando um loop for.
    for (let index = 0; index < arr.length; index++) {
        
        // Verifica se o elemento atual do array é igual a V.
        if (arr[index] == V) {
            
            // Se encontrar V, retorna o índice atual.
            return index;
        }
    }

    // Se o valor não for encontrado, retorna -1.
    return -1;
}