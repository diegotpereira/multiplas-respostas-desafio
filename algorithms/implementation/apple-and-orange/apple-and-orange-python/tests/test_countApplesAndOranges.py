from countApplesAndOranges import countApplesAndOranges

class TesteCountApplesAndOranges:
    
    def testeCaso1(self):
        
        localizacao_inicial = 7
        localizacao_final = 11
        localizacao_macieira = 5 
        localizacao_laranjeira = 15
        macas = [-2, 2, 1]
        laranjas = [5, -6]
        
        esperado = [1, 1]
        
        resultado = countApplesAndOranges(localizacao_inicial, localizacao_final, localizacao_macieira, localizacao_laranjeira, macas, laranjas)
        
        assert resultado == esperado
        
    