from equalizeArray import equalizeArray

class TesteEqualizeArray:
    
    def testeCaso1(self):
        
        arr = [3, 3, 2, 1, 3]
        
        esperado = 2
        
        resultado = equalizeArray(arr)
        
        assert resultado == esperado
        
        
    def testeCaso1(self):
        
        arr = [1, 2, 3, 1, 2, 3, 3, 3]
        
        esperado = 4
        
        resultado = equalizeArray(arr)
        
        assert resultado == esperado
        