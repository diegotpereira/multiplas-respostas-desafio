// # Dado um conjunto de segmentos de linha de comprimentos diferentes, 
// # você deve encontrar e imprimir o perímetro máximo de um triângulo 
// # não degenerado (ou seja, um triângulo com uma área maior que 0) 
// # que pode ser formado usando três dos segmentos de linha. Se mais 
// # de um tal triângulo existir, você deve escolher aquele com o maior perímetro.
// # Define a função maximumPerimeterTriangle que recebe uma lista de sticks como argumento

export function maximumPerimeterTriangle(sticks) {

    // Ordena a lista de inteiros em ordem crescente
    sticks.sort((a, b) => a - b);

    // Obtém o tamanho da lista sticks
    const n = sticks.length;

    // Itera sobre os elementos da lista sticks, começando do último até o terceiro elemento
    for (let index = n - 1; index >= 2; index--) {
        
        // Verifica se é possível formar um triângulo com os três elementos adjacentes
        if (sticks[index] < sticks[index - 1] + sticks[index - 2]) {
            
            // Retorna os três elementos formadores do triângulo
            return [sticks[index - 2], sticks[index - 1], sticks[index]];
        }
        
    }
    
    // Retorna um array contendo apenas o valor -1 caso nenhum triângulo seja possível
    return [-1];
}