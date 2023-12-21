// # O problema "Cut the Sticks" em 
// # HackerRank solicita que você resolva o seguinte desafio:

// # Dado um conjunto de bastões de 
// # diferentes comprimentos, a tarefa 
// # é cortar os bastões. O corte é feito 
// # da seguinte forma: encontre o comprimento 
// # mínimo atual dos bastões, corte esse 
// # comprimento de todos os bastões e remova 
// # os bastões de comprimento zero. Repita 
// # esse processo até que todos os bastões sejam removidos.

// # A entrada do problema consiste em um array 
// # representando os comprimentos iniciais dos 
// # bastões. A saída deve ser uma série de inteiros 
// # que representam o número de bastões após cada corte.

// Função para resolver o problema "Cut the Sticks"

export function cutTheSticks(arr) {
    
    // Array para armazenar o número de bastões após cada corte
    const bastaoRestantes = [];

    // Enquanto houver bastões no array, continua o processo
    while (arr.length > 0) {
        
        // Adiciona o número atual de bastões ao array de resultados
        bastaoRestantes.push(arr.length);

        // Filtra os bastões removendo aqueles com o menor comprimento
        arr = arr.filter(tamanho => tamanho > Math.min(...arr));

    }

    // Retorna o array final contendo o número de bastões após cada corte
    return bastaoRestantes;

}