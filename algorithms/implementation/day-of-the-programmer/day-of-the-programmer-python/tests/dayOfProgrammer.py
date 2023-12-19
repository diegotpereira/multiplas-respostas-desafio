# // O problema "Day of the Programmer" no HackerRank 
# // solicita que você implemente uma função para encontrar 
# // a data da transição do calendário juliano para o 
# // calendário gregoriano durante o ano específico de 
# // 1918. No calendário juliano, o ano 1918 é um ano 
# // bissexto, mas a partir de 1919, o calendário gregoriano 
# // é usado, e o 32º dia do ano é o dia 14 de fevereiro 
# // (como nos anos bissextos gregorianos).

# // A entrada do problema é um único inteiro representando 
# // um ano. A saída esperada é uma string que representa a 
# // data da transição do calendário juliano para o 
# // gregoriano durante esse ano específico.

# def dayOfProgrammer(ano):
    
#     # Número total de dias até 31 de agosto (considerando um ano não bissexto)
#     dias = 243
    
#     # Mês de setembro
#     mes = 9
    
#     # Ajuste para o ano de 1918, onde a transição ocorre em 13 de fevereiro
#     if(ano == 1918):
        
#         dias -= 13
        
#     # Verifica se o ano é antes de 1918 e é bissexto no calendário juliano
#     elif (ano < 1918 and ano % 4 == 0):
        
#         dias += 1
        
#     # Verifica se o ano é após 1918 e é bissexto no calendário gregoriano
#     elif (ano > 1918 and ano % 4 == 0 and ano % 100 != 0):
        
#         dias += 1
        
#     if(ano > 1918 and ano % 400 == 0):
        
#         dias += 1
        
#      # Calcula o dia do Programador (256º dia do ano)
#     dia = 256 - dias
    
#     # Formata a data no formato desejado e retorna como uma string
#     return "{:02d}.{:02d}.{:04d}".format(dia, mes, ano)

# def dayOfProgrammer(ano):
    
#     # Verifica se o ano é 1918, caso especial onde a transição ocorre em 26 de setembro
#     if 1918 == ano:
        
#         return '26.09.1918'
    
#     # Inicializa uma variável indicando se o ano é bissexto
#     ano_bissexto = True
    
#     # Verifica se o ano não é divisível por 4 ou, se após 1918, é divisível por 100 mas não por 400
#     if ano % 4 or ano > 1918 and not ano % 100 and ano % 400:
        
#         ano_bissexto = False
    
#     # Retorna a data formatada como string
#     return '.'.join(['12' if ano_bissexto else '13', '09', str(ano)])


def dayOfProgrammer(ano):
    
    # Inicializa a parte da data comum a todos os casos
    data = "13.09."
    
    # Verifica se o ano é o ano especial de transição em 1918
    if ano == 1918:
        
        # Atualiza a parte da data para o caso especial
        data = "26.09."
        
    # Verifica se o ano é bissexto no calendário juliano ou gregoriano
    elif (ano % 4 == 0) and (ano < 1918 or ano % 100 != 0 or ano % 400 == 0):
        
        # Atualiza a parte da data para anos bissextos
        data = "12.09."
        
    # Retorna a data formatada como string concatenando com o ano
    return data + str(ano)