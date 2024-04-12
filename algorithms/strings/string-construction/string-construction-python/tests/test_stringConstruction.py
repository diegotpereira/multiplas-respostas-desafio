

from stringConstruction import stringConstruction

class TesteStringConstruction:
    
    def testeCaso1(self):
        
        s =  'abcd'
        esperado = 4
        
        resultado = stringConstruction(s)
        
        assert resultado == esperado