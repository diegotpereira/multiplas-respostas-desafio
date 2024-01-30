from stones import stones

class TesteStones:
    
    def testeCaso1(self):
        
        n = 3
        a = 1
        b = 2
        
        esperado = [2, 3, 4]
        
        resultado = stones(n, a, b)
        
        assert resultado == esperado