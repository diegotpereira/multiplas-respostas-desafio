from workbook import workbook

class TesteDorkbook:
    
    def testeCaso1(self):
        
        n = 5
        k = 3
        arr = [4, 2, 6, 1, 10]
        
        esperado = 4
        
        resultado = workbook(n, k, arr)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        n = 10
        k = 5
        arr = [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]
        
        esperado = 8
        
        resultado = workbook(n, k, arr)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        n = 15
        k = 20
        arr = [1, 8, 19, 15, 2, 29, 3, 2, 25, 2, 19, 26, 17, 33, 22]
        
        esperado = 11
        
        resultado = workbook(n, k, arr)
        
        assert resultado == esperado