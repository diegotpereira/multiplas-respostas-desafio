# O problema nos fornece um array P que representa as permutações do 
# array original. A função 'permutationEquation' deve retornar um array 
# que contém a posição final de cada elemento no array original

# Função que calcula a sequência de permutação para uma lista dada

def permutationEquation(p):
    
    # Inicializa uma lista para armazenar os resultados
    resultado = []
    
    # Loop que itera sobre os valores de 1 até o comprimento da lista p (inclusive)
    for x in range(1, len(p) + 1):
        
        # Calcula a sequência de permutação e adiciona o resultado à lista
        resultado.append(p.index(p.index(x) + 1) + 1)
        
    # Retorna a lista de resultados
    return resultado