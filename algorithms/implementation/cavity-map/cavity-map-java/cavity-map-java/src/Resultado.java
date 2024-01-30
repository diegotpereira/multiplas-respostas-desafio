import java.util.*;

public class Resultado {

    // # O problema "Cavity Map" no HackerRank 
    // # solicita que você identifique cavidades 
    // # em um mapa bidimensional. O mapa é 
    // # representado por uma grade de dígitos, 
    // # onde cada dígito representa a altura de 
    // # uma célula. Uma célula é considerada uma 
    // # cavidade se e somente se todos os dígitos 
    // # ao seu redor (acima, abaixo, à esquerda e à direita) 
    // # forem estritamente menores que o próprio dígito.

    public static List<String> cavityMap(List<String> grade) {
        
        // Lista para armazenar o resultado final
        List<String> resultado = new ArrayList<>();

        // Iteração sobre cada linha da grade
        for (int i = 0; i < grade.size(); i++) {

            // Verifica se é a primeira ou última linha e adiciona diretamente ao resultado
            if (i == 0 || i == grade.size() - 1) {
                
                resultado.add(grade.get(i));

                // Pula para a próxima iteração do loop
                continue;
            }

            // Cria um StringBuilder a partir da linha atual
            StringBuilder row = new StringBuilder(grade.get(i));
            
            // Iteração sobre cada caractere na linha, excluindo o primeiro e o último
            for (int j = 1; j < row.length() - 1; j++) {
                
                // Verifica se o caractere atual é maior que os caracteres ao seu redor
                if (row.charAt(j) > row.charAt(j + 1) && row.charAt(j) > row.charAt(j - 1) && 
                   (row.charAt(j) > grade.get(i - 1).charAt(j) && 
                   (row.charAt(j) > grade.get(i + 1).charAt(j)))) {

                    // Substitui o caractere por 'X' se atender às condições
                    row.setCharAt(j, 'X');
                    
                }
            }

            // Adiciona a linha modificada ao resultado
            resultado.add(row.toString());
        }

        // Retorna o resultado final
        return resultado;

    }
    
}
