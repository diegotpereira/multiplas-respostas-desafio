

if __name__ == "__main__":
    
    primeira_multipla_entrada = int(input().rstrip().split())
    
    x1 = int(primeira_multipla_entrada[0])
    
    v1 = int(primeira_multipla_entrada[1])
    
    x2 = int(primeira_multipla_entrada[2])
    
    v2 = int(primeira_multipla_entrada[3])
    
    resultado = kangaroo(x1, v1, x2, v2)
    
    print(resultado + "\n")