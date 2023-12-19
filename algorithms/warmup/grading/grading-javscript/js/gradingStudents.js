// Função para arredondar as notas conforme as regras especificadas
// export function gradingStudents(grades) {
    
//     // Loop sobre todas as notas no array
//     for (let index = 0; index < grades.length; index++) {

//         // Calcula o próximo múltiplo de 5 para a nota atual
//         const element = Math.ceil(grades[index] / 5) * 5;

//         // Verifica se a nota é maior ou igual a 38 e se a diferença entre o próximo múltiplo de 5 e a nota é menor que 3
//         if (grades[index] >= 38 && element - grades[index] < 3) {
            
//             // Se as condições são atendidas, substitui a nota pela próxima múltiplo de 5
//             grades[index] = element;
//         }
//     }

//     // Retorna o array de notas processado
//     return grades;
// }


export function gradingStudents(grades) {

    // Utiliza o método map para aplicar a lógica de arredondamento a cada nota na lista
    return grades.map((grade) => {

        // Calcula a diferença até o próximo múltiplo de 5
        let novaGrande = Math.ceil(grade / 5) * 5 - grade;

        // Retorna a nova nota arredondada ou a nota original, dependendo das condições
        return (novaGrande < 3 && grade >= 38) ? Math.ceil(grade / 5) * 5 : grade
    });
}