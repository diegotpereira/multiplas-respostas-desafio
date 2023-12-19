

def getMoneySpent(teclados, dispositivos, b):
    
    maxPreco = -1
    
    for i in teclados:
        
        for j in dispositivos:
            
            custoTotal = i + j 
            
            if (custoTotal > maxPreco and custoTotal <= b):
                
                maxPreco = max(maxPreco, custoTotal)
    
    return maxPreco