import java.util.List;


// Dada uma palavra (string) e uma matriz que 
// representa as alturas das letras do alfabeto, 
// você deve determinar a área real que será 
// destacada ao selecionar essa palavra em um 
// visualizador de PDF. Cada letra tem uma altura 
// específica associada a ela na matriz, e a 
// altura total da palavra é dada pela altura 
// da letra mais alta na palavra multiplicada 
// pelo comprimento da palavra.

public class Resultado {

    // // Função que calcula a área real destacada ao selecionar uma palavra em um visualizador de PDF
    // public static int designerPdfViewer(List<Integer> h, String palavra) {

    //     // Inicializa a altura máxima com 0
    //     int alturaMaxima = 0;

    //     // Itera sobre cada caractere na palavra
    //     for (int i = 0; i < palavra.length(); i++) {

    //         // Obtém o caractere atual, converte para maiúsculo e ajusta para a posição na lista h
    //         char caractere = Character.toUpperCase(palavra.charAt(i));

    //         // Obtém a altura correspondente ao caractere atual na lista h
    //         int elemento = h.get(caractere - 'A');

    //         // Atualiza a altura máxima se a altura do caractere atual for maior
    //         alturaMaxima = elemento > alturaMaxima ? elemento : alturaMaxima;
    //     }

    //     // Retorna a área real, que é a altura máxima multiplicada pelo comprimento da palavra
    //     return alturaMaxima * palavra.length();
    // }
    

    // Função que calcula a área real destacada ao selecionar uma palavra em um visualizador de PDF

    public static int designerPdfViewer(List<Integer> h, String palavra) {

        // Inicializa a altura máxima com 0
        int alturaMaxima = 0;

        // Obtém o comprimento da palavra
        int len = palavra.length();

        // Itera sobre cada caractere na palavra
        for (int i = 0; i < palavra.length(); i++) {
            
            // Calcula o índice correspondente ao caractere atual na lista de alturas
            // (subtraindo 97 que é o código ASCII de 'a')
            int indice = palavra.charAt(i) - 97;

            // Verifica se a altura do caractere atual é maior que a altura máxima atual
            if (alturaMaxima < h.get(indice)) {
                
                // Atualiza a altura máxima
                alturaMaxima = h.get(indice);
            }
        }

        // Retorna a área real, 
        // que é a altura máxima multiplicada pelo comprimento da palavra
        return alturaMaxima * len;
    }
}
