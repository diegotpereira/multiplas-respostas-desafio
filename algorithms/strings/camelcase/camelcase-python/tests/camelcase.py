

# Definição de uma função chamada camelcase que recebe uma string s como argumento
def camelcase(s):
    
    # Inicialização de uma variável palavras para contar o número de palavras, começando com 1
    palavras = 1
    
    # Loop for que itera sobre os índices da string s
    for i in range(len(s)):
        
        # Verifica se o caractere atual é maiúsculo
        if s[i].isupper():
            
            # Incrementa o número de palavras se o caractere atual for maiúsculo
            palavras += 1
            
    # Retorna o número total de palavras encontradas na string
    return palavras