# A tarefa do problema é encontrar 
# o número do preso que receberá o doce, 
# considerando a rotação doce.

# Os presos são numerados de 1 a N, e a 
# rotação começa com o preso 1. Cada 
# preso tem um número único de pastilhas, 
# e o último preso tem um adicional do doce 0.

# n : o número de prisioneiros
# m : o número de doces
# s : o número da cadeira para começar a distribuir


# # Definindo uma função chamada saveThePrisoner que aceita três parâmetros: n, m e s.

# def saveThePrisoner(numero_prisioneiros, numero_doces, cadeira_inicial):
    
#     # Verificando se o número total de doces (numero_doces) é igual a 1.
#     if (numero_doces == 1):
        
#         # Se numero_doces for igual a 1, retorna o número do prisioneiro inicial cadeira_inicial.
#         return cadeira_inicial
    
#     # Verificando se o resto da divisão de (numero_doces + (cadeira_inicial - 1)) por numero_prisioneiros é igual a 0.
#     if ((numero_doces + (cadeira_inicial - 1)) % numero_prisioneiros == 0):
        
#         # Se o resto for 0, significa que o último doce foi dado ao último prisioneiro.
#         # Retorna o número total de prisioneiros numero_prisioneiros.
#         return numero_prisioneiros 
    
#     # Caso contrário, se o resto não for 0.
#     else:
        
#         # Retorna o número do prisioneiro que recebe o último doce.
#         return ((numero_doces + (cadeira_inicial - 1)) % numero_prisioneiros)


# A função recebe três parâmetros: número de prisioneiros, número de doces e a cadeira inicial.

def saveThePrisoner(numero_prisioneiros, numero_doces, cadeira_inicial):
    
    # Calcula a posição do prisioneiro que receberá o último doce.
    # Verifica se o resto da divisão (módulo) da soma de número de doces e cadeira inicial diminuído em 1
    # pelo número de prisioneiros é igual a 0.
    if(numero_doces + cadeira_inicial - 1) % numero_prisioneiros == 0:
        
        # Se a condição for verdadeira, significa que o último doce será dado ao último prisioneiro.
        # Retorna o número total de prisioneiros.
        return numero_prisioneiros
    
    # Se a condição acima não for satisfeita, então retorna o resultado da operação módulo
    # como a posição do prisioneiro que receberá o último doce.
    return (numero_doces + cadeira_inicial - 1) % numero_prisioneiros