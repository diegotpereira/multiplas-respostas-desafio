# A tarefa do problema é determinar 
# o número de dias belos entre duas datas fornecidas.

# Um dia é considerado belo se a diferença 
# entre o dia e seu dobro reverso é menor 
# que ou igual a uma distância específica (disparidade).


# Função que inverte os dígitos de um número e retorna o resultado como um inteiro.

def reverso(n):
    
    return int(str(n)[::-1])

# Função principal que conta quantos dias dentro de um intervalo atendem a certa condição.
def beautifulDays(i, j, k):
    
    # Inicializa a variável que armazenará o número de dias que atendem à condição.
    dias_perfeitos = 0
    
    # Itera sobre cada dia no intervalo de i a j (inclusive).
    for dia in range(i, j + 1):
        
        # Calcula a diferença absoluta entre o número original do dia e seu reverso.
        diferenca = abs(dia - reverso(dia))
        
        # Verifica se a diferença é um múltiplo de k. Se sim, o dia atende à condição.
        if diferenca % k == 0:
            
            # Incrementa o contador de dias perfeitos.
            dias_perfeitos += 1
    
    # Retorna o número total de dias que atendem à condição.
    return dias_perfeitos