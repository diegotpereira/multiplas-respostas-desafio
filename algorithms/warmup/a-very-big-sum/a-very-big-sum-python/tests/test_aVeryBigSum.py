from aVeryBigSum import aVeryBigSum

class TesteAVeryBigSum:
    
    def testeCaso1(self):
        
        ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
        esperado = 5000000015
        
        resultado = aVeryBigSum(ar)
        
        assert resultado == esperado