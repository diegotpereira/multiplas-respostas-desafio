// # Lisa está participando de uma competição 
// # de programação e decidiu comprar um livro 
// # para ajudá-la nos estudos. O livro contém 
// # uma série de capítulos, cada um numerado 
// # sequencialmente, de 1 a n. Cada capítulo 
// # possui alguns problemas de programação 
// # numerados sequencialmente, de 1 a m. Cada 
// # página pode ter até k problemas.

// # Dada a quantidade total de capítulos (n), 
// # a quantidade total de problemas em cada 
// # capítulo (m), e o número máximo de problemas 
// # por página (k), a tarefa é determinar 
// # quantas páginas diferentes ela deve virar 
// # para resolver todos os problemas do livro.

// # O objetivo é contar o número de páginas 
// # em que a página atual contém pelo menos 
// # um problema. O número do problema em uma 
// # página deve corresponder ao número da página.

// A função 'workbook' recebe três parâmetros: n (número de capítulos), 
// k (número máximo de problemas por página) e arr (array que contém a 
// quantidade de problemas em cada capítulo).

export function workbook(n, k, arr) {
    
    // Inicialização de variáveis locais 'pagina' e 'contador'.
    let pagina = 0;
    let contador = 0;

    // Loop externo percorrendo cada capítulo.
    for (let index = 0; index < n; index++) {

        // Incrementa o número da página a ser considerada.
        pagina += 1;
        
        // Loop interno percorrendo cada problema no capítulo.
        for (let compare = 0; compare < arr[index]; compare++) {
            
            // Verifica se o número do problema é igual ao número da página atual.
            if ((compare + 1) === pagina) {
                
                // Se for verdadeiro, incrementa o contador de problemas especiais.
                contador += 1;
            }
            
            // Verifica se o número do problema é múltiplo de k (número máximo de problemas por página) 
            // e não é o último problema do capítulo.
            if ((compare + 1) % k == 0 && (compare + 1) != arr[index]) {
                
                // Se for verdadeiro, avança para a próxima página.
                pagina += 1;
            }
        }
        
    }

    // Retorna o total de problemas especiais encontrados.
    return contador;
}