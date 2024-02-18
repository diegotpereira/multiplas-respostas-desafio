public class Resultado {

    public static int findDigits(int n) {

        // Inicializa um contador para contar os dígitos divisíveis.
        int contador = 0;

        // Converte o número em uma string para facilitar a iteração pelos dígitos.
        String string = Integer.toString(n);

        // Loop que percorre cada dígito na string convertida.
        for (int i = 0; i < string.length(); i++) {
            
            // Converte o caractere do dígito de volta para um número inteiro.
            int digito = Character.getNumericValue(string.charAt(i));

            // Verifica se o número original 'n' é divisível pelo dígito atual.
            if (digito != 0 && n % digito == 0) {
                
                // Se for divisível e o dígito não for zero, incrementa o contador.
                contador += 1;
            }
        }

        // Retorna o número de dígitos divisíveis encontrados.
        return contador;
    }
    
}
