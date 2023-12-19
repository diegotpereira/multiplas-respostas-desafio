from plusMinus import plusMinus

if __name__ == '__main__':
    
    n = int(input().strip())
    
    arr = list(map(int, input().rstrip().split()))
    
    resultado = plusMinus(arr)
    
    print(resultado)