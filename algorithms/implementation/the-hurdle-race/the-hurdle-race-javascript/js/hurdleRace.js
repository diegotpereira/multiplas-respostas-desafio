// Bob está participando de uma corrida de barreiras. 
// Ele pode pular uma determinada altura máxima, mas 
// a altura das barreiras varia. A tarefa é escrever 
// um programa para determinar quantos doses de uma 
// poção mágica Bob precisa tomar para poder pular 
// todas as barreiras na corrida.

// k = Um número inteiro representando a altura máxima que Bob pode pular inicialmente.
// altura(height) = Uma lista de alturas das barreiras.


// // Exporta uma função chamada hurdleRace que recebe dois parâmetros: k e altura.

// export function hurdleRace(k, altura) {

//     // Encontra o valor máximo na lista de alturas usando Math.max e o operador de propagação (...).
//     let maxima = Math.max(...altura);

//     // Verifica se a altura máxima k é menor que o valor máximo da altura.
//     if (k < maxima) {
        
//         // Se k for menor que o valor máximo, calcula a diferença e a armazena em 'posicao'.
//         let posicao = maxima - k;

//         // Retorna a posição calculada.
//         return posicao;

//     } else {

//         // Se k for maior ou igual ao valor máximo, retorna 0, pois não há necessidade de doses adicionais.
//         return 0;

//     }
    
// }


// // Exporta uma função chamada hurdleRace que recebe dois parâmetros: k e altura.

// export function hurdleRace(k, altura) {

//     // Verifica se o valor máximo na lista de alturas é igual a 1 ou menor ou igual a k.
//     if (Math.max(...altura) == 1 || Math.max(...altura) <= k) {

//         // Retorna 0 se a condição for verdadeira.
//         return 0
//     }

//     // Retorna a diferença entre o valor máximo na lista de alturas e k.
//     return Math.max(...altura) - k;

// }


// Exporta uma função chamada hurdleRace que recebe dois parâmetros: k e altura.

export function hurdleRace(k, altura) {

    // Encontra o valor máximo na lista de alturas usando Math.max e o operador de propagação (...).
    const maximo = Math.max(...altura);

    // Verifica se o valor máximo na lista é maior que k.
    // Se for, retorna a diferença entre o valor máximo e k, caso contrário, retorna 0.
    return maximo > k ? maximo - k : 0;
}