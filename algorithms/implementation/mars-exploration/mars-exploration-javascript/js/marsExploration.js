// # A tarefa do problema "Mars Exploration" 
// // # no HackerRank é criar um programa que 
// // # avalia a qualidade da transmissão de 
// // # uma mensagem de rádio enviada da Terra 
// // # para Marte. A mensagem consiste em uma 
// // # string de caracteres (S), onde cada 
// // # sequência de três caracteres consecutivos 
// // # deve representar a palavra "SOS". No 
// // # entanto, devido a interferências na 
// // # transmissão, alguns caracteres podem ter 
// // # sido alterados. A tarefa é contar o 
// // # número total de caracteres que foram 
// // # alterados durante a transmissão, 
// // # considerando que "SOS" é a sequência 
// // # original esperada.

// Exporta a função marsExploration que recebe uma string 's' como entrada
export function marsExploration(s) {
    
    // Inicializa uma variável para contar o número de caracteres alterados
    let alterado = 0;

    // Loop sobre os índices da string 's'
    for (let letra = 0; letra < s.length; letra++) {

        // Verifica se o índice atual é um índice de 'O' esperado
        if (letra % 3 == 1) {
            
            // Se o caractere atual não for 'O', incrementa o contador de caracteres alterados
            if (s.charAt(letra) != 'O') {
                
                alterado += 1;
            }

        // Para os índices que não são índices de 'O', ou seja, índices de 'S'
        } else {

            // Se o caractere atual não for 'S', incrementa o contador de caracteres alterados
            if (s.charAt(letra) != 'S') {
             
                alterado += 1;
            }
        }
        
    }

    // Retorna o total de caracteres alterados
    return alterado;
}