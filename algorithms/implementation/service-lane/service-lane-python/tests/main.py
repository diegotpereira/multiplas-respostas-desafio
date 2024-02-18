from serviceLane import serviceLane

if __name__ == '__main__':
    
    primeiraMultiplaEntrada = input().rstrip().split()
    
    n = int(primeiraMultiplaEntrada[0])
    
    t = int(primeiraMultiplaEntrada[1])
    
    largura = list(map(int, input().rstrip().split()))
    
    cases = []
    
    for _ in range(t):
        
        cases.append(list(map(int, input())))
        
    resultado = serviceLane(n, cases, largura)
    
    print('\n'.join(map(str, resultado)))
    print('\n')
    
    