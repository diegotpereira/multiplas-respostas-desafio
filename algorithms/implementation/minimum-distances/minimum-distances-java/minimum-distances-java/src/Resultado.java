import java.util.*;


// # Dada uma lista de números inteiros, 
// # você precisa encontrar a menor distância 
// # entre dois números iguais. A distância 
// # entre dois índices, i e j, é definida 
// # como |i - j|. Se não houver dois 
// # elementos iguais na lista, o programa 
// # deve imprimir -1.

// # Em termos simples, a tarefa envolve 
// # encontrar a menor distância entre dois 
// # elementos iguais em uma lista de inteiros.

// # A entrada consiste em um único array de 
// # inteiros, e a saída deve ser um único 
// # número inteiro representando a menor 
// # distância entre dois elementos iguais. 
// # Se não houver dois elementos iguais, 
// # a saída deve ser -1.

public class Resultado {

    public static int minimumDistances(List<Integer> a) {

        // Inicializa a variável min_distance com infinito positivo
        int min_distancia = Integer.MAX_VALUE;

        // Cria um HashMap para armazenar os índices dos elementos vistos
        Map<Integer, Integer> indices = new HashMap<>();

        // Itera sobre os índices da lista 'a'
        for (int i = 0; i < a.size(); i++) {
            
            // Verifica se o elemento a[i] já foi visto antes
            if (indices.containsKey(a.get(i))) {
                
                // Calcula a distância entre os índices atual e anterior do elemento a[i]
                int distancia = i - indices.get(a.get(i));

                // Atualiza a menor distância, se a distância atual for menor
                min_distancia = Math.min(min_distancia, distancia);
                
            }

            // Atualiza o índice do elemento a[i] no HashMap
            indices.put(a.get(i), i);
        }

        // Retorna a menor distância encontrada ou -1 se não houverem elementos iguais
        return (min_distancia != Integer.MAX_VALUE) ? min_distancia : -1;
        
    }
    
}
