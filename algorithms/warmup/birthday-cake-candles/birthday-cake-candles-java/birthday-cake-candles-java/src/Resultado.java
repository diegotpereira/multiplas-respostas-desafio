import java.util.*;

public class Resultado {

    // public static int birthdayCakeCandles(List<Integer> velas) {

    //     // Usa a classe Collections para contar a frequência da altura máxima nas velas
    //     return Collections.frequency(velas, Collections.max(velas));
    // }

    public static int birthdayCakeCandles(List<Integer> velas) {

        // Obter o tamanho da lista de velas
        int n = velas.size();
        int contarVelas = 0;

        // Inicializar variáveis para contar velas e rastrear a altura máxima
        int maxima = Integer.MIN_VALUE;

        // Iterar sobre a lista de velas
        for (int i = 0; i < n; i++) {
            
            // Verificar se a altura da vela atual é maior do que a altura máxima encontrada até agora
            if (velas.get(i) > maxima) {
                
                // Se sim, atualizar a altura máxima e reiniciar a contagem de velas
                maxima = velas.get(i);

                contarVelas = 1;

            } else if (velas.get(i) == maxima) {
                
                // Se a altura da vela atual é igual à altura máxima, incrementar a contagem de velas
                contarVelas += 1;
            }
        }

        // Retornar o número total de velas com altura máxima
        return contarVelas;
    }
    
}
