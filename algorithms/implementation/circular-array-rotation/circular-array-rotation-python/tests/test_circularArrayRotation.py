from circularArrayRotation import circularArrayRotation

class TesteCircularArrayRotation:
    
    def testeCaso1(self):
        
        a = [1, 2, 3]
        k = 2
        consultas = [0, 1, 2]
        
        esperado = [2, 3, 1]
        
        resultado = circularArrayRotation(a, k, consultas)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        a = [3, 4, 5]
        k = 2
        consultas = [1, 2]
        
        esperado = [5, 3]
        
        resultado = circularArrayRotation(a, k, consultas)
        
        assert resultado == esperado
    
