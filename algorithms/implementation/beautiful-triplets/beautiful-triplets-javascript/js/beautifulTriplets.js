

// Define uma função chamada beautifulTriplets 
// que recebe dois parâmetros: d (a diferença entre os elementos da triplet) 
// e arr (a lista de números)
export function beautifulTriplets(d, arr) {
    
    // Inicializa um contador para contar o número de tripletas bonitas encontradas
    let contador = 0;
    
    // Cria um conjunto (Set) 's' contendo os elementos da lista 'arr'
    let s = new Set(arr);

    // Itera sobre cada elemento 'num' na lista 'arr' usando um loop for...of
    for (const num of arr) {

        // Verifica se num + d e num + 2 * d estão presentes no conjunto 's'
        if (s.has(num + d) && s.has(num + 2 * d)) {
            
            // Se ambos os valores estiverem presentes, 
            // incrementa o contador de tripletas bonitas encontradas
            contador += 1;
            
        }
        
    }
    
    // Retorna o contador de tripletas bonitas encontradas
    return contador;
}