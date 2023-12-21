import java.util.*;
import java.util.stream.Collectors;

public class Resultado {

    // # O problema "Cut the Sticks" em 
    // # HackerRank solicita que você resolva o seguinte desafio:

    // # Dado um conjunto de bastões de 
    // # diferentes comprimentos, a tarefa 
    // # é cortar os bastões. O corte é feito 
    // # da seguinte forma: encontre o comprimento 
    // # mínimo atual dos bastões, corte esse 
    // # comprimento de todos os bastões e remova 
    // # os bastões de comprimento zero. Repita 
    // # esse processo até que todos os bastões sejam removidos.

    // # A entrada do problema consiste em um array 
    // # representando os comprimentos iniciais dos 
    // # bastões. A saída deve ser uma série de inteiros 
    // # que representam o número de bastões após cada corte.

    // Função para resolver o problema "Cut the Sticks"
    

    // Função que resolve o problema "Cut the Sticks"

    public static List<Integer> cutTheSticks(List<Integer> arr) {
        
        // Lista para armazenar o número de bastões após cada corte
        List<Integer> bastaoRestantes = new ArrayList<>();

        // Enquanto houver bastões na lista, continua o processo
        while (!arr.isEmpty()) {

            // Encontra o menor comprimento entre os bastões na lista
            int menorTamanho = Collections.min(arr);
            
            // Adiciona o número atual de bastões ao lista de resultados
            bastaoRestantes.add(arr.size());

            // Subtrai o menor comprimento de todos os bastões, remove os de comprimento zero
            arr = arr.stream().map(e -> e - menorTamanho).filter(e -> e > 0).collect(Collectors.toList());
        }

        // Retorna a lista final contendo o número de bastões após cada corte
        return bastaoRestantes;
    }
}
