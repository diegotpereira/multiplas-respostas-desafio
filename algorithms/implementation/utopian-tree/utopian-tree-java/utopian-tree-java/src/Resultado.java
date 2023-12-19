public class Resultado {

// O problema "Utopian Tree" no HackerRank 
// solicita que você modele o crescimento 
// de uma árvore ao longo de várias estações. 
// A árvore passa por dois ciclos de crescimento a cada ano:

// Ciclo de Primavera (Estação Ímpar): A 
// árvore dobra sua altura durante esta estação.

// Ciclo de Verão (Estação Par): A árvore 
// cresce uma unidade durante esta estação.

// O objetivo é determinar a altura da árvore 
// após um número específico de estações. O 
// problema fornece vários casos de teste, cada 
// um com um número diferente de estações. Sua 
// tarefa é calcular a altura final da árvore 
// após cada conjunto de estações.

    // public static int utopianTree(int n) {

    //     // Inicializa a altura da árvore como 1
    //     int altura = 1;

    //     // Loop que simula o crescimento da árvore durante as estações
    //     for (int i = 0; i <= n; i++) {

    //         // Se for a primeira estação (i = 0), 
    //         // continue para a próxima iteração
    //         if(i == 0) {

    //             continue;
            
    //         // Se a estação for par, 
    //         } else if (i % 2 == 0) {
                
    //             // incrementa a altura em 1
    //             altura += 1;

    //         // Se a estação for ímpar,
    //         } else {
 
    //             // dobra a altura
    //             altura *= 2;
    //         }
            
    //     }


    //     return altura;
    // }
    

    // Define um método chamado utopianTree que recebe um parâmetro inteiro n

    public static int utopianTree(int n) {

        // Calcula o expoente para a base 2 com base na paridade de n
        // Se n for par, o expoente é n / 2, senão é (n + 1) / 2
        int expoente = (n % 2 == 0 ? (n / 2) : (n + 1) / 2);

        // Calcula 2 elevado à potência determinada pelo expoente
        double baseResultado = Math.pow(2, expoente);

        // Multiplica o resultado da potência por 2
        double multiploResultado = 2 * baseResultado;

        // Determina um ajuste adicional com base na paridade de n
        // Se n for par, subtrai 1, senão subtrai 2
        int finalResultado = (int) (multiploResultado - (n % 2 == 0 ? 1 : 2));

        // Retorna o resultado final convertido para inteiro
        return finalResultado;
        // return (int) (2 * (Math.pow(2, (n % 2 == 0 ? (n / 2) : (n + 1) / 2))) - (n % 2 == 0 ? 1 : 2));

    }
}
