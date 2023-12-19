from compareTriplets import compareTriplets

if __name__ == '__main__':
    
    # ler os valores dos triplos a e b como listas de inteiros
    a = list(map(int, input().rstrip().split()))
    
    b = list(map(int, input().rstrip().split()))
    
    # chamar a função compareTriplets com os valores de a e b e armazenar o resultado
    resultado = compareTriplets(a, b)
    
    # converter o resultado (uma lista de inteiros) em uma string e imprimir
    print(' '.join(map(str, resultado)))