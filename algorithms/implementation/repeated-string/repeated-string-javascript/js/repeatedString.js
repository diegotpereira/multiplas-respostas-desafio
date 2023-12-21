

export function repeatedString(s, n) {

    let freq = 0;

    // Iterando sobre cada caractere na string s.
    for (let i = 0; i < s.length; i++) {

        // Verificando se o caractere atual é 'a'.
        if (s[i] === 'a') {
            
            // Incrementando a contagem de ocorrências de 'a'.
            freq += 1;
            
        }
    }

    // Calculando quantas vezes a string s pode ser completamente repetida em uma substring de tamanho n.
    let div = Math.floor(n / s.length);

    // Atualizando a contagem de ocorrências multiplicando pela quantidade de repetições completas.
    freq = freq * div;

    // Calculando o tamanho restante da substring após as repetições completas.
    let restante = n % s.length;

    // Iterando sobre o restante da substring e contando as ocorrências de 'a'.
    for (let index = 0; index < restante; index++) {
        
        // Verificando se o caractere atual no restante da substring é 'a'.
        if (s[index] == 'a') {
            
            // Incrementando a contagem de ocorrências de 'a'.
            freq += 1;
        }
        
    }

    // Retornando o total de ocorrências de 'a' na substring resultante.
    return freq;
    
}