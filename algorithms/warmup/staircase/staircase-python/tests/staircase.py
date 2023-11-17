# A tarefa do problema "Staircase" no HackerRank 
# é criar uma escada (staircase) usando o caractere "#" 
# em um console. A escada deve ter uma altura específica, 
# e cada degrau da escada deve consistir em "#"s. O objetivo 
# é imprimir a escada de maneira que pareça uma escada realista quando vista de lado.

# def staircase(n):

#     # Inicializa uma string vazia para armazenar a saída da escada
#     resultado = ""
    

#     # Loop para iterar de 1 até n (inclusive)
#     for i in range(1, n + 1):

#         # Gera uma string contendo i '#'s
#         estrelas = "#" * i

#         # Adiciona a string estrelas justificada à direita com largura n, seguida por uma quebra de linha, à string resultado
#         resultado += estrelas.rjust(n) + '\n'

#     # Remove os espaços em branco no final da string para garantir que não haja linhas em branco extras
#     return resultado.rstrip()


def staircase(n):
    # Inicializa as variáveis para controle do espaçamento e quantidade de hashtags
    espaco = n - 1
    hastag = 1

    # Inicializa a string de resultado
    resultado = ""

    # Loop para construir cada degrau da escada
    for _ in range(n):
        # Concatena a string do degrau atual à string resultado
        resultado += (" " * espaco + "#" * hastag + '\n')

        # Atualiza as variáveis para o próximo degrau
        espaco -= 1
        hastag += 1

    # Remove os espaços em branco no final da string para garantir um resultado correto
    return resultado.rstrip()
