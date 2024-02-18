

def happyLadybugs(b):
    
    # Itera sobre cada caractere na string 'b'
    for i in b:
        
        # Verifica se o caractere atual não é um sublinhado '_' 
        # e se há apenas uma ocorrência desse caractere na string 'b'
        if i != '_' and b.count(i) == 1:
            
            # Retorna 'NO' se uma joaninha não pode ser feliz
            return 'NO'
        
        # Verifica se não há espaços vazios na string 'b'
        if '_' not in b:
            
            # Inicializa uma variável para verificar se há pelo menos uma joaninha feliz
            c = False
            
            # Itera sobre os índices da string 'b' até o penúltimo caractere
            for i in range(len(b) - 1):
                
                # Verifica se a joaninha atual é igual à próxima joaninha
                if b[i] == b[i + 1]:
                    
                     # Define a variável 'c' como verdadeira se pelo menos uma joaninha estiver feliz
                    c = True
                    
                else:
                    
                    # Verifica se uma joaninha feliz foi encontrada anteriormente
                    if c == True:
                        
                        # Redefine a variável 'c' como falsa para garantir que as joaninhas sejam felizes em pares
                        c = False 
                        
                    else:
                        
                        # Retorna 'NO' se não houver uma joaninha feliz em pares
                        return 'NO'
                    
            # Retorna 'YES' se todas as joaninhas estiverem felizes
            return 'YES'
        
        else:
            
            # Retorna 'YES' se houver espaços vazios na string 'b'
            return 'YES'