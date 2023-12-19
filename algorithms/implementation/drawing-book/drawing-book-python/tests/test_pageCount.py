from pageCount import pageCount

class TestePageCount:
    
    def testeCaso1(self):
        
        n = 5
        p = 4
        
        esperado = 0
        
        resultado = pageCount(n, p)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        n = 6
        p = 2
        
        esperado = 1
        
        resultado = pageCount(n, p)
        
        assert resultado == esperado