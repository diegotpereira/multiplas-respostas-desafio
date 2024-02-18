

if __name__ == '__main__':
    
    t = int(input().strip())
    
    for _ in range(t):
        
        primeira_multipla_entrada = input().rstrip().split()
        
        b = int(primeira_multipla_entrada[0])
        
        w = int(primeira_multipla_entrada[1])
        
        segunda_multipla_entrada = input().rstrip().split()
        
        bc = int(segunda_multipla_entrada[0])
        
        wc = int(segunda_multipla_entrada[1])
        
        z = int(segunda_multipla_entrada[2])
        
        resultado = taumBday(b, w, bc, wc, z)
        
        print(str(resultado) + '\n')