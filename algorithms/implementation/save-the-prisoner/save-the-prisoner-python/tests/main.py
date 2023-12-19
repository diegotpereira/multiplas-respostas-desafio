from saveThePrisoner import saveThePrisoner

if __name__ == '__main__':
    
    t = int(input().strip())
    
    for _ in range(t):
        
        primeira_multipla_entrada = input().rstrip().split()
        
        n = int(primeira_multipla_entrada[0])
        
        m = int(primeira_multipla_entrada[1])
        
        s = int(primeira_multipla_entrada[2])
        
        resultado = saveThePrisoner(n, m, s)
        
        print(str(resultado) + '\n')