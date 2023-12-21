from squares import squares

if __name__ == '__main__':
    
    q = int(input().strip())
    
    for _ in range(q):
        
        primeira_multipla_entrada = input().rstrip().split()
        
        a = int(primeira_multipla_entrada[0])
        
        b = int(primeira_multipla_entrada[1])
        
        resultado = squares(a, b)
        
        print(str(resultado) + '\n')