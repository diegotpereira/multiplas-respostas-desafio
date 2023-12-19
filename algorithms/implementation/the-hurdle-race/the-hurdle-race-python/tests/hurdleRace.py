# // Bob está participando de uma corrida de barreiras. 
# // Ele pode pular uma determinada altura máxima, mas 
# // a altura das barreiras varia. A tarefa é escrever 
# // um programa para determinar quantos doses de uma 
# // poção mágica Bob precisa tomar para poder pular 
# // todas as barreiras na corrida.

# // k = Um número inteiro representando a altura máxima que Bob pode pular inicialmente.
# // altura(height) = Uma lista de alturas das barreiras.

# # Encontrando o valor máximo na lista de larguras usando a função max.

# def hurdleRace(k, altura):
    
#      # Encontrando o valor máximo na lista de alturas usando a função max.
#     maxima = max(altura)
    
#     # Verificando se a altura máxima k é menor que o valor máximo da altura.
#     if k < maxima:
        
#         # Se k for menor que o valor máximo, calcula a diferença e retorna esse valor.
#         posicao = maxima - k 
        
#         return posicao
#     else:
        
#         # Se k for maior ou igual ao valor máximo, retorna 0, pois não há necessidade de doses adicionais.
#         return 0


# # Define uma função chamada hurdleRace que recebe dois parâmetros: k e altura.

# def hurdleRace(k, altura):
    
#     # Verifica se o valor máximo na lista de alturas é igual a 1 ou menor ou igual a k.
#     if max(altura) == 1 or max(altura) <= k:
        
#         # Retorna 0 se a condição for verdadeira.
#         return 0
    
#     # Retorna a diferença entre o valor máximo na lista de alturas e k.
#     return max(altura) - k

def hurdleRace(k, altura):
    
    # // Encontra o valor máximo na lista de alturas
    maximo = max(altura)

    # // Verifica se o valor máximo na lista é maior que k.
    # // Se for, retorna a diferença entre o valor máximo e k, caso contrário, retorna 0.
    return maximo - k if maximo > k else 0