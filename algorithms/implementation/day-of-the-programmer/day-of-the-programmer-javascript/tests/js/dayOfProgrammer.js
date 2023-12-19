// O problema "Day of the Programmer" no HackerRank 
// solicita que você implemente uma função para encontrar 
// a data da transição do calendário juliano para o 
// calendário gregoriano durante o ano específico de 
// 1918. No calendário juliano, o ano 1918 é um ano 
// bissexto, mas a partir de 1919, o calendário gregoriano 
// é usado, e o 32º dia do ano é o dia 14 de fevereiro 
// (como nos anos bissextos gregorianos).

// A entrada do problema é um único inteiro representando 
// um ano. A saída esperada é uma string que representa a 
// data da transição do calendário juliano para o 
// gregoriano durante esse ano específico.

// export function dayOfProgrammer(ano) {
    
//     // Número total de dias até 31 de agosto (considerando um ano não bissexto)
//     let dias = 243;

//     // Mês de setembro
//     let mes = 9;

//     // Ajuste para o ano de 1918, onde a transição ocorre em 13 de fevereiro
//     if(ano == 1918) dias -= 13;

//     // Verifica se o ano é antes de 1918 e é bissexto no calendário juliano
//     else if(ano < 1918 && ano % 4 == 0) dias++;

//     // Verifica se o ano é após 1918 e é bissexto no calendário gregoriano
//     else if(ano > 1918 && ano % 4 == 0 && ano % 100 != 0) dias++;

//     // Verifica se o ano é bissexto no calendário gregoriano, considerando anos após 1918
//     if(ano > 1918 && ano % 400 == 0) dias++;

//     // Calcula o dia do Programador (256º dia do ano)
//     let dia = 256 - dias;

//     // Formata a data no formato desejado e retorna como uma string
//     return `${dia.toString().padStart(2, '0')}.${mes.toString().padStart(2, '0')}.${ano.toString().padStart(4, '0')}`;

// }

// export function dayOfProgrammer(ano) {

//     // Verifica se o ano é bissexto no calendário juliano ou gregoriano
//     if (((ano < 1918) && ano % 4 == 0) || (ano % 400 == 0) || ((ano % 4 == 0) && (ano % 100 != 0))) {
        
//         // Retorna a data formatada como string para anos bissextos
//         return `12.09.${ano}`;

//     } else if (ano != 1918) {
        
//         // Retorna a data formatada como string para anos não bissextos e diferentes de 1918
//         return `13.09.${ano}`
//     }

//     // Retorna a data formatada como string para o ano especial de transição em 1918
//     return `26.09.${ano}`
// }

export function dayOfProgrammer(ano) {

    // Inicializa um array com o número de dias em cada mês, considerando um ano não bissexto
    let arrMeses = [31,28,31,30,31,30,31,31,30,31,30,31];

    // Verifica se o ano é antes de 1918
    if (ano < 1918) {

        // Se for bissexto, atualiza o número de dias em fevereiro para 29
        if(ano % 4 == 0) arrMeses[1] = 29;
        
    // Verifica se o ano é 1918
    } else if (ano == 1918) {
        
        // Atualiza o número de dias em fevereiro para 15, considerando a transição especial
        arrMeses[1] = 15;

    // Verifica se o ano é após 1918
    } else if (ano > 1918) {
        
        // Se for bissexto no calendário gregoriano, atualiza o número de dias em fevereiro para 29
        if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {

            arrMeses[1] = 29;
            
        }
    }

    // Inicializa variáveis para armazenar o mês e contar o total de dias
    let mes = 0;
    let contarDias = 0;

    // Itera sobre os meses
    for (let index = 1; index <= arrMeses.length; index++) {
        
        // Verifica se o total de dias ultrapassa ou iguala 256
        if (contarDias + arrMeses[index] >= 256) {
            
            // Retorna a data formatada como string quando ultrapassa 256 dias
            return `${(256 - contarDias)}.${String(mes + 1).padStart(2, '0')}.${ano}`;

        } else {

            // Atualiza o mês e o total de dias
            mes = index;
            contarDias += arrMeses[index - 1]
        }
        
    }
}