
# O problema "Breaking the Records" 
# em HackerRank solicita a implementação 
# de uma função chamada breakingRecords(scores), 
# onde scores é um array representando as 
# pontuações obtidas em uma série de jogos. 
# O objetivo é contar quantas vezes o jogador 
# quebra seu próprio recorde de pontuação 
# mais alta e mais baixa durante os jogos.

# def breakingRecords(pontuacoes):
    
#     # Inicializa as variáveis para armazenar as pontuações máxima e mínima.
#     max_pontucao = pontuacoes[0]
#     min_pontuacao = pontuacoes[0]
    
#     # Inicializa as variáveis para contar as quebras de recordes.
#     max_conta = 0
#     min_conta = 0
    
#     # Itera sobre as pontuações para verificar os recordes.
#     for pontuacao in pontuacoes:
        
#         # Verifica se a pontuação atual é maior que a pontuação máxima registrada.
#         if pontuacao > max_pontucao:
            
#             # Atualiza a pontuação máxima e incrementa o contador de quebras de recorde máximo.
#             max_pontucao = pontuacao
#             max_conta += 1
        
#         # Verifica se a pontuação atual é menor que a pontuação mínima registrada.
#         elif pontuacao < min_pontuacao:
            
#             # Atualiza a pontuação mínima e incrementa o contador de quebras de recorde mínimo.
#             min_pontuacao = pontuacao
            
#             min_conta += 1
    
#     # Retorna um array contendo o número de quebras de recorde máximo e mínimo, respectivamente.
#     return [max_conta, min_conta]


def breakingRecords(pontuacoes):
    
    """
    Função que conta quantas vezes os recordes máximo e mínimo foram quebrados.
    
    Parameters:
    pontuacoes (List[int]): Lista de pontuações.
    
    Returns:
    List[int]: Lista com a contagem de quebras do recorde máximo e mínimo.
    """
    
    # Inicializa as variáveis para armazenar a maior e menor pontuação, 
    # e os contadores de quebra de recorde.
    maior_pontuacao = [pontuacoes[0], 0]
    menor_pontuacao = [pontuacoes[0], 0]
    
    # Percorre as pontuações para contar as quebras de recordes.
    for i in pontuacoes[1:]:
        
        # Verifica se a pontuação atual é menor que o recorde mínimo.
        if i < menor_pontuacao[0]:
            
            # Atualiza o recorde mínimo e incrementa o contador.
            menor_pontuacao = [i, menor_pontuacao[1] + 1]
            
        # Verifica se a pontuação atual é maior que o recorde máximo.
        if i > maior_pontuacao[0]:
            
            # Atualiza o recorde máximo e incrementa o contador.
            maior_pontuacao = [i, maior_pontuacao[1] + 1]
    
    # Retorna uma lista com a contagem de quebras do recorde máximo e mínimo.
    return [maior_pontuacao[1], menor_pontuacao[1]]