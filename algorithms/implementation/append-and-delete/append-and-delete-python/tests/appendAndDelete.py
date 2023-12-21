# // O objetivo do problema é determinar se uma 
# // string pode ser convertida em outra usando 
# // um mínimo de operações de inserção e exclusão. 
# // A string de origem é S, e a string alvo é T. 
# // Para cada string, podemos inserir qualquer 
# // caractere no final da string, excluir qualquer 
# // caractere do final da string ou adicionar qualquer 
# // caractere no final da string. A tarefa é encontrar 
# // o tamanho mínimo das operações necessárias para 
# // transformar S em T, usando a definição fornecida.

# // string s: a string inicial
# // string t: a string desejada
# // int k: o número exato de operações que devem ser realizadas

def appendAndDelete(s, t, k):
    
    indice = 0
    
    while (indice < k):
        
        if s == t[:len(s)] and k - indice == len(t) - len(s):
            
            return 'Yes'
        
        else:
            
            s = s[:-1]
            
            indice += 1
    
    return 'No'