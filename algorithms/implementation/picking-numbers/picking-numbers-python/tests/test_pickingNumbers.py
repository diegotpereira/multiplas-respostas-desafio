from pickingNumbers import pickingNumbers

class TestePickingNumbers:
    
    def testeCaso1(self):
        
        arr = [1, 2, 2, 3, 1, 2]
        
        esperado = 5
        
        resultado = pickingNumbers(arr)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        arr = [98, 3, 99, 1, 97, 2]
        
        esperado = 2
        
        resultado = pickingNumbers(arr)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        arr = [4, 6, 5, 3, 3, 1]
        
        esperado = 3
        
        resultado = pickingNumbers(arr)
        
        assert resultado == esperado