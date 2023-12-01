import java.util.Collections;
import java.util.List;

// Bob está participando de uma corrida de barreiras. 
// Ele pode pular uma determinada altura máxima, mas 
// a altura das barreiras varia. A tarefa é escrever 
// um programa para determinar quantos doses de uma 
// poção mágica Bob precisa tomar para poder pular 
// todas as barreiras na corrida.

// k = Um número inteiro representando a altura máxima que Bob pode pular inicialmente.
// altura(height) = Uma lista de alturas das barreiras.

public class Resultado {

    // Definindo uma função chamada hurdleRace que recebe um valor inteiro k
    // // e uma lista de inteiros chamada altura como parâmetros.
    // public static int hurdleRace(int k, List<Integer> altura) {

    //     // Encontrando o valor máximo na lista de alturas usando Collections.max.
    //     int maximo = Collections.max(altura);
        
    //     // Verificando se a altura máxima k é menor que o valor máximo da altura.
    //     if (k < maximo) {
            
    //         // Se k for menor que o valor máximo, calcula a diferença e retorna esse valor.
    //         int posicao = maximo - k;

    //         return posicao;

    //     } else {

    //         // Se k for maior ou igual ao valor máximo, retorna 0, pois não há necessidade de doses adicionais.
    //         return 0;
    //     }
    // }
    


    // // Define uma função chamada hurdleRace que recebe um valor inteiro k
    // // e uma lista de inteiros chamada altura como parâmetros.

    // public static int hurdleRace(int k, List<Integer> altura) {

    //     // Encontra o valor máximo na lista de alturas usando Collections.max.
    //     int maximo = Collections.max(altura);

    //     // Verifica se o valor máximo na lista é igual a 1 ou menor ou igual a k.
    //     if (maximo == 1 || maximo <= k) {
            
    //         // Retorna 0 se a condição for verdadeira.
    //         return 0;
    //     }

    //     // Retorna a diferença entre o valor máximo na lista e k.
    //     return Collections.max(altura) - k;

    // }

    // Metodo hurdleRace que recebe dois parâmetros: k e altura.
    public static int hurdleRace(int k, List<Integer> altura) {

        // Encontra o valor máximo na lista de alturas
        int maximo = Collections.max(altura);

        // Verifica se o valor máximo na lista é maior que k.
        // Se for, retorna a diferença entre o valor máximo e k, caso contrário, retorna 0.
        return maximo > k ? maximo - k : 0;
    }
}
