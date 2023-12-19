// # O problema "Breaking the Records" 
// # em HackerRank solicita a implementação 
// # de uma função chamada breakingRecords(scores), 
// # onde scores é um array representando as 
// # pontuações obtidas em uma série de jogos. 
// # O objetivo é contar quantas vezes o jogador 
// # quebra seu próprio recorde de pontuação 
// # mais alta e mais baixa durante os jogos.


// /**
//  * Função que conta quantas vezes os recordes máximo e mínimo foram quebrados.
//  * @param {number[]} pontuacoes - Array de pontuações.
//  * @returns {number[]} - Array com a contagem de quebras do recorde máximo e mínimo.
//  */

// export function breakingRecords(pontuacoes) {

//     // Inicializa as pontuações atuais para o primeiro elemento do array.
//     let atual_alto = pontuacoes[0];
//     let atual_baixo = pontuacoes[0];

//     // Inicializa contadores de quebra de recordes.
//     let contar_alto = 0;
//     let contar_baixo = 0;

//     // Percorre as pontuações para contar as quebras de recordes.
//     pontuacoes.forEach(pontuacao => {

//         // Verifica se a pontuação atual é maior que o recorde máximo.
//         if (pontuacao > atual_alto) {
            
//             // Atualiza o recorde máximo.
//             atual_alto = pontuacao;

//             // Incrementa o contador de quebra de recorde máximo.
//             contar_alto += 1;

//         } else if (pontuacao < atual_baixo) {
            
//             // Atualiza o recorde mínimo.
//             atual_baixo = pontuacao;

//             // Incrementa o contador de quebra de recorde mínimo.
//             contar_baixo += 1;
//         }
//     });

//     // Retorna um array com a contagem de quebras do recorde máximo e mínimo.
//     return [contar_alto, contar_baixo];
// }


// /**
//  * Função que conta quantas vezes os recordes máximo e mínimo foram quebrados.
//  *
//  * @param {number[]} pontuacoes - Lista de pontuações.
//  * @returns {number[]} - Lista com a contagem de quebras do recorde máximo e mínimo.
//  */
// export function breakingRecords(pontuacoes) {

//     // Inicializa um array para armazenar a contagem de quebras do recorde máximo e mínimo.
//     const arr = [0, 0]

//     // Inicializa as variáveis para armazenar a menor e maior pontuação.
//     let min = pontuacoes[0];
//     let max = pontuacoes[0];

//     // Percorre as pontuações para contar as quebras de recordes.
//     for (const pontuacao of pontuacoes) {
        
//         // Verifica se a pontuação atual é menor que o recorde mínimo.
//         if (pontuacao < min) {
            
//             // Atualiza o recorde mínimo.
//             min = pontuacao;

//             // Incrementa o contador de quebra do recorde mínimo.
//             arr[1] += 1;
//         }

//         // Verifica se a pontuação atual é maior que o recorde máximo.
//         if (pontuacao > max) {
            
//             // Atualiza o recorde máximo.
//             max = pontuacao

//             // Incrementa o contador de quebra do recorde máximo.
//             arr[0] += 1;
//         }
//     }

//     // Retorna o array com a contagem de quebras do recorde máximo e mínimo.
//     return arr
// }


/**
 * Função que conta quantas vezes os recordes máximo e mínimo foram quebrados.
 *
 * @param {number[]} pontuacoes - Lista de pontuações.
 * @returns {number[]} - Lista com a contagem de quebras do recorde máximo e mínimo.
 */

export function breakingRecords(pontuacoes) {

    // Utiliza a função reduce para iterar sobre as pontuações e acumular as quebras de recordes.
    return pontuacoes.reduce((recorde, pontuacao) => {

        // Verifica se a pontuação atual é maior que o recorde máximo.
        if(pontuacao > recorde[0]) {

            // Atualiza o recorde máximo.
            recorde[0] = pontuacao;

            // Incrementa o contador de quebra do recorde máximo.
            recorde[2] += 1;
        }

        // Verifica se a pontuação atual é menor que o recorde mínimo.
        if (pontuacao < recorde[1]) {
            
            // Atualiza o recorde mínimo.
            recorde[1] = pontuacao;

            // Incrementa o contador de quebra do recorde mínimo.
            recorde[3] += 1;
        }

        // Retorna o acumulador.
        return recorde;

        // Inicializa o acumulador com valores iniciais e extrai o resultado final.
    }, [pontuacoes[0], pontuacoes[0], 0, 0]).splice(2);
}