import java.util.HashSet;

public class Resultado {

    public static String happyLadybugs(String b) {

        // # A tarefa do problema "Happy Ladybugs" é determinar se é possível 
        // # reorganizar os insetos ladybugs em um tabuleiro de modo que todos 
        // # os ladybugs estejam felizes. Um ladybug é considerado feliz se 
        // # houver pelo menos um outro ladybug da mesma cor adjacente a ele 
        // # no tabuleiro. Além disso, o tabuleiro pode conter células vazias 
        // # representadas pelo caractere '_', que podem ser ocupadas por 
        // # qualquer cor de ladybug.

        // # O problema fornece uma string representando o estado atual do 
        // # tabuleiro de ladybugs e espera-se que a função responda "YES" se 
        // # for possível reorganizar os ladybugs de forma que todos estejam 
        // # felizes e "NO" caso contrário.

        // Cria um conjunto para armazenar caracteres únicos de 'b'
        HashSet<Character> set = new HashSet<>();
        
        // Itera sobre cada caractere único na string 'b'
        for(char i : b.toCharArray()) {

            set.add(i);

        }

        // Itera sobre cada caractere único na string 'b'
        for (char i : set) {
            
            // Se não houver nenhum espaço vazio '_' na string 'b'
            if (b.indexOf('_') == - 1) {
                
                // Verifica se o caractere atual não é o último na string e se ele é diferente do próximo caractere
                // ou se há apenas uma ocorrência desse caractere na string 'b'
                if (b.lastIndexOf(i) != b.length() - 1 && i != b.charAt(b.lastIndexOf(i) + 1) || b.chars().filter(ch -> ch == i).count() == 1) {
                    
                    // Retorna 'NO' se a configuração das joaninhas não for válida
                    return "NO";
                }

            // Se houver pelo menos um espaço vazio '_' na string 'b'
            } else {

                // Retorna 'NO' se houver uma única joaninha que não está feliz
                if (b.chars().filter(ch -> ch == i).count() == 1 && i != '_') {
                    
                    return "NO";
                }
            }
        }

        // Retorna 'YES' se todas as joaninhas estiverem felizes
        return "YES";
    }
    
}
