from  breakingRecords import breakingRecords

class TesteBreakingRecords:
    
    def testeCaso1(self):
        
        pontuacoes = [10, 5, 20, 20, 4, 5, 2, 25, 1]
        esperado = [2, 4]
        
        resultado = breakingRecords(pontuacoes)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        pontuacoes = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
        esperado = [4, 0]
        
        resultado = breakingRecords(pontuacoes)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        pontuacoes = [17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50]
        esperado = [5, 1]
        
        resultado = breakingRecords(pontuacoes)
        
        assert resultado == esperado