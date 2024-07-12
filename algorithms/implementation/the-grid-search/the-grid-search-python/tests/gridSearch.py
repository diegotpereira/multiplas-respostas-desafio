
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
    

    rows_G = len(G)
    cols_G = len(G[0])
    rows_P = len(P)
    cols_P = len(P[0])
    
    for linha in range(rows_G - rows_P + 1):
        for coluna in range(cols_G - cols_P + 1):
            found = True
            for i in range(rows_P):
                if P[i] != G[linha + i][coluna:coluna + cols_P]:
                    found = False
                    break
            if found:
                return "YES"
    
    return "NO"