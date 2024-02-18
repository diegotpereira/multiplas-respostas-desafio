# O problema "Cut the Sticks" em 
# HackerRank solicita que você resolva o seguinte desafio:

# Dado um conjunto de bastões de 
# diferentes comprimentos, a tarefa 
# é cortar os bastões. O corte é feito 
# da seguinte forma: encontre o comprimento 
# mínimo atual dos bastões, corte esse 
# comprimento de todos os bastões e remova 
# os bastões de comprimento zero. Repita 
# esse processo até que todos os bastões sejam removidos.

# A entrada do problema consiste em um array 
# representando os comprimentos iniciais dos 
# bastões. A saída deve ser uma série de inteiros 
# que representam o número de bastões após cada corte.

def cutTheSticks(arr):
    
    # Inicializa a lista 'saida' com o comprimento original do array 'arr'.
    saida = [len(arr)]
    
    # Enquanto o comprimento do array 'arr' for maior que 1, continua o processo.
    while len(arr) > 1:
        
        # Encontra o menor comprimento entre os bastões no array 'arr'.
        min_tamanho = min(arr)
        
        # Subtrai o menor comprimento de todos os bastões no array 'arr'.
        arr = [bastao - min_tamanho for bastao in arr]
        
        # Remove os bastões de comprimento zero do array 'arr'.
        arr = [bastao for bastao in arr if bastao > 0]
        
        # Se ainda houver bastões no array 'arr', adiciona o comprimento atual à lista 'saida'.
        if len(arr) > 0:
            
            saida.append(len(arr))
            
    # Retorna a lista 'saida' que contém o número de bastões após cada corte.
    return saida