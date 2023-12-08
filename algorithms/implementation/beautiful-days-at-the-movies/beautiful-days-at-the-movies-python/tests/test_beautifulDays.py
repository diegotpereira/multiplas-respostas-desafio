from beautifulDays import beautifulDays

class TesteBeautifulDays:
    
    def testeCaso1(self):
        
        i = 20
        j = 23
        k = 6
        
        esperado = 2
        
        resultado = beautifulDays(i, j, k)
        
        assert resultado == esperado
        