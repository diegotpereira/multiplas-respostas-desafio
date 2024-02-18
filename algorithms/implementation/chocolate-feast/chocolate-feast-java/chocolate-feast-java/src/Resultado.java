public class Resultado {

    // # Bob gosta muito de chocolate, 
    // # e ele tem uma quantidade específica 
    // # de dinheiro para gastar. Ele pode 
    // # comprar chocolates que custam um 
    // # determinado preço e, ao fazê-lo, 
    // # recebe wrappers (embalagens vazias)
    // # como troco. Bob pode trocar essas
    // # wrappers por chocolates adicionais.

    // # Definindo uma função chamada chocolateFeast com três parâmetros: 
    // # n (quantidade de dinheiro), 
    // # c (preço do chocolate), 
    // # m (número de wrappers para trocar por um chocolate adicional).

    public static int chocolateFeast(int n, int c, int m) {
        
        // Calculando a quantidade inicial de chocolates que Bob pode comprar diretamente com o dinheiro disponível.
        int inicial = n / c;

        // Inicializando a variável que irá armazenar a quantidade de wrappers vazias, inicialmente igual à quantidade inicial de chocolates.
        int embalagensVazias = inicial;

        // Entrando em um loop enquanto ainda é possível trocar wrappers por chocolates adicionais.
        while (embalagensVazias >= m) {
            
            // Calculando quantos chocolates adicionais Bob pode obter trocando suas wrappers vazias.
            int diferenca = embalagensVazias / m;

            // Calculando o número de wrappers vazias restantes após a troca.
            int restantes = embalagensVazias % m;

            // Atualizando a quantidade total de chocolates que Bob pode comer, adicionando os chocolates obtidos pela troca.
            inicial = inicial + diferenca;

            // Atualizando o número de wrappers vazias, considerando as wrappers obtidas pela troca e as restantes.
            embalagensVazias = diferenca + restantes;
        }

        // Retornando a quantidade total de chocolates que Bob pode comer.
        return inicial;
    }
    
}
