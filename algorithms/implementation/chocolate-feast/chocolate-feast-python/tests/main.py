from chocolateFeast import chocolateFeast

if __name__ == '__main__':
    
    t = int(input().strip())
    
    for _ in range(t):
        
        primeiraMultiplaEntrada = input().rstrip().split()
        
        n = int(primeiraMultiplaEntrada[0])
        
        c = int(primeiraMultiplaEntrada[1])
        
        m = int(primeiraMultiplaEntrada[2])
        
        resultado = chocolateFeast(n, c, m)
        
        print(str(resultado) + '\n')