# A tarefa do problema "Beautiful Triplets" no HackerRank 
# é determinar o número de triplets de números em uma 
# sequência que atendem a uma determinada condição.

# Especificamente, a condição é que os números devem estar 
# em uma sequência crescente e a diferença entre os números 
# consecutivos deve ser igual a uma constante dada, chamada 
# de "d". O objetivo é encontrar quantos triplets existem 
# na sequência que satisfazem essa condição.

# Define uma função chamada beautifulTriplets que recebe dois 
# parâmetros: d (a diferença entre os elementos da triplet) e arr (a lista de números)
def beautifulTriplets(d, arr):
    
    # Inicializa um contador para contar o número de tripletas bonitas encontradas
    contador = 0
    
    # Inicializa um conjunto vazio s, que será usado para armazenar os números já processados
    s = set()
    
    # Itera sobre cada elemento num na lista arr
    for num in arr:
        
        # Verifica se o elemento num + d e o elemento num + 2 * d estão presentes na lista arr
        if (num + d) in arr and (num + 2 * d) in arr:
            
            # Se ambos os elementos estiverem presentes, incrementa o contador de tripletas bonitas encontradas
            contador += 1
        
    # Retorna o contador de tripletas bonitas encontradas
    return contador