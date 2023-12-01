from sockMerchant import sockMerchant

if __name__ == '__main__':
    
    n = int(input().strip())
    
    ar = list(map(int, input().rstrip().split()))
    
    resultado = sockMerchant(n, ar)
    
    print(str(resultado) + '\n')