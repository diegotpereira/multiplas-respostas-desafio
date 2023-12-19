from pickingNumbers import pickingNumbers

if __name__ == '__main__':
    
    n = int(input().rstrip().split())
    
    arr = list(map(int, input().rstrip().split()))
    
    resultado = pickingNumbers(arr)
    
    print(str(resultado) + '\n')