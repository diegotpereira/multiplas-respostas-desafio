

from maximumPerimeterTriangle import maximumPerimeterTriangle

class TesteMaximumPerimeterTriangle:
    
    def testeCaso1(self):
        
        sticks = [1, 1, 1, 3, 3]
        
        esperado = [1, 3, 3]
        
        resultado = maximumPerimeterTriangle(sticks)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        sticks = [1, 2, 3]
        
        esperado = [-1]
        
        resultado = maximumPerimeterTriangle(sticks)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        sticks = [1, 1, 1, 2, 3, 5]
        
        esperado = [1, 1, 1]
        
        resultado = maximumPerimeterTriangle(sticks)
        
        assert resultado == esperado