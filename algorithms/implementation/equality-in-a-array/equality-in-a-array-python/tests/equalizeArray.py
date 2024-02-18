# A tarefa do problema "Equality 
# in a Array" no HackerRank é 
# determinar o número mínimo de 
# elementos que precisam ser 
# removidos de um array para que 
# todos os elementos restantes 
# sejam iguais. O array pode conter 
# números inteiros e a operação 
# permitida é a remoção de um 
# elemento do array a cada vez.


# # A função recebe um array como entrada

# def equalizeArray(arr):
    
#     # Cria uma lista 'a' contendo a contagem de ocorrências de cada elemento único no array
#     # Usando set(arr), obtemos apenas os elementos únicos no array
#     # Para cada elemento único, conta quantas vezes ele ocorre no array original usando arr.count(a)
#     a = [arr.count(a) for a in set(arr)]
    
#     # Retorna o número de elementos no array original menos o número máximo de ocorrências de um elemento único
#     # Isso é feito para encontrar o número mínimo de remoções necessárias para igualar todos os elementos no array
#     return len(arr) - max(a)


# A função recebe um array como entrada

def equalizeArray(arr):
    
    # Converte o array em um conjunto para obter elementos únicos
    tmp = set(arr)
    
    # Inicializa a variável 'maximo' para armazenar o número máximo de ocorrências de um elemento único
    maximo = 0
    
    # Itera sobre os elementos únicos no conjunto 'tmp'
    for x in tmp:
        
        # Verifica se a contagem de ocorrências do elemento atual é maior do que 'maximo'
        if arr.count(x) > maximo:
            
            # Se for maior, atualiza 'maximo' com a contagem atual
            maximo = arr.count(x)
            
    # Retorna o número de elementos no array original menos o número máximo de ocorrências de um elemento único
    # Isso representa o número mínimo de remoções necessárias para igualar todos os elementos no array
    return len(arr) - maximo