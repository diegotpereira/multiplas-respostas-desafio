// # A tarefa do problema "Flatland Space Stations" 
// # no HackerRank é encontrar a distância máxima 
// # entre uma cidade e a estação espacial mais próxima 
// # em uma linha unidimensional de cidades. O problema 
// # assume que existem cidades em uma linha e algumas 
// # dessas cidades têm uma estação espacial. O objetivo 
// # é encontrar a distância máxima que um residente de 
// # qualquer cidade tem que percorrer para chegar à 
// # estação espacial mais próxima.

// # A entrada para o problema consiste no número total 
// # de cidades (n), uma lista das cidades que têm uma 
// # estação espacial e, com base nisso, você precisa 
// # calcular a distância máxima que um residente de 
// # qualquer cidade deve percorrer para chegar à 
// # estação espacial mais próxima.

import java.util.*;

public class Resultado {

    public static int flatlandSpaceStations(int n, int[] c) {

        // Se todas as cidades têm uma estação espacial, a distância máxima é 0.
        if (c.length == n) {
            
            return 0;
        }

        // Ordena as cidades com estações espaciais para facilitar o cálculo.
        Arrays.sort(c);

        // Calcula a distância máxima para a primeira e última cidade.
        int maximo = Math.max(c[0], n - 1 - c[c.length - 1]);

        // Se houver apenas uma estação espacial, retorna a distância máxima calculada.
        if (c.length == 1) {
            
            return maximo;
        }
        
        // Variável para armazenar a posição da última cidade com estação espacial.
        int ultima = 0;

        // Itera sobre as cidades com estação espacial.
        for(int i : c) {

            // Calcula a distância máxima entre esta estação e a anterior ou próxima.
            maximo = Math.max(maximo, (i - ultima) / 2);

            // Atualiza a posição da última cidade com estação espacial.
            ultima = i;

        }

        // Retorna a distância máxima encontrada.
        return maximo;

    }
    
}
