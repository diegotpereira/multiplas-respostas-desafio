// # O problema envolve calcular a largura máxima do veículo 
// # que pode viajar com segurança em cada segmento da faixa 
// # de serviço, dado um array de larguras em pontos ao longo 
// # da estrada e uma lista de índices de pontos de entrada e saída.

// # Dada uma rodovia dividida em várias faixas de larguras 
// # diferentes e uma lista de segmentos dessa rodovia, você 
// # precisa determinar o tamanho mínimo da faixa disponível 
// # para cada segmento. Cada segmento é representado por um 
// # par de índices (i, j), onde i é o índice de início do 
// # segmento e j é o índice de término do segmento (0-based). 
// # A largura da faixa é representada por um array chamado width.


// # Definindo a função serviceLane com três parâmetros: n, cases e largura.
// # - n: não é utilizado na função, pois a largura é a lista que representa as larguras das faixas.
// # - cases: é uma lista de pares de índices (i, j) que representam os segmentos da rodovia.
// # - largura: é uma lista que contém as larguras das faixas na rodovia.

// Declarando uma função pública chamada serviceLane que recebe um inteiro n,
// uma lista de listas de inteiros casos, e uma lista de inteiros largura.

export function serviceLane(n, casos, largura) {

    // Inicializando um array chamado resultado para armazenar os resultados.
    let resultado = [];

    // Iterando sobre cada caso na lista de casos.
    for (let index = 0; index < casos.length; index++) {
        
        // Adicionando ao array resultado o tamanho mínimo da faixa para o segmento atual.
        // Utiliza Math.min() para obter o valor mínimo da sublista de largura correspondente ao intervalo [casos[index][0], casos[index][1] + 1].
        resultado.push(Math.min(...largura.slice(casos[index][0], casos[index][1] + 1)))
        
    }

    // Retornando o array resultado que contém os tamanhos mínimos das faixas para cada segmento.
    return resultado;
    
}