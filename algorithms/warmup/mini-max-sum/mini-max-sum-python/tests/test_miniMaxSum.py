from miniMaxSum import miniMaxSum

class TesteMiniMaxSum:
    
    def testeCaso1(self):
        
        arr = [1, 2, 3, 4, 5]
        
        esperado = {10, 14}
        
        resultado = miniMaxSum(arr)
        
        assert set(resultado) == set(esperado)
        
        
    def testeCaso2(self):
        
        arr = [7, 69, 2, 221, 8974]
        
        esperado = [299, 9271]
        
        resultado = miniMaxSum(arr)
        
        assert set(resultado) == set(esperado)