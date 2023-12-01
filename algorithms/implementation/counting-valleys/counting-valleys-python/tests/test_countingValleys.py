from countingValleys import countingValleys

class TesteCountingValleys:
    
    def testeCaso1(self):
        
        passos = ['8']
        caminho = ('UDDDUDUU')
        
        esperado = 1
        
        resultado = countingValleys(passos, caminho)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        passos = ['12']
        caminho = ('DDUUDDUDUUUD')
        
        esperado = 2
        
        
        resultado = countingValleys(passos, caminho)
        
        assert resultado == esperado