// # A tarefa do problema "Reduced String" no HackerRank é a seguinte:

// # Dada uma string contendo caracteres repetidos adjacentes, 
// # a tarefa é reduzir a string removendo pares de caracteres 
// # iguais adjacentes. A redução deve ser feita até que não 
// # seja possível mais remover pares adjacentes. Se a string 
// # resultante for vazia, então a saída deve ser "Empty String".

// # Por exemplo, se a entrada for "aaabccddd", a saída deve 
// # ser "abd".

// # O desafio consiste em implementar uma função que receba 
// # uma string como entrada e retorne a string resultante após 
// # a redução, seguindo as regras descritas acima.
    
// # Define a função superReducedString que recebe uma string s 
// # como entrada

export function superReducedString(s) {

    // Criação de um array vazio chamado pilha para armazenar os caracteres
    let pilha = [];

    // Loop for que itera sobre cada caractere na string s
    for (let i = 0; i < s.length; i++) {

        // Obtém o caractere atual da string s
        let caracter = s[i];
        
        // Verifica se a pilha não está vazia e se o caractere atual é igual ao topo da pilha
        if (pilha.length > 0 && pilha[pilha.length - 1] === caracter) {
            
            // Remove o caractere do topo da pilha se houver uma correspondência
            pilha.pop();
    
        } else {
    
            // Adiciona o caractere à pilha se não houver correspondência
            pilha.push(caracter);
        }
    }
    
    // Converte a pilha em uma string e retorna, ou retorna "Empty String" se a pilha estiver vazia
    return pilha.length > 0 ? pilha.join('') : "Empty String";
}

