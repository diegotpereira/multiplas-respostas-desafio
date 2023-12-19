from angryProfessor import angryProfessor

if __name__ == '__main__':
    
    t = int(input().strip())
    
    for _ in range(t):
        
        primeira_multipla_entrada = input().rstrip().split()
        
        
        n = int(primeira_multipla_entrada[0])
        
        k = int(primeira_multipla_entrada[1])
        
        a = list(map(int, input().rstrip().split()))
        
        resultado = angryProfessor(k, a)
        
        print(resultado + '\n')