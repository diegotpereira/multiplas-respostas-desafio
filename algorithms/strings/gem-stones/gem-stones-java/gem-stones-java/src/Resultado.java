import java.util.*;

public class Resultado {

    // Define um método estático chamado gemstones que recebe uma lista 
    // de strings chamada arr e retorna um inteiro.
    public static int gemstones(List<String> arr) {
        
        // Cria um HashMap para armazenar a frequência de cada caractere nas strings.
        HashMap<Character, Integer> freq = new HashMap<>();

        // Inicializa uma variável para contar o número de gemas.
        int gemas = 0;

        // Itera sobre cada string (rocha) na lista arr.
        for (String rocha : arr) {
            
            // Itera sobre cada caractere na string rocha.
            for (int i = 0; i < rocha.length(); i++) {
                
                // Obtém o caractere na posição atual.
                char m = rocha.charAt(i);

                // Verifica se o índice atual é o primeiro índice onde o caractere m aparece na string rocha.
                if (i == rocha.indexOf(m)) {
                    
                    // Atualiza a frequência do caractere m no HashMap freq.
                    freq.put(m, freq.getOrDefault(m, 0) + 1);

                    // Verifica se a frequência do caractere m é igual ao número de strings na lista arr,
                    // indicando que ele está presente em todas as strings.
                    if (freq.get(m) == arr.size()) {
                        
                        // Se o caractere estiver presente em todas as strings, incrementa o contador de gemas.
                        gemas++;
                    }

                }
            }
        }

        // Retorna o número total de gemas comuns a todas as strings na lista arr.
        return gemas;
    }
    
}
