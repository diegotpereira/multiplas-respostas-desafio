import java.util.*;

public class Resultado {
    
    // # A tarefa do problema "Insertion Sort - Part 1" no HackerRank
    // # é implementar a primeira etapa do algoritmo de ordenação por 
    // # inserção (insertion sort). Nessa etapa, você deve realizar uma 
    // # única iteração do algoritmo para "inserir" um elemento em sua 
    // # posição correta dentro de uma lista ordenada.

    // # A entrada do problema consiste em duas partes:

    // # Um número inteiro, que representa o tamanho da lista de elementos.
    // # Uma lista de números inteiros separados por espaços, que representam os 
    // # elementos da lista.
    // # A saída esperada é a lista após uma iteração do algoritmo de ordenação 
    // # por inserção. Durante a iteração, você deve mover um elemento da lista 
    // # para sua posição correta de acordo com a ordem crescente. Você deve 
    // # imprimir a lista após essa única iteração.

    // # A ideia básica do algoritmo de ordenação por inserção é que ele começa
    // # com uma lista de um único elemento (o primeiro elemento da entrada) e, 
    // # em seguida, insere cada elemento subsequente na posição correta na parte 
    // # já ordenada da lista. A cada iteração, um novo elemento é inserido na 
    // # posição correta, expandindo a parte ordenada da lista.

    public static List<Integer> insertionSort1(int n, List<Integer> arr) {
        
        // Iterando por todos os elementos da lista
        for (int i = 0; i < n; i++) {

            // Armazenando o elemento atual em 'key'
            int key = arr.get(i);

            // Inicializando 'j' como o índice anterior ao elemento atual
            int j = i - 1;

            // Movendo os elementos maiores que 'key' uma posição à frente de sua posição atual
            while (j >= 0 && key < arr.get(j)) {
                
                // Movendo o elemento para a frente
                arr.set(j + 1, arr.get(j));

                // Decrementando 'j' para verificar os elementos anteriores
                j -= 1;
            }
            
            // Colocando 'key' na posição correta
            arr.set(j + 1, key);
        }

        // Retornando a lista ordenada
        return arr;
    }
}
