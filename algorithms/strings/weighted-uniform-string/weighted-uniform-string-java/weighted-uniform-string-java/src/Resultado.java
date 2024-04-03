import java.util.*;

public class Resultado {

    // # A tarefa do problema "Weighted Uniform Strings" é a seguinte:

    // # Dada uma string contendo apenas letras minúsculas de 'a' a 'z', 
    // # você deve determinar se uma série de consultas fornecidas pode 
    // # ser atendida pela string. Cada consulta consiste em um número 
    // # inteiro. Se o número for um dos pesos das subsequências uniformes 
    // # da string, a resposta para essa consulta é "Yes"; caso contrário, 
    // # é "No".

    // # Uma subsequência uniforme de uma string é definida como uma série 
    // # contígua de caracteres idênticos. O peso de uma subsequência 
    // # uniforme é o produto do comprimento da subsequência pelo valor 
    // # do caractere, onde 'a' tem peso 1, 'b' tem peso 2, ..., 'z' tem 
    // # peso 26.

    // # Por exemplo, para a string "abccddde" as subsequências uniformes 
    // # são "a", "b", "c", "cc", "d", "dd", "ddd", "e", então os pesos 
    // # são 1, 2, 3, 6, 4, 8, 12, 5, respectivament

    // Define uma função chamada weightedUniformStrings que recebe duas variáveis, s e consultas

    public static List<String> weightedUniformStrings(String s, List<Integer> consultas) {

        // Mapa para armazenar as possibilidades e seus respectivos valores
        Map<Integer, Character> possibilidade = new HashMap<>();

        // Inicializa uma variável prev vazia para armazenar o caractere anterior durante o loop
        char prev = ' ';

        // Inicializa uma variável pesos como 0 para rastrear o número de repetições consecutivas do mesmo caractere
        int pesos = 0;

        // Itera sobre cada caractere na string s
        for(char elemento : s.toCharArray()) {

            // Verifica se o caractere atual é igual ao caractere anterior
            if (elemento == prev) {
                
                // Se for igual, incrementa o número de repetições
                pesos += 1;

            } else {

                // Se não for igual, atualiza o caractere anterior
                prev = elemento;

                // reinicia o número de repetições
                pesos = 1;
            }

            // Calcula o valor da possibilidade para o caractere atual
            int valor = (elemento - 'a' + 1) * pesos;

            // Armazena o valor da possibilidade e o caractere correspondente no mapa
            possibilidade.put(valor, elemento);
        }
        
        // Lista para armazenar os resultados das consultas
        List<String> saida = new ArrayList<>();

        // Verifica se cada consulta está presente nas possibilidades e adiciona "Yes" ou "No" à lista de saída
        for(int consulta : consultas) 

           saida.add(possibilidade.containsKey(consulta) ? "Yes" : "No");

        // Retorna a lista de saída com os resultados das consultas
        return saida;
    }
    
}


