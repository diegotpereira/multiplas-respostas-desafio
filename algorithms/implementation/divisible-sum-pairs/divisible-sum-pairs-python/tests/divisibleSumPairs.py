# Dado um array de inteiros e um número 
# inteiro positivo k, sua tarefa é encontrar 
# o número de pares (i, j) onde i < j, e a 
# soma dos elementos nos índices i e j é divisível por k.

# def divisibleSumPairs(n, k, ar):
    
#     # Inicializa um contador para armazenar 
#     # o número de pares que satisfazem a condição
#     contador = 0
    
#     # Loop externo para percorrer os índices i do array
#     for i in range(0, n):
        
#         # Loop interno para percorrer os índices j maiores que i
#         for j in range(i + 1, n):
            
#             # Verifica se a soma dos elementos nos índices i e j é divisível por k
#             if(ar[i] + ar[j]) % k == 0:
                
#                 # Se sim, incrementa o contador
#                 contador += 1
    
#     # Retorna o resultado final
#     return contador

# Função que conta pares divisíveis em uma soma

# def divisibleSumPairs(n, k, ar):
    
#     # Obtém o tamanho da lista
#     tamanho = len(ar)
    
#     # Inicializa índices para percorrer a lista
#     esquerda = 0
#     direita = 1
    
#     # Inicializa contador para armazenar o número de pares que satisfazem a condição
#     total = 0
    
#     # Loop while para percorrer os índices
#     while esquerda < tamanho - 1:
        
#         # Verifica se 'direita' ultrapassou o tamanho da lista
#         if direita >= tamanho:
            
#             # Se sim, incrementa 'esquerda' e redefine 'direita'
#             esquerda += 1
#             direita = esquerda + 1
            
#         # Verifica se a soma dos elementos nos índices 'esquerda' e 'direita' é divisível por 'k'
#         elif (ar[esquerda] + ar[direita]) % k == 0:
            
#             # Se sim, incrementa o contador e avança 'direita'
#             total += 1
#             direita += 1
            
#         else:
            
#             # Se não, apenas avança 'direita'
#             direita += 1
    
#     # Retorna o resultado final, que é o número total de pares que satisfazem a condição
#     return total


# Função que conta pares divisíveis em uma soma

def divisibleSumPairs(n, k, ar):
    
    # Inicializa o contador para armazenar o número de pares que satisfazem a condição
    contador = 0
    
    # Loop sobre os elementos do array 'ar' usando enumerate para obter índice e valor
    for key, valor in enumerate(ar):
        
        # Loop interno sobre os elementos restantes do array 'ar' usando enumerate a partir do próximo índice
        for _key, _valor in enumerate(ar[key + 1:]):
            
            # Verifica se a soma dos elementos nos índices 'key' e '_key' é divisível por 'k'
            if not(valor + _valor) % k:
                
                # Se sim, incrementa o contador
                contador += 1
    
    # Retorna o resultado final, que é o número total de pares que satisfazem a condição
    return contador