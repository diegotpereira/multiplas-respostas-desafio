
// O problema "CamelCase" em HackerRank tem a seguinte tarefa:

// Dada uma string em CamelCase, determine o número de palavras na string. 
// CamelCase é uma convenção de escrita onde cada palavra, exceto a primeira, 
// começa com uma letra maiúscula. Por exemplo, a string "saveChangesInTheEditor" 
// é uma string CamelCase com 5 palavras: "save", "Changes", "In", "The" e "Editor".

// Define uma função chamada camelcase que aceita uma string s como argumento
export function camelcase(s) {
    
    // Inicializa uma variável palavras com 1, que será usada para contar o número de palavras na string
    let palavras = 1;

    // Loop através de cada caractere na string s
    for (let index = 0; index < s.length; index++) {
        
        // # Verifica se o caractere atual é maiúsculo
        if (s[index] === s[index].toUpperCase()) {
            
            // Incrementa o número de palavras se o caractere atual for maiúsculo
            palavras += 1;
        }
        
    }

    // # Retorna o número total de palavras encontradas na string
    return palavras;
}