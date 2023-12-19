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


// // Função que verifica se a aula será cancelada com base no número mínimo de alunos necessários (k)
// // e nos tempos de chegada dos alunos (a)

// export function angryProfessor(k, a) {
    
//     // Inicializa um contador para contar o número de alunos que chegaram atrasados ou pontuais
//     let contador = 0;

//     // Itera sobre os elementos do array 'a'
//     for (const i in a) {

//         // Verifica se o elemento atual (tempo de chegada do aluno) é menor ou igual a zero (atrasado ou pontual)
//         if (i <= 0) {
            
//             // Incrementa o contador se o aluno chegou atrasado ou pontual
//             contador += 1;
            
//         }
//     }

//     // Retorna "NO" se o número de alunos atrasados ou pontuais for maior que o mínimo necessário (k),
//     // caso contrário, retorna "YES"
//     return (contador > k) ? "NO" : "YES";
// }


// // Função que verifica se a aula será cancelada com base no número mínimo de alunos necessários (k)
// // e nos tempos de chegada dos alunos (a)

// export function angryProfessor(k, a) {

//     // Inicializa uma variável para contar o número de estudantes que chegaram na hora certa
//     let estudanteNaHoraCerta = 0;

//     // Itera sobre os tempos de chegada dos alunos usando forEach
//     a.forEach((tempo) => {

//         // Verifica se o tempo de chegada do aluno é menor ou igual a zero (atrasado ou pontual)
//         tempo <= 0 && estudanteNaHoraCerta++
//     });

//     // Retorna "NO" se o número de alunos atrasados ou pontuais for maior ou igual ao mínimo necessário (k),
//     // caso contrário, retorna "YES"
//     return estudanteNaHoraCerta >= k ? 'NO' : 'YES';
// }


// Função que verifica se a aula será cancelada com base no número mínimo de alunos necessários (k)
// e nos tempos de chegada dos alunos (a)

export function angryProfessor(k, a) {

    // Filtra os elementos de 'a' que são menores ou iguais a zero (atrasados ou pontuais)
    let contar = a.filter(item => item <= 0);

    // Retorna "NO" se o número de alunos atrasados ou pontuais for maior ou igual ao mínimo necessário (k),
    // caso contrário, retorna "YES"
    return contar.length >= k ? 'NO' : 'YES';

}