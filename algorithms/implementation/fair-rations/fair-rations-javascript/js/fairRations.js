// O problema "Fair Rations" no HackerRank 
// solicita que você determine o número mínimo 
// de pães que um distribuidor deve distribuir 
// para que todas as pessoas em uma fila tenham 
// um número par de pães. Você só pode distribuir 
// pães a duas pessoas de cada vez e só pode distribuir 
// um pão a cada uma dessas duas pessoas.

// A entrada consiste em um array representando 
// a quantidade de pães inicialmente possuída por 
// cada pessoa na fila. O seu objetivo é determinar 
// o número mínimo de pães que o distribuidor deve 
// dar para que todas as pessoas tenham um número par de pães.

// Função que determina o número mínimo de pães necessários
export function fairRations(B) {

    // Inicializa um contador para contar o número de pães distribuídos
    let contador = 0;

    // Loop através de cada pessoa na fila, exceto a última
    for (let index = 0; index < B.length -1; index++) {
        
        // Verifica se a pessoa atual tem um número ímpar de pães
        if (B[index] % 2 != 0) {
            
            // Verifica se há uma próxima pessoa na fila para receber o pão
            if (index + 1 < B.length) {
                
                // Distribui um pão para a pessoa atual e a próxima pessoa
                B[index] += 1;

                B[index + 1] += 1;

                // Incrementa o contador de pães distribuídos em 2
                contador += 2;

            } else {

                // Se não houver uma próxima pessoa na fila, 
                // não é possível garantir que todas tenham um número par de pães
                return 'NO'
            }
            
        }
        
    }

    // Verifica se a última pessoa na fila tem um número par de pães
    if (B[B.length - 1] % 2 == 0) {
            
        // Se sim, retorna o número total de pães distribuídos
        return contador;

    } else {

        // Se não, não é possível garantir que todas tenham um número par de pães
        return 'NO';
    }
    
}