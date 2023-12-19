# A tarefa do problema é calcular 
# a contagem de dias belos em um intervalo de anos.

# Um dia é considerado belo se a 
# soma de seus dígitos reversos 
# é igual a ele mesmo (por exemplo, 12 é um dia belo porque 1 + 2 = 12).

# Além disso, o valor absoluto da 
# diferença entre o mês e o mês reversa deve ser menor ou igual a k.


# Função para calcular o número total de curtidas após n dias

def viralAdvertising(n):
    
    # Inicializa o acumulador de curtidas
    curtidasAcumuladas = 0
    
    # Inicializa o número de pessoas que compartilham o anúncio no primeiro dia
    compartilhado = 5
    
    # Loop para cada dia
    for _ in range(n):

        # Calcula o número de curtidas no dia atual
        numeroCurtidasHoje = compartilhado // 2
        
        # adiciona ao acumulador
        curtidasAcumuladas += numeroCurtidasHoje
        
        # Calcula o número de pessoas que compartilharão o anúncio no próximo dia
        compartilhado = (compartilhado // 2) * 3
    
    # Retorna o total acumulado de curtidas após n dias
    return curtidasAcumuladas