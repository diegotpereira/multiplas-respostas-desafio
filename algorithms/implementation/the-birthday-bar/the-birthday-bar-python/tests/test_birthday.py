from birthday import birthday

class testebirthday:
    
    def testeCaso1(self):
        
        n = 5
        s = [1, 2, 1, 3, 2]
        d = 3
        m = 2
        
        esperado = 2
        
        resultado = birthday(s, d, m)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        n = 6
        s = [1, 1, 1, 1, 1, 1]
        d = 3
        m = 2
        
        esperado = 0
        
        resultado = birthday(s, d, m)
        
        assert resultado == esperado