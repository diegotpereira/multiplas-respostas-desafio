# Você recebe uma string composta por 
# letras minúsculas, onde cada letra 
# representa um caractere. Além disso, 
# você recebe um número inteiro, que 
# representa o tamanho de uma substring desejada.

# A tarefa é contar o número de ocorrências 
# da letra 'a' na substring repetida até 
# atingir o tamanho desejado. A substring 
# é formada pela repetição da string original. 
# Se a string original não atingir exatamente 
# o tamanho da substring desejada, você conta 
# as ocorrências de 'a' na parte restante da substring.

# A ideia é calcular quantas vezes a letra 'a' 
# aparece na string resultante da repetição da 
# string original e, se necessário, contar as 
# ocorrências na parte inicial da substring desejada.


# Definindo uma função chamada repeatedString que aceita uma string s e um número inteiro n como argumentos.

def repeatedString(s, n):
    
    # Inicializando uma variável freq para armazenar a frequência de ocorrências da letra 'a'.
    freq = 0
    
    # Iterando sobre cada caractere na string s.
    for i in s:
        
        # Verificando se o caractere atual é 'a'.
        if i == 'a':
            
            # Incrementando a contagem de ocorrências de 'a'.
            freq += 1
            
    # Calculando quantas vezes a string s pode ser completamente repetida em uma substring de tamanho n.
    div = n // len(s)
    
    # Atualizando a contagem de ocorrências multiplicando pela quantidade de repetições completas.
    freq = freq * div 
    
    # Calculando o tamanho restante da substring após as repetições completas.
    restante = n % len(s)
    
    # Iterando sobre o restante da substring e contando as ocorrências de 'a'.
    for x in range(restante):
        
        # Verificando se o caractere atual no restante da substring é 'a'.
        if s[x] == 'a':
            
            # Incrementando a contagem de ocorrências de 'a'
            freq += 1
            
    # Retornando o total de ocorrências de 'a' na substring resultante.
    return freq