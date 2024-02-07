

from flatlandSpaceStations import flatlandSpaceStations

class TesteFlatlandSpaceStations:
    
    def testeCaso1(self):
        
        n = 5 
        c = [0, 4]
        
        esperado = 2
        
        resultado = flatlandSpaceStations(n, c)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        n = 6 
        c = [0, 1, 2, 4, 3, 5]
        
        esperado = 0
        
        resultado = flatlandSpaceStations(n, c)
        
        assert resultado == esperado