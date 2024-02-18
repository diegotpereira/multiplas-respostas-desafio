# Dada uma lista de números inteiros, 
# você precisa encontrar a menor distância 
# entre dois números iguais. A distância 
# entre dois índices, i e j, é definida 
# como |i - j|. Se não houver dois 
# elementos iguais na lista, o programa 
# deve imprimir -1.

# Em termos simples, a tarefa envolve 
# encontrar a menor distância entre dois 
# elementos iguais em uma lista de inteiros.

# A entrada consiste em um único array de 
# inteiros, e a saída deve ser um único 
# número inteiro representando a menor 
# distância entre dois elementos iguais. 
# Se não houver dois elementos iguais, 
# a saída deve ser -1.

# Define a função minimumDistances que recebe uma lista de números inteiros 'a'

def minimumDistances(a):
    
    # Inicializa a variável min_distancia com infinito positivo
    min_distancia = float('inf')
    
    # Cria um dicionário para armazenar os índices dos elementos vistos
    indices = {}
    
    # Itera sobre os índices da lista 'a'
    for i in range(len(a)):
        
        # Verifica se o elemento a[i] já foi visto antes
        if a[i] in indices:
            
            # Calcula a distância entre os índices atual e anterior do elemento a[i]
            distancia = i - indices[a[i]]
            
            # Atualiza a menor distância, se a distância atual for menor
            min_distancia = min(min_distancia, distancia)
            
        # Atualiza o índice do elemento a[i] no dicionário
        indices[a[i]] = i 
        
    # Retorna a menor distância encontrada ou -1 se não houverem elementos iguais
    return min_distancia if min_distancia != float('inf') else - 1