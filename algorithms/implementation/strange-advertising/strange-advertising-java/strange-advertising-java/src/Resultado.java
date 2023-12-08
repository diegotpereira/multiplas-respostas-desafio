public class Resultado {
    
    // # A tarefa do problema é calcular 
    // # a contagem de dias belos em um intervalo de anos.

    // # Um dia é considerado belo se a 
    // # soma de seus dígitos reversos 
    // # é igual a ele mesmo (por exemplo, 12 é um dia belo porque 1 + 2 = 12).

    // # Além disso, o valor absoluto da 
    // # diferença entre o mês e o mês reversa deve ser menor ou igual a k.
    
    public static int viralAdvertising(int n) {

        // # Inicializa o acumulador de curtidas
        int curtidasAcumuladas = 0;

        // # Inicializa o número de pessoas que compartilham o anúncio no primeiro dia
        int compartilhado = 5;

        // Loop para cada dia
        for (int i = 0; i < n; i++) {
            
            // Calcula o número de curtidas no dia atual
            int numeroCurtidasHoje = compartilhado / 2;

            // adiciona ao acumulador
            curtidasAcumuladas += numeroCurtidasHoje;

            // Calcula o número de pessoas que compartilharão o anúncio no próximo dia
            compartilhado = (compartilhado / 2) * 3;
        }

        // Retorna o total acumulado de curtidas após n dias
        return curtidasAcumuladas;

    }
}
