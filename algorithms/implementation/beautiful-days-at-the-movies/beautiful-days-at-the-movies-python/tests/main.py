from beautifulDays import beautifulDays

if __name__ == '__main__':
    
    primeira_multipla_entrada = input().rstrip().split()
    
    i = int(primeira_multipla_entrada[0])
    
    j = int(primeira_multipla_entrada[1])
    
    k = int(primeira_multipla_entrada[2])
    
    resultado = beautifulDays(i, j, k)
    
    print(str(resultado) + '\n')