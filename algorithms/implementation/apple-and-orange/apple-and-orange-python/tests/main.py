from countApplesAndOranges import countApplesAndOranges

if __name__ == '__main__':
    
    primeira_multipla_entrada = input().rstrip().split()
    
    s = int(primeira_multipla_entrada[0])
    
    t = int(primeira_multipla_entrada[1])
    
    segunda_multipla_entrada = input().rstrip().split()
    
    a = int(segunda_multipla_entrada[0])
    
    b = int(segunda_multipla_entrada[1])
    
    terceira_multipla_entrada = input().rstrip().split()
    
    m = int(terceira_multipla_entrada[0])
    
    n = int(terceira_multipla_entrada[1])
    
    macas = list(map(int, input().rstrip().split()))
    
    laranjas = list(map(int, input().rstrip().split()))
    
    resultado = countApplesAndOranges(s, t, a, b, macas, laranjas)
    
    print(resultado)