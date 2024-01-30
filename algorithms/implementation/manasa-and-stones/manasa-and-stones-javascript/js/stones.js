// # Você tem uma quantidade de pedras, 
// # e cada pedra tem um valor associado. 
// # Há duas cores de pedras, representadas 
// # por dois números inteiros diferentes. 
// # As pedras são numeradas de 1 a N, e 
// # você deve determinar todas as possíveis 
// # somas de valores que podem ser obtidas 
// # combinando as pedras de ambas as cores.

// # Dada a diferença entre as cores e o 
// # número total de pedras, você deve 
// # imprimir todas as possíveis somas 
// # em ordem crescente.

// Declaração do método "stones" que recebe três parâmetros: n (número total de pedras),
// a (valor da primeira cor de pedra), e b (valor da segunda cor de pedra).

export function stones(n, a, b) {

    // Array para armazenar as possíveis somas de valores das pedras de ambas as cores.
    let resultado = [];

    // Calcula a diferença entre os valores da segunda cor (b) e da primeira cor (a).
    let diferenca = b - a;

    // Loop para iterar sobre todas as pedras.
    for (let index = 0; index < n; index++) {
        
        // Adiciona a soma de valores das pedras da cor atual ao array "resultado".
        resultado.push((n - 1) * a + (index) * diferenca);

    }

    // Converte o array para um conjunto para remover duplicatas.
    let set = new Set(resultado);

    // Converte de volta para um array após a remoção de duplicatas.
    resultado = Array.from(set);

    // Ordena o array de somas em ordem crescente.
    resultado.sort((a , b) => a - b);

    // Retorna o array de somas de valores das pedras de ambas as cores.
    return resultado;

}