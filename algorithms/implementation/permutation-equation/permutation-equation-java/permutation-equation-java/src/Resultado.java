import java.util.*;

public class Resultado {

    // O problema nos fornece um array P que representa as permutações do 
    // array original. A função 'permutationEquation' deve retornar um array 
    // que contém a posição final de cada elemento no array original

    // Função que calcula a sequência de permutação para uma lista dada
    public static List<Integer> permutationEquation(List<Integer> p) {

        // Inicializa uma lista para armazenar os resultados
        List<Integer> resultado = new ArrayList<>();

        // Loop que itera sobre os valores de 1 até o tamanho da lista p (inclusive)
        for (int i = 1; i <= p.size(); i++) {
            
            // Calcula a sequência de permutação e adiciona o resultado à lista
            resultado.add(p.indexOf(p.indexOf(i) + 1) + 1);
        }

        // Retorna a lista de resultados
        return resultado;
    }
    
}
