# Dois cangurus em uma linha numérica 
# estão tentando pular para a mesma 
# localização em momentos diferentes. 
# Cada canguru tem uma posição inicial 
# na linha, uma velocidade constante e 
# eles pulam na mesma direção ao longo 
# da linha. O objetivo é determinar se 
# os cangurus vão pousar na mesma posição 
# após o mesmo número de saltos.

# def kangaroo(x1, v1, x2, v2):
    
#     # Verifica se o segundo canguru tem uma velocidade maior ou igual ao primeiro,
#     # ou se a diferença inicial entre suas posições não é divisível pela diferença de velocidades.
#     if v2 >= v1 or (x2 - x1) % (v1 - v2) != 0:
        
#         # Se uma das condições acima for verdadeira, os cangurus nunca vão se encontrar.
#         return "NO"
    
#     # Se as condições acima não forem atendidas, os cangurus vão se encontrar em algum momento.
#     return "YES"


def kangaroo(posicao_inicial_primeiro_canguru, velocidade_inicial_primeiro_canguru, posicao_inicial_segundo_canguru, velocidade_inicial_segundo_canguru):
    
    # Verifica se o primeiro canguru tem uma velocidade maior que o segundo
    if velocidade_inicial_primeiro_canguru > velocidade_inicial_segundo_canguru:
        
        # Verifica se existe um momento em que ambos os cangurus ocupam a mesma posição após o mesmo número de saltos
        if (posicao_inicial_segundo_canguru - posicao_inicial_primeiro_canguru) % (velocidade_inicial_primeiro_canguru - velocidade_inicial_segundo_canguru) == 0:
            
            # Se a condição é atendida, os cangurus se encontrarão
            return "YES"
    
    # Caso contrário, os cangurus não se encontrarão
    return "NO"