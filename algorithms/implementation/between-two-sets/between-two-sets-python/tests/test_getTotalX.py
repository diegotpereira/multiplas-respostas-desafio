from getTotalX import getTotalX

class TesteGetTotalX:
    
    def testeCaso1(self):
        
        arr = [2, 4]
        brr = [16, 32, 96]
        
        esperado = 3
        
        resultado = getTotalX(arr, brr)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        arr = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91]
        brr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        esperado = 0
        
        resultado = getTotalX(arr, brr)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        arr = [2]
        brr = [20, 30, 12]
        
        esperado = 1
        
        resultado = getTotalX(arr, brr)
        
        assert resultado == esperado