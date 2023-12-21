

if __name__ == '__main__':
    
    primeira_multipla_entrada = input().rstrip().split()
    
    n = int(primeira_multipla_entrada[0])
    
    k = int(primeira_multipla_entrada[1])
    
    q = int(primeira_multipla_entrada[2])
    
    a = list(map(int, input().rstrip().split()))
    
    consultas = []
    
    for _ in range(q):
        
        consulta_item = int(input().strip())
        
        consultas.append(consulta_item)
        
    resultado = circularArrayRotation(a, k, consultas)
    
    print('\n'.join(map(str, resultado)))
    print('\n')