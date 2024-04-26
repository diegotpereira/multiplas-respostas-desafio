

from hackerrankInString import hackerrankInString

class TesteHackerrankInString:
    
    def testeCaso1(self):
        
        s = 'hereiamstackerrank'
        
        esperado = 'YES'
        
        resultado = hackerrankInString(s)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        s = 'hackerworld'
        
        esperado = 'NO'
        
        resultado = hackerrankInString(s)
        
        assert resultado == esperado