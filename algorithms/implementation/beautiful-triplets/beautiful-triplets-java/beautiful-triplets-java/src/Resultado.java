import java.util.*;

public class Resultado {

    // # A tarefa do problema "Beautiful Triplets" no HackerRank 
    // # é determinar o número de triplets de números em uma 
    // # sequência que atendem a uma determinada condição.

    // # Especificamente, a condição é que os números devem estar 
    // # em uma sequência crescente e a diferença entre os números 
    // # consecutivos deve ser igual a uma constante dada, chamada 
    // # de "d". O objetivo é encontrar quantos triplets existem 
    // # na sequência que satisfazem essa condição.

    // # Define uma função chamada beautifulTriplets que recebe dois 
    // # parâmetros: d (a diferença entre os elementos da triplet) e arr (a lista de números)

    // public static int beautifulTriplets(int d, List<Integer> arr) {
        
    //     // Inicializa o contador de triplets bonitos como zero
    //     int contador = 0;

    //     // Cria um conjunto HashSet para armazenar os números visitados
    //     HashSet<Integer> set = new HashSet<>();

    //     // Itera sobre cada número na lista fornecida
    //     for (int i = 0; i < arr.size(); i++) {
    //     // for (int num : arr) {}
            
    //         int num = arr.get(i);

    //         // Verifica se existem dois números anteriores na sequência que formam uma triplet bonita
    //         if (set.contains(num - d) && set.contains(num - 2 * d)) {
                
    //             // Se sim, incrementa o contador de triplets bonitos
    //             contador += 1;
    //         }

    //         // // Adiciona o número atual ao conjunto
    //         set.add(num);
    //     }

    //     // Retorna o número total de triplets bonitos encontrados
    //     return contador;
    // }

    public static int beautifulTriplets(int d, List<Integer> arr) {

        // Inicializa o contador de triplets bonitos como zero
        int contador = 0;

        // Cria um conjunto HashSet para armazenar os números visitados
        HashSet<Integer> set = new HashSet<>(arr);

        // Itera sobre cada número na lista fornecida
        for (int num : arr) {

            // Verifica se existem dois números anteriores na sequência que formam uma triplet bonita
            if (set.contains(num + d) && set.contains(num + 2 * d)) {

                // Se sim, incrementa o contador de triplets bonitos
                contador++;
            }
        
        }
        
        // Retorna o número total de triplets bonitos encontrados
        return contador;
    }
    
}
