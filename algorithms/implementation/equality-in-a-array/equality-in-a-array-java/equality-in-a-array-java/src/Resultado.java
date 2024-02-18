import java.util.*;

public class Resultado {

    // // Método que recebe uma lista de inteiros como parâmetro

    // public static int equalizeArray(List<Integer> arr) {

    //     // Encontra a ocorrência máxima de um elemento único na lista
    //     int maximaOcorrencia = Collections.frequency(arr, Collections.max(arr));

    //     // Retorna o número de elementos na lista menos o número máximo de ocorrências de um elemento único
    //     // Isso representa o número mínimo de remoções necessárias para igualar todos os elementos na lista
    //     return arr.size() - maximaOcorrencia;
    // }
    

    // Método que recebe uma lista de inteiros como parâmetro

    public static int equalizeArray(List<Integer> arr) {

        // Inicializa a variável para armazenar o valor máximo de ocorrências de um elemento único
        int valorMaximo = 1;

        // Cria um mapa para armazenar a contagem de ocorrências de cada elemento único na lista
        Map<Integer, Integer> nMapa = new HashMap<>();
        
        // Itera sobre os elementos da lista
        for(int n : arr) {
            
            // Verifica se o elemento já está no mapa
            if (nMapa.containsKey(n)) {
                
                // Se sim, incrementa a contagem de ocorrências
                int valor = nMapa.get(n) + 1;

                nMapa.put(n, valor);

                // Atualiza o valor máximo, se necessário
                valorMaximo = Math.max(valor, valorMaximo);

            } else {

                // Se não, adiciona o elemento ao mapa com contagem 1
                nMapa.put(n, 1);
            }
        }

        // Retorna o número de elementos na lista menos o valor máximo de ocorrências de um elemento único
        // Isso representa o número mínimo de remoções necessárias para igualar todos os elementos na lista
        return arr.size() - valorMaximo;

    }
}
