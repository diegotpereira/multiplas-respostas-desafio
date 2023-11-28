// # A tarefa do problema "Birthday Chocolate" no HackerRank é a seguinte:

// # Você recebe uma barra de chocolate com quadrados inteiros. Cada quadrado 
// # tem um número inteiro representando a quantidade de chocolate naquele quadrado, 
// # e uma sopa de chocolate é representada por uma sequência de números inteiros.

// # Você também recebe a data de aniversário da sua amiga e a quantidade 
// # total de chocolate que ela quer. A tarefa é determinar quantas maneiras 
// # diferentes existem de escolher um segmento contíguo da barra de chocolate 
// # de modo que a soma dos valores desses quadrados seja igual à quantidade desejada.

// # Por exemplo, se a barra de chocolate for [1, 2, 1, 3, 2] e a data de 
// # aniversário for d = 3, então existem duas maneiras de escolher um 
// # segmento cuja soma seja 3: [1, 2] e [3].

// # A entrada para o problema consiste na barra de chocolate, na data 
// # de aniversário d e na quantidade total de chocolate que sua amiga 
// # quer. A saída deve ser o número de maneiras diferentes de escolher 
// # um segmento contíguo que atenda aos critérios mencionados.

// export function birthday(chocolate, dia, mes) {
    
//     // Inicializa o resultado
//     let resultado = 0;

//     // Verifica se o comprimento da lista é menor que m
//     if (chocolate.length < mes) {
        
//         // Se sim, não há segmentos válidos, retorna 0
//         return 0;
//     }

//     // Loop para percorrer os índices iniciais dos segmentos
//     for (let index = 0; index <= chocolate.length - mes; index++) {
        
//         // Inicializa a soma para o segmento atual
//         let soma = 0;

//         // Loop para calcular a soma do segmento
//         for (let compare = index; compare < index + mes; compare++) {
            
//             soma += chocolate[compare];
            
//         }

//         // Verifica se a soma do segmento é igual à data de aniversário
//         if (soma === dia) {
            
//             // Se sim, incrementa o resultado
//             resultado += 1;
//         }
        
//     }

//     // Retorna o resultado final
//     return resultado;
// }


// // Função principal que conta segmentos de chocolate

// export function birthday(chocolate, dia, mes) {

//     // Inicializa variáveis
//     let parte_do_chocolate = [];
//     let correto = 0;

//     // Loop para percorrer os índices iniciais dos segmentos
//     for (let index = 0; index <= chocolate.length; index++) {
        
//         // Inicializa variáveis para o cálculo da soma
//         let chocolate_total = 0;

//         // Cria uma cópia do array original usando map
//         let chocolate_backup = chocolate.map(x => x);

//         // Verifica se é possível formar um segmento com o comprimento desejado
//         if (index + mes <= chocolate.length) {
            
//             // Obtém a parte do chocolate correspondente ao segmento
//             parte_do_chocolate = chocolate_backup.splice(index, mes);

//             // Loop para calcular a soma dos elementos no segmento
//             for (let compare = 0; compare < mes; compare++) {
                
//                 chocolate_total += parte_do_chocolate[compare];
                
//             }

//             // Verifica se a soma do segmento é igual ao dia de aniversário
//             if(chocolate_total == dia) correto += 1;

//         // Se não for possível formar um segmento, retorna o resultado atual
//         } else return correto;
        
//     }
// }

// // Função auxiliar para mapear elementos (poderia ser substituída por `x => x`)
// function retornarFuncao(x) {
    
//     return x;
// }


// Função principal que conta segmentos de chocolate

export function birthday(chocolate, dia, mes) {

    // Inicializa a variável de resultado
    let resultado = 0;

    // Loop para percorrer os índices iniciais dos segmentos
    for (let index = 0; index <= chocolate.length - mes; index++) {
        
        // Obtém o segmento atual usando slice
        const soma = chocolate.slice(index, mes + index).reduce((p, item) => p + item, 0);

        // Verifica se a soma do segmento é igual ao dia de aniversário
        if (soma === dia) {
            
            // Se sim, incrementa o resultado
            resultado += 1;
        }
        
    }

    // Retorna o resultado final
    return resultado;
}