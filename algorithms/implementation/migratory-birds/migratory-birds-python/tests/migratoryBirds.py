# No problema "Migratory Birds" no HackerRank, 
# a tarefa é encontrar o tipo de pássaro mais 
# comum entre um grupo de pássaros migratórios. 
# Cada pássaro é representado por um número inteiro 
# e o objetivo é determinar qual número aparece com mais frequência no grupo.

# Descrição do Problema:

# Dado um array que representa os tipos de pássaros 
# avistados, onde cada elemento do array é um número 
# inteiro representando um tipo de pássaro, sua tarefa 
# é encontrar e imprimir o tipo de pássaro que é mais 
# comum. Se houver empate, escolha o menor número.

# # Função que encontra o tipo mais comum de pássaro
# def migratoryBirds(arr):
    
#     # Inicializa um dicionário para contar a frequência de cada tipo de pássaro
#     dictN = {}
    
#     # Loop para percorrer cada item no array
#     for item in arr:
        
#         # Verifica se o item já está no dicionário
#         if item in dictN:
            
#             # Se sim, incrementa a contagem
#             dictN[item] += 1
            
#         else:
            
#             # Se não, adiciona o item ao dicionário com contagem 1
#             dictN[item] = 1
    
#     # Inicializa variáveis para armazenar o tipo mais comum e sua contagem máxima
#     max_ = 0
#     numero = 0
    
#     # Loop para encontrar o tipo mais comum
#     for key, valor in dictN.items():
        
#         # Verifica se a contagem atual é maior que a contagem máxima
#         if(valor > max_):
            
#             # Se sim, atualiza o tipo mais comum e a contagem máxima
#             max_ = valor 
#             numero = key 
            
#         # Se houver empate, escolhe o menor número
#         elif (valor == max_):
            
#             if(key < numero):
                
#                 numero = key
    
#     # Retorna o tipo mais comum
#     return numero


# Função que encontra o tipo mais comum de pássaro

def migratoryBirds(arr):
    
    # Inicializa um dicionário para contar a frequência de cada tipo de pássaro
    dicionario = {}
    
    # Loop para percorrer cada tipo de pássaro no array
    for i in arr:
        
        # Verifica se o tipo de pássaro já está no dicionário
        if i not in dicionario.keys():
            
            # Se não, adiciona o tipo de pássaro ao dicionário com contagem 1
            dicionario[i] = 1
            
        else:
            
            # Se sim, incrementa a contagem
            dicionario[i] += 1
            
            
    # dicionario.values(): Obtém uma visão dos valores do dicionário dicionario. Neste caso, são as contagens de cada tipo de pássaro.

    # max(dicionario.values()): Encontra o valor máximo entre as contagens de tipos de pássaro no dicionário.

    # [k for k, v in dicionario.items() if v == max(dicionario.values())]: Cria uma lista de chaves (k) para as quais os valores (v) 
    # são iguais ao valor máximo encontrado. Ou seja, esta lista contém as chaves dos tipos de pássaros que têm a contagem máxima.

    # min(...): Encontra o valor mínimo dentro da lista criada no passo anterior. Isso significa que, em caso de empate, a menor chave (tipo de pássaro) será escolhida.
                
    # Retorna o tipo mais comum, escolhendo o menor número em caso de empate
    return min([k for k, v in dicionario.items() if v == max(dicionario.values())])