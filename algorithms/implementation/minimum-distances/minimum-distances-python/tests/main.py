from minimumDistances import minimumDistances

if __name__ == '__main__':
    
    n = int(input().strip())
    
    a = list(map(int, input().rstrip().split()))
    
    resultado = minimumDistances(a)
    
    print(str(resultado) + '\n')