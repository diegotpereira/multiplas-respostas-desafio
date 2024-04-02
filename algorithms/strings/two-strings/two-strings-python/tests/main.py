

if __name__ == '__main__':
    
    q = int(input().strip())
    
    for _ in range(q):
        
        s1 = input()
        
        s2 = input()
        
        resultado = twoStrings(s1, s2)
        
        print(resultado + '\n')