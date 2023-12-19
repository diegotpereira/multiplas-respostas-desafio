

from birthdayCakeCandles import birthdayCakeCandles

class TesteBirthdayCakeCandles:
    
    def testeCaso1(self):
        
        velas = [3, 2, 1, 3]
        
        esperado = 2
        
        resultado = birthdayCakeCandles(velas)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        velas = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43]
        
        esperado = 5
        
        resultado = birthdayCakeCandles(velas)
        
        assert resultado == esperado
        
        
    def testeCaso3(self):
        
        velas = [82, 49, 82, 82, 41, 82, 15, 63, 38, 25]
        
        esperado = 4
        
        resultado = birthdayCakeCandles(velas)
        
        assert resultado == esperado