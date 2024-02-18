from stones import stones

if __name__ == '__main__':
    
    T = int(input().strip())
    
    for _ in range(T):
        
        n = int(input().strip())
        
        a = int(input().strip())
        
        b = int(input().strip())
        
        resultado = stones(n, a, b)
        
        print(''.join(map(str, resultado)))
        print('\n')