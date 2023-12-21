// A tarefa do problema é determinar o nível de energia 
// restante após o personagem pular de nuvem em nuvem 
// até voltar ao ponto de partida. O problema envolve 
// um jogo em que há nuvens numeradas sequencialmente 
// que podem ser nuvens de trovão ou nuvens cumulus. 
// O personagem começa em uma determinada nuvem e usa 
// uma unidade de energia para pular para a nuvem seguinte 
// com um tamanho de salto k. Se o personagem pousar 
// em uma nuvem de trovão, sua energia diminui por uma 
// quantidade adicional. O jogo termina quando o personagem 
// pousa novamente na nuvem inicial. O objetivo é determinar 
// o valor final da energia após o término do jogo.


export function jumpingOnClouds(c, k) {

    // Obtém o comprimento do array de nuvens
    let n = c.length;

    // Inicializa o contador com a energia total
    let contador = 100 - (n / k) - (n % k)  * k;

    // Loop para simular os pulos nas nuvens
    for (let index = 0; index < n; index++) {
        
        // Verifica se a posição atual é um múltiplo de k (pulo realizado)
        if (index % k == 0) {
            
            // Reduz a energia com base nas condições dadas
            contador = contador - (2 * c[index]) - (n % k) * k;
        }
        
    }
    
    // Retorna a energia restante após os pulos
    return contador;
}