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

public class Resultado {

    // public static int pageCount(int totalPaginas, int paginaDestino) {
        
    //     // Verifica se o total de páginas é ímpar
    //     boolean eh_impar = totalPaginas % 2 != 0;

    //     // Verifica se a página de destino está na segunda metade do livro
    //     if (paginaDestino > totalPaginas / 2) {
            
    //         // Verifica se é uma página ímpar e está a uma página de distância do final
    //         if (eh_impar && totalPaginas - paginaDestino <= 1) {
                
    //             // Se sim, não são necessárias viradas de página, retorna 0
    //             return 0;
    //         }

    //         // Calcula a quantidade de viradas necessárias do final para o início, arredondando para cima
    //         return (int) Math.ceil((totalPaginas - paginaDestino - 1) / 2.0);
    //     }

    //     // Se a página de destino está na primeira metade do livro, calcula a quantidade de viradas necessárias do início para o final, arredondando para cima
    //     return (int) Math.ceil((paginaDestino - 1) / 2.0);
    // }
    
    // public static int pageCount(int totalPaginas, int paginaDestino) {

    //     // Verifica se a página de destino é a primeira ou a última
    //     if (paginaDestino == 1 || totalPaginas == paginaDestino) {

    //         // Se sim, não são necessárias viradas de página, retorna '0'
    //         return '0';
            
    //     } else {

    //         // Verifica se é mais eficiente virar do final para o início
    //         if ((totalPaginas - paginaDestino) < paginaDestino) {
                
    //             // Verifica condição especial para virar apenas uma página
    //             if (totalPaginas - paginaDestino <= 1 && paginaDestino % 2 != 0) {
                    
    //                 // Se sim, retorna '1'
    //                 return '1';

    //             } else {

    //                 // Calcula a quantidade de viradas necessárias do final para o início
    //                 return (totalPaginas - paginaDestino) / 2;
    //             }

    //         } else {

    //             // Se for mais eficiente virar do início para o final, calcula a quantidade de viradas
    //             return paginaDestino / 2;
                
    //         }
    //     }
    // }

    public static int pageCount(int totalPaginas, int paginaDestino) {

        // Calcula a quantidade de viradas necessárias do início para a página de destino
        int a = paginaDestino / 2;

        // Calcula a quantidade de viradas necessárias do final para a página de destino
        int b = (totalPaginas - paginaDestino) / 2;

        // Verifica se o total de páginas é par e a página de destino é ímpar
        // Se sim, ajusta a quantidade de viradas do final para a página de destino
        if(totalPaginas % 2 == 0 && paginaDestino % 2 != 0) b += 1;

        // Retorna o mínimo entre as duas quantidades calculadas
        return Math.min(a, b);
    }
}
