

from acmTeam import acmTeam

class TesteAcmTeam:
    
    def testeCaso1(self):
        
        topico = ['10101', '11100', '11010', '00101']
        
        esperado = (5, 2)
        
        resultado = acmTeam(topico)
        
        assert resultado == esperado
        
    def testeCaso2(self):
    
        topico = ['11101', '10101', '11001', '10111', '10000', '01110']
        
        esperado = (5, 6)
        
        resultado = acmTeam(topico)

        assert resultado == esperado