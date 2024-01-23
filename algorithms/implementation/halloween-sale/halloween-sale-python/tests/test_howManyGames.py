from howManyGames import howManyGames

class TesteHowManyGames:
    
    def testeCaso1(self):
        
        p = 20 
        d = 3
        m = 6
        s = 80
        
        esperado = 6
        
        resultado = howManyGames(p, d, m, s)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        p = 20 
        d = 3
        m = 6
        s = 85
        
        esperado = 7
        
        resultado = howManyGames(p, d, m, s)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        p = 16
        d = 2
        m = 1
        s = 9981
        
        esperado = 9917
        
        resultado = howManyGames(p, d, m, s)
        
        assert resultado == esperado
        
    def testeCaso4(self):
        
        p = 100
        d = 1
        m = 1
        s = 99
        
        esperado = 0
        
        resultado = howManyGames(p, d, m, s)
        
        assert resultado == esperado