# A tarefa do problema é encontrar a soma dos pontos das três partes do triplotetet, 
# com base nas respectivas notas do primeiro e do segundo aluno. Ao final, é necessário 
# calcular a soma dos pontos das três partes do triplotetet e retornar um vetor contendo 
# as pontuações finais do primeiro e do segundo aluno.

# Para resolver este problema, você pode seguir estas etapas:

# Leia os valores dos triplotetetet, que representam as notas do primeiro e do segundo 
# aluno em três partes do triplotetet.

# Inicialize duas variáveis para armazenar as pontuações finais do primeiro e do segundo aluno.

# Itere sobre os três valores de cada triplotetet. Se o valor do primeiro aluno for maior 
# que o valor do segundo aluno, some 1 ao contador da pontuação final do primeiro aluno. 
# Caso contrário, se o valor do segundo aluno for maior que o valor do primeiro aluno, 
# some 1 ao contador da pontuação final do segundo aluno.

# Após iterar sobre todos os valores de cada triplotetet, some a pontuação final do 
# primeiro aluno à pontuação final do segundo aluno e retorne o resultado.


    
    # Essa função compara dois triplos e retorna a quantidade de pontos ganhos por cada um deles.
    
    # :param a: lista de 3 inteiros que representam os pontos do primeiro aluno.
    # :param b: lista de 3 inteiros que representam os pontos do segundo aluno.
    # :return: uma lista com dois inteiros que representam os pontos ganhos por cada aluno.
    
# def compareTriplets(a, b):
    
#     # Inicializamos as variáveis pontos_a e pontos_b como 0
#     pontos_a = 0
#     pontos_b = 0
    
#     # Fazemos um loop para percorrer os 3 elementos de cada lista (a e b)
#     for i in range(3):
        
#         # Verificamos se o elemento da lista a no índice i é maior que o elemento da lista b no mesmo índice
#         if a[i] > b[i]:
            
#             # Se for verdade, adicionamos 1 ao contador de pontos do primeiro aluno
#             pontos_a += 1 
            
#         # Verificamos se o elemento da lista b no índice i é maior que o elemento da lista a no mesmo índice
#         elif b[i] > a[i]:
            
#             # Se for verdade, adicionamos 1 ao contador de pontos do segundo aluno
#             pontos_b += 1
    
#     # Retornamos uma lista com os pontos ganhos por cada aluno
#     return [pontos_a, pontos_b]


# def compareTriplets(a, b):
    
#     # Inicialize uma lista chamada pontuacao com dois elementos, 
#     # ambos inicializados com 0.
#     pontuacao = [0, 0]
    
#     # Use um loop for para iterar sobre os índices das listas a e b 
#     # (assumindo que elas têm o mesmo comprimento).
#     for i in range(len(a)):
        
#         # Verifique se o elemento na posição i da lista a 
#         # é maior que o elemento na posição i da lista b.
#         if a[i] > b[i]:
            
#             # Se for verdadeiro, 
#             # incremente o primeiro elemento da lista pontuacao em 1.
#             pontuacao[0] += 1
            
#         # Verifique se o elemento na posição i da lista a 
#         # é menor que o elemento na posição i da lista b.
#         elif a[i] < b[i]:
            
#             # Se for verdadeiro, 
#             # incremente o segundo elemento da lista pontuacao em 1.
#             pontuacao[1] += 1
    
#     # Após o loop, retorne a lista pontuacao, 
#     # que contém a pontuação final.
#     return pontuacao


# Defina uma função chamada compareTriplets que recebe duas listas, 
# a e b, como argumentos.

def compareTriplets(a, b):
    
    # Inicialize uma lista chamada resultado com dois elementos, ambos inicializados com 0
    resultado = [0, 0]
    
    # Use um loop for com a função zip para iterar simultaneamente sobre os elementos das listas a e b.
    for i, j in zip(a, b):
        
        # Verifique se o elemento i da lista a é maior que o elemento j da lista b.
        if i > j:
            
            # Se for verdadeiro, incremente o primeiro elemento da lista resultado em 1.
            resultado[0] += 1
            
        # Verifique se o elemento j da lista b é maior que o elemento i da lista a.
        elif j > i:
            
            # Se for verdadeiro, incremente o segundo elemento da lista resultado em 1.
            resultado[1] += 1
            
        # Se os elementos em ambas as listas forem iguais.
        elif j == i:
            
            resultado[0] += 0
            
            resultado[1] += 0
            
     # Após o loop, retorne a lista resultado, que contém a pontuação final.
    return resultado