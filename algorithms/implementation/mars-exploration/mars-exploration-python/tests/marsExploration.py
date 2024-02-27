# A tarefa do problema "Mars Exploration" 
# no HackerRank é criar um programa que 
# avalia a qualidade da transmissão de 
# uma mensagem de rádio enviada da Terra 
# para Marte. A mensagem consiste em uma 
# string de caracteres (S), onde cada 
# sequência de três caracteres consecutivos 
# deve representar a palavra "SOS". No 
# entanto, devido a interferências na 
# transmissão, alguns caracteres podem ter 
# sido alterados. A tarefa é contar o 
# número total de caracteres que foram 
# alterados durante a transmissão, 
# considerando que "SOS" é a sequência 
# original esperada.

# Define a função marsExploration que recebe uma string 's' como entrada

def marsExploration(s):
    
    # Inicializa uma variável para contar o número de caracteres alterados
    alterado = 0
    
    # Itera sobre os índices da string 's' usando range(len(s))
    for letra in range(len(s)):
        
        # Verifica se o índice atual (letra) é um índice de 'O' esperado
        if (letra % 3) == 1:
            
            # Se o caractere atual não for 'O', incrementa o contador de caracteres alterados
            alterado += 1 if s[letra] != "O" else 0
            
        # Para os índices que não são índices de 'O', ou seja, índices de 'S'
        else:
            
            # Se o caractere atual não for 'S', incrementa o contador de caracteres alterados
            alterado += 1 if s[letra] != "S" else 0
            
    # Retorna o total de caracteres alterados
    return alterado