# A tarefa do problema em questão é 
# encontrar o custo mínimo para construir 
# uma string. A string é construída 
# adicionando caracteres de uma string 
# de entrada para uma string vazia. No 
# entanto, cada caractere adicionado à 
# string deve ter um custo associado. O 
# objetivo é minimizar o custo total da 
# construção da string, onde o custo total 
# é a soma dos custos individuais de 
# adicionar cada caractere único à string.

def stringConstruction(s):
    
    # Inicializa um contador para contar caracteres únicos
    contador = 0
    
    # Inicializa uma string vazia para armazenar os caracteres únicos
    resultado =  ""
    
    # Itera sobre cada caracter na string fornecida
    for caracter in s:
        
        # Verifica se o caracter atual não está presente na string de resultado
        if caracter not in resultado:
            
            # Se o caracter for único, incrementa o contador
            contador += 1
            
            # Adiciona o caracter à string de resultado
            resultado += caracter
            
    
    # Retorna o contador, que representa o número de caracteres únicos na string fornecida
    return contador