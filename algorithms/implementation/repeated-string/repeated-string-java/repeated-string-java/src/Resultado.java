public class Resultado {

    // public static long repeatedString(String s, long n) {

     //   // Inicializando uma variável frequencia para armazenar a frequência de ocorrências da letra 'a'.
    //     long freq = 0;

    //     // Iterando sobre cada caractere na string s.
    //     for (char c : s.toCharArray()) {
            
    //         // Verificando se o caractere atual é 'a'.
    //         if (c == 'a') {
                
    //             // Incrementando a contagem de ocorrências de 'a'.
    //             freq += 1;
    //         }
    //     }

    //     // Calculando quantas vezes a string s pode ser completamente repetida em uma substring de tamanho n.
    //     long div = n / s.length();

    //     // Atualizando a contagem de ocorrências multiplicando pela quantidade de repetições completas.
    //     freq = freq * div;

    //     // Calculando o tamanho restante da substring após as repetições completas.
    //     long restante = n % s.length();

    //     // Iterando sobre o restante da substring e contando as ocorrências de 'a'.
    //     for (int i = 0; i < restante; i++) {
            
    //         // Verificando se o caractere atual no restante da substring é 'a'.
    //         if (s.charAt(i) == 'a') {
                
    //             // Incrementando a contagem de ocorrências de 'a'.
    //             freq += 1;
    //         }
    //     }

    //     // Retornando o total de ocorrências de 'a' na substring resultante.
    //     return freq;
    // }
    
    public static long repeatedString(String s, long n) {

        // Inicializando uma variável frequencia para armazenar a frequência de ocorrências da letra 'a'.
        long frequencia = 0;

        // Iterando sobre cada caractere na string s.
        for (int i = 0; i < s.length(); i++) {
            
            // Verificando se o caractere atual é 'a'.
            if (s.charAt(i) == 'a') {
                
                // Incrementando a contagem de ocorrências de 'a'.
                frequencia += 1;

            }
        }

        // Calculando quantas vezes a string s pode ser completamente repetida em uma substring de tamanho n.
        long div = n / s.length();

        // Calculando o tamanho restante da substring após as repetições completas.
        long restantes = n % s.length();

        // Atualizando a contagem de ocorrências multiplicando pela quantidade de repetições completas.
        frequencia = frequencia * div;

        // Iterando sobre o restante da substring e contando as ocorrências de 'a'.
        for (int i = 0; i < restantes; i++) {
            
            // Verificando se o caractere atual no restante da substring é 'a'.
            if (s.charAt(i) == 'a') {
                
                // Incrementando a contagem de ocorrências de 'a'.
                frequencia += 1;
            }
        }

        // Retornando o total de ocorrências de 'a' na substring resultante. 
        return frequencia;
    }
}
