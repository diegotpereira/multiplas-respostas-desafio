// O problema nos fornece um array P que representa as permutações do 
// array original. A função 'permutationEquation' deve retornar um array 
// que contém a posição final de cada elemento no array original

// Função que calcula a sequência de permutação para uma lista dada

export function permutationEquation(p) {

    // Inicializa um array para armazenar os resultados
    let resultado = [];

    // Loop que percorre os índices de 1 até o comprimento da lista p
    for (let index = 1; index <= p.length; index++) {
        
        // Calcula a sequência de permutação e adiciona o resultado ao array
        resultado.push(p.indexOf(p.indexOf(index) + 1) + 1);
        
    }

    // Retorna a lista de resultados
    return resultado;
    
}