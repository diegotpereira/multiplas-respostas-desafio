# O problema "Diagonal Difference" no HackerRank solicita 
# que você encontre a diferença absoluta entre as somas 
# das diagonais de uma matriz quadrada.

# A entrada consiste em uma matriz quadrada de ordem n (ou seja, uma matriz n × n). 
# A tarefa é calcular a diferença absoluta entre a soma 
# dos elementos na diagonal principal e a soma dos elementos na diagonal secundária.

# def diagonalDifference(arr):
    
#     # Obtém a ordem da matriz (n x n)
#     n = len(arr)
    
#     # Inicializa as somas das diagonais principal e secundária
#     primaria_soma = 0
#     secundaria_soma = 0
    
#     # Percorre as linhas da matriz
#     for i in range(n):
        
#         # Adiciona o elemento da diagonal principal à soma
#         primaria_soma += arr[i][i]
        
#         # Adiciona o elemento da diagonal secundária à som
#         secundaria_soma += arr[i][n - i - 1]
    
#     # Retorna a diferença absoluta entre as somas das diagonais
#     return abs(primaria_soma - secundaria_soma)

def diagonalDifference(arr):
    
    # Obtém a ordem da matriz (n x n)
    n = len(arr)
    
    # Inicializa as somas das diagonais principal e secundária
    soma1 = 0
    soma2 = 0
    
    # Loop para percorrer as linhas da matriz
    for i in range(n):
        
        # Loop para percorrer as colunas da matriz
        for j in range(n):
            
            # Verifica se o índice atual está na diagonal principal
            if (i == j):
                
                # Adiciona o elemento da diagonal principal à soma1
                soma1 += arr[i][j]
                
            # Verifica se o índice atual está na diagonal secundária
            if (i + j == n - 1):
                
                # Adiciona o elemento da diagonal secundária à soma2
                soma2 += arr[i][j]
                
    # Retorna a diferença absoluta entre as somas das diagonais
    return abs(soma1 - soma2)