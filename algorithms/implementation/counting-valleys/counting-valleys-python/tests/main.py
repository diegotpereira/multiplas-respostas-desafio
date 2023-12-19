from countingValleys import countingValleys

if __name__ == '__main__':
    
    passos = int(input().strip())
    
    caminho = input()
    
    resultado = countingValleys(passos, caminho)
    
    print(str(resultado) + '\n')