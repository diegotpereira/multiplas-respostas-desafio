

from insertionsort1 import insertionsort1

class TesteInsertionsort1:
    
    def testeCaso1(self):
        
        n = 5
        arr = [2, 4, 6, 8, 3]
        
        esperado = [2, 3, 4, 6, 8]
        
        resultado = insertionsort1(n, arr)
        
        assert resultado == esperado