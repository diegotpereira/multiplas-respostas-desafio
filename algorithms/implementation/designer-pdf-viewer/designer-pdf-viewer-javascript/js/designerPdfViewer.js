// Dada uma palavra (string) e uma matriz que 
// representa as alturas das letras do alfabeto, 
// você deve determinar a área real que será 
// destacada ao selecionar essa palavra em um 
// visualizador de PDF. Cada letra tem uma altura 
// específica associada a ela na matriz, e a 
// altura total da palavra é dada pela altura 
// da letra mais alta na palavra multiplicada 
// pelo comprimento da palavra.


// Função que calcula a área real destacada ao selecionar uma palavra em um visualizador de PDF

// export function designerPdfViewer(h, palavra) {

//     // Inicializa a altura máxima com 0
//     let alturaMaxima = 0;

//     // Itera sobre cada caractere na palavra
//     for (let index = 0; index < palavra.length; index++) {

//         // Obtém o código ASCII do caractere atual, converte para maiúsculo e ajusta para a posição na matriz h
//         const elemento = h[palavra[index].toUpperCase().charCodeAt(0) - 64 - 1];

//         // Atualiza a altura máxima se a altura do caractere atual for maior
//         alturaMaxima = elemento > alturaMaxima ? elemento : alturaMaxima;
        
//     }

//     // Retorna a área real, que é a altura máxima multiplicada pelo comprimento da palavra
//     return alturaMaxima * palavra.length;
    
// }

// export function designerPdfViewer(h, palavra) {

//     let alturaMaxima = 0;

//     let tamanhoPalavra = palavra.length;

//     for (let index = 0; index < tamanhoPalavra; index++) {
        
//         // let indice = palavra[index] - 97;
//         let indice = palavra.charCodeAt(index) - 'a'.charCodeAt(0);

//         if (alturaMaxima < h[indice]) {
            
//             alturaMaxima = h[indice];
//         }

//     }

//     return alturaMaxima * tamanhoPalavra;
// }


// Função para calcular a área destacada em um visualizador de PDF com base nas alturas fornecidas e na palavra dada

export function designerPdfViewer(h, palavra) {

    // Inicializa a altura máxima como 0
    let alturaMaxima = 0;

    // Obtém o comprimento da palavra
    let tamanhoPalavra = palavra.length;
    
    // Itera sobre cada letra na palavra
    for (let index = 0; index < tamanhoPalavra; index++) {

        // Obtém a letra atual e a converte para maiúscula
        const letra = palavra[index].toUpperCase();
        
        // Calcula o índice correspondente à letra atual
        const indice = letra.charCodeAt(0) - 'A'.charCodeAt(0);

        // Verifica se a altura da letra atual é maior que a altura máxima
        if (alturaMaxima < h[indice]) {

            // Atualiza a altura máxima
            alturaMaxima = h[indice];
        }
    }

    // Retorna a área real, que é a altura máxima multiplicada pelo comprimento da palavra
    return alturaMaxima * tamanhoPalavra;
}
