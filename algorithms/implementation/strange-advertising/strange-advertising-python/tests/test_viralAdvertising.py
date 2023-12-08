from viralAdvertising import viralAdvertising

class TesteViralAdvertising:
    
    def testeCaso1(self):
        
        n = 3
        esperado = 9
        
        resultado = viralAdvertising(n)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        n = 4
        esperado = 15
        
        resultado = viralAdvertising(n)
        
        assert resultado == esperado
        
        
    def testeCaso3(self):
        
        n = 50
        esperado = 2068789129
        
        resultado = viralAdvertising(n)
        
        assert resultado == esperado