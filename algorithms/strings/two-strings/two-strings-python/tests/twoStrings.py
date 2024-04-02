# // O problema "Two Strings" do HackerRank é formulado da seguinte maneira:

# // Dadas duas strings, determine se elas compartilham uma substring comum. 
# // Uma substring é uma sequência contígua de caracteres dentro de uma string. 
# // Por exemplo, as substrings de "abc" são "a", "ab", "abc", "b", "bc" e "c".

# // Para resolver este problema, você precisa implementar a função function 
# // twoStrings(s1, s2), onde s1 e s2 são as duas strings fornecidas. A função 
# // deve retornar "YES" se as strings compartilharem uma substring comum, e "NO" caso contrário.

# // Por exemplo, se s1 = "hello" e s2 = "world", as substrings comuns são "o" e "l", 
# // então a função deve retornar "YES". Se s1 = "hi" e s2 = "world", não há substrings 
# // comuns, então a função deve retornar "NO".

# Define a função twoStrings que recebe duas strings como entrada: s1 e s2
def twoStrings(s1, s2):
    
    # Converte a string s1 em um conjunto de caracteres e armazena em set_s1
    set_s1 = set(s1)
    
    # Converte a string s2 em um conjunto de caracteres e armazena em set_s2
    set_s2 = set(s2)
    
    # Inicializa um contador
    contador = 0
    
    # Loop for que itera sobre cada caractere do conjunto set_s1
    for index in set_s1:
        
        # Loop for aninhado que itera sobre cada caractere do conjunto set_s2
        for compare in set_s2:
            
            # Verifica se o caractere do conjunto set_s1 é igual ao caractere do conjunto set_s2
            if(index == compare):
                
                # Incrementa o contador se houver uma correspondência entre os caracteres
                contador += 1
                
                
    # Verifica se o contador é maior que zero
    if contador > 0:
        
        # Retorna 'YES' se houver pelo menos uma correspondência entre os conjuntos
        return 'YES'
    
    else:
        
        # Retorna 'NO' se não houver correspondências entre os conjuntos
        return 'NO'