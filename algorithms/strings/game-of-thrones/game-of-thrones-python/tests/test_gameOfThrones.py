

from gameOfThrones import gameOfThrones

class TesteGameOfThrones:
    
    def testeCaso1(self):
        
        s = 'aaabbbb'
        esperado = 'YES'
        
        resultado = gameOfThrones(s)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        s = 'cdefghmnopqrstuvw'
        esperado = 'NO'
        
        resultado = gameOfThrones(s)
        
        assert resultado == esperado