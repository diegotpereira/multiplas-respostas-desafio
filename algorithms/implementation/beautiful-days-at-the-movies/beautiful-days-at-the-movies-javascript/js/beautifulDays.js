    // # A tarefa do problema é determinar 
    // # o número de dias belos entre duas datas fornecidas.

    // # Um dia é considerado belo se a diferença 
    // # entre o dia e seu dobro reverso é menor 
    // # que ou igual a uma distância específica (disparidade).


    // # Função que inverte os dígitos de um número e retorna o resultado como um inteiro.

export function beautifulDays(i, j, k) {

    // Inicializa o contador de dias perfeitos
    let diasPerfeitos = 0;

    // Loop através dos dias no intervalo [i, j]
    for (let dia = i; dia <= j; dia++) {
        
        // Calcula a diferença absoluta entre o dia e seu reverso
        let diferenca = Math.abs(dia - reverso(dia));

        // Verifica se a diferença é divisível por k
        if (diferenca % k == 0) {
            
            // Incrementa o contador de dias perfeitos
            diasPerfeitos += 1;
        }
        
    }

    // Retorna o total de dias perfeitos encontrados
    return diasPerfeitos;
    
}

function reverso(dia) {
    
    // Converte o número para string, reverte a string e converte de volta para inteiro
    return parseInt(dia.toString().split('').reverse().join(''))
}