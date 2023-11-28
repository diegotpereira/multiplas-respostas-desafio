from breakingRecords import breakingRecords

if __name__ == '__main__':
    
    n = int(input().strip())
    
    pontuacoes = list(map(int, input().rstrip().split()))
    
    resultado = breakingRecords(pontuacoes)
    
    print(' '.join(map(str, resultado)))
    print('\n')