from acmTeam import acmTeam

if __name__ == '__main__':
    
    primeira_multipla_entrada = input().rstrip().split()
    
    n = int(primeira_multipla_entrada[0])
    
    m = int(primeira_multipla_entrada[1])
    
    topico = []
    
    for _ in range(n):
        
        topico_item = input()
        
        topico.append(topico_item)
        
        resultado = acmTeam(topico)
        
        print('\n'.join(map(str, resultado)))