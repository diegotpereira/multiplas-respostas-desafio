

export function acmTeam(topicos) {

    // Obtendo o número de tópicos na lista
    const n = topicos.length;

    // Lista para armazenar os resultados (quantidade máxima de '1's e número de equipes com essa quantidade)
    const resultados = [];

    // Variáveis para armazenar a quantidade máxima de '1's e o número de equipes com essa quantidade
    let max = 0;
    let semTime = 0;

    // Iterando sobre todas as combinações de pares de tópicos
    for (let p1 = 0; p1 < n - 1; p1++) {
        
        for (let p2 = p1 + 1; p2 < n; p2++) {
            
            // Contador para contar a quantidade de '1's em cada posição dos tópicos
            let contador = 0;

            // Obtendo os tópicos para a combinação atual
            const topico1 = topicos[p1];
            const topico2 = topicos[p2];

            // Iterando sobre cada posição dos tópicos
            for (let k = 0; k < topicos[0].length; k++) {
                
                // Verificando se há um '1' em pelo menos um dos tópicos
                if (topico1.charAt(k) == '1' || topico2.charAt(k) == '1') {
                    
                    // Incrementando o contador se houver um '1'
                    contador += 1;
                }
                
            }

            // Atualizando a quantidade máxima e o número de equipes sem time
            if (max < contador) {
                
                max = contador;

                semTime = 1;

            } else if (max === contador) {
                
                semTime += 1
            }
            
            // Resetando o contador
            contador = 0;
        }
        
    }

    // Adicionando os resultados à lista
    resultados.push(max);
    resultados.push(semTime);

    // Retornando a lista de resultados
    return resultados;
}