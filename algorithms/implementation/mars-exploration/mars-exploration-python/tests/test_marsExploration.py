from marsExploration import marsExploration

class TestemarsExploration:
    
    def testeCaso1(self):
        
        s = 'SOSSPSSQSSOR'
        esperado = 3
        resultado = marsExploration(s)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        s = 'SOSSOT'
        esperado = 1
        resultado = marsExploration(s)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        s = 'SOSSOSSOS'
        esperado = 0
        resultado = marsExploration(s)
        
        assert resultado == esperado
        
    def testeCaso4(self):
        
        s = 'SOSSTSSMS'
        esperado = 2
        resultado = marsExploration(s)
        
        assert resultado == esperado
        

