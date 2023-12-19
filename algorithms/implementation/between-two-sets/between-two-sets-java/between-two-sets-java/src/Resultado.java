import java.util.List;
import java.util.stream.IntStream;

public class Resultado {

    // # No problema "Between Two Sets" 
    // # do HackerRank, você é solicitado 
    // # a encontrar e contar todos os números 
    // # inteiros que são divisíveis por todos 
    // # os números de um conjunto e que, por 
    // # sua vez, dividem uniformemente todos 
    // # os números de outro conjunto. Em outras 
    // # palavras, você precisa encontrar os 
    // # inteiros que são fatores comuns a 
    // # ambos os conjuntos.

    // public static int getTotalX(List<Integer> arr, List<Integer> brr) {

    //     int resultado = 0;

    //     // Encontra o máximo em arr e o mínimo em brr
    //     int maxArr = arr.get(0);
    //     int minBrr = brr.get(0);

    //     for (int i = 1; i < arr.size(); i++) {
    //         if (arr.get(i) > maxArr) {
    //             maxArr = arr.get(i);
    //         }
    //     }

    //     for (int i = 1; i < brr.size(); i++) {
    //         if (brr.get(i) < minBrr) {
    //             minBrr = brr.get(i);
    //         }
    //     }

    //     // Loop que percorre todos os números inteiros no intervalo entre o máximo de arr e o mínimo de brr.
    //     for (int index = maxArr; index <= minBrr; index++) {

    //         // Inicializa a variável como verdadeira.
    //         boolean ehFatorMultiplo = true;

    //         // Loop que verifica se index é múltiplo de todos os elementos de arr.
    //         for (Integer elemento : arr) {
                
    //             // Se não for múltiplo, define ehFatorMultiplo como falso e interrompe o loop.
    //             if (index % elemento != 0) {
                    
    //                 ehFatorMultiplo = false;
    //                 break;
    //             }
    //         }
            
    //         // Se index for múltiplo de todos os elementos de arr, continua a verificação com brr.
    //         if (ehFatorMultiplo) {
                
    //             // Loop que verifica se index é divisor de todos os elementos de brr.
    //             for (Integer elemento : brr) {
                    
    //                 // Se não for divisor, define ehFatorMultiplo como falso e interrompe o loop.
    //                 if (elemento % index != 0) {
                        
    //                     ehFatorMultiplo = false;
    //                     break;
    //                 }
    //             }
    //         }

    //         // Se index for múltiplo de todos os elementos de arr 
    //         // e divisor de todos os elementos de brr, incrementa o resultado.
    //         if (ehFatorMultiplo) {
                
    //             resultado++;
    //         }
    //     }

    //     // Retorna o resultado final.
    //     return resultado;
        
    // }

     /**
     * Retorna o número total de inteiros que são fatores de todos os elementos de 'arr' e
     * divisores de todos os elementos de 'brr' no intervalo entre o máximo de 'arr' e o mínimo de 'brr'.
     *
     * @param arr Lista de inteiros para verificar os fatores.
     * @param brr Lista de inteiros para verificar os divisores.
     * @return O número total de inteiros que atendem aos critérios.
     */
    
    public static int getTotalX(List<Integer> arr, List<Integer> brr) {

        // Usa IntStream para criar um intervalo de inteiros no intervalo entre o máximo de 'arr' e o mínimo de 'brr'.
        // Filtra os inteiros que são fatores de 'arr' e divisores de 'brr'.
        // Conta o número de inteiros resultantes e converte para int.
        return (int) IntStream.rangeClosed(arr.get(arr.size() - 1), brr.get(0)).filter(i -> arr.stream().allMatch(e -> i % e == 0) && brr.stream().allMatch(e -> e % i == 0)).count();
    }
}
