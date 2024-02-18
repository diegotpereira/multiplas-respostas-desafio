import java.util.*;

public class Resultado {

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
    public static String gridSearch(List<String> G, List<String> P) {

        // Inicializa a variável que indicará se o padrão foi encontrado
        String encontrado = "";

        // Loop para percorrer as linhas da grade maior G onde a grade menor P pode começar.
        for (int linha = 0; linha < G.get(0).length() - P.get(0).length() + 1; linha++) {
            
            // Loop para percorrer as colunas da grade maior G onde a grade menor P pode começar.
            for (int coluna = 0; coluna < G.get(0).length() - P.get(0).length() + 1; coluna++) {

                // Loop para percorrer as linhas da grade menor P.
                for (int i = 0; i < P.size(); i++) {
                    
                    // Verifica se a substring da grade maior G não é igual à linha correspondente da grade menor P.
                    if (!P.get(i).equals(G.get(linha + i).substring(coluna, coluna + P.get(0).length()))) {
                        
                        // Se houver uma diferença, define 'encontrado' como 'NO' e sai do loop interno.
                        encontrado = "NO";

                        break;

                    } else {

                        // Se todas as linhas correspondentes são iguais, define 'encontrado' como 'YES'.
                        encontrado = "YES";
                    }

                    
                }

                // Se 'encontrado' for 'YES', retorna 'YES' para indicar que a grade menor foi encontrada.
                if ("YES".equals(encontrado)) {
                        
                    return encontrado;
                }
                
            }
        }

        // Se nenhum 'YES' foi encontrado, retorna o valor atual de 'encontrado' (pode ser 'NO').
        return encontrado;
        
    }
    
    
}
