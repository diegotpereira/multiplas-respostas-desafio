# // Você recebe um livro com páginas 
# // numeradas de 1 a n. O livro está 
# // aberto na página 1 e 2. Você pode 
# // virar as páginas do livro de uma 
# // em uma ou duas em duas. O objetivo 
# // é encontrar o número mínimo de 
# // viradas de páginas necessárias 
# // para chegar a uma página específica.

# // n é o número total de páginas no livro.
# // p é o número da página para a qual você deseja virar.

# def pageCount(totalPaginas, paginaDestino):
    
#     # // Verifica se o destino é uma página par.
#     if paginaDestino % 2 == 0:
        
#         # // Se for par, calcula a quantidade de viradas necessárias do início.
#         iniciar = 1 + (paginaDestino - 2) // 2
        
#         # // Calcula a quantidade de viradas necessárias do fim
#         final = (totalPaginas - paginaDestino) // 2
        
#     # // Se for ímpar, 
#     if paginaDestino % 2 == 1:
        
#         # // calcula a quantidade de viradas necessárias do início.
#         iniciar = (paginaDestino - 1) // 2
        
#         # // Calcula a quantidade de viradas necessárias do fim.
#         final = (totalPaginas + 1 - paginaDestino)
        
#     # // Retorna o mínimo entre as viradas do início e do fim.
#     return min(iniciar, final)

# def pageCount(totalPaginas, paginaDestino):
    
#     # Verifica se a página de destino é a primeira ou a última.
#     if paginaDestino == 1 or totalPaginas == paginaDestino:
        
#         # Se sim, não são necessárias viradas de página, retorna '0'.
#         return '0'
    
#     else:
        
#         # Verifica se é mais eficiente virar do final para o início.
#         if (totalPaginas - paginaDestino) < paginaDestino:
            
#             # Verifica condição especial para virar apenas uma página ímpar.
#             if totalPaginas - paginaDestino <= 1 and paginaDestino % 2 != 0:
                
#                 # Se sim, retorna '1'.
#                 return '1'
            
#             else:
                
#                 # Calcula a quantidade de viradas necessárias do final para o início.
#                 return (totalPaginas - paginaDestino) // 2
            
#         else:
            
#             # Se for mais eficiente virar do início para o final, calcula a quantidade de viradas.
#             return paginaDestino // 2


# # Importa o módulo math para usar a função ceil (arredondamento para cima)
# import math

# # Define a função pageCount que recebe o total de páginas e a página de destino
# def pageCount(totalPaginas, paginaDestino):
    
#     # Verifica se o total de páginas é ímpar
#     eh_impar = totalPaginas % 2 != 0
    
#     # Verifica se a página de destino está na segunda metade do livro
#     if paginaDestino > totalPaginas / 2:
        
#         # Verifica se é uma página ímpar e está a uma página de distância do final
#         if eh_impar and totalPaginas - paginaDestino <= 1:
            
#             # Se sim, não são necessárias viradas de página, retorna 0
#             return 0
        
#         # Calcula a quantidade de viradas necessárias do final para o início, arredondando para cima
#         return math.ceil((totalPaginas - paginaDestino - 1) / 2) if eh_impar else math.ceil((totalPaginas - paginaDestino) / 2)
    
#     # Se a página de destino está na primeira metade do livro, calcula a quantidade de viradas necessárias do início para o final, arredondando para cima
#     return math.ceil((paginaDestino - 1) / 2)


def pageCount(totalPaginas, paginaDestino):
    
    # Calcula o meio do livro (quantidade de páginas dividido por 2)
    meio_livro = totalPaginas // 2
    
    # Calcula a quantidade de viradas necessárias do início para a página de destino
    vira = paginaDestino // 2
    
    # Retorna a quantidade mínima de viradas de página
    return vira if paginaDestino <= meio_livro else meio_livro - vira
    
    