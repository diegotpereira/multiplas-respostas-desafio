from angryProfessor import angryProfessor

class TesteAngryProfessor:
    
    def testeCaso1(self):
        
        k = 3
        a = [-1, -3, 4, 2]
        
        esperado = "YES"
        
        resultado = angryProfessor(k, a)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        k = 2
        a = [0, -1, 2, 1]
        
        esperado = "NO"
        
        resultado = angryProfessor(k, a)
        
        assert resultado == esperado