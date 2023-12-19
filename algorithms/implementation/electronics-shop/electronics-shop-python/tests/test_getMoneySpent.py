from getMoneySpent import getMoneySpent

class TesteGetMoneySpent:
    
    def testeCaso1(self):
        
        teclados  = [3, 1]
        dispositivos = [5, 2, 8]
        b = 10
        
        esperado = 9
        
        resultado = getMoneySpent(teclados, dispositivos, b)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        teclados  = [4]
        dispositivos = [5]
        b = 5
        
        esperado = -1
        
        resultado = getMoneySpent(teclados, dispositivos, b)
        
        assert resultado == esperado