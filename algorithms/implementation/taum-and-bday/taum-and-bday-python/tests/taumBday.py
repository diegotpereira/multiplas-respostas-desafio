# O problema "Taum and B'day" envolve determinar o custo mínimo das 
# presentes desejadas por Diksha, onde Taum precisa comprar presentes 
# pretos e brancos. Cada presente preto custa um certo valor, cada 
# presente branco custa outro valor, e há um custo para converter 
# um presente de uma cor para a outra. O objetivo é calcular o custo 
# mínimo para adquirir os presentes desejados por Diksha.

# int b: Número de presentes pretos que Taum pretende comprar.
# int w: Número de presentes brancos que Taum pretende comprar.
# int bc: Custo de um presente preto (o preço de um presente da cor preta).
# int wc: Custo de um presente branco (o preço de um presente da cor branca).
# int z: Custo para converter um presente de uma cor para a outra. Ou seja, 
# se z for positivo, indica o custo de converter um presente preto para branco, 
# e se z for negativo, indica o custo de converter um presente branco para preto.

# Função que calcula o custo mínimo total para comprar presentes

def taumBday(numero_presentes_pretos, numero_presentes_brancos, custo_presente_preto, custo_presente_branco, custo_para_converter_presente):
    
    custo = 0
    
    # Verifica se é mais barato comprar presentes pretos e converter para brancos
    if custo_presente_branco + custo_para_converter_presente < custo_presente_preto:
        
        # Calcula o custo considerando a compra de presentes pretos e brancos convertidos
        custo += (custo_presente_branco + custo_para_converter_presente) * numero_presentes_pretos + (custo_presente_branco * numero_presentes_brancos)
        
    # Verifica se é mais barato comprar presentes brancos e converter para pretos
    elif custo_presente_preto + custo_para_converter_presente < custo_presente_branco:
        
        # Calcula o custo considerando a compra de presentes brancos e pretos convertidos
        custo += (custo_presente_preto + custo_para_converter_presente) * numero_presentes_brancos + (custo_presente_preto * numero_presentes_pretos)
        
    else:
        
        # Se não houver benefício em converter, compra diretamente os presentes
        custo += custo_presente_branco * numero_presentes_brancos + custo_presente_preto * numero_presentes_pretos
    
    # Retorna o custo mínimo total
    return custo