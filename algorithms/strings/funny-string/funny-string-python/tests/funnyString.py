# A tarefa do problema "Funny String" do HackerRank 
# é determinar se uma string é engraçada ou não. 
# Uma string é considerada engraçada se a diferença 
# absoluta entre as classificações dos caracteres 
# adjacentes na string original é igual à diferença 
# absoluta entre as classificações dos caracteres 
# adjacentes na string reversa.

# Define a função funnyString que recebe uma string s como argumento
def funnyString(s):
    
    # Itera sobre os índices de 0 até o comprimento da string - 1
    for i in range(len(s) - 1):
        
        # Verifica se a diferença absoluta entre os valores ASCII dos caracteres adjacentes na string original
        # é diferente da diferença absoluta entre os valores ASCII dos caracteres adjacentes na string reversa
        if abs(ord(s[i]) - ord(s[i + 1])) != abs(ord(s[len(s) - i - 1]) - ord(s[len(s) - i - 2])):
            
            # Se as diferenças não forem iguais, retorna "Not Funny"
            return "Not Funny"
    
    # Se todas as diferenças forem iguais, retorna "Funny"
    return "Funny"