// # O problema "Halloween Sale" no HackerRank 
// # propõe um cenário de venda especial para 
// # o Dia das Bruxas. A tarefa é determinar 
// # quantos jogos um cliente pode comprar, 
// # dado o preço inicial do jogo, o desconto 
// # a ser aplicado em cada compra subsequente, 
// # e o preço mínimo ao qual os jogos podem ser reduzidos.

// Exporta a função howManyGames como uma função do módulo

export function howManyGames(p, d, m, s) {
    
    // Inicializa o contador de jogos comprados
    let jogosComprados = 0;

    // Inicializa o valor atual do jogo
    let valorAtual = p;

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