// # Você tem um array de números inteiros e um número fixo de rotações. 
// # A tarefa é rotacionar o array à direita por um número especificado de vezes.

// # Um array de números inteiros a.
// # Um inteiro k, que representa o número de rotações à direita a serem executadas.
// # Um array de consultas queries, onde cada elemento é um índice que deve ser consultado após as rotações.

// s

//     // Em JavaScript, você pode usar arrays para armazenar os resultados.
//     let resultado = [];

//     // Para criar um array de números inteiros em JavaScript, basta atribuir os valores diretamente.
//     // Por exemplo:
//     // let arrayOriginal = [1, 2, 3, 4, 5];

//     // No JavaScript moderno, você pode usar a função map para realizar operações em cada elemento de um array.
//     // Aqui está um exemplo para simular o comportamento do ArrayList em Java:
//     let arrayOriginal = a.map(Number);

//     let mudancas = k % arrayOriginal.length;

//     for (let x of consultas) {
//         resultado.push(arrayOriginal[(x - mudancas + arrayOriginal.length) % arrayOriginal.length]);
//     }

//     // A variável 'resultado' agora contém os resultados desejados.
//     // console.log(resultado);

//     return resultado;

// }


// Define uma função chamada circularArrayRotation que recebe 
// um array 'a', um inteiro 'k' e uma lista de consultas 'consultas'.

export function circularArrayRotation(a, k, consultas) {

    // Realiza a rotação 'k' vezes.
    for (let index = 1; index <= k; index++) {

        // Remove o último elemento do array 'a'.
        const numero = a.pop();

        // Adiciona o elemento removido no início do array 'a'.
        a.unshift(numero);
        
    }

    // Mapeia a lista de consultas para os elementos 
    // correspondentes no array 'a' rotacionado e retorna o resultado.
    return consultas.map(q => a[q]);
}