from maximumPerimeterTriangle import maximumPerimeterTriangle

if __name__ == '__main__':
    
    n = int(input().strip())
    
    gravetos = list(map(int, input().rstrip().split()))
    
    resultado = maximumPerimeterTriangle(gravetos)
    
    print(''.join(map(str, resultado)))
    print('\n')