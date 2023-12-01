from getMoneySpent import getMoneySpent

if __name__ == '__main__':
    
    bnm = input().split()
    
    b = int(bnm[0])
    
    n = int(bnm[1])
    
    m = int(bnm[2])
    
    teclados = list(map(int, input().rstrip().split()))
    
    dispositivos = list(map(int, input().rstrip().split()))
    
    resultado = getMoneySpent(teclados, dispositivos, b)
    
    print(str(resultado) + '\n')
    
    