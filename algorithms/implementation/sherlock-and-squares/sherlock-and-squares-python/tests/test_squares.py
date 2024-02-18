

from squares import squares

class TesteSquares:
    
    def testeCaso1(self):
        
        a = 3
        b = 9
        
        esperado = 2
        
        resultado = squares(a, b)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        a = 17
        b = 24
        
        esperado = 0
        
        resultado = squares(a, b)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        a = 11
        b = 734
        
        esperado = 24
        
        resultado = squares(a, b)
        
        assert resultado == esperado
        
        
    def testeCaso4(self):
        
        a = 228
        b = 919
        
        esperado = 15
        
        resultado = squares(a, b)
        
        assert resultado == esperado