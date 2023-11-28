from dayOfProgrammer import dayOfProgrammer

class TesteDayOfProgrammer:
    
    def testeCaso1(self):
        
        ano = 2017
        
        esperado = "13.09.2017"
        
        resultado = dayOfProgrammer(ano)
        
        assert resultado == esperado