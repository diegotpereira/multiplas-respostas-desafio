import java.util.*;

public class Resultado {

    // # Você tem uma quantidade de pedras, 
    // # e cada pedra tem um valor associado. 
    // # Há duas cores de pedras, representadas 
    // # por dois números inteiros diferentes. 
    // # As pedras são numeradas de 1 a N, e 
    // # você deve determinar todas as possíveis 
    // # somas de valores que podem ser obtidas 
    // # combinando as pedras de ambas as cores.

    // # Dada a diferença entre as cores e o 
    // # número total de pedras, você deve 
    // # imprimir todas as possíveis somas 
    // # em ordem crescente.

    // Declaração do método "stones" que recebe três parâmetros: n (número total de pedras),
    // a (valor da primeira cor de pedra), e b (valor da segunda cor de pedra).
    public static List<Integer> stones(int n, int a, int b) {

        // Lista para armazenar as possíveis somas de valores das pedras de ambas as cores.
        List<Integer> resultado = new ArrayList<>();

        // Calcula a diferença entre os valores da segunda cor (b) e da primeira cor (a).
        int diferenca = b - a;

        // Loop para iterar sobre todas as pedras.
        for (int i = 0; i < n; i++) {
            
            // Adiciona a soma de valores das pedras da cor atual à lista "resultado".
            resultado.add((n - 1) * a + (i) * diferenca);
        }

        // Converte a lista para um HashSet para remover duplicatas.
        HashSet<Integer> set = new HashSet<>(resultado);

        // Converte de volta para uma lista após a remoção de duplicatas.
        resultado = new ArrayList<>(set);

        // Ordena a lista de somas em ordem crescente.
        Collections.sort(resultado);

        // Retorna a lista de somas de valores das pedras de ambas as cores.
        return resultado;
        
    }
    
}
