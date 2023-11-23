// # O problema "Apple and Orange" no HackerRank envolve a contagem de maçãs e laranjas que caem de árvores em uma linha. A tarefa é determinar quantas maçãs e quantas laranjas caem dentro de determinados intervalos em relação a uma posição fixa ao longo da linha.

// # A descrição do problema inclui informações sobre a posição de uma casa ao longo da linha, a posição das árvores de maçã e laranja, as unidades de distância em que as frutas podem cair em relação às árvores, e as coordenadas de onde cada fruta cai.

// # O objetivo é contar o número de maçãs e laranjas que caem dentro dos intervalos especificados (à esquerda e à direita da posição da casa) e imprimir esses dois contadores.

function countApplesAndOranges(localizacao_inicial, localizacao_final, localizacao_macieira, localizacao_laranjeira, macas, laranjas) {

    let contar_macas = 0;
    let contar_laranjas = 0;

    for (const maca of macas) {

        if (macas[maca] + localizacao_macieira >= localizacao_inicial && macas[maca] + localizacao_macieira <= localizacao_final) {
            
            contar_macas = contar_macas + 1;
            
        }
    }

    for (const laranja of laranjas) {

        if (laranjas[laranja] + localizacao_laranjeira >= localizacao_inicial && laranjas[laranja] + localizacao_laranjeira <= localizacao_final) {
            
            contar_laranjas = contar_laranjas + 1;
            
        }
    }
    
    return[contar_macas, contar_laranjas];
}

export default countApplesAndOranges;

