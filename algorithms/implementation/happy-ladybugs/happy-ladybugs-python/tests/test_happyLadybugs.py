from happyLadybugs import happyLadybugs

class TesteHappyLadybugs:
    
    def testeCaso1(self):
        
        b = 'RBY_YBR'
        esperado = 'YES'
        
        resultado = happyLadybugs(b)
        
        assert resultado == esperado
        