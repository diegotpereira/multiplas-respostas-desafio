// # A tarefa do problema "The Love-Letter Mystery" 
// # no HackerRank é a seguinte:

// # Dada uma string contendo apenas letras minúsculas 
// # do alfabeto, você precisa fazer com que todas as 
// # letras sejam iguais, alterando cada letra no mínimo 
// # uma vez. Você pode reduzir o valor de uma letra em 1, 
// # ou seja, 'a' se torna 'b', 'b' se torna 'a', 'c' se 
// # torna 'b' e assim por diante. O objetivo é encontrar 
// # o número mínimo de operações necessárias para fazer 
// # com que a string se torne uma string de palíndromo. 
// # Um palíndromo é uma palavra ou frase que se lê da 
// # mesma forma de trás para frente.

// Exporta a função theLoveLetterMystery
export function theLoveLetterMystery(s) {
    
    // Inicializa o contador de operações como zero.
    let contador = 0;

    // Calcula o tamanho da metade da string, arredondando para baixo.
    let tamanho = Math.floor(s.length / 2)

    // Loop sobre a metade inferior do comprimento da string.
    for (let index = 0; index < tamanho; index++) {
        
        // Obtém o código ASCII do caractere na posição index.
        let caracter1 = s.charCodeAt(index);

        // Obtém o código ASCII do caractere simétrico na posição correspondente da metade superior da string.
        let caracter2 = s.charCodeAt(s.length - index - 1);

        // Calcula a diferença absoluta entre os códigos ASCII dos caracteres e atualiza o contador.
        contador += Math.abs(caracter1 - caracter2);
        
    }

    // Retorna o número total de operações realizadas.
    return contador;
}