

from weightedUniformStrings import weightedUniformStrings

if __name__ == '__main__':
    
    s = input()
    
    contar_consultas = int(input().strip())
    
    consultas = []
    
    for _ in range(contar_consultas):
        
        consultas_item = int(input().strip())
        
        consultas.append(consultas_item)
        
    resultado = weightedUniformStrings(s, consultas)
    
    print('\n'.join(resultado))
    print('\n')
    
    