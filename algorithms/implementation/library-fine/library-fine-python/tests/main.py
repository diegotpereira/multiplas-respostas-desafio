from libraryFine import libraryFine

if __name__ == '__main__':
    
    primeira_multipla_entrada = input().rstrip().split()
    
    d1 = int(primeira_multipla_entrada[0])
    
    m1 = int(primeira_multipla_entrada[1])
    
    a1 = int(primeira_multipla_entrada[2])
    
    segunda_multipla_entrada = input().rstrip().split()
    
    d2 = int(segunda_multipla_entrada[0])
    
    m2 = int(segunda_multipla_entrada[1])
    
    a2 = int(segunda_multipla_entrada[2])
    
    resultado = libraryFine(d1, m1, a1, d2, m2, a2)
    
    print(str(resultado) + '\n')