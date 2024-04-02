# Dado um conjunto de segmentos de linha de comprimentos diferentes, 
# você deve encontrar e imprimir o perímetro máximo de um triângulo 
# não degenerado (ou seja, um triângulo com uma área maior que 0) 
# que pode ser formado usando três dos segmentos de linha. Se mais 
# de um tal triângulo existir, você deve escolher aquele com o maior perímetro.
# Define a função maximumPerimeterTriangle que recebe uma lista de sticks como argumento

def maximumPerimeterTriangle(sticks):
    
    # Ordena a lista de sticks em ordem crescente
    sticks.sort()
    
    # Obtém o comprimento da lista de sticks
    n = len(sticks)
    
    # Inicia um loop reverso de n-1 até 2, com passo -1
    for i in range(n - 1, 1, -1):
        
        # Verifica se a condição para formar um triângulo com os três sticks é atendida
        if sticks[i] < sticks[i - 1] + sticks[i - 2]:
            
            # Retorna os três sticks que formam o triângulo com o maior perímetro encontrado
            return [sticks[i - 2], sticks[i - 1], sticks[i]]
    
    
    # Retorna [-1] caso não seja possível formar um triângulo com os sticks fornecidos
    return [-1]