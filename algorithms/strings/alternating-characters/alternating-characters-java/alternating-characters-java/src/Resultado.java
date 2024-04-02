public class Resultado {

    // # A tarefa do problema "Alternating Characters" 
    // # do HackerRank é a seguinte:

    // # Dada uma string contendo apenas os caracteres 
    // # 'A' e 'B', você precisa contar o número mínimo 
    // # de deletações necessárias para tornar a string 
    // # alternada. Uma string é chamada de alternada 
    // # se não contiver dois caracteres adjacentes 
    // # idênticos. Por exemplo, a string "ABABAB" é 
    // # alternada, mas a string "AAABBB" não é.

    // # A tarefa consiste em implementar uma função 
    // # alternatingCharacters que receba uma string 
    // # e retorne o número mínimo de deletações 
    // # necessárias para tornar a string alternada.

    // # Por exemplo:

    // # Se a entrada for "AAAA", a função deve retornar 
    // # 3, pois é necessário deletar 3 caracteres 'A' 
    // # para tornar a string alternada.
    // # Se a entrada for "ABABABAB", a função deve retornar 
    // # 0, pois a string já é alternada.
    // # Essa tarefa geralmente envolve a iteração pela string 
    // # e a contagem dos caracteres consecutivos iguais para 
    // # determinar quantos caracteres precisam ser deletados.

    // Define uma função que conta o número de caracteres consecutivos iguais que precisam ser deletados.
    public static int alternatingCharacters(String s) {
        
        // Obtém o tamanho da string.
        int tamanho = s.length();

        // Inicializa a variável para contar o número de caracteres que precisam ser deletados.
        int deletar = 0;

        // Verifica se a string tem tamanho maior que 1.
        if (tamanho > 1) {
            
            // Loop sobre a string até o penúltimo caractere.
            for (int i = 0; i < tamanho - 1; i++) {
                
                // Verifica se o caractere atual é igual ao próximo caractere.
                if (s.charAt(i) == s.charAt(i + 1)) {
                    
                    // Se forem iguais, incrementa a variável deletar.
                    deletar += 1;
                }
            }
        }

        // Retorna o número total de caracteres consecutivos iguais que precisam ser deletados.
        return deletar;
    }
    
}
