from hurdleRace import hurdleRace

if __name__ == '__main__':
    
    primeira_multipla_entrada = input().rstrip().split()
    
    n = int(primeira_multipla_entrada[0])
    
    k = int(primeira_multipla_entrada[1])
    
    altura = list(map(int, input().rstrip().split()))
    
    resultado = hurdleRace(k, altura)
    
    print(str(resultado) + '\n')