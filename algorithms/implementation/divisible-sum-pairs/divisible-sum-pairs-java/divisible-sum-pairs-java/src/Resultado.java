import java.util.*;

// # Dado um array de inteiros e um número 
// # inteiro positivo k, sua tarefa é encontrar 
// # o número de pares (i, j) onde i < j, e a 
// # soma dos elementos nos índices i e j é divisível por k.

public class Resultado {

    // // Função que conta pares divisíveis em uma soma usando Streams

    // public static int divisibleSumPairs(int n, int k, List<Integer> ar) {

    //     // Utiliza IntStream para criar uma sequência de índices i
    //     return (int) IntStream.rangeClosed(0, ar.size() - 1)

    //         // Para cada índice i, cria uma sequência de índices j maiores que i
    //         .flatMap(i -> IntStream.rangeClosed(i + 1, ar.size() - 1)

    //         // Para cada par (i, j), mapeia para a soma dos elementos nos índices i e j
    //         .map(j -> ar.get(i) + ar.get(j)))

    //         // Filtra as somas que são divisíveis por k
    //         .filter(sum -> sum % k == 0)

    //         // Conta o número de pares que satisfazem a condição
    //         .count();
    // }

    // Função que conta pares divisíveis em uma soma

    public static int divisibleSumPairs(int n, int k, List<Integer> ar) {

        // Inicializa o contador para armazenar o número de pares que satisfazem a condição
        int contador = 0;

        // Cria um mapa para armazenar os restos da divisão por k
        Map<Integer, Integer> restos = new HashMap<>();

        // Loop sobre os valores do array 'ar'
        for (Integer valor : ar) {

            // Calcula o resto da divisão por k
            int restante = valor % k;

            // Calcula o complemento para atingir um múltiplo de k
            int completar_restos = (k - restante) % k;

            // Verifica se o complemento está presente no mapa e incrementa o contador
            if(restos.containsKey(completar_restos)) contador += restos.get(completar_restos);

            // Atualiza o mapa, incrementando a contagem para o resto atual
            restos.compute(restante, (key, v) -> (v == null) ? 1 : v + 1);
            
        }

        // Retorna o resultado final, que é o número total de pares que satisfazem a condição
        return contador;
    }
    
}
