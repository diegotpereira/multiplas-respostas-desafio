from timeInWords import timeInWords

if __name__ == '__main__':
    
    h = int(input().strip())
    
    m = int(input().strip())
    
    resultado = timeInWords(h, m)
    
    print(resultado + '\n')