from getTotalX import getTotalX

if __name__ == '__main__':
    
    primeira_multipla_entrada = int(input().rstrip().split())
    
    n = int(primeira_multipla_entrada[0])
    m = int(primeira_multipla_entrada[1])
    
    arr = list(map(int, input().rstrip().split()))
    brr = list(map(int, input().rstrip().split()))
    
    total = getTotalX(arr, brr)
    
    print(str(total) + '\n')