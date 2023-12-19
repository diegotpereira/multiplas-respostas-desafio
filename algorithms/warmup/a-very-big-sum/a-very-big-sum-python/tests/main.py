from aVeryBigSum import aVeryBigSum

if __name__ == '__main__':
    
    ar_contar = int(input().rstrip().split())
    
    ar = list(map(int, input().rstrip().split()))
    
    resultado = aVeryBigSum(ar)
    
    print(str(resultado) + '\n')