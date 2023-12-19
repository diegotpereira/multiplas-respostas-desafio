from utopianTree import utopianTree

if __name__ == '__main__':
    
    t = int(input().strip())
    
    for _ in range(t):
        
        n = int(input().strip())
        
        resultado = utopianTree(n)
        
        print(str(resultado) + '\n')
        
        
        
        