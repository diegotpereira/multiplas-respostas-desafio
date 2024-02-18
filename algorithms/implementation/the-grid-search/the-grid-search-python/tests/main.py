from gridSearch import gridSearch

if __name__ == '__main__':
    
    t = int(input().strip())
    
    for t_ in range(t):
        
        primeira_multipla_entrada =  input().rstrip().split()
        
        R = int(primeira_multipla_entrada[0])
        
        C = int(primeira_multipla_entrada[1])
        
        G = []
        
        for R_ in range(R):
            
            G_item = input()
            
            G.append(G_item)
            
        segunda_multipla_entrada = input().rstrip().split()
        
        r = int(segunda_multipla_entrada[0])
        
        c = int(segunda_multipla_entrada[1])
        
        P = []
        
        for r_ in range(r):
            
            P_item = input()
            P.append(P_item)
            
        resultado = gridSearch(G, P)
        
        print(resultado + '\n')