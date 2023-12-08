// O problema "Utopian Tree" no HackerRank 
// solicita que você modele o crescimento 
// de uma árvore ao longo de várias estações. 
// A árvore passa por dois ciclos de crescimento a cada ano:

// Ciclo de Primavera (Estação Ímpar): A 
// árvore dobra sua altura durante esta estação.

// Ciclo de Verão (Estação Par): A árvore 
// cresce uma unidade durante esta estação.

// O objetivo é determinar a altura da árvore 
// após um número específico de estações. O 
// problema fornece vários casos de teste, cada 
// um com um número diferente de estações. Sua 
// tarefa é calcular a altura final da árvore 
// após cada conjunto de estações.


// // Função que calcula a altura de uma árvore utópica após um número de estações especificado

// export function utopianTree(n) {
    
//     // Inicializa a altura da árvore como 1
//     let altura = 1;

//     // Loop que simula o crescimento da árvore durante as estações
//     for (let index = 0; index <= n; index++) {
        
//         // Se for a primeira estação (index = 0)
//         if (index == 0) {

//             // pule para a próxima iteração
//             continue;

//         // Se a estação for par, 
//         } else if (index % 2 == 0) {
            
//             // incrementa a altura em 1
//             altura += 1;

//         // Se a estação for ímpar, 
//         } else {

//             // dobra a altura
//             altura *= 2;
//         }
        
//     }

//     // Retorna a altura final da árvore após as estações especificadas
//     return altura;
// }

export function utopianTree(n) {

    // Calcula o expoente para a base 2 com base na paridade de n
    // Se n for par, o expoente é n / 2, senão é (n + 1) / 2
    var expoente = (n % 2 === 0 ? n / 2 : (n + 1) / 2);

    // Calcula 2 elevado à potência determinada pelo expoente
    var baseResultado = Math.pow(2, expoente);

    // Multiplica o resultado da potência por 2
    var multiploResultado = 2 * baseResultado;

    // Determina um ajuste adicional com base na paridade de n
    // Se n for par, subtrai 1, senão subtrai 2
    var finalResultado = Math.floor(multiploResultado - (n % 2 === 0 ? 1 : 2));

    // Retorna o resultado final convertido para inteiro
    return finalResultado;

    
}