// # Dada uma lista de números inteiros, 
// # você precisa encontrar a menor distância 
// # entre dois números iguais. A distância 
// # entre dois índices, i e j, é definida 
// # como |i - j|. Se não houver dois 
// # elementos iguais na lista, o programa 
// # deve imprimir -1.

// # Em termos simples, a tarefa envolve 
// # encontrar a menor distância entre dois 
// # elementos iguais em uma lista de inteiros.

// # A entrada consiste em um único array de 
// # inteiros, e a saída deve ser um único 
// # número inteiro representando a menor 
// # distância entre dois elementos iguais. 
// # Se não houver dois elementos iguais, 
// # a saída deve ser -1.

// Exporta a função minimumDistances como uma função do módulo

export function minimumDistances(a) {
    
    // Inicializa a variável min_distancia com o valor máximo seguro para um número inteiro
    let min_distancia = Number.MAX_SAFE_INTEGER;

    // Cria um objeto Map para armazenar os índices dos elementos vistos
    let indices = new Map();

    // Itera sobre os índices da lista 'a'
    for (let index = 0; index < a.length; index++) {
        
        // Verifica se o elemento a[index] já foi visto antes
        if (indices.has(a[index])) {
            
            // Calcula a distância entre os índices atual e anterior do elemento a[index]
            let distancia = index - indices.get(a[index]);

            // Atualiza a menor distância, se a distância atual for menor
            min_distancia = Math.min(min_distancia, distancia);
        }
        
        // Atualiza o índice do elemento a[index] no objeto Map
        indices.set(a[index], index);
    }

    // Retorna a menor distância encontrada ou -1 se não houverem elementos iguais
    return (min_distancia != Number.MAX_SAFE_INTEGER) ? min_distancia : -1;

}