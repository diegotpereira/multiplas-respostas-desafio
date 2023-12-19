from sockMerchant import sockMerchant

class TesteSockMerchant:
    
    def testeCaso1(self):
        
        n = 9
        ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
        esperado = 3
        
        resultado = sockMerchant(n, ar)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        n = 10
        ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
        esperado = 4
        
        resultado = sockMerchant(n, ar)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        n = 15
        ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
        esperado = 6
        
        resultado = sockMerchant(n, ar)
        
        assert resultado == esperado
        
    def testeCaso4(self):
        
        n = 20
        ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]
        esperado = 9
        
        resultado = sockMerchant(n, ar)
        
        assert resultado == esperado