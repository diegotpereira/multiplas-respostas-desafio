
// O problema "Two Strings" do HackerRank é formulado da seguinte maneira:

// Dadas duas strings, determine se elas compartilham uma substring comum. 
// Uma substring é uma sequência contígua de caracteres dentro de uma string. 
// Por exemplo, as substrings de "abc" são "a", "ab", "abc", "b", "bc" e "c".

// Para resolver este problema, você precisa implementar a função function 
// twoStrings(s1, s2), onde s1 e s2 são as duas strings fornecidas. A função 
// deve retornar "YES" se as strings compartilharem uma substring comum, e "NO" caso contrário.

// Por exemplo, se s1 = "hello" e s2 = "world", as substrings comuns são "o" e "l", 
// então a função deve retornar "YES". Se s1 = "hi" e s2 = "world", não há substrings 
// comuns, então a função deve retornar "NO".

export function twoStrings(s1, s2) {

    // Cria um conjunto contendo caracteres únicos de s1
    const set_s1 = new Set(s1);

    // Cria um conjunto contendo caracteres únicos de s2
    const set_s2 = new Set(s2);

    // Inicializa um contador para contar o número de caracteres compartilhados
    let contador = 0;

    // Itera sobre cada caractere único em set_s1
    for (const index of set_s1) {
        
        // Itera sobre cada caractere único em set_s2
        for (const compare of set_s2) {
            
            // Verifica se o caractere em set_s1 é igual ao caractere em set_s2
            if (index === compare) {
                
                // Incrementa o contador se os caracteres forem iguais
                contador++;

            }
            
        }

    }

    // Verifica se há pelo menos um caractere compartilhado entre as duas strings
    if (contador > 0) {
        
        // Retorna 'YES' se houver caracteres compartilhados
        return 'YES';

    } else {

        // Retorna 'NO' se não houver caracteres compartilhados
        return 'NO';
    }
    
}