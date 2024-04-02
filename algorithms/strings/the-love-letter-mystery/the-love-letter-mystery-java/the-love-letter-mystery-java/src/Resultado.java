// # A tarefa do problema "The Love-Letter Mystery" 
// # no HackerRank é a seguinte:

// # Dada uma string contendo apenas letras minúsculas 
// # do alfabeto, você precisa fazer com que todas as 
// # letras sejam iguais, alterando cada letra no mínimo 
// # uma vez. Você pode reduzir o valor de uma letra em 1, 
// # ou seja, 'a' se torna 'b', 'b' se torna 'a', 'c' se 
// # torna 'b' e assim por diante. O objetivo é encontrar 
// # o número mínimo de operações necessárias para fazer 
// # com que a string se torne uma string de palíndromo. 
// # Um palíndromo é uma palavra ou frase que se lê da 
// # mesma forma de trás para frente.

// Declaração da classe Resultado.
public class Resultado {

    // Método estático que calcula o número mínimo de 
    // operações necessárias para transformar a string em um palíndromo.
    public static int theLoveLetterMystery(String s) {
        
        // Inicializa o contador de operações como zero.
        int contador = 0;

        // Calcula o tamanho da metade da string.
        int tamanho = s.length() / 2;

        // Loop sobre a metade inferior do comprimento da string.
        for (int i = 0; i < tamanho; i++) {
            
            // Obtém o valor ASCII do caractere na posição i.
            int caracter1 = s.charAt(i);

            // Obtém o valor ASCII do caractere simétrico na posição correspondente da metade superior da string.
            int caracter2 = s.charAt(s.length() - i - 1);

            // Calcula a diferença absoluta entre os valores ASCII dos caracteres e atualiza o contador.
            contador += Math.abs(caracter1 - caracter2);
        }

        // Retorna o número total de operações realizadas.
        return contador;
    }
    
}
