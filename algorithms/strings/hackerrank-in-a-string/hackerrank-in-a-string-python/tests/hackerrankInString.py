# Este problema do HackerRank, "HackerRank em uma String!", 
# requer que você determine se uma determinada string 
# contém a subsequência "hackerrank" na ordem exata. 
# Aqui está um resumo do problema:

# Você recebe uma string 𝑠
# Você precisa determinar se s contém a sequência "hackerrank" na ordem exata.
# Os caracteres não precisam aparecer consecutivamente, mas sua ordem deve corresponder.

def hackerrankInString(s):
    
    # Converte a string 'hackerrank' em uma lista de caracteres
    palavra = list('hackerrank')
    
    # Itera sobre cada caractere na string fornecida 's'
    for i in s:
        
        # Verifica se a lista 'palavra' está vazia
        if not palavra:
            
            # Se 'palavra' estiver vazia, significa 
            # que todos os caracteres de 'hackerrank' 
            # foram encontrados na ordem correta na string 's'
            # Retorna 'YES' para indicar que a string 's' 
            # contém a sequência 'hackerrank'
            return 'YES'
        
        # Verifica se o caractere atual 'i' está presente no 
        # primeiro caractere da lista 'palavra'
        if i in palavra[0]:
        
            # Se o caractere atual 'i' estiver presente no 
            # primeiro caractere da lista 'palavra', remove 
            # o primeiro caractere da lista 'palavra'
            # Isso simula a correspondência de caracteres na ordem correta
            palavra.pop(0)
        
    # Após percorrer toda a string 's', verifica se 
    # ainda há caracteres na lista 'palavra'
    # Se houver, significa que nem todos os caracteres 
    # de 'hackerrank' foram encontrados na ordem correta na string 's'
    # Retorna 'NO' para indicar que a string 's' 
    # não contém a sequência 'hackerrank'
    # Caso contrário, retorna 'YES' para indicar 
    # que todos os caracteres de 'hackerrank' foram 
    # encontrados na ordem correta
    return 'NO' if palavra else 'YES'