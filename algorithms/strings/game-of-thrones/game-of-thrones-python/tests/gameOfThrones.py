# A tarefa do problema "Game of Thrones - I" 
# no HackerRank é determinar se é possível 
# reorganizar as letras de uma string para 
# formar um palíndromo. Um palíndromo é uma 
# palavra que permanece a mesma se lida de 
# trás para frente. Se a reorganização das 
# letras da string puder formar um palíndromo, 
# o programa deve imprimir "YES", caso contrário,
# deve imprimir "NO".

def gameOfThrones(s):
    
    # Converte a string em uma lista de caracteres
    lista_s = list(s)
    
    # Inicializa um contador
    contador = 0
    
    # Itera sobre o conjunto de caracteres únicos na string
    for i in set(s):
        
        # Verifica se a contagem de ocorrências do caractere na lista é ímpar
        if lista_s.count(i) % 2 != 0:
            
            # Se for ímpar, incrementa o contador
            contador = contador + 1
            
        # Se o contador exceder 1, significa que mais de um caractere tem um número ímpar de ocorrências,
        # o que torna impossível formar um palíndromo
        if contador > 1:
            
            # Retorna "NO"
            return "NO"
    
    # Se não houver mais de um caractere com ocorrências ímpares, é possível formar um palíndromo
    # Retorna "YES"
    return "YES"