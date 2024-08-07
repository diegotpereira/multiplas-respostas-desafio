# A tarefa do problema "Tutorial Intro" 
# no HackerRank é criar um algoritmo que 
# localize o índice de um determinado 
# elemento em um array ordenado. Mais 
# especificamente, o problema solicita 
# que você escreva um programa que receba 
# como entrada um valor, um número inteiro V, 
# e um array ordenado de inteiros. O programa 
# deve determinar e imprimir o índice de V neste array.

# A entrada fornecida inclui o valor a ser 
# procurado (V), o tamanho do array (n), 
# seguido pelos elementos do array, que 
# estão em ordem crescente. A saída 
# esperada é o índice de V no array fornecido.

# # Esta função recebe dois parâmetros: V (o valor a ser encontrado) e arr (o array onde procurar).
# def introTutorial(V, arr):
    
#     # A função index() retorna o índice do primeiro elemento encontrado no array arr que é igual a V.
#     # Se V não estiver presente em arr, a função index() lançará uma exceção ValueError.
#     return arr.index(V)


# Define a função introTutorial que recebe dois parâmetros: V e arr.

def introTutorial(V, arr):
    
    # Itera sobre os índices dos elementos em arr usando a função range(len(arr)).
    for i in range(len(arr)):
        
        # Verifica se o elemento atual de arr é igual a V.
        if arr[i] == V:
            
            # Se for encontrado, retorna o índice onde o elemento V está na lista arr.
            return i