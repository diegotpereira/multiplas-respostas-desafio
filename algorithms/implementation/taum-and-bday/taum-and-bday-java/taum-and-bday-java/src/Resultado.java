public class Resultado {

    // // Declaração do método taumBday, que recebe cinco parâmetros inteiros e retorna um valor longo
    // public static long taumBday(int b, int w, int bc, int wc, int z) {

    //     // Cálculo da quantidade mínima de presentes pretos, levando em consideração os parâmetros e a condição dada
    //     long presentesPretos = Math.min(bc, wc + z) * b;

    //     // Cálculo da quantidade mínima de presentes brancos, levando em consideração os parâmetros e a condição dada
    //     long presentesBrancos = Math.min(wc, bc + z) * w;

    //     // Retorna a soma dos presentes pretos e brancos, representando o resultado final
    //     return presentesPretos + presentesBrancos;
        
    // }
    
    public static long taumBday(int numero_presentes_pretos, int numero_presentes_brancos, int custo_presente_preto, int custo_presente_branco, int custo_para_converter_presente) {

        long custo = 0;

        if (custo_presente_branco + custo_para_converter_presente < custo_presente_preto) {
            
            custo += (custo_presente_branco + custo_para_converter_presente) * numero_presentes_pretos (custo_presente_branco * numero_presentes_pretos);
        }

        return custo;
    }
}
