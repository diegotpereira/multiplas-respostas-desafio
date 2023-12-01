// # // O problema "Counting Valleys" no HackerRank 
// # // envolve a contagem do número de vales que um 
// # // viajante percorre durante uma caminhada. A 
// # // ideia é que cada passo do viajante seja 
// # // representado por uma "U" (subida) ou "D" 
// # // (descida), e o objetivo é contar o número 
// # // total de vales que o viajante atravessa.

// # // O problema especificamente pede para 
// # // implementar uma função chamada countingValleys 
// # // que aceita dois parâmetros:

// # // n: o número de passos na caminhada.
// # // s: uma string que representa a sequência 
// # // de passos (cada caractere é "U" ou "D").
// # // A função deve retornar um número inteiro 
// # // representando o número de vales percorridos pelo viajante.

// # // Um vale é definido como uma sequência 
// # // de passos que começa com uma descida ("D") 
// # // e termina com uma subida ("U"), cruzando 
// # // o nível do mar. O viajante inicia e termina 
// # // a caminhada ao nível do mar.

// # // Por exemplo, se a sequência de passos for 
// # // "UDDDUDUU", o viajante percorre um vale 
// # // porque a sequência é "DDD" e termina com 
// # // uma subida "U". Portanto, o resultado seria 1 vale.

public class Resultado {

    // public static int countingValleys(int passos, String caminho) {

    //     // Inicializa contadores para vales e o contador total de passos
    //     int contarVale = 0;
    //     int contador = passos;

    //     // Itera sobre os caracteres no caminho
    //     for (int i = 0; i < caminho.length(); i++) {
            
    //         // Verifica se o caractere representa uma descida ('D')
    //         if ((caminho.charAt(i) == 'D')) {
                
    //             // Decrementa o contador total de passos
    //             contador--;

    //             // Verifica se o número total de passos diminuiu para o próximo nível (após uma descida)
    //             if ((passos - contador) == 1) {
                    
    //                 // Se sim, significa que o viajante atravessou um vale, incrementa o contador de vales
    //                 contarVale++;
    //             }
                 
    //         } else {

    //             // Se o caractere não for uma descida ('D'), incrementa o contador total de passos
    //             contador++;
    //         }
    //     }

    //     // Retorna o número total de vales atravessados
    //     return contarVale;
    // }
    
    public static int countingValleys(int passos, String caminho) {

        // Inicializa um contador para controlar o número de subidas e descidas
        int contador = 0;

        // Inicializa um contador para armazenar o resultado (número total de vales)
        int resultado = 0;

        // Itera sobre cada caractere no caminho
        for (char elemento : caminho.toCharArray()) {
            
            // Verifica se o caractere representa uma subida ('U')
            if (elemento == 'U') {

                // Incrementa o contador de subidas
                contador += 1;

                // Verifica se o contador atingiu o nível do mar (0)
                if (contador == 0) {
                    
                    // Se sim, significa que o viajante atravessou um vale, incrementa o resultado
                    resultado += 1;
                }
                
            }

            // Verifica se o caractere representa uma descida ('D')
            if (elemento == 'D') {
                
                // Decrementa o contador de subidas (já que é uma descida)
                contador -= 1;
            }

        }

        // Retorna o número total de vales atravessados
        return resultado;
    }
}
