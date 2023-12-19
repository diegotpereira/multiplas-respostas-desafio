# A tarefa do problema "Plus Minus" no HackerRank 
# é calcular a fração de elementos em uma matriz 
# que são positivos, negativos e zero. A ideia é 
# fornecer uma matriz de inteiros e calcular a 
# proporção de elementos que são positivos, 
# negativos e zero em relação ao número total 
# de elementos na matriz.

def plusMinus(arr):
    
    # Inicializando contadores para elementos positivos, negativos e zero
    contar_positivo = 0
    contar_negativo = 0
    contar_zero = 0
    
    # Iterando sobre os elementos da lista
    for i in arr:
        
        # Verificando se o elemento é positivo
        if i > 0:
            
            contar_positivo += 1
            
        # Verificando se o elemento é negativo
        elif i < 0:
            
            contar_negativo += 1
            
        # Se o elemento não é positivo nem negativo, é zero
        else:
            
            contar_zero += 1
            
            
    # print(float(contar_positivo) / len(arr))
    # print(float(contar_negativo) / len(arr))
    # print(float(contar_zero) / len(arr))
    
    # Calculando as frações e retornando como uma tupla
    return (float(contar_positivo) / len(arr), float(contar_negativo) / len(arr), float(contar_zero) / len(arr))