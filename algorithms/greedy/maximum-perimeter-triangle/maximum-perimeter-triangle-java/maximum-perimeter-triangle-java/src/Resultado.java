import java.util.*;

public class Resultado {

    // # Dado um conjunto de segmentos de linha de comprimentos diferentes, 
    // # você deve encontrar e imprimir o perímetro máximo de um triângulo 
    // # não degenerado (ou seja, um triângulo com uma área maior que 0) 
    // # que pode ser formado usando três dos segmentos de linha. Se mais 
    // # de um tal triângulo existir, você deve escolher aquele com o maior perímetro.
    // # Define a função maximumPerimeterTriangle que recebe uma lista de sticks como argumento

    // Método que recebe uma lista de inteiros e retorna outra lista de inteiros
    public static List<Integer> maximumPerimeterTriangle(List<Integer> sticks) {
        
        // Ordena a lista de inteiros em ordem crescente
        Collections.sort(sticks);

        // Obtém o tamanho da lista sticks
        int n = sticks.size();

        // Itera sobre os elementos da lista sticks, começando do último até o terceiro elemento
        for (int i = n - 1; i >= 2; i--) {
            
            // Verifica se é possível formar um triângulo com os três elementos adjacentes
            if (sticks.get(i) < sticks.get(i - 1) + sticks.get(i - 2)) {
                
                // Cria uma nova lista de inteiros chamada resultado
                List<Integer> resultado = new ArrayList<>();

                // Adiciona os três elementos formadores do triângulo na lista resultado
                resultado.add(sticks.get(i - 2));
                resultado.add(sticks.get(i - 1));
                resultado.add(sticks.get(i));

                // Retorna a lista resultado
                return resultado;
            }
        }

        // Retorna uma lista contendo apenas o valor -1 caso nenhum triângulo seja possível
        return Collections.singletonList(-1);
    }
    
}
