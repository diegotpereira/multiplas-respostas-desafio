
// Função que recebe dois arrays e retorna a quantidade de números inteiros entre os valores máximos e mínimos dos arrays,
// que são múltiplos de todos os elementos do primeiro array e divisores de todos os elementos do segundo array.
// export function getTotalX(arr, brr) {
    
//     // Inicializa o resultado como 0.
//     let resultado = 0;

//     // Loop que percorre todos os números inteiros no intervalo entre o máximo de arr e o mínimo de brr.
//     for (let index = Math.max(...arr); index <= Math.min(...brr); index++) {

//         // Inicializa a variável como verdadeira.
//         let ehFatorMultiplo = true;

//         // Loop que verifica se index é múltiplo de todos os elementos de arr.
//         for (const elemento of arr) {
            
//             // Se não for múltiplo, define ehFatorMultiplo como falso e interrompe o loop.
//             if (index % elemento != 0) {
                
//                 ehFatorMultiplo = false;
//                 break;
//             }
//         }
        
//         // Se index for múltiplo de todos os elementos de arr, continua a verificação com brr.
//         if (ehFatorMultiplo) {
            
//             // Loop que verifica se index é divisor de todos os elementos de brr.
//             for (const elemento of brr) {
                
//                 // Se não for divisor, define ehFatorMultiplo como falso e interrompe o loop.
//                 if (elemento % index != 0) {
                    
//                     ehFatorMultiplo = false;
//                     break;
//                 }
//             }
//         }

//         // Se index for múltiplo de todos os elementos de arr 
//         // e divisor de todos os elementos de brr, incrementa o resultado.
//         if (ehFatorMultiplo) {
            
//             resultado++;
//         }
//     }

//     // Retorna o resultado final.
//     return resultado;
// }

/**
 * Retorna o número total de inteiros que são múltiplos de todos os elementos de 'arr' e
 * fatores de todos os elementos de 'brr' no intervalo de 1 até o primeiro elemento de 'brr'.
 *
 * @param {Array} arr - Lista de inteiros para verificar os múltiplos.
 * @param {Array} brr - Lista de inteiros para verificar os fatores.
 * @return {number} O número total de inteiros que atendem aos critérios.
 */
export function getTotalX(arr, brr) {

    // Inicializa a variável para armazenar o número total de inteiros que atendem aos critérios.
    var partidas = 0;

    // Loop que percorre todos os inteiros de 1 até o primeiro elemento de 'brr'.
    for (let index = 1; index <= brr[0]; index++) {
        
        // Verifica se index é múltiplo de todos os elementos de 'arr' usando o método reduce.
        const multiplo_elementoA = arr.reduce((m, e) => m && index % e == 0, true);

        // Verifica se index é fator de todos os elementos de 'brr' usando o método reduce.
        const fator_elementoB = brr.reduce((m, e) => m && e % index == 0, true);

        // Incrementa a contagem se index for múltiplo de 'arr' e fator de 'brr'.
        partidas += multiplo_elementoA && fator_elementoB ? 1 : 0;

    }

    // Retorna o número total de inteiros que atendem aos critérios.
    return partidas
}