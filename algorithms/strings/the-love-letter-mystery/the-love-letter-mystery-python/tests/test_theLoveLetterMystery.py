

from theLoveLetterMystery import theLoveLetterMystery

class TesteTheLoveLetterMystery:
    
    def testeCaso1(self):
        
        s = 'abc'
        esperado = 2
        
        resultado = theLoveLetterMystery(s)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        s = 'abcba'
        esperado = 0
        
        resultado = theLoveLetterMystery(s)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        s = 'abcd'
        esperado = 4
        
        resultado = theLoveLetterMystery(s)
        
        assert resultado == esperado