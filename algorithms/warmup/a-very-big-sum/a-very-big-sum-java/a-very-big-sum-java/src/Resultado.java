import java.util.List;
import java.util.stream.Collectors;

public class Resultado {

    // public static long aVeryBigSum(List<Integer> arr) {

    //     // Converte cada valor Integer para Long antes de usar Collectors.summingLong
    //     return arr.stream().mapToLong(Long::valueOf).sum();
    // }

    // public static long aVeryBigSum(List<Integer> arr) {

    //     // Inicializa uma variável para armazenar a soma
    //     long soma = 0;

    //     // Loop através da lista de inteiros usando for-each
    //     for (Integer i : arr) {
            
    //         // Adiciona cada número ao total acumulado
    //         soma += i;
    //     }

    //     // Retorna o total acumulado como um long
    //     return soma;
    // }
    
    public static long aVeryBigSum(List<Integer> arr) {

        // Inicializa uma variável para armazenar a soma
        long soma = 0;

        // Loop através da lista de inteiros usando um loop for convencional
        for (int i = 0; i < arr.size(); i++) {
            
            // Adiciona cada número ao total acumulado usando o método get() para acessar o elemento na posição i
            soma = soma + arr.get(i);
        }

        // Retorna o total acumulado como um long
        return soma;
    }
    
}
