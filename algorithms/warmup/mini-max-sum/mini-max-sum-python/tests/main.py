from miniMaxSum import miniMaxSum

if __name__ == '__main__':
    
    arr = list(map(int, input().rstrip().split()))
    
    resultado = miniMaxSum(arr)
    
    print(resultado)