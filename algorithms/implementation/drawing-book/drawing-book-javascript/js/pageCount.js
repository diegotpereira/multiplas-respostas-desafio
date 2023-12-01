// Você recebe um livro com páginas 
// numeradas de 1 a n. O livro está 
// aberto na página 1 e 2. Você pode 
// virar as páginas do livro de uma 
// em uma ou duas em duas. O objetivo 
// é encontrar o número mínimo de 
// viradas de páginas necessárias 
// para chegar a uma página específica.

// n é o número total de páginas no livro.
// p é o número da página para a qual você deseja virar.


// // Este método estoura o tempo limite
// export function pageCount(totalPagina, destino) {

//     // Inicializa as variáveis para contagem de viradas de páginas do início e do fim.
//     let inicial = 0;
//     let fim = 0;

//     // Verifica se o destino é uma página par.
//     if (destino % 2 == 0) {
        
//         // Se for par, calcula a quantidade de viradas necessárias do início.
//         inicial  = 1 + Math.floor((destino - 2) / 2);

//         // Calcula a quantidade de viradas necessárias do fim
//         fim = Math.floor((totalPagina - destino) / 2);
//     }

//     // Se for ímpar, 
//     if (destino % 2 == 1) {
        
//         // calcula a quantidade de viradas necessárias do início.
//         inicial = Math.floor((destino - 1) / 2);

//         // Calcula a quantidade de viradas necessárias do fim.
//         fim = Math.floor((totalPagina + 1 - destino) / 2);

//     }
    
//     // Retorna o mínimo entre as viradas do início e do fim.
//     return Math.min(inicial, fim);

// }

// Função pageCount recebe o total de páginas e a página de destino

export function pageCount(totalPagina, paginaDestino) {

    // Verifica se a página de destino é a primeira ou a última
    if (paginaDestino == 1 || totalPagina == paginaDestino) {
        
        // Se sim, não são necessárias viradas de página, retorna '0'
        return '0';

    } else {

        // Verifica se é mais eficiente virar do final para o início
        if ((totalPagina - paginaDestino) < paginaDestino) {
            
            // Verifica condição especial para virar apenas uma página ímpar
            if (totalPagina - paginaDestino <= 1 && paginaDestino % 2 != 0) {

                // Se sim, retorna '1'
                return '1';
                
            } else {

                // Calcula a quantidade de viradas necessárias do final para o início
                return Math.floor((totalPagina - paginaDestino) / 2);
            }

        } else {

            // Se for mais eficiente virar do início para o final, calcula a quantidade de viradas
            return Math.floor(paginaDestino / 2)
        }
    }
}