from cutTheSticks import cutTheSticks

class TesteCutTheSticks:
    
    def testeCaso1(self):
        
        arr = [5, 4, 4, 2, 2, 8]
        
        esperado = [6, 4, 2, 1]
        
        resultado = cutTheSticks(arr)
        
        assert resultado == esperado