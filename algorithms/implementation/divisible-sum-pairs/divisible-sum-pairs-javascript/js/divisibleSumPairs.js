// # Dado um array de inteiros e um número 
// # inteiro positivo k, sua tarefa é encontrar 
// # o número de pares (i, j) onde i < j, e a 
// # soma dos elementos nos índices i e j é divisível por k.


// Função que conta pares divisíveis em uma soma

// export function divisibleSumPairs(n, k, ar) {

//     // Inicializa um contador para armazenar o número de pares que satisfazem a condição
//     let contador = 0;

//     // Loop externo para percorrer os índices 'index' do array
//     for (let index = 0; index < n; index++) {
        
//         // Loop interno para percorrer os índices 'compare' maiores que 'index'
//         for (let compare = index + 1; compare < n; compare++) {
            
//             // Verifica se a soma dos elementos nos índices 'index' e 'compare' é divisível por 'k'
//             if ((ar[index] + ar[compare]) % k == 0) {
                
//                 // Se sim, incrementa o contador
//                 contador += 1
//             }
            
//         }
        
//     }

//     // Retorna o resultado final, que é o número total de pares que satisfazem a condição
//     return contador;
    
// }


// // Função que conta pares divisíveis em uma soma

// export function divisibleSumPairs(n, k, ar) {

//     // Inicializa a variável resultado para armazenar o número de pares que satisfazem a condição
//     let resultado = 0;

//     // Loop externo para percorrer os índices 'index' do array
//     for (let index = 0; index < n; index++) {
        
//         // Loop interno para percorrer os índices 'compare' do array
//         for (let compare = 0; compare < n; compare++) {
            
//             // Verifica se 'compare' é diferente de 'index', 'index' é menor que 'compare', e a soma é divisível por 'k'
//             if (compare !== index && index < compare && (ar[index] + ar[compare]) % k === 0) {
                
//                 // Se sim, incrementa o resultado
//                 resultado += 1;

//             } else {

//                 // Se não, continua para a próxima iteração
//                 continue;
//             }
            
//         }
        
//     }

//     // Retorna o resultado final, que é o número total de pares que satisfazem a condição
//     return resultado;
// }


// Função que conta pares divisíveis em uma soma

export function divisibleSumPairs(n, k, ar) {

    // Utiliza a função reduce para iterar sobre o array e acumular o número de pares
    return ar.reduce((pares, ari, i) => {

        // Para cada elemento ari no array, percorre novamente o array usando forEach
        ar.forEach((arj, j) => {

             // Verifica se j é maior que i e se a soma dos elementos nos índices i e j é divisível por k
             // Se sim, incrementa o contador de pares
            if((j > i) && ((arj + ari) % k == 0)) pares += 1;
        });

        // Retorna o valor acumulado para o próximo ciclo da função reduce
        return pares;

    // Inicializa o acumulador como 0
    }, 0);
}