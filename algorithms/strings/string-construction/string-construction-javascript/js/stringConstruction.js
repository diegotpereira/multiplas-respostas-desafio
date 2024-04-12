// A tarefa do problema em questão é 
// encontrar o custo mínimo para construir 
// uma string. A string é construída 
// adicionando caracteres de uma string 
// de entrada para uma string vazia. No 
// entanto, cada caractere adicionado à 
// string deve ter um custo associado. O 
// objetivo é minimizar o custo total da 
// construção da string, onde o custo total 
// é a soma dos custos individuais de 
// adicionar cada caractere único à string.

export function stringConstruction(s) {
    
    // Inicializa um contador para contar caracteres únicos
    let contador = 0;

    // Inicializa uma string vazia para armazenar os caracteres únicos
    let resultado = "";

    // Itera sobre cada índice na string fornecida
    for (let i = 0; i < s.length; i++) {

        // Obtém o caractere na posição atual
        let caracter = s[i];
        
        // Verifica se o caractere atual não está presente na string 'resultado'
        if (!resultado.includes(caracter)) {
            
            // Se o caractere for único, incrementa o contador
            contador += 1;

            // Adiciona o caractere à string 'resultado'
            resultado += caracter;

        }
        
    }

    // Retorna o contador, que representa o número de caracteres únicos na string fornecida
    return contador;
}