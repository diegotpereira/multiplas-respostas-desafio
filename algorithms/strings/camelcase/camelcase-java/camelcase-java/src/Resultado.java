

// Declaração da classe Resultado
public class Resultado {

    // Método estático camelcase que retorna o número de palavras em uma string no estilo CamelCase
    public static int camelcase(String s) {
        
        // Inicialização de uma variável palavras para contar o número de palavras, começando com 1
        int palavras = 1;

        // Loop for que itera sobre os índices da string s
        for (int i = 0; i < s.length(); i++) {
            
            // Verifica se o caractere atual é maiúsculo usando o método Character.isUpperCase()
            if (Character.isUpperCase(s.charAt(i))) {
                
                // Incrementa o número de palavras se o caractere atual for maiúsculo
                palavras += 1;
            }
        }

        // Retorna o número total de palavras encontradas na string
        return palavras;
    }
    
}
