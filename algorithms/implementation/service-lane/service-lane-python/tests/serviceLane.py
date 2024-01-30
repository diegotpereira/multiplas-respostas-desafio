# O problema envolve calcular a largura máxima do veículo 
# que pode viajar com segurança em cada segmento da faixa 
# de serviço, dado um array de larguras em pontos ao longo 
# da estrada e uma lista de índices de pontos de entrada e saída.

# Dada uma rodovia dividida em várias faixas de larguras 
# diferentes e uma lista de segmentos dessa rodovia, você 
# precisa determinar o tamanho mínimo da faixa disponível 
# para cada segmento. Cada segmento é representado por um 
# par de índices (i, j), onde i é o índice de início do 
# segmento e j é o índice de término do segmento (0-based). 
# A largura da faixa é representada por um array chamado width.


# Definindo a função serviceLane com três parâmetros: n, cases e largura.
# - n: não é utilizado na função, pois a largura é a lista que representa as larguras das faixas.
# - cases: é uma lista de pares de índices (i, j) que representam os segmentos da rodovia.
# - largura: é uma lista que contém as larguras das faixas na rodovia.

def serviceLane(n, cases, largura):
    
    # Inicializando uma lista vazia chamada Lista para armazenar os resultados.
    Lista = []
    
    # Iterando sobre cada par de índices (i, j) em cases.
    for i in cases:
        
        # Adicionando à Lista o tamanho mínimo da faixa para o segmento atual.
        # - largura[i[0]: i[1] + 1]: obtém a sublista correspondente ao segmento atual.
        # - min(largura[i[0]: i[1] + 1]): encontra o valor mínimo na sublista, que representa o tamanho mínimo da faixa.
        Lista.append(min(largura[i[0]: i[1] + 1]))
    
    # Retornando a lista final que contém os tamanhos mínimos das faixas para cada segmento.
    return Lista