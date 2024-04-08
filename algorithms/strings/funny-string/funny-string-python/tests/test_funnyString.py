

from funnyString import funnyString

class TesteFunnyString:
    
    def testeCaso1(self):
        
        s = 'acxz'
        esperado = "Funny"
        
        resultado = funnyString(s)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        s = 'bcxz'
        esperado = "Not Funny"
        
        resultado = funnyString(s)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        s = 'ivvkxq'
        esperado = "Not Funny"
        
        resultado = funnyString(s)
        
        assert resultado == esperado