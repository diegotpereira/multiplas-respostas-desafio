

from minimumDistances import minimumDistances

class TesteMinimumDistances:
    
    def testeCaso1(self):
        
        a = [7, 1, 3, 4, 1, 7]
        
        esperado = 3
        
        resultado = minimumDistances(a)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        a = [1, 2, 3, 4, 10]
        
        esperado = -1
        
        resultado = minimumDistances(a)
        
        assert resultado == esperado