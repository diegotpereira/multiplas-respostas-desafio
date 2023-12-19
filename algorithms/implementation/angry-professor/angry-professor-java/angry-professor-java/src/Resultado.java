import java.util.List;
import java.util.stream.Collectors;

public class Resultado {

    // Enunciado:

    // Um professor ficará zangado se a turma começar a aula atrasada. 
    // Ele cancelará a aula se o número de alunos presentes for menor 
    // do que um certo valor mínimo. Dada a lista de chegadas dos alunos, 
    // você precisa determinar se a aula será cancelada

    // Formato de entrada:

    // A primeira linha contém um inteiro, T, representando o número 
    // de casos de teste.
    // Cada caso de teste é composto por duas linhas. A primeira linha 
    // contém dois inteiros, N e K, onde N é o número de alunos na turma 
    // e K é o número mínimo de alunos necessários para não cancelar a aula. 
    // A segunda linha contém N inteiros separados por espaços, representando 
    // os tempos de chegada de cada aluno.

    // Método que verifica se a aula será cancelada com base no número mínimo 
    // de alunos necessários (k) e nos tempos de chegada dos alunos (a)

    // public static String angryProfessor(int k, List<Integer> a) {

    //     // Inicializa um contador para contar o número de alunos que chegaram atrasados
    //     int contador = 0;

    //     // Itera sobre a lista de tempos de chegada dos alunos
    //     for (int i : a) {
            
    //         // Verifica se o tempo de chegada do aluno é menor 
    //         // ou igual a zero (atrasado ou pontual)
    //         if (i <= 0) {
                
    //             // Incrementa o contador se o aluno chegou atrasado ou pontual
    //             contador += 1;

    //         } 
    //     }

    //     // Retorna "NO" se o número de alunos atrasados ou 
    //     // pontuais for maior ou igual ao mínimo necessário (k), caso contrário, retorna "YES"
    //     return (contador >= k) ? "NO" : "YES";
    // }


    // public static String angryProfessor(int k, List<Integer> a) {

    //     // Inicializa um contador para contar o número de alunos que chegaram atrasados
    //     int contador = 0;

    //     // Itera sobre a lista de tempos de chegada dos alunos
    //     for (int i = 0; i < a.size(); i++) {
    
    //         if (a.get(i) <= 0) {
                
    //             contador += 1;
    //         }
    //     }

    //     // Verifica se o tempo de chegada do aluno é menor 
    //     // ou igual a zero (atrasado ou pontual)
    //     if (contador >= k) {
            
    //         // Retorna "NO" se o número de alunos atrasados ou 
    //         return "NO";

    //     } else {

    //         // pontuais for maior ou igual ao mínimo necessário (k), caso contrário, retorna "YES"
    //         return "YES";
    //     }
    // }
    
    // Método que verifica se a aula será cancelada com base no número mínimo de alunos necessários (k)
    // e nos tempos de chegada dos alunos (a)

    // public static String angryProfessor(int k, List<Integer> a) {

    //     // Filtra os elementos de 'a' que são menores ou iguais a zero (atrasados ou pontuais)
    //     List<Integer> contar = a.stream().filter(item -> item <= 0).collect(Collectors.toList());

    //     // Retorna "NO" se o número de alunos atrasados ou pontuais for maior ou igual ao mínimo necessário (k),
    //     // caso contrário, retorna "YES"
    //     return contar.size() >= k ? "NO" : "YES";
    // }

    // // Método alternativo que verifica se a aula será cancelada com base no número mínimo de alunos necessários (k)
    // // e nos tempos de chegada dos alunos (a)

    // public static String angryProfessor(int k, List<Integer> a) {

    //     // Filtra os elementos de 'a' que são menores ou iguais a zero (atrasados ou pontuais) e conta-os
    //     int contar = (int) a.stream().filter(item -> item <= 0).count();

    //     // Retorna "NO" se o número de alunos atrasados ou pontuais for maior ou igual ao mínimo necessário (k),
    //     // caso contrário, retorna "YES"
    //     return contar >= k ? "NO" : "YES";

    // }
}
