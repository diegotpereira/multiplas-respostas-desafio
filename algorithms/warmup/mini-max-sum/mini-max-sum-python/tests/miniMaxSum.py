# O problema "Mini-Max Sum" no HackerRank 
# é um problema de programação que pede 
# para você encontrar a soma mínima e máxima 
# possível de quatro dos cinco elementos de uma lista.

# A tarefa consiste nos seguintes passos:

# Você recebe uma lista de cinco inteiros.
# Deve-se calcular e imprimir a soma mínima 
# e a soma máxima possível de quatro dos cinco elementos.
# Ou seja, some quatro elementos da lista 
# para encontrar a soma máxima e faça o mesmo 
# para encontrar a soma mínima, excluindo um 
# elemento diferente a cada vez.
# Os números na lista podem ser grandes, então 
# você precisa lidar com possíveis estouro de inteiro.

# def miniMaxSum(arr):
    
#     # Inicializa uma lista vazia para armazenar os resultados
#     resultado = []
    
#     # Calcula a soma total dos elementos na lista
#     soma_total = sum(arr)
    
#     # Calcula a soma máxima excluindo o maior elemento da lista
#     maxima_soma = soma_total - max(arr)
    
#     # Calcula a soma mínima excluindo o menor elemento da lista
#     minima_soma = soma_total - min(arr)
    
#     # Adiciona a soma mínima e a soma máxima à lista de resultados
#     resultado.append(minima_soma)
#     resultado.append(maxima_soma)
    
#     # Retorna a lista de resultados contendo a soma mínima e máxima
#     return resultado


# def miniMaxSum(arr):
    
#     # Ordena a lista em ordem crescente para facilitar o cálculo
#     arr.sort()
    
#     # Calcula a soma total da lista
#     soma_total = sum(arr)
    
#     # Calcula a soma máxima excluindo o maior elemento da lista (último elemento após ordenação)
#     maxima_soma = soma_total - arr[-1]
    
#     # Calcula a soma mínima excluindo o menor elemento da lista (primeiro elemento após ordenação)
#     minima_soma = soma_total - arr[0]
    
#     # Retorna uma tupla contendo a soma mínima e a soma máxima
#     return (minima_soma, maxima_soma)