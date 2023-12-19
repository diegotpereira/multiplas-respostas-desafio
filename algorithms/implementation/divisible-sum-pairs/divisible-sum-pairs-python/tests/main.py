from divisibleSumPairs import divisibleSumPairs

if __name__ == '__main__':
    
    primeira_multipla_entrada = input().rstrip().split()
    
    n = int(primeira_multipla_entrada[0])
    k = int(primeira_multipla_entrada[1])
    
    ar = list(map(int, input().rstrip().split()))
    
    resultado = divisibleSumPairs(n, k, ar)
    
    print(str(resultado) + '\n')