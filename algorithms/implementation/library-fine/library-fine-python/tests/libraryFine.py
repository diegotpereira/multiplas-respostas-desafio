# A tarefa do problema é determinar a quantidade 
# de dias de multa que uma pessoa deve pagar, 
# levando em consideração as datas de devolução 
# e de vencimento do livro.

def libraryFine(d1, m1, a1, d2, m2, a2):
    
    # Inicializa a variável multa como 0
    multa = 0
    
    # Verifica se o ano de devolução é igual ao ano esperado
    if (a1 == a2):
        
        # Se o mês de devolução for igual ao mês esperado
        if (m1 == m2):
            
            # Calcula a multa diária se o dia de devolução for maior que o dia esperado, caso contrário, multa é 0
            multa = 15 * (d1 - d2) if d1 > d2 else 0
            
        else:
            
            # Calcula a multa mensal se o mês de devolução for maior que o mês esperado, caso contrário, multa é 0
            multa = 500 * (m1 - m2) if m1 > m2 else 0
            
    else:
        
        # Se o ano de devolução é maior que o ano esperado, a multa é 10000, caso contrário, multa é 0
        multa = 10000 if a1 > a2 else 0
    
    # Retorna o valor da multa calculado
    return multa


