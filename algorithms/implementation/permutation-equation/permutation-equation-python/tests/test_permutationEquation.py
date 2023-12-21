from permutationEquation import permutationEquation

class TestePermutationEquation:
    
    def testeCaso1(self):
        
        p = [2, 3, 1]
        esperado = [2, 3, 1]
        
        resultado = permutationEquation(p)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        p = [4, 3, 5, 1, 2]
        esperado = [1, 3, 5, 4, 2]
        
        resultado = permutationEquation(p)
        
        assert resultado == esperado