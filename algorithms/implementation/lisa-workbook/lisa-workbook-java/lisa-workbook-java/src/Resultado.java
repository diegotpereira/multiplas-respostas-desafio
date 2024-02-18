import java.util.List;

public class Resultado {

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

    // Definindo um método chamado workbook que recebe três parâmetros: n, k e arr.

    public static int workbook(int n, int k, List<Integer> arr) {
        
        // Inicializando variáveis para controlar o número 
        //  da página e o contador de problemas especiais.
        int pagina = 0;
        int contador = 0;

        // Iterando sobre os capítulos do livro.
        for (int i = 0; i < n; i++) {

            // Avançando para a próxima página.
            pagina += 1;

            // Iterando sobre os problemas no capítulo atual.
            for (int j = 0; j < arr.get(i); j++) {
                
                // Verificando se o número do problema coincide com o número da página.
                if ((j + 1) == pagina) {
                    
                    // Incrementando o contador de problemas especiais.
                    contador += 1;

                }

                // Verificando se é necessário avançar para a próxima página.
                if ((j + 1) % k == 0 && (j + 1) != arr.get(i)) {
                    
                    // Avançando para a próxima página.
                    pagina += 1;
                }
            }
            
        }

        // Retornando o contador de problemas especiais.
        return contador;
    }
    
}
