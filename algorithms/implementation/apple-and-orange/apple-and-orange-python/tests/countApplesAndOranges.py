# O problema "Apple and Orange" no HackerRank envolve a contagem de maçãs e laranjas que caem de árvores em uma linha. A tarefa é determinar quantas maçãs e quantas laranjas caem dentro de determinados intervalos em relação a uma posição fixa ao longo da linha.

# A descrição do problema inclui informações sobre a posição de uma casa ao longo da linha, a posição das árvores de maçã e laranja, as unidades de distância em que as frutas podem cair em relação às árvores, e as coordenadas de onde cada fruta cai.

# O objetivo é contar o número de maçãs e laranjas que caem dentro dos intervalos especificados (à esquerda e à direita da posição da casa) e imprimir esses dois contadores.

def countApplesAndOranges(localizacao_inicial, localizacao_final, localizacao_macieira, localizacao_laranjeira, macas, laranjas):
    
    # Inicializa contadores para maçãs e laranjas
    contar_macas = 0
    contar_laranjas = 0
    
    # Itera sobre as posições das maçãs
    for maca in macas:
        
        # Calcula a posição da maçã em relação à árvore
        posicao_maca = localizacao_macieira + maca 
        
        # Verifica se a maçã cai dentro do intervalo da casa
        if localizacao_inicial <= posicao_maca <= localizacao_final:
            
            contar_macas += 1
            
    # Itera sobre as posições das laranjas
    for laranja in laranjas:
        
        # Calcula a posição da laranja em relação à árvore
        posicao_laranja = localizacao_laranjeira + laranja
        
        # Verifica se a laranja cai dentro do intervalo da casa
        if localizacao_inicial <= posicao_laranja <= localizacao_final:
            
            contar_laranjas += 1
            
    # Armazena o resultado em uma lista de contadores [macas, laranjas]
    resultado = ([contar_macas, contar_laranjas])
    
    # Retorna a lista de contadores
    return resultado
