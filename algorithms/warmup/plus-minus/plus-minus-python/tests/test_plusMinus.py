from plusMinus import plusMinus

class TestePlusMinus:
    
    def testeCaso1(self):
        
        arr = [-4, 3, -9, 0, 4, 1]
        
        esperado = (0.5, 0.3333333333333333, 0.16666666666666666)
        
        resultado = plusMinus(arr)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        arr = [1, 2, 3, -1, -2, -3, 0, 0]
        
        esperado = (0.375, 0.375, 0.25)
        
        resultado = plusMinus(arr)
        
        assert resultado == esperado