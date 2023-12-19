// O problema "Picking Numbers" do HackerRank geralmente 
// pede para determinar o comprimento máximo de um subconjunto 
// de números em um array onde a diferença entre quaisquer dois números seja no máximo 1.

// Os jogadores devem escolher um elemento de cada par e 
// formar um subconjunto, onde a diferença entre os elementos 
// escolhidos não seja maior que 1. O objetivo é determinar 
// o comprimento máximo possível desse subconjunto.

// export function pickingNumbers(arr) {

//     // Inicializa a variável comprimentoMaximo para armazenar o comprimento máximo do subconjunto.
//     let comprimentoMaximo = 0;

//     for (const numero of arr) {
        
//         // Atualiza comprimentoMaximo usando a função Math.max
//         // que compara comprimentoMaximo com o comprimento do subconjunto formado pelos números
//         // que são iguais ou têm uma diferença de 1 em relação ao número atual.
//         comprimentoMaximo = Math.max(comprimentoMaximo, arr.filter((n) => n === numero || n === numero + 1).length)
//     }

//     // Converte o comprimentoMaximo para int e retorna o resultado.
//     return comprimentoMaximo
// }

// A função pickingNumbers recebe um array de números inteiros (arr) e retorna o comprimento máximo de um subconjunto.

export function pickingNumbers(arr) {

    // Inicializa uma variável para armazenar o comprimento máximo do subconjunto.
    let comprimentoMaximo = 0;

    // Itera sobre cada número no array.
    for (let index of arr) {

        // Inicializa um contador para contar elementos que são iguais ao número ou têm diferença de 1.
        let contador = 0;

        // Itera sobre cada elemento no array para comparar com o número atual.
        for (let compare of arr) {
            
            // Verifica se o número é igual ou tem diferença de 1 com o elemento comparado.
            if (index == compare || index - compare == 1) {
                
                // Incrementa o contador se a condição for atendida.
                contador += 1;
            }
            
        }
        
        // Atualiza o comprimento máximo se o contador atual for maior que o valor atual de 'comprimentoMaximo'.
        if (contador > comprimentoMaximo) {
            
            comprimentoMaximo = contador;
        }
    }

    // Retorna o comprimento máximo do subconjunto.
    return comprimentoMaximo;
}