from jumpingOnClouds import jumpingOnClouds

class TesteJumpingOnClouds:
    
    def testeCaso1(self):
        
        c = [0, 0, 1, 0, 0, 1, 1, 0]
        k = 2

        esperado = 92

        resultado = jumpingOnClouds(c, k)

        assert resultado == esperado
        
    def testeCaso2(self):
        
        c = [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0]
        k = 3

        esperado = 86

        resultado = jumpingOnClouds(c, k)

        assert resultado == esperado
        
        
    def testeCaso3(self):
        
        c = [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1]
        k = 19

        esperado = 97

        resultado = jumpingOnClouds(c, k)

        assert resultado == esperado