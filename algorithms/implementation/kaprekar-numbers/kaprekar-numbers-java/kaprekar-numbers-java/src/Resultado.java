import java.util.*;

public class Resultado {

    public static String kaprekarNumbers(int p, int q) {
        
        // Cria uma lista para armazenar os resultados
        List<Integer> resultado = new ArrayList<>();

        // Itera sobre o intervalo dado
        for (int index = p; index <= q; index++) {
            
            // Converte o quadrado do índice para string
            String elemento = String.valueOf((long) index * index);

            // Calcula o tamanho da primeira parte da string
            int tamanho = elemento.length() - String.valueOf(index).length();

            // Separa a string em duas partes
            String num1 = tamanho > 0 ? elemento.substring(0, tamanho) : "0";
            String num2 = elemento.substring(tamanho);

            // Verifica se a soma das partes é igual ao índice
            if (Integer.parseInt(num1) + Integer.parseInt(num2) == index) {
                
                // Adiciona o índice à lista de resultados
                resultado.add(index);
            }
        }

        // Se a lista de resultados estiver vazia, retorna "INVALID RANGE"
        if (resultado.isEmpty()) {
            
            return "INVALID RANGE";

        } else {

            // Caso contrário, constrói a string com os resultados
            StringBuilder sb = new StringBuilder();

            for (int num: resultado) {

                sb.append(num).append(" ");
            }

            // Retorna a string de resultados
            return sb.toString().trim();
        }
    }
    
}
