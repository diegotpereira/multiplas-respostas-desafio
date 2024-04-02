

from weightedUniformStrings import weightedUniformStrings

class TesteWeightedUniformStrings:
    
    def testeCaso1(self):
        
        s = 'abccddde'
        consultas = [6]
        esperado = ['Yes']
        
        resultado = weightedUniformStrings(s, consultas)
        
        assert resultado ==  esperado
        
    def testeCaso2(self):
        
        s = 'abccddde'
        consultas = [10]
        esperado = ['No']
        
        resultado = weightedUniformStrings(s, consultas)
        
        assert resultado ==  esperado
        
        
    def testeCaso3(self):
        
        s = 'l'
        consultas = [1]
        esperado = ['No']
        
        resultado = weightedUniformStrings(s, consultas)
        
        assert resultado ==  esperado
        
    def testeCaso4(self):
        
        s = 'l'
        consultas = [12]
        esperado = ['Yes']
        
        resultado = weightedUniformStrings(s, consultas)
        
        assert resultado ==  esperado