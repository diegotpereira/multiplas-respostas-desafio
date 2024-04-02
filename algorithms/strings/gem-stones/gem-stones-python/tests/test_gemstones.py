

from gemstones import gemstones

class TesteGemstones:
    
    def testeCaso1(self):
        
        arr = ['abcdde', 'baccd', 'eeabg']
        
        esperado = 2
        
        resultado = gemstones(arr)
        
        assert  resultado == esperado
        
    def testeCaso2(self):
        
        arr = ['basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd']
        
        esperado = 4
        
        resultado = gemstones(arr)
        
        assert  resultado == esperado
        
    def testeCaso3(self):
        
        arr = ['vtrjvgbj', 'mkmjyaeav', 'sibzdmsk']
        
        esperado = 0
        
        resultado = gemstones(arr)
        
        assert  resultado == esperado
        