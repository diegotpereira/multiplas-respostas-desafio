# No problema "Between Two Sets" 
# do HackerRank, você é solicitado 
# a encontrar e contar todos os números 
# inteiros que são divisíveis por todos 
# os números de um conjunto e que, por 
# sua vez, dividem uniformemente todos 
# os números de outro conjunto. Em outras 
# palavras, você precisa encontrar os 
# inteiros que são fatores comuns a 
# ambos os conjuntos.

# def getTotalX(arr, brr):
    
#     # Encontrar o maior elemento em 'arr' e o menor em 'brr'
#     max_arr = max(arr)
#     min_brr = min(brr)
    
#     # Inicializar o contador para a contagem de números que atendem às condições
#     contador = 0
    
#     # Iterar pelos números potenciais candidatos
#     for i in range(max_arr, min_brr + 1):
        
#         # Verificar se 'i' é divisível por todos os elementos de 'arr'
#         if all(i % item == 0 for item in arr):
            
#             # Verificar se todos os elementos de 'brr' são divisíveis por 'i'
#             if all(item % i == 0 for item in brr):
                
#                 # Incrementar o contador se ambas as condições forem atendidas
#                 contador += 1
                
#     # Retornar o contador final
#     return contador


"""
Retorna o número total de inteiros que são múltiplos de todos os elementos de 'arr' e
fatores de todos os elementos de 'brr' no intervalo definido pelas operações gcd e lcm.
"""
# Importa o módulo de matemática para utilizar as funções gcd e lcm.

import math

def getTotalX(arr, brr):
    
    # Calcula o Maior Comum Divisor (gcd) de 'brr'.
    minBrr = math.gcd(*brr)
    
    # Calcula o Mínimo Múltiplo Comum (lcm) de 'arr'.
    maxArr = math.lcm(*arr)
    
    # Inicializa a variável para armazenar o número total de inteiros que atendem aos critérios.
    total = 0
    
    # Loop que continua enquanto o Mínimo Comum Divisor (minBrr) é maior ou igual ao Mínimo Múltiplo Comum (maxArr).
    while minBrr >= maxArr:
        
        # Inicializa uma lista para armazenar os resultados.
        resultado = []
        
        # Loop que verifica se minBrr é múltiplo de maxArr e fator de todos os elementos de 'brr'.
        for i in brr:
            
            if(minBrr % maxArr == 0) and (i % minBrr == 0):
                
                # Adiciona minBrr à lista de resultados.
                resultado.append({ minBrr })
                
        # Verifica se o tamanho da lista de resultados é igual ao tamanho de 'brr'.
        if(len(resultado) == len(brr)):
            
            # Incrementa o total se todos os elementos de 'brr' atendem aos critérios.
            total += 1
            
        # Decrementa minBrr pelo valor de maxArr.
        minBrr -= maxArr
    
    # Retorna o número total de inteiros que atendem aos critérios.
    return total