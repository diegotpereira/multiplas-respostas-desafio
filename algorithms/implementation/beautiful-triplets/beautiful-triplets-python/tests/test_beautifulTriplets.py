from beautifulTriplets import beautifulTriplets

class TesteBeautifulTriplets:
    
    def testeCaso1(self):
        
        d = 3
        
        arr = [1, 2, 4, 5, 7, 8, 10]
        
        esperado = 3
        
        resultado = beautifulTriplets(d, arr)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        d = 3
        
        arr = [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]
        
        esperado = 2
        
        resultado = beautifulTriplets(d, arr)
        
        assert resultado == esperado