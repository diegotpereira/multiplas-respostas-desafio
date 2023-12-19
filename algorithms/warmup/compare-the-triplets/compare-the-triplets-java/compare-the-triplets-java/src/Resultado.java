import java.util.ArrayList;
import java.util.List;

public class Resultado {

    public static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {

        // Inicializa a lista de resultados e as variáveis que armazenarão os pontos de cada um
        List<Integer> resultado = new ArrayList<>();

        int ponto_a = 0;
        int ponto_b = 0;

        // Itera sobre os elementos de ambas as listas
        for (int i = 0; i < a.size(); i++) {
            
            // Compara os elementos de ambas as listas
            if (a.get(i) > b.get(i)) {
                
                // Se o elemento da lista A for maior, 
                // adiciona um ponto ao total de pontos do A
                ponto_a += 1;

            } else if (a.get(i) < b.get(i)) {
                
                // Se o elemento da lista B for maior, 
                // adiciona um ponto ao total de pontos do B
                ponto_b += 1;
            }
        }

        // Adiciona os pontos totais de A e B à lista de resultados
        resultado.add(ponto_a);
        resultado.add(ponto_b);

        // Retorna a lista de resultados
        return resultado;
    }
    
}
