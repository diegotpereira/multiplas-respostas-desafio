// # palavras, a tarefa é determinar se 
// # existe uma submatriz idêntica à matriz 
// # menor dentro da matriz maior.

// # A entrada consiste em duas matrizes, 
// # uma matriz maior (G) e uma matriz menor (P). 
// # O objetivo é verificar se a matriz menor (P) 
// # está contida em algum lugar dentro da matriz 
// # maior (G). A resposta deve ser "YES" se a 
// # matriz menor estiver presente, e "NO" caso contrário.

// # A função gridSearch recebe duas listas bidimensionais G e P.

export function gridSearch(G, P) {
    
    // Loop externo para percorrer as posições iniciais onde o padrão P pode começar na matriz G
    for (let index = 0; index < G[0].length - P[0].length + 1; index++) {

        // Variável que indica se o padrão foi encontrado
        let encontrado = "";

        // Loop para percorrer as linhas da matriz maior G onde a matriz menor P pode começar
        for (let linha = 0; linha < G[0].length - P[0].length + 1; linha++) {
            
            // Loop para percorrer as colunas da matriz maior G onde a matriz menor P pode começar
            for (let coluna = 0; coluna < G[0].length - P[0].length + 1; coluna++) {
                
                // Loop para percorrer as linhas da matriz menor P
                for (let i = 0; i < P.length; i++) {
                    
                    // Verifica se a substring da matriz maior G não é igual à linha correspondente da matriz menor P
                    if (P[i] != G[linha + i].substring(coluna, coluna + P[0].length)) {
                        
                        // Se houver diferença, define 'encontrado' como 'NO' e sai do loop interno
                        encontrado = "NO";

                        break;

                    } else {

                        // Se todas as linhas correspondentes são iguais, define 'encontrado' como 'YES'
                        encontrado = "YES";
                    }
                    
                }
                
                // Se 'encontrado' for 'YES', retorna 'YES' para indicar que o padrão foi encontrado
                if (encontrado == "YES") {
                    
                    return encontrado;
                }
            }
            
        }

        // Se nenhum 'YES' foi encontrado, retorna o valor atual de 'encontrado' (pode ser 'NO')
        return encontrado;
        
    }
}