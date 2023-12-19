
// O problema "Counting Valleys" no HackerRank 
// envolve a contagem do número de vales que um 
// viajante percorre durante uma caminhada. A 
// ideia é que cada passo do viajante seja 
// representado por uma "U" (subida) ou "D" 
// (descida), e o objetivo é contar o número 
// total de vales que o viajante atravessa.

// O problema especificamente pede para 
// implementar uma função chamada countingValleys 
// que aceita dois parâmetros:

// n: o número de passos na caminhada.
// s: uma string que representa a sequência 
// de passos (cada caractere é "U" ou "D").
// A função deve retornar um número inteiro 
// representando o número de vales percorridos pelo viajante.

// Um vale é definido como uma sequência 
// de passos que começa com uma descida ("D") 
// e termina com uma subida ("U"), cruzando 
// o nível do mar. O viajante inicia e termina 
// a caminhada ao nível do mar.

// Por exemplo, se a sequência de passos for 
// "UDDDUDUU", o viajante percorre um vale 
// porque a sequência é "DDD" e termina com 
// uma subida "U". Portanto, o resultado seria 1 vale.

// export function countingValleys(passos, caminho) {
//     // Inicializa o nível atual do viajante e a contagem de vales atravessados
//     let nivelAtual = 0;
//     let atravessouVale = 0;

//     // Itera sobre os passos no caminho
//     for (let i = 0; i < passos; i++) {
//         // Obtém o passo atual
//         const passo = caminho[i];

//         // Verifica se o passo é uma subida ("U")
//         if (passo === 'U') {
//             // Aumenta o nível atual
//             nivelAtual += 1;

//             // Verifica se o viajante atingiu o nível do mar (nível 0)
//             if (nivelAtual === 0) {
//                 // Se sim, significa que atravessou um vale
//                 atravessouVale += 1;
//             }
//         } else {
//             // Se o passo não for uma subida, é uma descida ("D"), diminui o nível
//             nivelAtual -= 1;
//         }
//     }

//     // Retorna o número total de vales atravessados
//     return atravessouVale;
// }

// export function countingValleys(passos, caminho) {

//     // Inicializa contadores para vales, subidas e descidas
//     let contarVale = 0;
//     let contarSubida = 0;
//     let contarDescida = 0;

//     // Itera sobre os elementos no caminho
//     for (let elemento in caminho) {

//         // Verifica se o elemento representa uma subida ('U')
//         if (caminho[elemento] === 'U') {
            
//             // Incrementa o contador de subidas
//             contarSubida++;

//             // Verifica se o número de subidas é igual ao número de descidas
//             if ((contarSubida - contarDescida) === 0) {
                
//                 // Se sim, significa que o viajante atravessou um vale, incrementa o contador de vales
//                 contarVale++;
//             }
            
//         } else {

//             // Se o elemento não for uma subida, é uma descida ('D'), incrementa o contador de descidas
//             contarDescida++;
//         }
//     }

//     // Retorna o número total de vales atravessados
//     return contarVale;
// }

export function countingValleys(passos, caminho) {

    // Inicializa o resultado como uma matriz [0, 0]
    const resultado = caminho.split('').reduce((a, i) => {

        // Atualiza a matriz com base no tipo de passo ('U' para subida, '-1' para descida)
        return [

            a[0] + (i == 'U' && a[1] == -1 ? 1 : 0),
            a[1] + (i == 'U' ? 1 : -1)
        ];

    }, [0, 0]);

    // Retorna o número total de vales atravessados (primeiro elemento da matriz resultado)
    return resultado[0];
}