# A tarefa do problema "Birthday Cake Candles" 
# no HackerRank é a seguinte:

# Você recebe um array de inteiros representando 
# as alturas de velas em um bolo. Sua tarefa é 
# determinar quantas velas podem ser apagadas 
# no bolo. Uma vela só pode ser apagada se for a mais alta.

# A entrada consiste em um único array de inteiros, 
# onde cada elemento representa a altura de uma vela. 
# A saída deve ser um único número inteiro, indicando 
# quantas velas podem ser apagadas.

# def birthdayCakeCandles(velas):
    
#     # Encontrar a altura máxima das velas
#     valor_maximo = max(velas)
    
#     # Contar quantas velas têm a altura máxima
#     contar_maximo = velas.count(valor_maximo)
    
#     # Retornar o número de velas com altura máxima
#     return contar_maximo

def birthdayCakeCandles(velas):
    
    # Retorna o número de velas que têm a altura máxima
    return(len(velas) - sum([1 if x != max(velas) else 0 for x in velas]))