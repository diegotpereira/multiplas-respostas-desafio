from itertools import combinations
from collections import Counter

# Definindo a função acmTeam que recebe uma lista de números binários representando tópicos
def acmTeam(topico):
    
    # Obtendo o número de elementos na lista de tópicos
    n = len(topico)
    
    # Gerando todas as combinações possíveis de pares de índices (todos_combinacoes_possiveis)
    todos_combinacoes_possiveis = combinations(range(n), 2)    
        
    # Contando a quantidade de '1's em cada par de tópicos e armazenando os resultados em um Counter
    resultados = Counter(
    sum(
        1 for i, j in zip(topico[p1], topico[p2]) if '1' in (i, j)
    ) 
    for p1, p2 in todos_combinacoes_possiveis
)
    
    # Retornando o par (equipe, quantidade de '1's) com a maior quantidade de '1's
    return max(resultados.items())
