import java.util.*;

// # O problema em questão no HackerRank, 
// # com o título "Grading Students" (Arredondamento de Notas), 
// # pede que você implemente uma função que realize o arredondamento 
// # de notas de estudantes de acordo com as seguintes regras:

// # Se a diferença entre a nota e o próximo múltiplo 
// # de 5 for menor que 3, arredonde a nota para o próximo 
// # múltiplo de 5.
// # Se a nota for menor que 38, não faça nenhum 
// # arredondamento, pois a diferença entre a nota e o 
// # próximo múltiplo de 5 seria maior ou igual a 3.
// # A entrada do problema consiste em uma lista de notas, 
// # e a saída esperada é uma nova lista de notas após o arredondamento.

public class Resultado {

    // public static List<Integer> gradingStudents(List<Integer> grades) {

    //     // Lista para armazenar as notas corrigidas
    //     List<Integer> notasCorrigias = new ArrayList<>();

    //     // Itera sobre as notas da lista original
    //     for (int grade : grades) {
            
    //         // Verifica se a nota não atende aos critérios de arredondamento
    //         if (grade < 38 || grade % 5 < 3) {
                
    //             // Se não atende, 
    //             // a nota permanece inalterada e é adicionada à lista corrigida
    //             notasCorrigias.add(grade);

    //         // Se atende aos critérios, calcula o próximo múltiplo de 5 e adiciona à lista corrigida
    //         } else {

    //             // Calcula a divisão inteira por 5
    //             int divisaoInteira = Math.floorDiv(grade, 5);

    //             // Adiciona o próximo múltiplo de 5
    //             notasCorrigias.add(5 * (divisaoInteira + 1));
    //         }
    //     }

    //     return notasCorrigias;
    // }
    
    // Função para arredondar as notas conforme as regras especificadas

    // public static List<Integer> gradingStudents(List<Integer> grades) {

    //     // Utiliza a função replaceAll para processar cada nota na lista
    //     grades.replaceAll(grade -> 
    
    //     // Verifica se a nota atende às condições de arredondamento
    //     ((grade + 1) % 5 == 0 && grade >= 38) ?
    //     grade + 1 : ((grade + 2) % 5 == 0 && grade >= 38) ?
    //     grade + 2 : grade);

    //     // Retorna a lista de notas processada
    //     return grades;
    // }

    // Função para arredondar as notas conforme as regras especificadas
    public static List<Integer> gradingStudents(List<Integer> grades) {
        
        // Lista para armazenar as notas arredondadas
        List<Integer> rodada_de_notas = new ArrayList<>();

        // Loop sobre todas as notas no array
        for (int index = 0; index < grades.size(); index++) {
            
            // Verifica se a nota é menor que 38
            if (grades.get(index) < 38) {
                
                // Se for menor que 38, 
                // a nota permanece inalterada e é adicionada à lista de notas arredondadas
                rodada_de_notas.add(grades.get(index));

            } else {

                // Se a nota é um múltiplo de 5, ela já está arredondada
                if (grades.get(index) % 5 == 0) {
                    
                    // Adiciona a nota à lista de notas arredondadas
                    rodada_de_notas.add(grades.get(index));

                } else if (grades.get(index) % 5 == 3) {
                    
                    // Se a diferença entre a nota e o próximo múltiplo de 5 é 3, adiciona 2 à nota
                    rodada_de_notas.add(grades.get(index) + 2);

                } else if (grades.get(index) % 5 == 4) {
                    
                    // Se a diferença entre a nota e o próximo múltiplo de 5 é 4, adiciona 1 à nota
                    rodada_de_notas.add(grades.get(index) + 1);

                } else {

                    // Caso contrário, a nota permanece inalterada e é adicionada à lista de notas arredondadas
                    rodada_de_notas.add(grades.get(index));
                }
            }
        }

        // Retorna a lista de notas arredondadas
        return rodada_de_notas;
    }
}
