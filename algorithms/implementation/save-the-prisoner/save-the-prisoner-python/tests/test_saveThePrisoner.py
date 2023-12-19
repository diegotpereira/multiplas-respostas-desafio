from saveThePrisoner import saveThePrisoner

class TesteSaveThePrisoner:
    
    def testeCaso1(self):
        
        n = 5
        m = 2
        s = 1
        
        esperado = 2
        
        resultado = saveThePrisoner(n, m, s)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        n = 5
        m = 2
        s = 2
        
        esperado = 3
        
        resultado = saveThePrisoner(n, m, s)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        n = 7
        m = 19
        s = 2
        
        esperado = 6
        
        resultado = saveThePrisoner(n, m, s)
        
        assert resultado == esperado
        
    def testeCaso4(self):
        
        n = 3
        m = 7
        s = 3
        
        esperado = 3
        
        resultado = saveThePrisoner(n, m, s)
        
        assert resultado == esperado