# A tarefa do problema "The Time in Words" 
# do HackerRank é criar um programa que receba 
# um horário no formato de horas e minutos 
# (no formato de 24 horas) e retorne a representação 
# desse horário em palavras. Por exemplo, se a entrada 
# for "5:47", o programa deve retornar "thirteen minutes 
# to six" (treze minutos para as seis).

# Define uma função chamada timeInWords que recebe duas variáveis, h (horas) e m (minutos).
def timeInWords(h, m):
    
    # Se os minutos forem 0, ou seja, horas exatas,
    if m == 0:
        
        # retorna a hora em palavras seguida de "o' clock".
        return f"{obter_palavras_horas(h)} o' clock"
    
    # Se os minutos forem 15,
    elif m == 15:
        
        # retorna "quarter past" seguido da hora em palavras.
        return f"quarter past {obter_palavras_horas(h)}"
    
    # Se os minutos forem 30,
    elif m == 30: 
        
        # retorna "half past" seguido da hora em palavras.
        return f"half past {obter_palavras_horas(h)}"
    
    # Se os minutos forem 45,
    elif m == 45:
        
        # retorna "quarter to" seguido da próxima hora em palavras.
        return f"quarter to {obter_palavras_horas((h + 1) % 12)}"
    
    # Se os minutos forem 1,
    elif m == 1:
        
        # retorna o minuto singular seguido de "minute past" e a hora em palavras.
        return f"{obter_palavras_minutos(m)} minute past {obter_palavras_horas(h)}"
    
    # Se os minutos forem menores que 20,
    elif m < 20:
        
        # retorna os minutos em palavras seguido de "minutes past" e a hora em palavras.
        return f"{obter_palavras_minutos(m)} minutes past {obter_palavras_horas(h)}"
    
    # Se os minutos forem menores que 30,
    elif m < 30:
        
        # retorna os minutos em palavras seguido de "minutes past" e a hora em palavras.
        return f"{obter_palavras_minutos(m)} minutes past {obter_palavras_horas(h)}"
    
    # Se os minutos forem menores ou iguais a 40,
    elif m <= 40: 
        
        # retorna os minutos restantes para o próximo horário em palavras seguido de "minutes to" e a próxima hora em palavras.
        return f"{obter_palavras_minutos(60 - m)} minutes to {obter_palavras_horas((h + 1) % 12)}"
    
    # Se os minutos forem 59,
    elif m == 59:
        
         # retorna o minuto restante para o próximo horário em palavras seguido de "minute to" e a próxima hora em palavras.
        return f"{obter_palavras_minutos(60 - m)} minute to {obter_palavras_horas((h + 1) % 12)}"
    
    # Para qualquer outro caso,
    else:
        
        # retorna os minutos restantes para o próximo horário em palavras seguido de "minutes to" e a próxima hora em palavras.
        return f"{obter_palavras_minutos(60 - m)} minutes to {obter_palavras_horas((h + 1) % 12)}"

# Define uma função chamada obter_palavras_minutos que recebe um parâmetro m (minutos).
def obter_palavras_minutos(m):
    
    # Define um dicionário que mapeia os minutos para as palavras correspondentes.
    mapa_minutos = {
        
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "quarter",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        21: "twenty one",
        22: "twenty two",
        23: "twenty three",
        24: "twenty four",
        25: "twenty five",
        26: "twenty six",
        27: "twenty seven",
        28: "twenty eight",
        29: "twenty nine",
        30: "half"
    }
    
    # Retorna a palavra correspondente aos minutos fornecidos.
    return mapa_minutos[m]

# Define uma função chamada obter_palavras_horas que recebe um parâmetro h (horas).
def obter_palavras_horas(h):

    # Define um dicionário que mapeia as horas para as palavras correspondentes.
    mapa_horas = {
        
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        0: "twelve"
    }
    
    # Retorna a palavra correspondente às horas fornecidas, 
    # ajustando para o formato de 12 horas se necessário.
    return mapa_horas.get(h % 12)