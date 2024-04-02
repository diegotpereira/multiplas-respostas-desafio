# A tarefa do problema "The Love-Letter Mystery" 
# no HackerRank é a seguinte:

# Dada uma string contendo apenas letras minúsculas 
# do alfabeto, você precisa fazer com que todas as 
# letras sejam iguais, alterando cada letra no mínimo 
# uma vez. Você pode reduzir o valor de uma letra em 1, 
# ou seja, 'a' se torna 'b', 'b' se torna 'a', 'c' se 
# torna 'b' e assim por diante. O objetivo é encontrar 
# o número mínimo de operações necessárias para fazer 
# com que a string se torne uma string de palíndromo. 
# Um palíndromo é uma palavra ou frase que se lê da 
# mesma forma de trás para frente.

# Função que calcula o número mínimo de operações necessárias para transformar a string em um palíndromo.
def theLoveLetterMystery(s):
    
    # Inicializa o contador de operações como zero.
    contador = 0
    
    # Itera sobre metade do comprimento da string 
    # (considerando o arredondamento para baixo, 
    # caso o comprimento seja ímpar).
    for i in range(len(s) // 2):
        
        # Calcula a diferença absoluta entre os valores 
        # ASCII dos caracteres simétricos na string e atualiza o contador.
        contador += abs(ord(s[i]) - ord(s[-i - 1]))
    
    # Retorna o número total de operações realizadas
    return contador