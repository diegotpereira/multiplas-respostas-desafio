import java.util.*;

// O problema "Picking Numbers" do HackerRank geralmente 
// pede para determinar o comprimento máximo de um subconjunto 
// de números em um array onde a diferença entre quaisquer dois números seja no máximo 1.

// Os jogadores devem escolher um elemento de cada par e 
// formar um subconjunto, onde a diferença entre os elementos 
// escolhidos não seja maior que 1. O objetivo é determinar 
// o comprimento máximo possível desse subconjunto.

public class Resultado {

    // // O método pickingNumbers recebe uma lista de inteiros (arr) e retorna o comprimento máximo do subconjunto.
    // public static int pickingNumbers(List<Integer> arr) {

    //     // Inicializa a variável comprimentoMaximo para armazenar o comprimento máximo do subconjunto.
    //     long comprimentoMaximo = 0L;

    //     // Itera sobre cada número na lista.
    //     for (Integer numero : arr) {
            
    //         // Atualiza o comprimentoMaximo usando a função Math.max,
    //         // que compara o comprimento atual com o comprimento do subconjunto formado pelos números
    //         // que são iguais ou têm uma diferença de 1 em relação ao número atual.
    //         comprimentoMaximo = Math.max(comprimentoMaximo, arr.stream().filter(n -> n == numero || n == numero + 1).count());

    //     }

    //     // Converte o comprimentoMaximo para int e retorna o resultado.
    //     return (int) comprimentoMaximo;
    // }
    

    // // O método pickingNumbers recebe uma lista de inteiros (arr) e retorna o comprimento máximo do subconjunto.

    // public static int pickingNumbers(List<Integer> arr) {

    //     // Cria um mapa (HashMap) para contar a ocorrência de cada número na lista.
    //     Map<Integer, Integer> mapa = new HashMap<>();

    //     // Inicializa variáveis para armazenar a resposta final, a contagem atual e a contagem do próximo número.
    //     int resposta = 0;
    //     int atual = 0;
    //     int proximo = 0;

    //     // Conta a ocorrência de cada número na lista e armazena no mapa.
    //     for (int numero : arr) {
            
    //         mapa.put(numero, mapa.getOrDefault(numero, 0) + 1);

    //     }

    //     // Itera sobre as chaves (números) no mapa.
    //     for (int chave : mapa.keySet()) {
            
    //         // Obtém a contagem atual para a chave.
    //         atual = mapa.get(chave);

    //         // Obtém a contagem do próximo número (chave + 1), ou 0 se não estiver presente.
    //         proximo = mapa.getOrDefault(chave + 1, 0);

    //         // Atualiza a resposta com o máximo entre a resposta atual e a soma da contagem atual e do próximo número.
    //         resposta = Math.max(resposta, atual + proximo);
    //     }

    //     // Retorna a resposta final.
    //     return resposta;
    // }

    // // A função pickingNumbers recebe uma lista de inteiros (arr) e retorna o comprimento máximo do subconjunto.

    // public static int pickingNumbers(List<Integer> arr) {

    //     // Inicializa um contador para armazenar o comprimento máximo do subconjunto.
    //     int contador = -1;

    //     // Itera sobre os elementos da lista.
    //     for (int i = 0; i < arr.size(); i++) {
            
    //         // Inicializa contadores para elementos iguais (contarIguais), elementos maiores (contarMaiores), e elementos menores (contarMenores).
    //         int contarIguais = 1;
    //         int contarMaiores = 0;
    //         int contarMenores = 0;

    //         // Itera sobre os elementos seguintes na lista.
    //         for (int j = i + 1; j < arr.size(); j++) {
                
                
    //             // Verifica se os elementos são iguais e incrementa contarIguais.
    //             if (arr.get(i) == arr.get(j)) {
                    
    //                 contarIguais += 1;

    //             // Verifica se a diferença entre os elementos é -1 e incrementa contarMaiores.
    //             } else if (arr.get(i) - arr.get(j) == -1) {
                    
    //                 contarMaiores += 1;

    //             // Verifica se a diferença entre os elementos é 1 e incrementa contarMenores.
    //             } else if (arr.get(i) - arr.get(j) == 1) {
                    
    //                 contarMenores += 1;
    //             }
    //         }

    //         // Calcula o total de elementos considerando iguais e o máximo entre maiores e menores.
    //         int contarT = contarIguais + Math.max(contarMaiores, contarMenores);

    //         // Atualiza o contador com o máximo entre o valor atual do contador e contarT
    //         contador = Math.max(contador, contarT);
    //     }

    //     // Retorna o comprimento máximo do subconjunto.
    //     return contador;
    // }

    // A função pickingNumbers recebe uma lista de inteiros (arr) e retorna o comprimento máximo do subconjunto.

    public static int pickingNumbers(List<Integer> arr) {

        // Inicializa uma variável para armazenar o comprimento máximo do subconjunto.
        int comprimentoMaximo = 0;

        // Itera sobre cada número na lista.
        for (int numero : arr) {
            
            // Inicializa um contador para contar elementos que são iguais ao número ou têm diferença de 1.
            int contador = 0;

            // Itera sobre cada elemento na lista para comparar com o número atual.
            for (int compare : arr) {
                
                // Verifica se o número é igual ou tem diferença de 1 com o elemento comparado.
                if (numero == compare || numero - compare == 1) {
                    
                    // Incrementa o contador se a condição for atendida.
                    contador += 1;
                }
            }

            // Atualiza o comprimento máximo se o contador atual for maior que o valor atual de 'maior'.
            if (contador > comprimentoMaximo) {
                
                comprimentoMaximo = contador;
            }
        }

        // Retorna o comprimento máximo do subconjunto.
        return comprimentoMaximo;
    }
}
