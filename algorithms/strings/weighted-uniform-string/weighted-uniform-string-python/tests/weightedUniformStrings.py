# A tarefa do problema "Weighted Uniform Strings" é a seguinte:

# Dada uma string contendo apenas letras minúsculas de 'a' a 'z', 
# você deve determinar se uma série de consultas fornecidas pode 
# ser atendida pela string. Cada consulta consiste em um número 
# inteiro. Se o número for um dos pesos das subsequências uniformes 
# da string, a resposta para essa consulta é "Yes"; caso contrário, 
# é "No".

# Uma subsequência uniforme de uma string é definida como uma série 
# contígua de caracteres idênticos. O peso de uma subsequência 
# uniforme é o produto do comprimento da subsequência pelo valor 
# do caractere, onde 'a' tem peso 1, 'b' tem peso 2, ..., 'z' tem 
# peso 26.

# Por exemplo, para a string "abccddde" as subsequências uniformes 
# são "a", "b", "c", "cc", "d", "dd", "ddd", "e", então os pesos 
# são 1, 2, 3, 6, 4, 8, 12, 5, respectivamente.

def weightedUniformStrings(s, consultas):
    
    prev = ""
    
    pesos = 0
    
    possibilidade = {}
    
    for elemento in s:
        
        if elemento == prev:
            
            pesos += 1
            
        else:
            
            prev = elemento
            
            pesos = 1
            
        valor = (ord(elemento) - 96) * pesos 
        
        possibilidade[valor] = elemento
        
    saida = []
    
    for consulta in consultas:
        
        saida.append("Yes" if possibilidade.get(consulta) else "No")
        
    return saida


