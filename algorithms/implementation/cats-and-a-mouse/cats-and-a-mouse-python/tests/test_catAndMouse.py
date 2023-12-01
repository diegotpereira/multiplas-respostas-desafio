from catAndMouse import catAndMouse

class TesteCatAndMouse:
    
    def testeCaso1(self):
        
        x = 1
        y = 2
        z = 3

        esperado = 'Cat B'

        resultado = catAndMouse(x, y, z)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        x = 1
        y = 3
        z = 2

        esperado = 'Mouse C'

        resultado = catAndMouse(x, y, z)
        
        assert resultado == esperado
        
        
    def testeCaso3(self):
        
        x = 33
        y = 86
        z = 59

        esperado = 'Cat A'

        resultado = catAndMouse(x, y, z)
        
        assert resultado == esperado