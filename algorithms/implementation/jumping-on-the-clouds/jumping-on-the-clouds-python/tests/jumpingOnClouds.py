# O problema "Jumping on the Clouds" 
# no HackerRank é um problema de 
# programação que envolve encontrar 
# a quantidade mínima de pulos necessários 
# para percorrer um caminho de nuvens. 
# O link fornecido leva à descrição 
# completa do problema, mas aqui está um resumo da tarefa:

# Dado um array de nuvens representado 
# por 0s e 1s, onde 0 indica uma nuvem 
# segura e 1 indica uma nuvem de trovão 
# (que não pode ser pulada), o objetivo 
# é encontrar o número mínimo de pulos 
# necessários para chegar à última nuvem 
# do array. As regras para os pulos são as seguintes:

# Define uma função chamada jumpingOnClouds que recebe um array c representando as nuvens.

def jumpingOnClouds(c):
    
    # Inicializa o índice para acompanhar a posição atual e o contador de pulos.
    indice = 0
    pulo = 0
    
    # Enquanto o índice for menor que o comprimento do array - 1 (ainda não atingiu a última nuvem).
    while indice < (len(c) - 1):
        
        # Verifica se é possível fazer um pulo de 2 nuvens sem pousar em uma nuvem de trovão.
        if(indice + 2 < len(c) and c[indice + 2] != 1):
            
            # Se possível, faz um pulo de 2 nuvens.
            indice += 2
            
        else:
            
            # Caso contrário, faz um pulo de 1 nuvem.
            indice += 1
            
        # Incrementa o contador de pulos.
        pulo += 1
    
     # Retorna o número total de pulos necessários.
    return pulo