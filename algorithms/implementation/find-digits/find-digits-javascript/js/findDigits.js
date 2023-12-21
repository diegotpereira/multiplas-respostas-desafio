// A tarefa do problema "Find Digits" no HackerRank 
// é encontrar quantos dígitos de um número são 
// divisíveis por esse número. A entrada consiste 
// em um número inteiro n, seguido por n números 
// inteiros. Para cada número inteiro dado, a tarefa 
// é contar quantos dos dígitos desse número são divisíveis 
// por ele mesmo. Em outras palavras, para cada dígito no número, 
// verificar se o número é divisível por esse dígito. A saída 
// esperada é o número de dígitos no número que são divisíveis por ele.

// Esta função recebe um número inteiro 'n' como argumento.

export function findDigits(n) {
    
    // Inicializa um contador para contar os dígitos divisíveis.
    let contador = 0;

    // Converte o número em uma string para facilitar a iteração pelos dígitos.
    let string = n.toString();

    // Loop que percorre cada dígito na string convertida.
    for (let index = 0; index < string.length; index++) {

        // Verifica se o número original 'n' é divisível pelo dígito atual.
        if (n % string[index] == 0) 
            
            // Se for divisível, incrementa o contador.
            contador += 1;
        
    }

    // Retorna o número de dígitos divisíveis encontrados.
    return contador;
}