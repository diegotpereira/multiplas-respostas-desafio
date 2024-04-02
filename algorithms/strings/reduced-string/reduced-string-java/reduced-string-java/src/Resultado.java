import java.util.*;

public class Resultado {

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

    // Definição do método superReducedString que recebe uma string s como argumento e retorna uma string
    public static String superReducedString(String s) {
        
        // Criação de uma instância da classe Stack para armazenar uma pilha de caracteres
        Stack<Character> pilha = new Stack<>();

        // Loop for que itera sobre cada caractere na string s
        for (char character : s.toCharArray()) {
            
            // Verifica se a pilha não está vazia 
            // e se o caractere atual é igual ao topo da pilha
            if (!pilha.empty() && pilha.peek() == character) {
                
                // Remove o caractere do topo da pilha se houver uma correspondência
                pilha.pop();

            } else {

                // Adiciona o caractere à pilha se não houver correspondência
                pilha.add(character);
            }
        }

        // Criação de um StringBuilder para armazenar os caracteres da pilha
        StringBuilder sb = new StringBuilder();

        // Loop for-each que itera sobre cada caractere na pilha
        for(char c : pilha) {

            // Adiciona o caractere ao StringBuilder
            sb.append(c);
        }

        // Retorna a string resultante ou "Empty String" se a pilha estiver vazia
        return sb.length() > 0 ? sb.toString() : "Empty String";
    }
    
}
