import java.util.*;

public class Resultado {

    /**
     * Função para contar o número de maçãs e laranjas que caíram em uma determinada área.
     *
     * @param s Ponto de início da área.
     * @param t Ponto de fim da área.
     * @param a Localização da macieira.
     * @param b Localização da laranjeira.
     * @param macas Lista de distâncias das maçãs em relação à macieira.
     * @param laranjas Lista de distâncias das laranjas em relação à laranjeira.
     * @return Uma string contendo o número de maçãs e laranjas que caíram na área, separados por uma quebra de linha.
     */
    public static String countApplesAndOranges(int s, int t, int a, int b, List<Integer> macas, List<Integer> laranjas) {

        // Variáveis para contar o número de maçãs e laranjas.
        int maca = 0;
        int laranja = 0;

        // Loop para percorrer a lista de maçãs.
        for (int i = 0; i < macas.size(); i++) {
            
            // Calcula a distância da maçã até a área de interesse.
            int dif = macas.get(i) + a;

            // Verifica se a maçã caiu dentro da área de interesse.
            if (dif >= s && dif <= t) {
                
                // Incrementa o contador de maçãs.
                maca++;
            }
        }
        
        // Loop para percorrer a lista de laranjas.
        for (int i = 0; i < laranjas.size(); i++) {
            
            // Calcula a distância da laranja até a área de interesse.
            int dif = laranjas.get(i) + a;

            // Verifica se a laranja caiu dentro da área de interesse.
            if (dif >= s && dif <= t) {
                
                // Incrementa o contador de laranjas.
                laranja++;
            }
        }

        // Constrói a string de resultado, separando o número de maçãs e laranjas por uma quebra de linha.
        StringBuilder resultado = new StringBuilder();
        resultado.append(maca).append("\n").append(laranja);

        // Converte a StringBuilder para String e retorna o resultado.
        return resultado.toString();
    }


    // /**
    //  * Função para contar maçãs e laranjas que caíram em uma casa.
    //  *
    //  * @param pontoInicialCasaSam Ponto inicial da casa de Sam.
    //  * @param pontoFinalCasaSam Ponto final da casa de Sam.
    //  * @param localizacaoMacieira Localização da macieira.
    //  * @param localizacaoLaranjeira Localização da laranjeira.
    //  * @param macas Lista de distâncias das maçãs em relação à macieira.
    //  * @param laranjas Lista de distâncias das laranjas em relação à laranjeira.
    //  * @return Uma string contendo o número de maçãs e laranjas que caíram na casa, separados por uma quebra de linha.
    //  */
    
    // public static String countApplesAndOranges(int pontoInicialCasaSam, int pontoFinalCasaSam, int localizacaoMacieira,
    //         int localizacaoLaranjeira, List<Integer> macas, List<Integer> laranjas) {

    //     // Listas para armazenar as posições das maçãs e laranjas.
    //     List<Integer> somarLaranjas = new ArrayList<Integer>();
    //     List<Integer> somarMacas = new ArrayList<Integer>();

    //     // Contadores para contar o número de maçãs e laranjas que caíram na casa.
    //     int contar_maca = 0;
    //     int contar_laranja = 0;

    //     // Calcula as posições finais das maçãs em relação à macieira.
    //     for (Integer maca : macas) {
    //         somarMacas.add(localizacaoMacieira + maca);
    //     }

    //     // Calcula as posições finais das laranjas em relação à laranjeira.
    //     for (Integer laranja : laranjas) {
    //         somarLaranjas.add(localizacaoLaranjeira + laranja);
    //     }

    //     // Conta o número de maçãs que caíram na casa de Sam.
    //     for (Integer maca : somarMacas) {
    //         if (maca >= pontoInicialCasaSam && maca <= pontoFinalCasaSam) {
    //             contar_maca += 1;
    //         }
    //     }

    //     // Conta o número de laranjas que caíram na casa de Sam.
    //     for (Integer laranja : somarLaranjas) {
    //         if (laranja >= pontoInicialCasaSam && laranja <= pontoFinalCasaSam) {
    //             contar_laranja += 1;
    //         }
    //     }

    //     // Constrói a string de resultado, separando o número de maçãs e laranjas por uma quebra de linha.
    //     StringBuilder resultado = new StringBuilder();
    //     resultado.append(contar_maca).append("\n").append(contar_laranja);

    //     // Converte a StringBuilder para String e retorna o resultado.
    //     return resultado.toString();
    // }

}
