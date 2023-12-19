from diagonalDifference import diagonalDifference

class TesteDiagonalDifference:
    
    def testeCaso1(self):
        
        arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
        
        esperado = 15
        
        resultado = diagonalDifference(arr)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        arr = [[-1, 1, -7, -8], [-10, -8, -5, -2], [0, 9, 7, -1], [4, 4, -2, 1]]
        
        esperado = 1
        
        resultado = diagonalDifference(arr)
        
        assert resultado == esperado