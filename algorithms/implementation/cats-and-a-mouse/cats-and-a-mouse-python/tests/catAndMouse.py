# // Existem três personagens: 
# // dois gatos (Cat A e Cat B) 
# // e um rato (Mouse C). O objetivo 
# // é determinar qual dos dois gatos 
# // alcançará primeiro o rato, 
# // considerando sua posição inicial 
# // no eixo x. Os gatos e o rato 
# // estão inicialmente localizados 
# // em posições diferentes no eixo x.

# // O problema pede para determinar o resultado com base nas seguintes condições:

# // Se ambos os gatos alcançarem o rato ao mesmo tempo, o rato escapa, e a resposta é "Mouse C Escape".
# // Se o Cat A alcançar o rato primeiro, a resposta é "Cat A Catch Mouse C".
# // Se o Cat B alcançar o rato primeiro, a resposta é "Cat B Catch Mouse C".

# def catAndMouse(x, y, z):
    
#     # Verifica se a distância entre o rato e o Cat A é menor do que a distância entre o rato e o Cat B.
#     if abs(z - x) < abs(z - y):
        
#         # Se Cat A estiver mais próximo do rato, retorna "Cat A".
#         return 'Cat A'
    
#     # Se Cat B estiver mais próximo do rato, retorna "Cat B".
#     elif abs(z - x) > abs(z - y):
        
#         return 'Cat B'
    
#     # Se as distâncias são iguais, o rato escapa, retorna "Mouse C".
#     else:
        
#         return 'Mouse C'


# A função catAndMouse recebe as posições iniciais dos gatos (x, y) e a posição inicial do rato (z) no eixo x.

def catAndMouse(x, y, z):
    
    # Verifica se a distância entre o rato e Cat A é igual à distância entre o rato e Cat B.
    if abs(x - z) == abs(y - z):
        
        # Se as distâncias são iguais, o rato escapa; retorna "Mouse C".
        return 'Mouse C'
    
    # Se as distâncias não são iguais, retorna "Cat A" se a distância entre o rato e Cat A for menor,
    # caso contrário, retorna "Cat B".
    return 'Cat A' if abs(x - z) < abs(y - z) else 'Cat B'