// A tarefa do problema é determinar a quantidade de dias 
// de multa que uma pessoa deve pagar, levando em 
// consideração as datas de devolução e de vencimento do livro.

export function libraryFine(d1, m1, a1, d2, m2, a2) {

    // Inicializa a variável multa como 0
    let multa = 0;

    // Verifica se o ano de devolução é igual ao ano esperado
    if (a1 == a2) {
        
        // Se o mês de devolução for igual ao mês esperado
        if (m1 == m2) {
            
            // Calcula a multa diária usando operador ternário: 15 * (d1 - d2) se d1 > d2, caso contrário, multa é 0
            multa = (d1 > d2) ? (15 * (d1 - d2)) : (0);

        } else {

            // Calcula a multa mensal usando operador ternário: 500 * (m1 - m2) se m1 > m2, caso contrário, multa é 0
            multa = (m1 > m2) ? (500 * (m1 - m2)) : (0);

        }

    } else {

        // Se o ano de devolução é maior que o ano esperado, a multa é 10000, caso contrário, multa é 0
        multa = (a1 > a2) ? (10000) : (0);
    }

    // Retorna o valor da multa calculado
    return multa;
    
}