import java.util.*;

public class Resultado {

    public static List<Integer> acmTeam(List<String> topico) {

        // Obtendo o número de tópicos na lista
        int n = topico.size();

        // Lista para armazenar os resultados (quantidade máxima de '1's e número de equipes com essa quantidade)
        List<Integer> resultados = new ArrayList<>();

        // Variáveis para armazenar a quantidade máxima de '1's e o número de equipes com essa quantidade
        int max = 0;
        int semTime = 0;

        // Contador para contar a quantidade de '1's em cada posição dos tópicos
        int contador = 0;

        // Iterando sobre todas as combinações de pares de tópicos
        for (int p1 = 0; p1 < n - 1; p1++) {
            
            for (int p2 = p1 + 1; p2 < n; p2++) {
                
                // Obtendo os tópicos para a combinação atual
                String topico1 = topico.get(p1);
                String topico2 = topico.get(p2);
                
                // Iterando sobre cada posição dos tópicos
                for (int k = 0; k < topico.get(0).length(); k++) {
                    
                    // Verificando se há um '1' em pelo menos um dos tópicos
                    if (topico1.charAt(k) == '1' || topico2.charAt(k) == '1') {
                        
                        // Incrementando o contador se houver um '1'
                        contador += 1;
                    }
                }

                // Atualizando a quantidade máxima e o número de equipes sem time
                if (max < contador) {
                    
                    max = contador;

                    semTime = 1;

                } else if (max == contador) {
                    
                    semTime += 1;
                }

                // Resetando o contador
                contador = 0;

                
            }
        }

        // Adicionando os resultados à lista
        resultados.add(max);
        resultados.add(semTime);


        // Retornando a lista de resultados
        return resultados;
    }
    
}
