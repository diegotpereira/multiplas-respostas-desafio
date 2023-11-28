


if __name__ == '__main__':
    
    primeira_multipla_entrada =  input().rstrip().split()
    
    n = int(primeira_multipla_entrada[0])
    
    k = int(primeira_multipla_entrada[1])
    
    conta = list(map(int, input().rstrip().split()))
    
    b = int(input().strip())
    
    resultado = bonAppetit(conta, k, b)
    