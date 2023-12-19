// # O problema "Sock Merchant" no HackerRank 
// # é um desafio de programação que pede aos 
// # participantes para determinar quantos 
// # pares de meias idênticas podem ser formados 
// # a partir de um conjunto de meias. Aqui 
// # está uma descrição geral do problema:

// # Tarefa:
// # Dada uma lista de números inteiros 
// # representando as cores das meias, a tarefa 
// # é contar quantos pares de meias idênticas 
// # podem ser formados. Cada número inteiro 
// # representa uma cor diferente de meia.

// // Função que conta o número de pares de meias idênticas

// export function sockMerchant(n, ar) {

//     // Ordena a array em ordem crescente
//     ar.sort((a, b) => a - b);

//     // Inicializa variáveis para contar pares e armazenar a meia atual
//     let contador = 0;
//     let atual = 0;

//     // Itera sobre cada elemento na array
//     for(let elemento of ar) {

//         // Verifica se o elemento é igual à meia atual
//         if (elemento === atual) {
            
//             // Se sim, incrementa o contador de pares
//             contador += 1;

//             // Reinicia a variável atual para 0
//             atual = 0;

//             // Pula para a próxima iteração do loop
//             continue;

//         }

//         // Se o elemento não for igual à meia atual, atualiza a variável atual
//         atual = elemento;
//     }

//     // Retorna o número total de pares de meias idênticas
//     return contador;
    
// }


// // Função que conta o número de pares de meias idênticas

// export function sockMerchant(n, ar) {

//     // Usa o método reduce para contar as ocorrências de cada valor na array
//     const contador = ar.reduce((a, i) => {

//         // Se a chave já existe, incrementa o valor; caso contrário, inicializa com 1
//         a[i] = a[i] ? a[i] += 1 : 1;

//         // Retorna o objeto acumulado (contagem)
//         return a;

//     }, []);

//     // Usa o método reduce para calcular o número total de pares
//     const pares = contador.reduce((a, i) => {

//         // Adiciona a quantidade inteira da divisão por 2 ao acumulador
//         return a + Math.floor(i /2);

//     }, 0);

//     // Retorna o número total de pares de meias idênticas
//     return pares;
// }


// Função que conta o número de pares de meias idênticas

export function sockMerchant(n, ar) {

    // Calcula o índice da última meia na array
    let numMeia = n - 1;

    // Classifica a array em ordem crescente (altera o array original)
    let classificarArr = ar.sort((a, b) => a - b);

    // Inicializa a variável para contar o número total de pares
    let pares = 0;

    // Itera sobre a array para contar os pares de meias idênticas
    for (let index = 0; index < numMeia; index++) {
        
        // Verifica se a meia atual é idêntica à próxima meia
        if (classificarArr[index] === classificarArr[index + 1]) {
            
            // Se sim, incrementa o contador de pares
            pares += 1;

            // Avança o índice em mais uma posição para pular a próxima meia
            index += 1;
        }
        
    }

    // Retorna o número total de pares de meias idênticas
    return pares;
}