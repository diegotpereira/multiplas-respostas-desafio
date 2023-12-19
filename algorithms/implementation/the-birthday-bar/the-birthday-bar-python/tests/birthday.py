# A tarefa do problema "Birthday Chocolate" no HackerRank é a seguinte:

# Você recebe uma barra de chocolate com quadrados inteiros. Cada quadrado 
# tem um número inteiro representando a quantidade de chocolate naquele quadrado, 
# e uma sopa de chocolate é representada por uma sequência de números inteiros.

# Você também recebe a data de aniversário da sua amiga e a quantidade 
# total de chocolate que ela quer. A tarefa é determinar quantas maneiras 
# diferentes existem de escolher um segmento contíguo da barra de chocolate 
# de modo que a soma dos valores desses quadrados seja igual à quantidade desejada.

# Por exemplo, se a barra de chocolate for [1, 2, 1, 3, 2] e a data de 
# aniversário for d = 3, então existem duas maneiras de escolher um 
# segmento cuja soma seja 3: [1, 2] e [3].

# A entrada para o problema consiste na barra de chocolate, na data 
# de aniversário d e na quantidade total de chocolate que sua amiga 
# quer. A saída deve ser o número de maneiras diferentes de escolher 
# um segmento contíguo que atenda aos critérios mencionados.

# def birthday(s, d, m):
    
#     resultado = 0
    
#     if(len(s) < m):
        
#         return 0
    
#     for i in range(len(s) - m + 1):
        
#         soma = 0
        
#         for j in range(i, i + m):
            
#             soma += s[j]
            
#         if (soma == d):
            
#             resultado += 1
    
#     return resultado

# def birthday(n, s, d, m):
    
#     # Inicializa a variável `contar` com zero.
#     contar = 0
    
#     # Percorre a lista `s` de índice 0 até o índice len(s) - 1.
#     for i in range(0, len(s)):
        
#         # Verifica se é possível selecionar uma sequência de `m` elementos começando no índice `i`.
#         if i + m <= len(s):
            
#             # Se sim, soma os elementos da sequência.
#             res = 0
            
#             # A variável i é o índice do primeiro elemento da sublista, 
#             # e i + m é o índice do elemento após o último elemento da sublista.
#             for j in range(i, i + m):
                
#                 res = res + s[j]
                
#             # Verifica se a soma dos elementos é igual a `d`.
#             if res == d:
                
#                 # Se sim, incrementa a variável `contar`.
#                 contar += 1
                
#     # Retorna o valor final de `contar`.
#     return contar