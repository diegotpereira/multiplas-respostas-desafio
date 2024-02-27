# A tarefa do problema "Insertion Sort - Part 1" no HackerRank
# é implementar a primeira etapa do algoritmo de ordenação por 
# inserção (insertion sort). Nessa etapa, você deve realizar uma 
# única iteração do algoritmo para "inserir" um elemento em sua 
# posição correta dentro de uma lista ordenada.

# A entrada do problema consiste em duas partes:

# Um número inteiro, que representa o tamanho da lista de elementos.
# Uma lista de números inteiros separados por espaços, que representam os 
# elementos da lista.
# A saída esperada é a lista após uma iteração do algoritmo de ordenação 
# por inserção. Durante a iteração, você deve mover um elemento da lista 
# para sua posição correta de acordo com a ordem crescente. Você deve 
# imprimir a lista após essa única iteração.

# A ideia básica do algoritmo de ordenação por inserção é que ele começa
# com uma lista de um único elemento (o primeiro elemento da entrada) e, 
# em seguida, insere cada elemento subsequente na posição correta na parte 
# já ordenada da lista. A cada iteração, um novo elemento é inserido na 
# posição correta, expandindo a parte ordenada da lista.

def insertionsort1(n, arr):
    
    # Iterando através de cada elemento do array arr
    for i in range(n):
        
        # Definindo o elemento atual como a chave
        key = arr[i]
        
        # Definindo o índice anterior como j
        j = i - 1
        
        # Enquanto j for maior ou igual a 0 e a chave for menor que o elemento atual do array
        while j >= 0 and key < arr[j]:
            
            # Movendo o elemento do array para a direita
            arr[j + 1] = arr[j]
        
            # Decrementando o índice j
            j -= 1
        
        # Colocando a chave na posição correta
        arr[j + 1] = key 
        
    # Retornando o array ordenado
    return arr
        