

public class Resultado {

    // Define o método funnyString que recebe uma string s como argumento
    public static String funnyString(String s) {
        
        // Loop sobre os índices da string de 0 até o comprimento da string - 1
        for (int i = 0; i < s.length() - 1; i++) {
            
            // Verifica se a diferença absoluta entre os valores ASCII dos caracteres adjacentes na string original
            // é diferente da diferença absoluta entre os valores ASCII dos caracteres adjacentes na string reversa
            if (Math.abs(s.charAt(i) - s.charAt(i + 1)) != Math.abs(s.charAt(s.length() - i - 1) - s.charAt(s.length() - i - 2))) {

                // Se as diferenças não forem iguais, retorna "Not Funny"
                return "Not Funny";
            }
        }

        // Se todas as diferenças forem iguais, retorna "Funny"
        return "Funny";
    }
    
}
