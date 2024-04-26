

export function hackerrankInString(s) {

    // Converte a string 'hackerrank' em uma matriz de caracteres
    let palavra = 'hackerrank'.split('');

    // Loop para iterar sobre cada caractere na string 's
    for (let index = 0; index < s.length; index++) {
        
        // Verifica se a matriz 'palavra' está vazia
        if (palavra.length === 0) {
        
            // Se 'palavra' estiver vazia, significa que todos 
            // os caracteres de 'hackerrank' foram encontrados 
            // na ordem correta em 's'
            // Retorna 'YES' para indicar que a string 's' 
            // contém a sequência 'hackerrank'
            return 'YES'
        }
    
        // Verifica se o caractere atual de 's' é igual 
        // ao primeiro caractere da matriz 'palavra'
        if (s[index] === palavra[0]) {
            
            // Se o caractere atual de 's' for igual ao primeiro caractere da matriz 'palavra',
            // remove o primeiro caractere da matriz 'palavra'
            // Isso simula a correspondência de caracteres na ordem correta
            palavra.shift();
        }
        
    }

    return palavra.length === 0 ? 'YES' : 'NO';
}