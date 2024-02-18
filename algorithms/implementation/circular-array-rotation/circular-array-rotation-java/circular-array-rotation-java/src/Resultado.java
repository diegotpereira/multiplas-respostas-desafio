import java.util.*;

public class Resultado {

    // # Você tem um array de números inteiros e um número fixo de rotações. 
    // # A tarefa é rotacionar o array à direita por um número especificado de vezes.

    // # Um array de números inteiros a.
    // # Um inteiro k, que representa o número de rotações à direita a serem executadas.
    // # Um array de consultas queries, onde cada elemento é um índice que deve ser consultado após as rotações.

    // // Define uma função que realiza rotações circulares à direita em um array 'a' e retorna os resultados para as consultas especificadas.
    // public static List<Integer> circularArrayRotation(List<Integer> a, int k, List<Integer> consultas) {

    //     // Inicializa uma lista para armazenar os resultados das consultas após as rotações.
    //     List<Integer> resultado = new ArrayList<>();

    //     // Calcula o número real de rotações necessário usando o operador módulo (%).
    //     int mudancas = k % a.size();

    //     // Itera sobre as consultas e adiciona os elementos do array após as rotações ao resultado.
    //     for (int i : consultas) {
            
    //         resultado.add(a.get((i - mudancas + a.size()) % a.size()));
    //     }

    //     // Retorna a lista de resultados das consultas após as rotações.
    //     return resultado;
    // }
    
    // Método que realiza a rotação circular de um array e retorna os elementos correspondentes às consultas
    public static List<Integer> circularArrayRotation(List<Integer> a, int k, List<Integer> consultas) {

        // Cria uma cópia do array original para evitar modificar a lista original
        List<Integer> arr = new ArrayList<>(a);

        // Realiza a rotação 'k' vezes
        for (int i = 1; i <= k; i++) {
            
            // Remove o último elemento da lista e o insere no início
            int numero = arr.remove(arr.size() - 1);

            arr.add(0, numero);
        }

        // Inicializa uma lista para armazenar os resultados
        List<Integer> resultado = new ArrayList<>();

        // Obtém os elementos correspondentes às consultas na lista rotacionada
        for (int q : consultas) {
            
            resultado.add(arr.get(q));
        }

        // Retorna a lista de resultados
        return resultado;
    }
}
