

from superReducedString import superReducedString

class TesteSuperReducedString:
    
    def testeCaso1(self):
        
        s = 'aaabccddd'
        esperado = 'abd'
        
        resultado = superReducedString(s)
        
        assert resultado == esperado