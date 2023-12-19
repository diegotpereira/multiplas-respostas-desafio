# O problema em questão no HackerRank, 
# com o título "Grading Students" (Arredondamento de Notas), 
# pede que você implemente uma função que realize o arredondamento 
# de notas de estudantes de acordo com as seguintes regras:

# Se a diferença entre a nota e o próximo múltiplo 
# de 5 for menor que 3, arredonde a nota para o próximo 
# múltiplo de 5.
# Se a nota for menor que 38, não faça nenhum 
# arredondamento, pois a diferença entre a nota e o 
# próximo múltiplo de 5 seria maior ou igual a 3.
# A entrada do problema consiste em uma lista de notas, 
# e a saída esperada é uma nova lista de notas após o arredondamento.

# def gradingStudents(grades):
    
#     # Itera sobre a lista de notas
#     for i in range(len(grades)):
        
#         # Verifica se a nota é maior ou igual a 38 para ser arredondada
#         if grades[i] >= 38:
            
#             # Calcula o resto da divisão da nota por 5
#             lembrar = grades[i] % 5
            
#             # Se o resto for maior ou igual a 3, arredonda a nota para o próximo múltiplo de 5
#             if lembrar >= 3:
                
#                 # Adiciona a diferença para arredondar a nota
#                 grades[i] += 5 - lembrar
    
#     # Retorna a lista de notas modificada
#     return grades


# def gradingStudents(grades):
    
#     # Lista para armazenar as notas corrigidas
#     arr = []
    
#     # Itera sobre as notas na lista original
#     for i in grades:
        
#         # Verifica se a nota é menor que 38
#         if i < 38:
            
#             # Se for menor que 38, 
#             # a nota permanece inalterada e é adicionada à lista corrigida
#             arr.append(i)
            
#         # Verifica se a diferença entre o próximo múltiplo de 5 e a nota é menor que 3
#         elif (((i // 5) + 1) * 5  - i) < 3:
            
#             # Se a diferença for menor que 3, 
#             # arredonda a nota para o próximo múltiplo de 5
#             arr.append(((i // 5) + 1) * 5)
            
#         else:
            
#             # Se não atender às condições anteriores, 
#             # a nota permanece inalterada e é adicionada à lista corrigida
#             arr.append(i)
    
#     # Retorna a lista de notas corrigidas
#     return arr


def gradingStudents(grades):
    
    # Lista para armazenar as notas arredondadas
    notas_arredondadas = []
    
    # Itera sobre as notas na lista original
    for grade in grades:
        
        # Verifica se a nota é maior ou igual a 38 para ser arredondada
        if grade >= 38:
            
            # Calcula a diferença até o próximo múltiplo de 5
            diferenca = 5 - grade % 5
            
            # Se a diferença for menor que 3, arredonda a nota
            if diferenca < 3:
                
                # Adiciona a diferença para arredondar a nota
                grade += diferenca
                
        # Adiciona a nota (arredondada ou não) à lista de notas arredondadas
        notas_arredondadas.append(grade)
        
    # Retorna a lista de notas arredondadas
    return notas_arredondadas
    
    