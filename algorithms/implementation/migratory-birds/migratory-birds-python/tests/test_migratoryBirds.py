from migratoryBirds import migratoryBirds

class TesteMigratoryBirds:
    
    def testeCaso1(self):
        
        arr = [1, 4, 4, 4, 5, 3]
        
        esperado = 4
        
        resultado = migratoryBirds(arr)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
        
        esperado = 3
        
        resultado = migratoryBirds(arr)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        arr = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3]
        
        esperado = 3
        
        resultado = migratoryBirds(arr)
        
        assert resultado == esperado