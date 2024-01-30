from cavityMap import cavityMap

class TesteCavityMap:
    
    def testeCaso1(self):
        
        grade = ['989', '191', '111']
        
        esperado = ['989', '1X1', '111']
        
        resultado = cavityMap(grade)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        grade = ['9']
        
        esperado = ['9']
        
        resultado = cavityMap(grade)
        
        assert resultado == esperado
        
        
    def testeCaso3(self):
        
        grade = ['11']
        
        esperado = ['11']
        
        resultado = cavityMap(grade)
        
        assert resultado == esperado
        
        
    def testeCaso4(self):
        
        grade = ['111', '121', '111']
        
        esperado = ['111', '1X1', '111']
        
        resultado = cavityMap(grade)
        
        assert resultado == esperado