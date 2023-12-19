from bonAppetit import bonAppetit

class TesteBonAppetit:
    
    def testeCaso1(self):
        
        conta = [3, 10, 2, 9]
        k = 1
        b = 12
        
        esperado = 5
        
        resultado = bonAppetit(conta, k, b)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        conta = [3, 10, 2, 9]
        k = 1
        b = 7
        
        esperado = 'Bon Appetit'
        
        resultado = bonAppetit(conta, k, b)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        conta = [72, 53, 60, 66, 90, 62, 12, 31, 36, 94]
        k = 6
        b = 288
        
        esperado = 6
        
        resultado = bonAppetit(conta, k, b)
        
        assert resultado == esperado