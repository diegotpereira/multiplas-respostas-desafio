from utopianTree import utopianTree

class TesteUtopianTree:
    
    
    def testeCaso1(self):
        
        n = 0
        esperado = 1
        
        resultado = utopianTree(n)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        n = 1
        esperado = 2
        
        resultado = utopianTree(n)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        n = 4
        esperado = 7
        
        resultado = utopianTree(n)
        
        assert resultado == esperado