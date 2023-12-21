from repeatedString import repeatedString

class TesteRepeatedString:
    
    def testeCaso1(self):
        
        s = 'aba'
        
        n =  10
        
        esperado = 7
        
        resultado = repeatedString(s, n)
        
        assert resultado == esperado
        
        
    def testeCaso1(self):
        
        s = 'a'
        
        n =  1000000000000
        
        esperado = 1000000000000
        
        resultado = repeatedString(s, n)
        
        assert resultado == esperado
        
        
    def testeCaso1(self):
        
        s = 'aab'
        
        n =  882787
        
        esperado = 588525
        
        resultado = repeatedString(s, n)
        
        assert resultado == esperado