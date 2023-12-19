// # A tarefa do problema é calcular 
// # a contagem de dias belos em um intervalo de anos.

// # Um dia é considerado belo se a 
// # soma de seus dígitos reversos 
// # é igual a ele mesmo (por exemplo, 12 é um dia belo porque 1 + 2 = 12).

// # Além disso, o valor absoluto da 
// # diferença entre o mês e o mês reversa deve ser menor ou igual a k.

// Função para calcular o número total de curtidas após n dias
export function viralAdvertising(n) {

    // Inicializa o acumulador de curtidas
    let curtidasAcumuladas = 0;

    // Inicializa o número de pessoas que compartilham o anúncio no primeiro dia
    let compartilhado = 5;

    // Loop para cada dia
    for (let index = 0; index < n; index++) {
        
        // Calcula o número de curtidas no dia atual (arredondando para baixo)
        let curtidasHj = Math.floor(compartilhado / 2);
        
        // Adiciona o número de curtidas do dia atual ao acumulador
        curtidasAcumuladas += curtidasHj;

        // Calcula o número de pessoas que compartilharão o anúncio no próximo dia (arredondando para baixo)
        compartilhado = Math.floor(compartilhado / 2) * 3;
        
    }
    
    // Retorna o total acumulado de curtidas após n dias
    return curtidasAcumuladas;
    
}

