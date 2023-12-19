# // O problema "Counting Valleys" no HackerRank 
# // envolve a contagem do número de vales que um 
# // viajante percorre durante uma caminhada. A 
# // ideia é que cada passo do viajante seja 
# // representado por uma "U" (subida) ou "D" 
# // (descida), e o objetivo é contar o número 
# // total de vales que o viajante atravessa.

# // O problema especificamente pede para 
# // implementar uma função chamada countingValleys 
# // que aceita dois parâmetros:

# // n: o número de passos na caminhada.
# // s: uma string que representa a sequência 
# // de passos (cada caractere é "U" ou "D").
# // A função deve retornar um número inteiro 
# // representando o número de vales percorridos pelo viajante.

# // Um vale é definido como uma sequência 
# // de passos que começa com uma descida ("D") 
# // e termina com uma subida ("U"), cruzando 
# // o nível do mar. O viajante inicia e termina 
# // a caminhada ao nível do mar.

# // Por exemplo, se a sequência de passos for 
# // "UDDDUDUU", o viajante percorre um vale 
# // porque a sequência é "DDD" e termina com 
# // uma subida "U". Portanto, o resultado seria 1 vale.

# def countingValleys(passos, caminho):
    
#     # Inicializa o nível atual do viajante e a contagem de vales atravessados
#     atualNivel = 0
#     atravessarVale = 0
    
#     # Itera sobre os passos no caminho
#     for passo in caminho:
        
#         # Verifica se o passo é uma subida ("U")
#         if(passo == 'U'):
            
#             # Aumenta o nível atual
#             atualNivel += 1
            
#             # Verifica se o viajante atingiu o nível do mar (nível 0)
#             if (atualNivel == 0):
                
#                 # Se sim, significa que atravessou um vale
#                 atravessarVale += 1
                
#         else:
            
#             # Se o passo não for uma subida, é uma descida ("D"), diminui o nível
#             atualNivel -= 1
    
#     # Retorna o número total de vales atravessados
#     return atravessarVale


def countingValleys(passos, caminho):
    
    # Inicializa a posição atual do viajante e o contador de vales atravessados
    posicao = 0
    contador = 0
    
    # Itera sobre os passos no caminho
    for passo in list(caminho):
        
        # Atualiza a posição com base no tipo de passo ('U' para subida, '-1' para descida)
        posicao += 1 if 'U' == passo else - 1
        
        # Verifica se a posição atingiu o nível do mar (posição 0) e se é uma subida ('U')
        if not posicao and 'U' == passo:
            
            # Se sim, significa que atravessou um vale, incrementa o contador
            contador += 1
    
    # Retorna o número total de vales atravessados
    return contador