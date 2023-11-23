from kangaroo import kangaroo

class TesteKangaroo:
    
    def testeCaso1(self):
        
        x1 = 0
        v1 = 3
        x2 = 4
        v2 = 2
        
        esperado = "YES"
        resultado = kangaroo(x1, v1, x2, v2)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        x1 = 0
        v1 = 2
        x2 = 5
        v2 = 3
        
        esperado = "NO"
        resultado = kangaroo(x1, v1, x2, v2)
        
        assert resultado == esperado