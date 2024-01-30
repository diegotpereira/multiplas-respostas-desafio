from serviceLane import serviceLane

class TesteServiceLane:
    
    def testeCaso1(self):
        
        n = 8
        
        largura = [2, 3, 1, 2, 3, 2, 3, 3]
        cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
        
        esperado = [1, 2, 3, 2, 1]
        
        resultado = serviceLane(n, cases, largura)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        n = 5
        
        largura = [1, 2, 2, 2, 1]
        cases = [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]]
        
        esperado = [2, 1, 1, 1, 2]
        
        resultado = serviceLane(n, cases, largura)
        
        assert resultado == esperado