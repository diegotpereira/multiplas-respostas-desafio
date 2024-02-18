

if __name__ == '__main__':
    
    nm = input().split()
    
    n = int(nm[0])
    
    m = int(nm[1])
    
    c = list(map(int, input().rstrip().split()))
    
    resultado = flatlandSpaceStations(n, c)
    
    print(str(resultado) + '\n')