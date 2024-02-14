from timeInWords import timeInWords

class TesteTimeInWords:
    
    def testeCaso1(self):
        
        h = 5
        m = 47

        esperado = 'thirteen minutes to six'

        resultado = timeInWords(h, m)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        h = 3
        m = 00

        esperado = "three o' clock"

        resultado = timeInWords(h, m)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        h = 7
        m = 29

        esperado = "twenty nine minutes past seven"

        resultado = timeInWords(h, m)
        
        assert resultado == esperado
        
    def testeCaso4(self):
        
        h = 5
        m = 30

        esperado = "half past five"

        resultado = timeInWords(h, m)
        
        assert resultado == esperado
        
    def testeCaso5(self):
        
        h = 5
        m = 45

        esperado = "quarter to six"

        resultado = timeInWords(h, m)
        
        assert resultado == esperado
        
    def testeCaso6(self):
        
        h = 6
        m = 35

        esperado = "twenty five minutes to seven"

        resultado = timeInWords(h, m)
        
        assert resultado == esperado
        
    def testeCaso7(self):
        
        h = 10
        m = 57

        esperado = "three minutes to eleven"

        resultado = timeInWords(h, m)
        
        assert resultado == esperado
        
    def testeCaso7(self):
        
        h = 7
        m = 15

        esperado = "quarter past seven"

        resultado = timeInWords(h, m)
        
        assert resultado == esperado