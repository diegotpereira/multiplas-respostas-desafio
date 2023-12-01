import java.util.*;
import java.util.stream.Collectors;

public class Resultado {

    // O problema "Sock Merchant" no HackerRank é um 
    // desafio de programação que pede aos participantes 
    // para determinar quantos pares de meias idênticas 
    // podem ser formados a partir de um conjunto de meias. 
    // Aqui está uma descrição geral do problema:

    // Tarefa:
    // Dada uma lista de números inteiros representando 
    // as cores das meias, a tarefa é contar quantos pares 
    // de meias idênticas podem ser formados. Cada número 
    // inteiro representa uma cor diferente de meia.

    // Formato de Entrada:

    // A primeira linha contém um número inteiro, 
    // n, que representa o número de meias na pilha.
    // A segunda linha contém 
    // n inteiros, representando as cores das meias na pilha.

    // // Função que conta o número de pares de meias idênticas
    // public static int sockMerchant(int n, List<Integer> ar) {

    //     // Inicializa um HashMap para armazenar a contagem de cada tipo de meia
    //     HashMap<Integer, Integer> contador = new HashMap<>();

    //     // Inicializa a variável para contar o número total de pares
    //     int totalPares = 0;

    //     // Itera sobre cada elemento na lista de meias
    //     for (Integer elemento : ar) {
            
    //         // Verifica se o elemento já está no HashMap
    //         if (contador.containsKey(elemento)) {
                
    //             // Se sim, incrementa a contagem
    //             contador.put(elemento, contador.get(elemento) + 1);

    //         } else {

    //             // Se não, adiciona o elemento ao HashMap com contagem 1
    //             contador.put(elemento, 1);
    //         }
    //     }

    //     // Itera sobre as contagens de meias no HashMap
    //     for (Integer elemento : contador.values()) {
            
    //         // Adiciona a quantidade inteira da divisão por 2 ao contador de pares
    //         totalPares += elemento / 2;
    //     }

    //     // Retorna o número total de pares de meias idênticas
    //     return totalPares;
    // }


    // // Função que conta o número de pares de meias idênticas

    // public static int sockMerchant(int n, List<Integer> ar) {

    //     // Utiliza Stream API para contar as ocorrências de cada elemento e calcular o número total de pares
    //     // Converte a lista de meias em um stream, agrupa os elementos por valor e conta suas ocorrências
    //     Map<Integer, Long> agrupadoPorContagem = ar.stream()
    //     .collect(Collectors.groupingBy(e -> e, Collectors.counting()));

    //     // Converte os valores do mapa (contagens) em um stream
    //     // Mapeia cada contagem para a metade inteira dela (quantidade de pares)
    //     // Soma todas as metades das contagens para obter o número total de pares
    //     long totalPares = agrupadoPorContagem.values().stream().mapToLong(contador -> (contador / 2)).sum();
        
    //     // Converte o resultado para inteiro e retorna
    //     return (int) totalPares;

    // }

    // Função que conta o número de pares de meias idênticas
    public static int sockMerchant(int n, List<Integer> ar) {

        // Inicializa a variável para contar o número total de pares
        int contador = 0;

        // Ordena a lista de meias em ordem crescente
        Collections.sort(ar);

        // Inicializa o índice para percorrer a lista
        int indice = 0;

        // Usa um loop while para percorrer a lista e contar os pares de meias idênticas
        while (indice < ar.size() - 1) {
            
            // Verifica se a meia atual é idêntica à próxima meia
            if (ar.get(indice) == ar.get(indice + 1)) {
                
                // Se sim, incrementa o contador de pares
                contador += 1;

                // Avança o índice em duas posições para pular a próxima meia
                indice += 2;

            } else {

                // Se não, avança o índice em uma posição
                indice += 1;
            }
        }

        // Retorna o número total de pares de meias idênticas
        return contador;
    }
    
}
