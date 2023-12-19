// # O problema "Mini-Max Sum" no HackerRank 
// # é um problema de programação que pede 
// # para você encontrar a soma mínima e máxima 
// # possível de quatro dos cinco elementos de uma lista.

// # A tarefa consiste nos seguintes passos:

// # Você recebe uma lista de cinco inteiros.
// # Deve-se calcular e imprimir a soma mínima 
// # e a soma máxima possível de quatro dos cinco elementos.
// # Ou seja, some quatro elementos da lista 
// # para encontrar a soma máxima e faça o mesmo 
// # para encontrar a soma mínima, excluindo um 
// # elemento diferente a cada vez.
// # Os números na lista podem ser grandes, então 
// # você precisa lidar com possíveis estouro de inteiro.

import java.util.*;


public class Resultado {

    // // Método que calcula e retorna uma string formatada contendo as somas mínima e máxima
    // public static String miniMaxSum(List<Integer> arr) {

    //     // Obtém o tamanho da lista
    //     int n = arr.size();

    //     // Ordena a lista em ordem crescente
    //     Collections.sort(arr);

    //     // Inicializa a variável para armazenar a soma total
    //     long total_soma = 0;

    //     // Calcula a soma dos quatro menores elementos da lista
    //     for (int i = 0; i < 5; i++) {
            

    //         total_soma += arr.get(i);
    //     }

    //     // Calcula e retorna a string formatada contendo as somas mínima e máxima
    //     return (((total_soma - arr.get(n - 1)) + " " + (total_soma - arr.get(0))));

    // }


    /**
    * Calcula e retorna uma string formatada contendo as somas mínima e máxima.
    *
    * @param arr Lista de inteiros para calcular as somas
    * @return String formatada com as somas mínima e máxima separadas por um espaço
    */

    // public static String miniMaxSum(List<Integer> arr) {

    //     // Ordena a lista em ordem crescente
    //     Collections.sort(arr);

    //     // Inicializa variáveis para armazenar as somas mínima e máxima
    //     long minSoma = 0;
    //     long maxSoma = 0;

    //     // Calcula a soma dos quatro menores elementos da lista
    //     for(int i = 0; i < 4; i++) minSoma += arr.get(i);

    //     // Calcula a soma dos quatro maiores elementos da lista
    //     for(int i = arr.size() - 1; i >= arr.size() - 4; i--) maxSoma += arr.get(i);

    //     // Retorna a string formatada contendo as somas mínima e máxima
    //     return (minSoma + " " + maxSoma);

    // }

    // public static String miniMaxSum(List<Integer> arr) {

    //     // Inicializa um array para armazenar as somas parciais
    //     long resultado[] = new long[arr.size()];

    //     // Inicializa a variável para armazenar a soma total
    //     long soma = 0;

    //     // Itera sobre a lista para calcular as somas parciais
    //     for (int i = 0; i < arr.size(); i++) {
            
    //         // Subtrai o elemento atual da soma total
    //         soma -= arr.get(i);

    //         // Itera novamente sobre a lista para adicionar todos os elementos à soma total
    //         for (int j = 0; j < arr.size(); j++) {
                
    //             soma += arr.get(j);
    //         }

    //         // Armazena a soma parcial no array de resultados
    //         resultado[i] = soma;

    //         // Reinicializa a soma para o próximo ciclo
    //         soma = 0;
    //     }

    //     // Ordena o array de resultados em ordem crescente
    //     Arrays.sort(resultado);

    //     // Retorna a string formatada contendo as somas mínima e máxima
    //     return(resultado[0] + " " + resultado[arr.size() - 1]);
    // }

    public static String miniMaxSum(List<Integer> arr) {

        Integer minima = Integer.MAX_VALUE;
        Integer maxima = Integer.MIN_VALUE;
        Long soma = 0L;

        for (int i = 0; i < arr.size(); i++) {
            
            Integer numero = arr.get(i);

            soma += numero;

            if(maxima < numero)

               maxima = numero;

            if(minima > numero)

               minima = numero;
        }

        return((soma - maxima) + " " + (soma - minima));
    }
    
}
