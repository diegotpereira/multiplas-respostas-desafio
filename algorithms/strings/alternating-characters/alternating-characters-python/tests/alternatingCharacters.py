# A tarefa do problema "Alternating Characters" 
# do HackerRank é a seguinte:

# Dada uma string contendo apenas os caracteres 
# 'A' e 'B', você precisa contar o número mínimo 
# de deletações necessárias para tornar a string 
# alternada. Uma string é chamada de alternada 
# se não contiver dois caracteres adjacentes 
# idênticos. Por exemplo, a string "ABABAB" é 
# alternada, mas a string "AAABBB" não é.

# A tarefa consiste em implementar uma função 
# alternatingCharacters que receba uma string 
# e retorne o número mínimo de deletações 
# necessárias para tornar a string alternada.

# Por exemplo:

# Se a entrada for "AAAA", a função deve retornar 
# 3, pois é necessário deletar 3 caracteres 'A' 
# para tornar a string alternada.
# Se a entrada for "ABABABAB", a função deve retornar 
# 0, pois a string já é alternada.
# Essa tarefa geralmente envolve a iteração pela string 
# e a contagem dos caracteres consecutivos iguais para 
# determinar quantos caracteres precisam ser deletados.

# Define uma função chamada alternatingCharacters que recebe uma string s como argumento

def alternatingCharacters(s):
    
    # Inicializa uma variável chamada deletar 
    # para contar o número de deletações necessárias
    deletar = 0
    
    # Calcula o comprimento da string s e armazena na variável tamanho
    tamanho = len(s)
    
    # Verifica se o tamanho da string é maior que 1
    if(tamanho > 1):
        
        # Loop sobre todos os índices da string, exceto o último
        for i in range(tamanho - 1):
            
            # Verifica se o caractere atual é igual ao próximo caractere
            if(s[i] == s[i + 1]):
                
                # Incrementa a contagem de deletar
                deletar += 1
    
    # Retorna o número total de deletações necessárias para tornar a string alternada
    return deletar
    