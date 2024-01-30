from chocolateFeast import chocolateFeast

class TesteChocolateFeast:
    
    def testeCaso1(self):
        
        n = 10
        c = 2
        m = 5
        
        esperado = 6
        
        resultado = chocolateFeast(n, c, m)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        n = 12
        c = 4
        m = 4
        
        esperado = 3
        
        resultado = chocolateFeast(n, c, m)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        n = 6
        c = 2
        m = 2
        
        esperado = 5
        
        resultado = chocolateFeast(n, c, m)
        
        assert resultado == esperado