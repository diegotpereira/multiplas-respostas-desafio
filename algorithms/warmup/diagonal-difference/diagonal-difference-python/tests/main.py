from diagonalDifference import diagonalDifference

if __name__ == '__main__':
    
    n = int(input().strip())
    
    arr = []
    
    for _ in range(n):
        
        arr.append(list(map(int, input().rstrip().split())))
        
    resultado = diagonalDifference(arr)
    
    print(str(resultado) + '\n')