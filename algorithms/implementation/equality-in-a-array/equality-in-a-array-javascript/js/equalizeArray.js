// # A tarefa do problema "Equality 
// # in a Array" no HackerRank é 
// # determinar o número mínimo de 
// # elementos que precisam ser 
// # removidos de um array para que 
// # todos os elementos restantes 
// # sejam iguais. O array pode conter 
// # números inteiros e a operação 
// # permitida é a remoção de um 
// # elemento do array a cada vez.

// // Exporta a função equalizeArray

// export function equalizeArray(arr) {

//     // Cria um conjunto para obter elementos únicos do array
//     let tmp = new Set(arr)

//     // Inicializa a variável 'maximo' para armazenar o número máximo de ocorrências de um elemento único
//     let maximo = 0;

//     // Itera sobre os elementos únicos no conjunto 'tmp'
//     for (let x of tmp) {

//         // Conta o número de ocorrências do elemento atual no array
//         const contador = arr.filter(elemento => elemento === x).length;

//         // Verifica se a contagem é maior que o valor atual de 'maximo'
//         if (contador > maximo) {
            
//             // Se sim, atualiza 'maximo' com a contagem atual
//             maximo = contador;
            
//         }
//     }
    
//     // Retorna o número de elementos no array original menos o número máximo de ocorrências de um elemento único
//     // Isso representa o número mínimo de remoções necessárias para igualar todos os elementos no array
//     return arr.length - maximo;

// }

export function equalizeArray(arr) {

    // Inicializa a variável para armazenar o valor máximo de ocorrências de um elemento único
    let valorMaximo = 1;

    // Cria um objeto Map para armazenar a contagem de ocorrências de cada elemento único na lista
    let nMapa = new Map();

    // Itera sobre os elementos da lista
    for (let n of arr) {
        
        // Verifica se o elemento já está no mapa
        if (nMapa.has(n)) {
            
            // Se sim, incrementa a contagem de ocorrências
            let valor = nMapa.get(n) + 1;

            nMapa.set(n, valor);

            // Atualiza o valor máximo, se necessário
            valorMaximo = Math.max(valor, valorMaximo);

        } else {

            // Se não, adiciona o elemento ao mapa com contagem 1
            nMapa.set(n, 1);
        }
    }

    // Retorna o número de elementos na lista menos o valor máximo de ocorrências de um elemento único
    // Isso representa o número mínimo de remoções necessárias para igualar todos os elementos na lista
    return arr.length - valorMaximo;
}