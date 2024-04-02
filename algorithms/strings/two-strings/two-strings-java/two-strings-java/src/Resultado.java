import java.util.*;

public class Resultado {

    // O problema "Two Strings" do HackerRank é formulado da seguinte maneira:

    // Dadas duas strings, determine se elas compartilham uma substring comum. 
    // Uma substring é uma sequência contígua de caracteres dentro de uma string. 
    // Por exemplo, as substrings de "abc" são "a", "ab", "abc", "b", "bc" e "c".

    // Para resolver este problema, você precisa implementar a função function 
    // twoStrings(s1, s2), onde s1 e s2 são as duas strings fornecidas. A função 
    // deve retornar "YES" se as strings compartilharem uma substring comum, e "NO" caso contrário.

    // Por exemplo, se s1 = "hello" e s2 = "world", as substrings comuns são "o" e "l", 
    // então a função deve retornar "YES". Se s1 = "hi" e s2 = "world", não há substrings 
    // comuns, então a função deve retornar "NO".

    // Método que verifica se há caracteres compartilhados entre duas strings
    public static String twoStrings(String s1, String s2) {
        
        // Cria um conjunto para armazenar os caracteres únicos de s1
        HashSet<Character> set_s1 = new HashSet<>();

        // Cria um conjunto para armazenar os caracteres únicos de s2
        HashSet<Character> set_s2 = new HashSet<>();

        // Inicializa um contador para contar o número de caracteres compartilhados
        int contador = 0;

        // Itera sobre cada caractere em s1 e adiciona ao conjunto set_s1
        for (char character : s1.toCharArray()) {

            set_s1.add(character);
            
        }

        // Itera sobre cada caractere em s2 e adiciona ao conjunto set_s2
        for (char character2 : s2.toCharArray()) {
                
            set_s2.add(character2);
        }

        // Itera sobre cada caractere único em set_s1
        for(char index : set_s1) {

            // Verifica se o caractere em set_s1 está presente em set_s2
            if (set_s2.contains(index)) {
                
                // Incrementa o contador se o caractere estiver presente em ambas as strings
                contador++;
            }
        }

        // Verifica se há pelo menos um caractere compartilhado entre as duas strings
        if (contador > 0) {
            
            // Retorna "YES" se houver caracteres compartilhados
            return "YES";

        } else {

            // Retorna "NO" se não houver caracteres compartilhados
            return "NO";
        }
    }
    
}
