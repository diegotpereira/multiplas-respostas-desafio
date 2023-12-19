# O problema "Sock Merchant" no HackerRank 
# é um desafio de programação que pede aos 
# participantes para determinar quantos 
# pares de meias idênticas podem ser formados 
# a partir de um conjunto de meias. Aqui 
# está uma descrição geral do problema:

# Tarefa:
# Dada uma lista de números inteiros 
# representando as cores das meias, a tarefa 
# é contar quantos pares de meias idênticas 
# podem ser formados. Cada número inteiro 
# representa uma cor diferente de meia.

# # Função que conta o número de pares de meias idênticas

# def sockMerchant(n, ar):
    
#     # Inicializa a variável para contar o número de pares
#     contar = 0
    
#     # Converte a lista de meias em um conjunto para obter cores únicas
#     conjunto = set(ar)
    
#     # Itera sobre cada cor única presente nas meias
#     for i in conjunto:
        
#         # Conta quantas vezes a cor aparece na lista original
#         elemento = ar.count(i)
        
#         # Verifica se há pelo menos dois elementos da mesma cor para formar um par
#         if elemento % 2 == 0 and elemento > 1:
            
#             # Adiciona a metade do número de elementos ao contador
#             contar += (elemento / 2)
            
#         # Verifica se há pelo menos dois elementos da mesma cor para formar um par
#         elif elemento % 2 != 0 and elemento > 1:
            
#             # Adiciona a parte inteira da divisão por dois ao contador
#             contar += (elemento // 2)
    
#     # Converte o contador para inteiro e retorna o resultado
#     return int(contar)

# Função que conta o número de pares de meias idênticas

# def sockMerchant(n, ar):
    
#     # Inicializa um dicionário para armazenar a contagem de cada tipo de meia
#     meias = {}
    
#     # Itera sobre cada meia na lista
#     for meia in ar:
        
#         # Verifica se a meia já está no dicionário
#         if meias.get(meia, None):
            
#             # Se sim, incrementa a contagem
#             meias[meia] += 1
        
#         else:
            
#             # Se não, adiciona a meia ao dicionário com contagem 1
#             meias[meia] = 1
            
#     # Inicializa a variável para contar o número total de pares
#     pares = 0
    
#     # Itera sobre as contagens de meias no dicionário
#     for conta in meias.values():
        
#         # Adiciona a quantidade inteira da divisão por 2 ao contador de pares
#         pares += conta // 2
    
#     # Retorna o número total de pares de meias idênticas
#     return pares


# Importa a classe Counter do módulo collections

from collections import Counter

# Função que conta o número de pares de meias idênticas

def sockMerchant(n, ar):
    
    # Inicializa uma variável para contar o número total de pares
    contador = 0
    
    # Cria um dicionário que conta a ocorrência de cada elemento na lista de meias
    dicionario = Counter(ar)
    
    # Itera sobre as chaves (elementos únicos) no dicionário
    for chave in dicionario:
        
        # Adiciona a quantidade inteira da divisão por 2 ao contador de pares
        contador += dicionario[chave] // 2
    
    # Retorna o número total de pares de meias idênticas
    return contador