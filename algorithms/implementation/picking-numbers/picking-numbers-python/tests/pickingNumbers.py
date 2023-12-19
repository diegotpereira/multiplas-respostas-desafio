# // O problema "Picking Numbers" do HackerRank geralmente 
# // pede para determinar o comprimento máximo de um subconjunto 
# // de números em um array onde a diferença entre quaisquer dois números seja no máximo 1.

# // Os jogadores devem escolher um elemento de cada par e 
# // formar um subconjunto, onde a diferença entre os elementos 
# // escolhidos não seja maior que 1. O objetivo é determinar 
# // o comprimento máximo possível desse subconjunto.

# # A função pickingNumbers recebe uma lista de inteiros (arr) e retorna o comprimento máximo do subconjunto.
# def pickingNumbers(arr):
    
#     # Inicializa a variável comprimentoMaximo para armazenar o comprimento máximo do subconjunto.
#     comprimentoMaximo = 0
    
#     # Itera sobre cada número na lista.
#     for numero in arr:
        
#         # Cria uma variável temporária (comprimento_temp) para armazenar o comprimento do subconjunto formado pelos números
#         # que são iguais ou têm uma diferença de 1 em relação ao número atual.
#         comprimento_temp = len([n for n in arr if n == numero or n == numero + 1])
        
#         # Atualiza comprimentoMaximo usando a função max, comparando com o comprimento_temp.
#         comprimentoMaximo = max(comprimentoMaximo, comprimento_temp)
        
#     # Retorna o comprimento máximo encontrado.
#     return comprimentoMaximo


# # A função pickingNumbers recebe uma lista de inteiros (arr) e retorna o comprimento máximo do subconjunto.

# def pickingNumbers(arr):
    
#     # Cria um conjunto (distancia_num) para armazenar os valores únicos presentes na lista.
#     distancia_num = set(arr)
    
#     # Inicializa a variável maximoDistancia para armazenar o comprimento máximo do subconjunto.
#     maximoDistancia = 0
    
#     # Itera sobre os valores únicos presentes na lista.
#     for num in distancia_num:
        
#         # Calcula o comprimento do subconjunto formado pelos números que são iguais ou têm uma diferença de 1 em relação ao número atual.
#         atualTamanho = len([x for x in arr if x == num or x == num + 1])
        
#         # Atualiza maximoDistancia com o máximo entre o valor atualTamanho e o valor anterior de maximoDistancia.
#         maximoDistancia = max(maximoDistancia, atualTamanho)
    
#     # Retorna o comprimento máximo do subconjunto.
#     return maximoDistancia


# # A função pickingNumbers recebe uma lista de inteiros (arr) e retorna o comprimento máximo do subconjunto.

# def pickingNumbers(arr):
    
#     # Inicializa uma lista para armazenar as contagens de comprimentos de subconjuntos.
#     contador = []
    
#     # Usa a classe Counter para contar as ocorrências de cada número na lista.
#     numeros =  set(arr)
    
#     # Itera sobre os itens únicos presentes na lista.
#     for numero in numeros:
        
#         # Adiciona a soma das contagens do número atual e do número anterior à lista contador.
#         contador.append(arr.count(numero) + arr.count(numero - 1))
    
#     # Retorna o valor máximo encontrado na lista contador.
#     return max(contador)


# A função pickingNumbers recebe uma lista de inteiros (arr) 
# e retorna o comprimento máximo do subconjunto.

def pickingNumbers(arr):
    
    # Inicializa uma variável para armazenar o comprimento máximo do subconjunto.
    comprimentoMaximo = 0
    
    # Itera sobre cada número na lista.
    for numero in arr:
        
        # Inicializa um contador para contar elementos que são iguais ao número ou têm diferença de 1.
        contador = 0
        
        # Itera sobre cada elemento na lista para comparar com o número atual.
        for compare in arr:
            
            # Verifica se o número é igual ou tem diferença de 1 com o elemento comparado.
            if (numero == compare or numero - compare == 1):
                
                # Incrementa o contador se a condição for atendida.
                contador += 1
                
            
            if (contador > comprimentoMaximo):
                
                # Atualiza o comprimento máximo se o contador atual for maior que o valor atual de 'comprimentoMaximo'.
                comprimentoMaximo = contador
       
    # Retorna o comprimento máximo do subconjunto.     
    return comprimentoMaximo
    
    