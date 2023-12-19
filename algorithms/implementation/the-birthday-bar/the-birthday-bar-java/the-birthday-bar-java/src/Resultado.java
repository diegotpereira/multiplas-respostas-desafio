import java.util.List;

// # A tarefa do problema "Birthday Chocolate" no HackerRank é a seguinte:

// # Você recebe uma barra de chocolate com quadrados inteiros. Cada quadrado 
// # tem um número inteiro representando a quantidade de chocolate naquele quadrado, 
// # e uma sopa de chocolate é representada por uma sequência de números inteiros.

// # Você também recebe a data de aniversário da sua amiga e a quantidade 
// # total de chocolate que ela quer. A tarefa é determinar quantas maneiras 
// # diferentes existem de escolher um segmento contíguo da barra de chocolate 
// # de modo que a soma dos valores desses quadrados seja igual à quantidade desejada.

// # Por exemplo, se a barra de chocolate for [1, 2, 1, 3, 2] e a data de 
// # aniversário for d = 3, então existem duas maneiras de escolher um 
// # segmento cuja soma seja 3: [1, 2] e [3].

// # A entrada para o problema consiste na barra de chocolate, na data 
// # de aniversário d e na quantidade total de chocolate que sua amiga 
// # quer. A saída deve ser o número de maneiras diferentes de escolher 
// # um segmento contíguo que atenda aos critérios mencionados.


public class Resultado {

    // public static int birthday(List<Integer> chocolate, int dia, int mes) {

    //     // Inicializa o contador
    //     int contador = 0;

    //     // Verifica se o tamanho da lista é menor que mes
    //     if (chocolate.size() < mes) {
            
    //         // Se sim, não há segmentos válidos, retorna 0
    //         return 0;
    //     }

    //     // Loop para percorrer os índices iniciais dos segmentos
    //     for (int i = 0; i <= chocolate.size() - mes; i++) {
            
    //         // Inicializa a soma para o segmento atual
    //         int soma = 0;

    //         // Loop para calcular a soma do segmento
    //         for (int j = i; j < i + mes; j++) {
                
    //             soma += chocolate.get(j);
    //         }

    //         // Verifica se a soma do segmento é igual à data de aniversário
    //         if (soma == dia) {
                
    //             // Se sim, incrementa o contador
    //             contador += 1;
    //         }
    //     }

    //     // Retorna o resultado final
    //     return contador;
    // }

    public static int birthday(List<Integer> chocolate, int dia, int mes) {

        // Inicializa o contador de segmentos
        int contar_segmentos = 0;
        
        // Loop para percorrer os índices iniciais dos segmentos
        for (int i = 0; i <= chocolate.size() - mes; i++) {
            
            // Obtém o segmento atual usando subList
            List<Integer> segmentos = chocolate.subList(i, i + mes);

            // Calcula a soma dos elementos no segmento usando stream e reduce
            int soma = segmentos.stream().reduce(Integer::sum).get();

            // Verifica se a soma do segmento é igual ao dia de aniversário
            // Se sim, incrementa o contador de segmentos
            if(soma == dia) contar_segmentos += 1;
        }

        // Retorna o total de segmentos que atendem aos critérios
        return contar_segmentos;
    }
    
}
