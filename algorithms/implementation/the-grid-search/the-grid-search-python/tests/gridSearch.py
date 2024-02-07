
# O problema "The Grid Search" 
# no HackerRank é um problema 
# de busca em matriz (grid search). 
# A tarefa é encontrar se uma matriz 
# menor (pattern) está presente em 
# uma matriz maior (grid). Em outras 
# palavras, a tarefa é determinar se 
# existe uma submatriz idêntica à matriz 
# menor dentro da matriz maior.

# A entrada consiste em duas matrizes, 
# uma matriz maior (G) e uma matriz menor (P). 
# O objetivo é verificar se a matriz menor (P) 
# está contida em algum lugar dentro da matriz 
# maior (G). A resposta deve ser "YES" se a 
# matriz menor estiver presente, e "NO" caso contrário.

# A função gridSearch recebe duas listas bidimensionais G e P.

def gridSearch(G, P):
    
    # Loop para percorrer as linhas da grade maior G onde a grade menor P pode começar.
    for linha in range(len(G[0]) - len(P[0]) + 1):
        
        # Loop para percorrer as colunas da grade maior G onde a grade menor P pode começar.
        for coluna in range(len(G[0]) - len(P[0]) + 1):
            
            # Loop para percorrer as linhas da grade menor P.
            for i in range(len(P)):
                
                # Verifica se a linha atual da grade menor P é igual à linha correspondente da grade maior G.
                if P[i] != G[linha + i][coluna : coluna + len(P[0])]:
                    
                    # Se houver uma diferença, define 'encontrado' como 'NO' e sai do loop interno.
                    encontrado = 'NO'
                    
                    break 
                
                else: 
                    
                    # Se todas as linhas correspondentes são iguais, define 'encontrado' como 'YES'.
                    encontrado = 'YES'
                    
            # Se 'encontrado' for 'YES', retorna 'YES' para indicar que a grade menor foi encontrada.
            if encontrado == 'YES':
                
                return encontrado
    
    # Se nenhum 'YES' foi encontrado, retorna o valor atual de 'encontrado' (pode ser 'NO').
    return encontrado