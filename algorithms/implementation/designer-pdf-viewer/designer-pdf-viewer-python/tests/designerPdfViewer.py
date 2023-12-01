# // Dada uma palavra (string) e uma matriz que 
# // representa as alturas das letras do alfabeto, 
# // você deve determinar a área real que será 
# // destacada ao selecionar essa palavra em um 
# // visualizador de PDF. Cada letra tem uma altura 
# // específica associada a ela na matriz, e a 
# // altura total da palavra é dada pela altura 
# // da letra mais alta na palavra multiplicada 
# // pelo comprimento da palavra.


# # Função que calcula a área real destacada ao selecionar uma palavra em um visualizador de PDF

# def designerPdfViewer(h, palavra):
    
#     # Inicializa a altura máxima com 0
#     altura_maxima = 0
    
#     # Itera sobre cada caractere na palavra
#     for caracter in palavra:
        
#         # Obtém o caractere atual e converte para maiúsculo
#         caracter = caracter.upper()
        
#         # Obtém a altura correspondente ao caractere atual na lista h
#         elemento = h[ord(caracter) - ord('A')]
        
#         # Atualiza a altura máxima se a altura do caractere atual for maior
#         altura_maxima = max(elemento, altura_maxima)
        
#     # Retorna a área real, que é a altura máxima multiplicada pelo comprimento da palavra
#     return altura_maxima * len(palavra)


# Função que calcula a área real destacada ao selecionar uma palavra em um visualizador de PDF

def designerPdfViewer(h, palavra):
    
    # Inicializa a altura máxima com 0
    alturaMaxima = 0
    
    # Obtém o comprimento da palavra
    tamanhoPalavra = len(palavra)
    
    # Itera sobre cada caractere na palavra
    for i in range(tamanhoPalavra):
        
        # Calcula o índice correspondente ao caractere atual na lista de alturas (subtraindo o código ASCII de 'a')
        indice = ord(palavra[i]) - ord('a')
        
        # Verifica se a altura do caractere atual é maior que a altura máxima atual
        if alturaMaxima < h[indice]:
            
             # Atualiza a altura máxima
            alturaMaxima = h[indice]
        
    # Retorna a área real, que é a altura máxima multiplicada pelo comprimento da palavra
    return alturaMaxima * tamanhoPalavra