from birthday import birthday

if __name__ == '__main__':
    
    n = int(input().strip())
    
    s = list(map(int, input().rstrip().split()))
    
    primeira_multipla_entrada = input().rstrip().split()
    
    d = int(primeira_multipla_entrada[0])
    
    m = int(primeira_multipla_entrada[1])
    
    resultado = birthday(s, d, m)
    
    print(str(resultado) + '\n')