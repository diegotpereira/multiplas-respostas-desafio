# Você tem uma quantidade de pedras, 
# e cada pedra tem um valor associado. 
# Há duas cores de pedras, representadas 
# por dois números inteiros diferentes. 
# As pedras são numeradas de 1 a N, e 
# você deve determinar todas as possíveis 
# somas de valores que podem ser obtidas 
# combinando as pedras de ambas as cores.

# Dada a diferença entre as cores e o 
# número total de pedras, você deve 
# imprimir todas as possíveis somas 
# em ordem crescente.

# A função recebe três parâmetros: 
# n (número total de pedras), 
# a (valor da primeira cor de pedra),
# e b (valor da segunda cor de pedra).
def stones(n, a, b):
    
    # Lista para armazenar as possíveis somas de valores das pedras de ambas as cores.
    contador = []
    
    # Calcula a diferença entre os valores da segunda cor (b) e da primeira cor (a).
    diferenca = b - a 
    
    # Loop para iterar sobre todas as pedras.
    for i in range(n):
        
        # Adiciona a soma de valores das pedras da cor atual à lista "contador".
        contador.append((n - 1) * a + (i) * diferenca)
        
    # Remove duplicatas convertendo a lista para um conjunto e, em seguida, 
    # reconvertendo para uma lista.
    contador = list(set(contador))
    
    # Ordena a lista de somas em ordem crescente.
    contador.sort()
    
    # Retorna a lista de somas de valores das pedras de ambas as cores.
    return contador