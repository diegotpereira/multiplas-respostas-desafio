

from alternatingCharacters import alternatingCharacters

class TesteAlternatingCharacters:
    
    def testeCaso1(self):
        
        s = 'AAAA'
        esperado = 3
        resultado = alternatingCharacters(s)
        
        resultado == esperado
        
    def testeCaso2(self):
        
        s = 'ABABABAB'
        esperado = 0
        resultado = alternatingCharacters(s)
        
        resultado == esperado