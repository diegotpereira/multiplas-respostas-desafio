import java.util.*;
import java.util.stream.Collectors;

public class Resultado {

    // # No problema "Migratory Birds" no HackerRank, 
    // # a tarefa é encontrar o tipo de pássaro mais 
    // # comum entre um grupo de pássaros migratórios. 
    // # Cada pássaro é representado por um número inteiro 
    // # e o objetivo é determinar qual número aparece com mais frequência no grupo.

    // # Descrição do Problema:

    // # Dado um array que representa os tipos de pássaros 
    // # avistados, onde cada elemento do array é um número 
    // # inteiro representando um tipo de pássaro, sua tarefa 
    // # é encontrar e imprimir o tipo de pássaro que é mais 
    // # comum. Se houver empate, escolha o menor número.

    // public static int migratoryBirds(List<Integer> arr) {

    //     // Cria um mapa para armazenar a contagem de cada tipo de pássaro usando a API de stream e collectors
    //     Map<Integer, Integer> mapa = new HashMap<Integer, Integer>(arr.stream().collect(Collectors.groupingBy(e -> e, Collectors.summingInt(e -> 1))));
        
    //     // Encontra o valor máximo (contagem máxima) no mapa
    //     int maximo = Collections.max(mapa.values());
        
    //     // Retorna o primeiro tipo de pássaro com a contagem máxima, escolhendo o de menor valor em caso de empate
    //     return new ArrayList<Map.Entry<Integer, Integer>>(mapa.entrySet().stream().filter(e -> e.getValue() == maximo).collect(Collectors.toList())).get(0).getKey();
    // }

    // public static int migratoryBirds(List<Integer> arr) {

    //     // Cria um mapa para armazenar a contagem de cada tipo de pássaro usando a API de stream e collectors
    //     Map<Integer, Integer> mapa = new HashMap<Integer, Integer>(arr.stream().collect(Collectors.groupingBy(e -> e, Collectors.summingInt(e -> 1))));

    //     // Encontra o valor máximo (contagem máxima) no mapa
    //     int maximo = Collections.max(mapa.values());

    //     // Obtém as entradas do mapa como um stream, filtra pelos valores máximos
    //     List<Map.Entry<Integer, Integer>> entradasMaximas = mapa.entrySet()
    //                                                             .stream()
    //                                                             .filter(e -> e.getValue() == maximo)
    //                                                             .collect(Collectors.toList());


    //     // Obtém a primeira entrada (se houver) do filtro anterior
    //     Map.Entry<Integer, Integer> primeiraEntradaMaxima = entradasMaximas.get(0);

    //     // Obtém a chave (tipo de pássaro) da entrada máxima
    //     int tipoDePassaroMaximo = primeiraEntradaMaxima.getKey();

    //     // Retorna o tipo de pássaro mais comum
    //     return tipoDePassaroMaximo;
    // }
    
    // public static int migratoryBirds(List<Integer> arr) {

    //     // Cria um mapa para armazenar a contagem de cada tipo de pássaro
    //     Map<Integer, Integer> mapa = new HashMap<>();

    //     // Itera sobre a lista de pássaros e atualiza o mapa com a contagem de cada tipo
    //     arr.forEach(n -> mapa.put(n, mapa.getOrDefault(n, 0) + 1));

    //     // Encontra a contagem máxima entre todos os tipos de pássaros
    //     int maximaContagem = Collections.max(mapa.values());

    //     // Filtra as entradas do mapa para encontrar aquela com a contagem máxima e obtém a chave correspondente
    //     // Retorna o tipo de pássaro mais comum
    //     return mapa.entrySet().stream().filter(entrada -> entrada.getValue() == maximaContagem).iterator().next().getKey();
    // }

    // public static int migratoryBirds(List<Integer> arr) {

    //     // Cria um mapa para armazenar a contagem de cada tipo de pássaro
    //     Map<Integer, Integer> mapa = new HashMap<>();

    //     // Itera sobre a lista de pássaros e atualiza o mapa com a contagem de cada tipo
    //     arr.forEach(n -> mapa.put(n, mapa.getOrDefault(n, 0) + 1));

    //     // Encontra a contagem máxima entre todos os tipos de pássaros
    //     int contagemMaxima = Collections.max(mapa.values());

    //     // Filtra as entradas do mapa para encontrar aquela com a contagem máxima e obtém a chave correspondente
    //     int tipoDePassaroMaximo = mapa.entrySet()
    //                                   .stream()
    //                                   .filter(entrada -> entrada.getValue() == contagemMaxima)
    //                                   .iterator()
    //                                   .next()
    //                                   .getKey();


    //     // Retorna o tipo de pássaro mais comum
    //     return tipoDePassaroMaximo;
    // }

    // public static int migratoryBirds(List<Integer> arr) {

    //     // Cria um mapa para armazenar a contagem de cada tipo de pássaro
    //     Map<Integer, Integer> mapa = new HashMap<>();

    //     // Itera sobre a lista de pássaros e atualiza o mapa com a contagem de cada tipo usando merge
    //     arr.forEach(elemento -> mapa.merge(elemento, 1, Integer::sum));

    //     // Inicializa variáveis para encontrar o tipo de pássaro mais comum
    //     int maximo = 0;
    //     int tipoDePassaroMaximo = 0;

    //     // Itera reversamente sobre os tipos de pássaros possíveis (de 5 a 1)
    //     for (int index = 5; index >= 1; index--) {
            
    //         // Verifica se o tipo de pássaro está presente no mapa e se sua contagem 
    //         // é maior ou igual à contagem máxima encontrada até agora
    //         if (mapa.containsKey(index) && mapa.get(index) >= maximo) {
                
    //             // Atualiza as variáveis maximo e tipoDePassaroMaximo 
    //             // com os valores do tipo de pássaro atual
    //             maximo = mapa.get(index);
    //             tipoDePassaroMaximo = index;
    //         }
    //     }

    //     // Retorna o tipo de pássaro mais comum
    //     return tipoDePassaroMaximo;
    // }

    public static int migratoryBirds(List<Integer> arr) {

        // Inicializa contadores para cada tipo de pássaro
        int passaro1 = 0;
        int passaro2 = 0;
        int passaro3 = 0;
        int passaro4 = 0;
        int passaro5 = 0;

        // Itera sobre a lista de observações de pássaros
        for (Integer integer : arr) {
            
            // Incrementa o contador do tipo de pássaro correspondente
            if(integer == 1) passaro1++;

            else if(integer == 2) passaro2++;
            else if(integer == 3) passaro3++;
            else if(integer == 4) passaro4++;
            else passaro5++;
        }

        // Cria um TreeMap para armazenar a contagem de cada tipo de pássaro, 
        // ordenado pelas contagens em ordem decrescente
        TreeMap<Integer, Integer> mapa = new TreeMap<>();

        // Insere as contagens no TreeMap, usando a contagem como chave 
        // e o tipo de pássaro como valor
        mapa.put(passaro5, 5);
        mapa.put(passaro4, 4);
        mapa.put(passaro3, 3);
        mapa.put(passaro2, 2);
        mapa.put(passaro1, 1);

        // Obtém a última entrada do TreeMap (a entrada com a maior contagem)
        Map.Entry<Integer, Integer> ultimaEntrada = mapa.lastEntry();

        // Obtém o tipo de pássaro mais comum da última entrada
        int tipoDePassaroMaximo = ultimaEntrada.getValue();

        // Retorna o tipo de pássaro mais comum
        return tipoDePassaroMaximo;
    }
}
