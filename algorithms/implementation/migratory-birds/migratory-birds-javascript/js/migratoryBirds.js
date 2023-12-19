// # No problema "Migratory Birds" no HackerRank, 
// # a tarefa é encontrar o tipo de pássaro mais 
// # comum entre um grupo de pássaros migratórios. 
// # Cada pássaro é representado por um número inteiro 
// # e o objetivo é determinar qual número aparece com mais frequência no grupo.

// # Descrição do Problema:

// # Dado um array que representa os tipos de pássaros 
// # avistados, onde cada elemento do array é um número 
// # inteiro representando um tipo de pássaro, sua tarefa 
// # é encontrar e imprimir o tipo de pássaro que é mais 
// # comum. Se houver empate, escolha o menor número.


// Função que encontra o tipo mais comum de pássaro

// export function migratoryBirds(arr) {

//     // Cria um mapa para contar a frequência de cada tipo de pássaro
//     let contar_passaro = new Map();

//     // Loop para percorrer cada tipo de pássaro no array
//     for (const tipoPassaro of arr) {

//         // Verifica se o tipo de pássaro já está no mapa
//         if (contar_passaro.has(tipoPassaro)) {
            
//             // Se sim, incrementa a contagem
//             contar_passaro.set(tipoPassaro, contar_passaro.get(tipoPassaro) + 1);

//         } else {

//             // Se não, adiciona o tipo de pássaro ao mapa com contagem 1
//             contar_passaro.set(tipoPassaro, 1);
//         }
//     }
    
//     // Inicializa variáveis para armazenar os tipos mais frequentes e a contagem máxima
//     let avesMaisFreqüentes = [];
//     let maxContagem = 0;

//     // Loop sobre o mapa para encontrar os tipos mais frequentes
//     contar_passaro.forEach((contar, tipoPassaro) => {

//         // Verifica se a contagem atual é maior que a contagem máxima
//         if (contar > maxContagem) {
            
//             // Se sim, atualiza os tipos mais frequentes e a contagem máxima
//             maxContagem = contar;
//             avesMaisFreqüentes = [tipoPassaro];

//         } else if (contar === maxContagem) {

//             // Se houver empate, adiciona o tipo ao array de tipos mais frequentes
//             avesMaisFreqüentes.push(tipoPassaro);
            
//         }
//     });

//     // Retorna o tipo mais comum, escolhendo o menor número em caso de empate
//     return Math.min(...avesMaisFreqüentes);
// }

export function migratoryBirds(arr) {

    // Inicializa um array para armazenar a contagem de cada tipo de pássaro (inicialmente todos são 0)
    let tipoDePassaroMaximo = [0, 0, 0, 0, 0];

    // Itera sobre o array de observações de pássaros
    for (const passaro of arr) {
        
        // Usa um switch para incrementar a contagem do tipo de pássaro correspondente
        switch (passaro) {

            case 1:
                
            tipoDePassaroMaximo[0]++
                break;

            case 2:
            
            tipoDePassaroMaximo[1]++
                break;

            case 3:
        
            tipoDePassaroMaximo[2]++
                break;

            case 4:
        
            tipoDePassaroMaximo[3]++
                break;

            case 5:
        
            tipoDePassaroMaximo[4]++
                break;
        }
    }

    // Inicializa a variável resultado com o tipo de pássaro mais comum (inicialmente 1)
    let resultado = 1;

    // Itera sobre o array de contagem para encontrar o tipo de pássaro mais comum
    for (let index = 1; index < tipoDePassaroMaximo.length; index++) {
        
        // Compara a contagem atual com a contagem do tipo de pássaro mais comum até agora
        if (tipoDePassaroMaximo[index] > tipoDePassaroMaximo[resultado - 1]) {
            
            // Atualiza a variável resultado com o novo tipo de pássaro mais comum
            resultado = index + 1;
        }
        
    }

    // Retorna o tipo de pássaro mais comum
    return resultado;
}