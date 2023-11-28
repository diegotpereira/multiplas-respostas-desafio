import java.util.ArrayList;
import java.util.List;

public class Resultado {

    public static List<Integer> breakingRecords(List<Integer> pontuacoes) {

        // Inicializa as pontuações atuais para o primeiro elemento do array.
        int atual_alto = pontuacoes.get(0);
        int atual_baixo = pontuacoes.get(0);
        

        // Inicializa contadores de quebra de recordes.
        int contar_alto = 0;
        int contar_baixo = 0;

        // Percorre as pontuações para contar as quebras de recordes.
      for (Integer pontuacao : pontuacoes) {
        
        if (pontuacao > atual_alto) {
                
                // Atualiza o recorde máximo.
                atual_alto = pontuacao;

                // Incrementa o contador de quebra de recorde máximo.
                contar_alto += 1;

            } else if (pontuacao < atual_baixo) {
                
                // Atualiza o recorde mínimo.
                atual_baixo = pontuacao;

                // Incrementa o contador de quebra de recorde mínimo.
                contar_baixo += 1;
            }
      }

        List<Integer> pontuacao = new ArrayList<>();

        pontuacao.add(contar_alto);
        pontuacao.add(contar_baixo);

        // Retorna um array com a contagem de quebras do recorde máximo e mínimo.
        return pontuacao;
        // return null;
    }
    
}
