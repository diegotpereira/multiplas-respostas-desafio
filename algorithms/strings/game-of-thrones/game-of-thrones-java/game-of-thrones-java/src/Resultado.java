import java.util.HashMap;

public class Resultado {

    // # A tarefa do problema "Game of Thrones - I" 
    // # no HackerRank é determinar se é possível 
    // # reorganizar as letras de uma string para 
    // # formar um palíndromo. Um palíndromo é uma 
    // # palavra que permanece a mesma se lida de 
    // # trás para frente. Se a reorganização das 
    // # letras da string puder formar um palíndromo, 
    // # o programa deve imprimir "YES", caso contrário,
    // # deve imprimir "NO".

    // Método para determinar se é possível formar um palíndromo com a string dada
    public static String gameOfThrones(String s) {
        
        // Converte a string em um array de caracteres
        char[] caracterArray = s.toCharArray();

        // Cria um mapa para contar as ocorrências de cada caractere
        HashMap<Character, Integer> contarCaracter = new HashMap<>();

        // Itera sobre cada caractere na string
        for(char c : caracterArray) {

            // Verifica se o mapa já contém o caractere
            if (contarCaracter.containsKey(c)) {
                
                // Se sim, incrementa o contador de ocorrências desse caractere
                contarCaracter.put(c, contarCaracter.get(c) + 1);


            } else {

                // Se não, adiciona o caractere ao mapa com uma contagem de 1
                contarCaracter.put(c, 1);
            }
        }

        // Inicializa um contador para contagem de caracteres com ocorrências ímpares
        int contarImpar = 0;

        // Itera sobre as contagens de caracteres no mapa
        for(int contador : contarCaracter.values()) {

            // Verifica se a contagem é ímpar
            if (contador % 2 != 0) {
                
                // Se sim, incrementa o contador de ocorrências ímpares
                contarImpar += 1;
            }

            // Se houver mais de um caractere com ocorrências ímpares, 
            // não é possível formar um palíndromo
            if (contarImpar > 1) {
                
                // Retorna "NO" se mais de um caractere tiver ocorrências ímpares
                return "NO";
            }
        }

        // Se não houver mais de um caractere com ocorrências ímpares, 
        // é possível formar um palíndromo
        return "YES";
    }
    
}
