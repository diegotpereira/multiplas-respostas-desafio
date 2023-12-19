

if __name__ == '__main__':
    
    h = list(map(int, input().rstrip().split()))
    
    palavra = input()
    
    resultado = designerPdfViewer(h, palavra)
    
    print(str(resultado) + '\n')
    