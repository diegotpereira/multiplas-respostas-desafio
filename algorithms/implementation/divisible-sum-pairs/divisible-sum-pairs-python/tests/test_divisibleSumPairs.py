from divisibleSumPairs import divisibleSumPairs

class TesteDivisibleSumPairs:
    
    def testeCaso1(self):
        
        n = 6
        k = 3
        ar = [1, 3, 2, 6, 1, 2]
        
        esperado = 5
        
        resultado = divisibleSumPairs(n, k, ar)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        n = 2
        k = 2
        ar = [8, 10]
        
        esperado = 1
        
        resultado = divisibleSumPairs(n, k, ar)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        n = 5
        k = 2
        ar = [5, 9, 10, 7, 4]
        
        esperado = 4
        
        resultado = divisibleSumPairs(n, k, ar)
        
        assert resultado == esperado
        
    def testeCaso4(self):
        
        n = 5
        k = 3
        ar = [2, 8, 6, 8, 4]
        
        esperado = 3
        
        resultado = divisibleSumPairs(n, k, ar)
        
        assert resultado == esperado
        
    def testeCaso5(self):
        
        n = 10
        k = 3
        ar = [29, 97, 52, 86, 27, 89, 77, 19, 99, 96]
        
        esperado = 15
        
        resultado = divisibleSumPairs(n, k, ar)
        
        assert resultado == esperado