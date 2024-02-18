from howManyGames import howManyGames

if __name__ == '__main__':
    
    primeira_multipla_entrada = input().rstrip().split()
    
    p = int(primeira_multipla_entrada[0])
    
    d = int(primeira_multipla_entrada[1])
    
    m = int(primeira_multipla_entrada[2])
    
    s = int(primeira_multipla_entrada[3])
    
    resposta = howManyGames(p, d, m, s)
    
    print(str(resposta) + '\n')