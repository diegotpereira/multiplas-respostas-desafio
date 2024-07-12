


def strangeCounter(t):

    # Define o valor inicial da duração do contador
    durar = 3

    # Define o valor inicial do passo, 
    # que é a quantidade de tempo em que o contador funciona antes de resetar
    passo = 3

    # Loop até que t seja menor ou igual a durar
    while t > durar:

        # Dobra o valor do passo para o próximo ciclo do contador
        passo *= 2

        # Atualiza durar para o novo valor do ciclo do contador
        durar += passo 

    # Calcula o valor do contador no momento t e retorna
    return durar - t + 1