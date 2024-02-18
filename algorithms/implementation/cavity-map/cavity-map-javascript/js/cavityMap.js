// # O problema "Cavity Map" no HackerRank 
// # solicita que você identifique cavidades 
// # em um mapa bidimensional. O mapa é 
// # representado por uma grade de dígitos, 
// # onde cada dígito representa a altura de 
// # uma célula. Uma célula é considerada uma 
// # cavidade se e somente se todos os dígitos 
// # ao seu redor (acima, abaixo, à esquerda e à direita) 
// # forem estritamente menores que o próprio dígito.


// Função que recebe uma grade e realiza as modificações descritas no problema

export function cavityMap(grade) {
    
    // Inicializa a variável resultado com a grade original
    let resultado = grade;

    // Loop para iterar sobre as linhas da grade (excluindo a primeira e a última)
    for (let index = 1; index < grade.length - 1; index++) {

        // Loop para iterar sobre os elementos de cada linha (excluindo o primeiro e o último)
        for (let compare = 1; compare < grade.length - 1; compare++) {
            
            // Verifica se o elemento atual é maior que seus vizinhos
            if (grade[index][compare] > grade[index][compare - 1] &&
                grade[index][compare] > grade[compare + 1] &&
                grade[index][compare] > grade[index - 1][compare] && 
                grade[index][compare] > grade[index + 1][compare]) {

                    // Substitui o elemento por 'X' se atender às condições
                    grade[compare] = grade[index].substring(0, compare) + 'X' + grade[index].substring(compare + 1);
                

            }
            
        }

        return resultado;
    }

}

