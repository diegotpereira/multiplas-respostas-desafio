# Juninho descobriu várias rochas. 
# Cada rocha é composta por vários 
# elementos, e cada elemento é 
# representado por uma letra 
# minúscula latina de 'a' a 'z'. 
# Um elemento pode estar presente 
# diversas vezes em uma rocha. Um 
# elemento é chamado de 
# "elemento-gema" se ocorrer pelo 
# menos uma vez em cada uma das rochas.

# Dada a lista de rochas com suas 
# composições, você tem que imprimir 
# quantos tipos diferentes de 
# elementos-gema Juninho tem.

# Define a função gemstones que recebe uma lista de strings chamada arr.

def gemstones(arr):
    
    # Inicializa um dicionário vazio para armazenar a frequência de cada caractere nas strings.
    freq = {}
    
    # Inicializa uma variável gemas para contar o número de gemas comuns a todas as strings.
    gemas = 0
    
    # Itera sobre cada string (rocha) na lista arr.
    for rocha in arr:
        
        # Itera sobre cada caractere (m) e seu índice (i) na string rocha usando a função enumerate().
        for i, m in enumerate(rocha):
            
            # Verifica se o índice atual é o primeiro índice onde o caractere m aparece na string rocha.
            if i == rocha.index(m):
                
                # Atualiza a frequência do caractere m no dicionário freq.
                freq[m] = freq.get(m, 0) + 1
                
                # Verifica se a frequência do caractere m é igual ao comprimento da lista arr,
                # indicando que ele está presente em todas as strings.
                if freq[m] == len(arr):
                    
                    # Se o caractere estiver presente em todas as strings, incrementa o contador de gemas.
                    gemas += 1
                
    # Retorna o número total de gemas comuns a todas as strings.    
    return gemas