from camelcase import camelcase

class TesteCamelcase:
    
    def testeCaso1(self):
        
        s = 'fraseComTres'
        esperado = 3
        
        resultado = camelcase(s)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        s = 'fraseComQuatroPalavras'
        esperado = 4
        
        resultado = camelcase(s)
        
        assert resultado == esperado
        
        
    def testeCaso3(self):
        
        s = 'palavra'
        esperado = 1
        
        resultado = camelcase(s)
        
        assert resultado == esperado
        
    def testeCaso4(self):
        
        s = 'duasPalavras'
        esperado = 2
        
        resultado = camelcase(s)
        
        assert resultado == esperado