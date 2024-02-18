# Você tem um array de números inteiros e um número fixo de rotações. 
# A tarefa é rotacionar o array à direita por um número especificado de vezes.

# Um array de números inteiros a.
# Um inteiro k, que representa o número de rotações à direita a serem executadas.
# Um array de consultas queries, onde cada elemento é um índice que deve ser consultado após as rotações.


# # A função recebe três parâmetros: um array a ser rotacionado, o número de rotações (k) e uma lista de consultas.

# def circularArrayRotation(a, rotacao, consultas):
    
#     # Inicializa uma lista vazia para armazenar os resultados das consultas.
#     resultado = []
    
#     # Calcula o número real de rotações necessário usando o operador módulo (%).
#     # Isso evita rotações desnecessárias e mantém o resultado dentro dos limites do array.
#     mudancas = rotacao % len(a)
    
#     # Itera sobre a lista de consultas.
#     for x in consultas:
        
#         # Para cada consulta, adiciona o elemento do array após as rotações ao resultado.
#         resultado.append(a[x - mudancas])
    
#     # Retorna a lista de resultados das consultas após as rotações.
#     return resultado


# Função que realiza a rotação circular de uma lista e retorna os elementos correspondentes às consultas

def circularArrayRotation(a, rotacao, consultas):
    
    # Realiza a rotação 'rotacao' vezes
    for _ in range(rotacao):
        
        # Remove o último elemento da lista e o insere no início
        numero = a.pop()
        
        a.insert(0, numero)
        
    # Lista de compreensão para obter os elementos correspondentes às consultas na lista rotacionada
    resultado = [a[q] for q in consultas]
    
    # Retorna a lista de resultados
    return resultado