from birthdayCakeCandles import birthdayCakeCandles

if __name__ == '__main__':
    
    n = int(input().strip())
    
    velas = list(map(int, input().rstrip().split()))
    
    resultado = birthdayCakeCandles(velas)
    
    print(str(resultado) + '\n')