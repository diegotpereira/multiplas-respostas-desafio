from hurdleRace import hurdleRace

class TesteHurdleRace:
    
    def testeCaso1(self):
        
        k = 4
        altura = [1, 6, 3, 5, 2]
        
        esperado = 2
        
        resultado = hurdleRace(k, altura)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        k = 7
        altura = [2, 5, 4, 5, 2]
        
        esperado = 0
        
        resultado = hurdleRace(k, altura)
        
        assert resultado == esperado