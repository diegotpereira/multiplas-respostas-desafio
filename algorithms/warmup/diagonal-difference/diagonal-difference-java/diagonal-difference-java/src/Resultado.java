import java.util.List;
import java.util.stream.IntStream;

public class Resultado {

    // public static int diagonalDifference(List<List<Integer>> arr) {

    //     // Inicializa as somas das diagonais principal e secundária
    //     int soma1 = 0;
    //     int soma2 = 0;

    //     // Itera sobre as linhas da matriz
    //     for (int i = 0; i < arr.size(); i++) {
            
    //         // Itera sobre as colunas da matriz
    //         for (int j = 0; j < arr.size(); j++) {
                
    //             // Verifica se o índice atual está na diagonal principal
    //             if (i == j) {
                    
    //                 // Adiciona o elemento da diagonal principal à soma1
    //                 soma1 += arr.get(i).get(j);
    //             }

    //             // Verifica se o índice atual está na diagonal secundária
    //             if (i + j == arr.size() - 1) {
                    
    //                 // Adiciona o elemento da diagonal secundária à soma2
    //                 soma2 += arr.get(i).get(j);
    //             }
    //         }
    //     }

    //     // Retorna a diferença absoluta entre as somas das diagonais
    //     return Math.abs(soma1 - soma2);
    // }

    public static int diagonalDifference(List<List<Integer>> arr) {

        // Calcula a soma dos elementos da diagonal principal usando IntStream
        int soma1 = IntStream.range(0, arr.size()).map(i -> arr.get(i).get(i)).sum();

        // Calcula a soma dos elementos da diagonal secundária usando IntStream
        int soma2 = IntStream.range(0, arr.size()).map(i -> arr.get(i).get(arr.size() - 1 - i)).sum();

        // Retorna a diferença absoluta entre as somas das diagonais
        return Math.abs(soma1 - soma2);

    }
    
}
