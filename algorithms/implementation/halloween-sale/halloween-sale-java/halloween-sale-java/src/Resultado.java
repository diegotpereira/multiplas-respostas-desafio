public class Resultado {

    // # O problema "Halloween Sale" no HackerRank 
    // # propõe um cenário de venda especial para 
    // # o Dia das Bruxas. A tarefa é determinar 
    // # quantos jogos um cliente pode comprar, 
    // # dado o preço inicial do jogo, o desconto 
    // # a ser aplicado em cada compra subsequente, 
    // # e o preço mínimo ao qual os jogos podem ser reduzidos.

    // Define o método howManyGames que recebe os parâmetros p, d, m, s
    public static int howManyGames(int p, int d, int m, int s) {
        
        // Inicializa o contador de jogos comprados
        int jogosComprados = 0;

        // Inicializa o valor atual do jogo
        int valorAtual = p;

        // Enquanto ainda houver dinheiro disponível para gastar
        while (s >= valorAtual) {
            
            // Incrementa o contador de jogos comprados
            jogosComprados += 1;

            // Reduz o saldo disponível com o valor do jogo atual
            s -= valorAtual;

            // Atualiza o valor do jogo atual, garantindo que não seja menor que o preço mínimo m
            valorAtual = Math.max(valorAtual - d, m);
        }

        // Retorna a quantidade total de jogos comprados
        return jogosComprados;
        
    }
    
}
