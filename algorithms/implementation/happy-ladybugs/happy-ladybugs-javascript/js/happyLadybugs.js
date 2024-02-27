// # A tarefa do problema "Happy Ladybugs" é determinar se é possível 
// # reorganizar os insetos ladybugs em um tabuleiro de modo que todos 
// # os ladybugs estejam felizes. Um ladybug é considerado feliz se 
// # houver pelo menos um outro ladybug da mesma cor adjacente a ele 
// # no tabuleiro. Além disso, o tabuleiro pode conter células vazias 
// # representadas pelo caractere '_', que podem ser ocupadas por 
// # qualquer cor de ladybug.

// # O problema fornece uma string representando o estado atual do 
// # tabuleiro de ladybugs e espera-se que a função responda "YES" se 
// # for possível reorganizar os ladybugs de forma que todos estejam 
// # felizes e "NO" caso contrário.

// Função para determinar se os insetos ladybugs estão felizes
export function happyLadybugs(b) {

    // Cria um conjunto para armazenar caracteres únicos de 'b'
    let set = new Set(b);

    // Itera sobre cada caractere único na string 'b
    for(let i of set) {

        // Se não houver nenhum espaço vazio '_' na string 'b'
        if (!b.includes('_')) {
            
            // Verifica se o caractere atual não é o último na string e se ele é diferente do próximo caractere
            // ou se há apenas uma ocorrência desse caractere na string 'b'
            if (b.lastIndexOf(i) != b.length - 1 && i != b[b.lastIndexOf(i) + 1] || (b.split(i).length - 1) === 1) {
                
                // Retorna 'NO' se a configuração das joaninhas não for válida
                return "NO";

            }

        // Se houver pelo menos um espaço vazio '_' na string 'b'
        } else {

            // Retorna 'NO' se houver uma única joaninha que não está feliz
            if ((b.split(i).length - 1) === 1 && i != '_') {
                
                return "NO";
            }
        }
    }

    // Retorna 'YES' se todas as joaninhas estiverem felizes
    return "YES";
}