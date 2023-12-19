

from compareTriplets import compareTriplets

class TesteCompareTriplets:
    
    def testeCaso1(self):
        
        a = [5, 6, 7]
        b = [3, 6, 10]
        
        esperado = [1, 1]
        
        resultado = compareTriplets(a, b)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        a = [17, 28, 30]
        b = [99, 16, 8]
        
        esperado = [2, 1]
        
        resultado = compareTriplets(a, b)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        a = [1, 2, 3]
        b = [1, 2, 3]
        
        esperado = [0, 0]
        
        resultado = compareTriplets(a, b)
        
        assert resultado == esperado
        
    def testeCaso4(self):
        
        a = [6, 8, 12]
        b = [7, 9, 15]
        
        esperado = [0, 3]
        
        resultado = compareTriplets(a, b)
        
        assert resultado == esperado
        
    def testeCaso5(self):
        
        a = [10, 15, 20]
        b = [5, 6, 7]
        
        esperado = [3, 0]
        
        resultado = compareTriplets(a, b)
        
        assert resultado == esperado