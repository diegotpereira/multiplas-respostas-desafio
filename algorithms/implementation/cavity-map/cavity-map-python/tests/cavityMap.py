
# O problema "Cavity Map" no HackerRank 
# solicita que você identifique cavidades 
# em um mapa bidimensional. O mapa é 
# representado por uma grade de dígitos, 
# onde cada dígito representa a altura de 
# uma célula. Uma célula é considerada uma 
# cavidade se e somente se todos os dígitos 
# ao seu redor (acima, abaixo, à esquerda e à direita) 
# forem estritamente menores que o próprio dígito.

# A função 'cavityMap' recebe uma matriz 'grade' representando um mapa bidimensional de dígitos.

def cavityMap(grade):
    
    # Obtém o número de linhas na matriz, assumindo que todas as linhas têm o mesmo comprimento.
    n = len(grade)
    
    # Loop externo percorrendo as linhas da matriz, excluindo a primeira e a última linha.
    for i in range(1, n - 1):
        
        # Loop interno percorrendo as colunas da matriz, excluindo a primeira e a última coluna.
        for j in range(1, n - 1):
            
            # Condição: Verifica se o dígito na célula atual é maior que os dígitos ao seu redor.
            if int(grade[i][j]) > int(grade[i - 1][j]) and int(grade[i][j]) > int(grade[i + 1][j]) and int(grade[i][j]) > int(grade[i][j - 1]) and int(grade[i][j]) > int(grade[i][j + 1]):
               
               # Se a condição for verdadeira, substitui o dígito na célula atual por 'X'.
               # A linha a seguir realiza essa substituição, utilizando fatiamento de strings.
               grade[i] = grade[i][:j] + 'X' + grade[i][j + 1:]
    
    # Retorna a matriz modificada
    return grade